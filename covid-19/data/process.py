import pandas as pd
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
