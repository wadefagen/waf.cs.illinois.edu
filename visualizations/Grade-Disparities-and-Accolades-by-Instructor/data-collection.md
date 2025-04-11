---
title: Grade Disparities and Accolades by Instructor at UIUC

description: Details about data collection for in Grade Disparities and Accolades by Instructor at UIUC

layout: viz
---

<link rel="stylesheet" href="css.css" type="text/css" />

<h1>Grade Disparities and Accolades by Instructor at UIUC</h1>
<div style="font-size: 16px; margin-top: -4px; line-height: 16px;">
  <b>By</b>: Lauren Hyde, Rittika Adhikari, Michael Kokkines, Ophir Sneh, Caren Zeng, and Wade Fagen-Ulmschneider<br>
  <b>Published</b>: April 11, 2025
</div>

<hr>

<div class="text-center">
  <a href="../">View the Data Visualization Here</a>
</div>

<hr>

## Data Collection Overview

For over five years, multiple teams have worked on innovating on the GPA visualization to share celebrate high-caliber professors.  With data coming from many different sources, many with only a last name and often filled with typos or errors, this work has been going on since 2019 to build a visualization to get to a point we felt comfortable to publish this work.  We believe this data is the most accurate collection of University of Illinois faculty accolades that exists.

The overarching goal is to celebrate high-caliber professors while still providing important GPA distribution information.  To that end, we collected data from as many high-quality data sources as possible and will continue to collect more high-quality data in the future.

Below is a list of all data sources used in this work:


### Course Explorer Data

The most authoritative data we used came from the [University of Illinois' Course Explorer](https://courses.illinois.edu/), as provided by Prof. Wade Fagen-Ulmschneider is the <b>course-catalog dataset</b> found on GitHub at [@wadefagen/datasets](https://github.com/wadefagen/datasets/tree/main/course-catalog).  This dataset is used to find the course subject and number (ex: "CS 225"), the course instructors, and the general education categories the course meets.


### GPA Dataset

We join the course explorer data with the GPA dataset from <b>gpa dataset</b> also found on GitHub at [@wadefagen/datasets](https://github.com/wadefagen/datasets/tree/main/gpa).  This data is used to find the distribution of grades for each instructor who taught a course found in the course explorer dataset.


### Teachers Ranked as Excellent  

The [Center for Innovation in Teaching and Learning (CITL)](https://citl.illinois.edu/) publishes a list of the top instructors across campus, as ranked by their students, each semester based on the student surveys completed at the end of each semester.  CITL publishes their ["List of Teachers Ranked as Excellent by Their Students"](https://citl.illinois.edu/citl-101/measurement-evaluation/teaching-evaluation/teaching-evaluations-(ices)/teachers-ranked-as-excellent) on their website.

The <b>teachers-ranked-as-excellent dataset</b> found on GitHub at [@wadefagen/datasets](https://github.com/wadefagen/datasets/tree/main/teachers-ranked-as-excellent) organizes and cleans up the PDF provides by CITL into accessible CSV files.  This data is used to provide "rated as excellent" accolades in this work.


### National and International Awards

We focused on including a diverse set of the most prestigious of the national and international awards: Nobel Prizes, National Academy Membership, and awards of similar prestige.  In this work, we collected the list of all faculty with "University of Illinois" as a listed affliction for the following awards:

- Nobel Prize 
- Pulitzer Prize
- Abel Prize - "Nobel Prize of Mathematics"
- Fields Medal - "U40 Nobel Prize of Mathematics"
- Turing Award - "Nobel Prize of Computing"
- Crafoord Prize - "Nobel Prize of Biology"
- Breakthrough Prizes - "Oscars of the Sciences"
- Kluge Prize - "Nobel of the humanities"
- Holberg Prize - "Nobel of sociology"
- Membership in the National Academy of Sciences
- Membership in the National Academy of Engineering
- Membership in the National Academy of Medicine

This data was manually collected.  E-mail waf@illinois.edu if we missed an Illinois faculty member so we can share their prestigious award.


### Campus and College Awards

We also highlight the top teaching/instruction-based awards that are awarded at the campus and college levels.  This work includes all faculty who have been recognized with the following awards:

- Campus Award for Excellence in Graduate & Professional Teaching
- Campus Award for Excellence in Online Teaching
- Campus Award for Excellence in Undergraduate Teaching – Faculty
- Campus Award for Excellence in Undergraduate Teaching – Instructional Staff
- Grainger College of Engineering - Rose Award for Teaching Excellence
- Grainger College of Engineering - Teaching Excellence Award
- Grainger College of Engineering - Collins Award for Innovative Teaching
- Grainger College of Engineering - Everitt Award for Teaching Excellence
- LAS - Dean's Awards for Excellence in Undergraduate Teaching
- LAS - Awards for Excellence in Undergraduate Teaching by Instructional Staff

This data was manually collected.  E-mail waf@illinois.edu if we missed an Illinois faculty member so we can share their prestigious award, or if there a publicly available list of top faculty awards for other college-level units we were unable to find.


### Rate My Professor

On April 3, 2025, we collected the list of faculty listed on Rate My Professor at The University of Illinois with a 4.5 rating and at least 10 reviews.  We find this data is generally highly correlated with other awards, and is used as an accolade as a reference to another popular data source.

Special thanks to [Lukas Unguraitis (@lumirth)](https://github.com/lumirth/) for his ["RateMyProfessors Python Module" (@lumirth/rmpy)](https://github.com/lumirth/rmpy) project that greatly assisted us in this data collection.
