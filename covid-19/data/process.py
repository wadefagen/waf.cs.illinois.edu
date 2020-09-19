import pandas as pd
import numpy as np
import io

print("Processing Data...")

# Remove Google Sheets extra headers from CSV
f = open("big10-covid - Testing Data.csv")
rawLines = f.readlines()
csvString = ""
for line in rawLines:
  line = line.strip()
  if not (line.startswith("Updated:") or line.startswith(",") or line.startswith("http") or line.startswith("#")):
    csvString += line + "\n"


# Read CSV file into Pandas
df = pd.read_csv(io.StringIO(csvString))

df = df.rename(columns={
  'Location': 'Country_Region',
  'StudentStaff_TotalTests': 'Tests',
  'StudentStaff_TotalPositive': 'Confirmed'
})

df = df[ ['Country_Region', 'Date', 'Tests', 'Confirmed'] ]
df.sort_values('Date', inplace=True)

#df = df.astype({"Tests": "int32", "Confirmed": "int32"})
print(df)

df.to_csv('data.csv', index=False)


#df = df[ df['Country_Region'] == "Illinois" ]
#df.to_csv('data-il.csv', index=False)


print("Post-filling Dates...")

def rollForwardDate(date, amount=1):
  from datetime import datetime, timedelta

  dateObj = datetime.strptime(date, "%Y-%m-%d")
  dateObj = dateObj + timedelta(days=amount)
  return dateObj.strftime("%Y-%m-%d")



df["keyValue"] = df["Country_Region"] + " @ " + df["Date"]
df = df.set_index('keyValue')


for b10school in df["Country_Region"].unique():
  print("Fill Forward: " + b10school)

  df_school = df[ df["Country_Region"] == b10school ]
  earliestDate = df_school.iloc[0]["Date"]
  curDate = latestDate = df_school.iloc[-1]["Date"]

  curTests = float("NaN")
  curConfirmed = float("NaN")
  while curDate >= earliestDate:
    key = b10school + " @ " + curDate
    if key in df.index:
      curTests = df.loc[key]["Tests"]
      curConfirmed = df.loc[key]["Confirmed"]
      #print(f"{key} w/ {curTests} / {curConfirmed}")
    elif not np.isnan(curTests) or not np.isnan(curConfirmed):
      df.loc[key] = [b10school, curDate, curTests, curConfirmed]
      #print(f"{key} -> {curTests} / {curConfirmed}")

    curDate = rollForwardDate(curDate, -1)

df.sort_values('Date', inplace=True)
df.to_csv('data-daily.csv', index=False)



print("Updating js...")

from datetime import datetime
now = datetime.now()

utf_date = now.strftime("%Y-%m-%d")
human_date = now.strftime("%m/%d/%Y")
updated_date = now.strftime("%m/%d %I:%M%p")

f = open("../src/updated.js", "w")

f.write(f'_dateUpdated = "{human_date}";\n')
f.write(f'_reqStr = "{utf_date}";\n')
f.write('\n')
f.write(f'$("#jhu-updated").html("(Updated: {updated_date.lower()} CT)");\n')

f.close()