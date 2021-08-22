import csv
import json

#<<<<<<< HEAD
# Read the CSV file into data, by row
data = []
with open('../../../datasets/gpa/uiuc-gpa-dataset.csv', 'r') as f:
    reader = csv.DictReader(f)
    
    for row in reader:
      if row["YearTerm"] >= "2017-fa":
        data.append(row)

with open("../../../datasets/geneds/dataset.csv") as f:
    reader = csv.DictReader(f)
    gened_data = [row for row in reader]

# gpa map
grades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"]
grades_weight = {
  "A+": 4,
  "A": 4,
  "A-": 3.67,
  "B+": 3.33,
  "B": 3,
  "B-": 2.67,
  "C+": 2.33,
  "C": 2,
  "C-": 1.67,
  "D+": 1.33,
  "D": 1,
  "D-": 0.67,
  "F": 0
}


# Write your code here
courses = {}
for row in data:

    courseTitle = row["Course Title"]
    courseSubject = row["Subject"]
    courseNumber = row["Number"]
    course = courseSubject + " " + courseNumber
    row["Course"] = course

    if course not in courses:
        courses[course] = {
            "Course": course,

            "As": 0,
            "Total": 0,
            "gpa_sum": 0,
            "Department":courseSubject,
            #"Level": courseLevel,
            "title": courseTitle,
            "Number of Gened": 0,
            "GenedRequirement": [],
            "compre":0
        }

    for grade in grades:
      courses[course]["Total"] += int(row[grade])
      courses[course]["gpa_sum"] += grades_weight[grade] * int(row[grade])

    courses[course]["As"] += int(row["A+"])
    courses[course]["As"] += int(row["A"])


for course in courses:
    courses[course]["pct_As"] = round( courses[course]["As"] / courses[course]["Total"], 4 )
    courses[course]["avg_gpa"] = round( courses[course]["gpa_sum"] / courses[course]["Total"], 4 )
    courses[course]["compre"] = round( (courses[course]["pct_As"] + (courses[course]["avg_gpa"]/4))/2, 4 )

all_gened = []
gened_dict = {}


def checkAndAdd(course, column, str, gened):
  if gened_row[column] == str:
    courses[course]["GenedRequirement"].append(gened)
    courses[course]["Number of Gened"] += 1

    if str not in gened_dict:
      gened_dict[str] = []
    gened_dict[str].append(courses[course])

    if courses[course] not in all_gened:
      all_gened.append(courses[course])

for course in courses:
  for gened_row in gened_data:
    if gened_row["Course"] == course:
      course_obj = courses[course]

      checkAndAdd(course, "ACP", "ACP", "Advanced Composition")

      checkAndAdd(course, "CS", "US", "US Minority Culture")
      checkAndAdd(course, "CS", "NW", "Non-Western Culture")
      checkAndAdd(course, "CS", "WCC", "Western/Comparative Culture")

      checkAndAdd(course, "HUM", "HP", "Humanities & the Arts")
      checkAndAdd(course, "HUM", "LA", "Humanities & the Arts")

      checkAndAdd(course, "NAT", "LS", "Natural Science & Technology")
      checkAndAdd(course, "NAT", "PS", "Natural Science & Technology")

      checkAndAdd(course, "QR", "QR1", "Quantitative Reasoning")
      checkAndAdd(course, "QR", "QR2", "Quantitative Reasoning")

      checkAndAdd(course, "SBS", "SS", "Social & Behavioral Sciences")
      checkAndAdd(course, "SBS", "BSC", "Social & Behavioral Sciences")


#
#+  [{"GenedRequirement": ["Natural Science & Technology"]
#+   "title": "General Chemistry Lab I",
#+   "compre": 0.786652617832126,
#+   "Total": 8423,
#   "name": "CHEM 103",
#+   "avg_gpa": 3.6224385610827476,
#+   "pct_As": 0.6676955953935653
# }
#


for d in all_gened:
  d["name"] = d["Course"]
  del d["Course"]
  del d["Department"]
  del d["Number of Gened"]
  del d["gpa_sum"]
  del d["As"]


with open("out/all_gened.json", "w") as f:
    #json.dump(all_gened, f, indent=2)
    json.dump(all_gened, f)
