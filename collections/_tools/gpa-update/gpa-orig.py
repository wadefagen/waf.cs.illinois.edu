import json
import csv

courses = {}
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

output = [
  { "courses": [], "college": "Grainger College of Engineering", "departments": ['CS', 'ECE', 'CEE', 'ME', 'TAM', 'MSE', 'AE', 'IE', 'NPRE', 'ENG', 'BIOE', 'ABE', 'TE', 'PHYS', 'SE'] },
  { "courses": [], "college": "College of Liberal Arts and Sciences", "departments": ['MATH', 'CHEM', 'ECON', 'PSYC', 'STAT', 'MCB', 'CMN', 'IB', 'ANTH', 'PS', 'ASTR', 'ATMS', 'CLCV', 'SOC', 'CHBE', 'HIST', 'ENGL', 'LAS', 'PHIL', 'GEOL', 'GEOG', 'LING', 'FR', 'GLBL', 'ARTH', 'GWS', 'LLS', 'AAS', 'AFRO', 'GER', 'ESE', 'SPAN', 'SCAN', 'EALC', 'CWL', 'BIOC', 'LAST', 'RHET', 'ITAL', 'KOR', 'CW', 'JAPN', 'REES', 'REL', 'AIS', 'ASRM', 'EIL'] },
  { "courses": [], "college": "College of Agriculture, Consumer, and Environmental Sciences", "departments": ['ANSC', 'ACE', 'FSHN', 'NRES', 'CPSC', 'HDFS', 'HORT', 'AGED', 'TSM', 'AGCM', 'ACES', 'LEAD'] },
  { "courses": [], "college": "College of Business", "departments": ['BADM', 'ACCY', 'FIN', 'BUS'] },
  { "courses": [], "college": "Fine and Applied Arts", "departments": ['THEA', 'MUS', 'ARCH', 'UP', 'DANC', 'ART', 'ARTD', 'LA', 'ARTF', 'ARTS', 'FAA', 'MUSC'] },
  { "courses": [], "college": "College of Education", "departments": ['CI', 'EPSY', 'SPED', 'EPS', 'HRD', 'EDUC'] },
  { "courses": [], "college": "College of Media", "departments": ['ADV', 'MACS', 'JOUR', 'MDIA'] },
  { "courses": [], "college": "Applied Health Sciences", "departments": ['CHLH', 'KIN', 'RST', 'SHS', 'IHLT', 'REHB', 'AHS'] },
  { "courses": [], "college": "iSchool", "departments": ['INFO', 'IS'] },
  { "courses": [], "college": "Other / Unknown", "departments": ['LER', 'SOCW', 'BTW', 'PLPA', 'AFST', 'GCL', 'GS']},
]

with open("../datasets/gpa/uiuc-gpa-dataset.csv", "r") as f:
  reader = csv.DictReader(f)
  for row in reader:
    # Skip old data
    if int(row["Year"]) < 2017:
      continue

    if int(row["Year"]) == 2017 and row["Term"] != "fa2017":
      continue

    if int(row["Number"]) >= 500:
      continue

    # Add data
    row["Course Title"] = row["Course Title"].strip()
    course = row["Subject"] + " " + row["Number"]
    if course not in courses:
      courses[course] = {
        "number": row["Number"],
        "name": course,
        "subject": row["Subject"],
        "title": row["Course Title"]
      }
      for grade in grades:
        courses[course][grade] = 0
    
    for grade in grades:
      if row["Course Title"] != courses[course]["title"] and courses[course]["title"] != "Various Topics":

        # Allow each course to have an alterative title:
        if "altTitle" not in courses[course]:
          courses[course]["altTitle"] = row["Course Title"]

        # If nether title nor altTitle is a match, make it "Various Topics"
        elif courses[course]["altTitle"] != row["Course Title"]:
          print(course + ":  ")
          print("  " + row["Course Title"])
          print("  " + courses[course]["altTitle"])
          print("  " + courses[course]["title"])

          courses[course]["title"] = "Various Topics"
      courses[course][grade] += int(row[grade])

for course in courses:
  sum_students = 0
  sum_gpa = 0

  for grade in grades:
    sum_students += courses[course][grade]
    sum_gpa += courses[course][grade] * grades_weight[grade]
  
  avg_gpa = round(sum_gpa / sum_students, 2)


  courses[course]["avg_gpa"] = avg_gpa
  courses[course]["sum_students"] = sum_students
  for grade in grades:
    del courses[course][grade]

  found = False
  for d in output:
    if courses[course]["subject"] in d["departments"]:
      d["courses"].append(courses[course])
      found = True
      break
  
  if not found:
    print(courses[course])


for d in output:
  d["courses"] = sorted(d["courses"], key=lambda k: k['sum_students'], reverse=True) 

  d["departments"] = []
  for c in d["courses"]:
    dept = c["subject"]
    if dept not in d["departments"]:
      d["departments"].append(dept)



with open("generic.json", "w") as f:
  json.dump(output, f)
print("Wrote JSON to generic.json.")
