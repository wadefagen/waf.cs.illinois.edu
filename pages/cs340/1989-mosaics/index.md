---
layout: custom-bc

bc1: Teaching
bc1_url: "/teaching/"

bc2: CS 340
bc2_url: "/pages/cs340/"

title: 1989 Mosaics (Spring 2023)
description: A MapReduce'd mosaic involving over 1,989 mosaics and 300,000 base images to create one ultimate mosaic.
social-img: https://waf.cs.illinois.edu/pages/cs340/infinite-maze/full-maze.png
---

<style>
h2 {
  margin-top: 15px;
}

.maze-caption, .fs {
  font-size: 12px;
}

.fs > div {
  margin-bottom: 20px;
}


em {
  color: #999;
}
</style>

# 1989 Mosaics

One of the most important aspects of <span class="or">CS 340: Introduction to Computer Systems</span> is to provide students with an experience where they are developing a small but integral part of a complex software system.  In the course, the final project is a large-scale system that uses a microservice-based design where:

1. Every student contributes multiple backend microservices to the final system, 
2. All of the microservice runs simultaneously during the deployment of the system,
3. The middleware, frontend, and other components are designed collaboratively by the class, with the ability for top students to contribute to the shared infrastructure


## The Mosaics

In Spring 2023, the names of all course assignments were Taylor Swift songs and lyrics starting with "MP0: Welcome to C, It's Been Waiting for You".  When we had a course-wide discussion on ideas, three main themes were considered for the final project:

1. a course-wide game, *this ended up being the least popular option*
2. a course-wide creative project,  *this was about half the course's favorite theme*, **OR**
3. a course-wide Taylor-inspired project  *this was also about half the course's favorite theme*

With a week of ideation, the course-wide became a mix of creativity and taylor with **1989 Mosaics -- a MapReduce-based mosaic generator** where each student developed:

- 13 microservice mosaic generators (MMGs) that each included at least 60 unique "tile images",
- a single mosaic reducer that would take two mosaics and find the best possible tile for each tile in the mosaic, and
- with the goal of creating a single mosaic reduced from over 1,989 individual mosaics!

One of the first mosaics we generated was a picture of the entire class!  The image of the entire class is the "base image" and sent to all o fthe mosaic generators:

<div class="row text-center fs">
  <div class="col-4"><img src="class/og.jpg" style="border: solid 1px black" class="img-fluid"><br>Original "Base Image"</div>
</div>

Each of 158 students simultaneously managed 2,173 individual microservices created a mosaic.  For example, here's one student-create mosaic of the course entirely made of "tile images" that were all pictures of cats:

<div class="row text-center fs">
  <div class="col-4"><img src="class/1.jpg" style="border: solid 1px black;" class="img-fluid"><br>A mosaic made entirely out of cats!</div>
  <div class="col-4"><img src="class/class-cats-200px-zoom.jpg" style="border: solid 1px black;  margin-top: 7px;" class="img-fluid"><br>An area selected to zoom in for detail.</div>
  <div class="col-4"><img src="class/class-cats-zoom.jpg" style="border: solid 8px yellow" class="img-fluid"><br>The zoomed in area of the image showing the individual tile images.</div>
</div>

Once two mosaics are created, they can be reduced together.  The reduction finds the best possible tile image for the mosaic based off the two mosaics.  For example, the following mosaic was a reduction of one mosaic that contains 60 images of only birds and a second mosaic that contains 60 images of only flowers:

<div class="row text-center fs">
  <div class="col-4"><img src="class/2-200px.jpg" style="border: solid 1px black;" class="img-fluid"><br>A reduction of <b>two mosaics</b> (birds, flowers) into a single mosaic</div>
  <div class="col-4"><img src="class/2-zoom.jpg" style="border: solid 1px black; margin-top: 7px;" class="img-fluid"><br>An area selected to zoom in for detail.</div>
  <div class="col-4"><img src="class/2-zoomed.png" style="border: solid 8px yellow" class="img-fluid"><br>The zoomed in area of the image showing the individual tile images of both flowers and birds.</div>
</div>

Mosaics are recursively reduced, incorporated more and more mosaics -- each time improving slightly in quality:

<div class="row text-center fs">
  <div class="col-4"><img src="class/class-4a.png" style="border: solid 1px black" class="img-fluid"><br>4 mosaics, 240 unique tile images</div>
  <div class="col-4"><img src="class/class-8a.png" style="border: solid 1px black" class="img-fluid"><br>8 mosaics, ~500 unique tile images</div>
  <div class="col-4"><img src="class/class-16.png" style="border: solid 1px black" class="img-fluid"><br>16 mosaics, ~1,000 unique tile images</div>
</div>


Mosaics are recursively reduced, incorporated more and more mosaics -- each time improving slightly in quality:

<div class="row text-center fs">
  <div class="col-4"><img src="class/class-48.png" style="border: solid 1px black" class="img-fluid"><br>48 mosaics, ~3,000 unique tile images</div>
  <div class="col-4"><img src="class/class-223.png" style="border: solid 1px black" class="img-fluid"><br>223 mosaics, ~15,000 unique tile images</div>
  <div class="col-4"><img src="class/class-683.png" style="border: solid 1px black" class="img-fluid"><br>683 mosaics, ~50,000 unique tile images</div>
</div>


Finally, all the mosaics are reduced into a single mosaic:

<div class="row text-center fs">
  <div class="col-4"><img src="class/class-906.png" style="border: solid 1px black" class="img-fluid"><br>906 mosaics, ~100,000 unique tile images</div>
  <div class="col-4"></div>
  <div class="col-4"><img src="class/og.jpg" style="border: solid 1px black" class="img-fluid"><br>Original "Base Image" (for reference)</div>
</div>


## Additional Base Images

Several additional mosaics were created, including one of the University of Illinois Alma Mater Status:

<div class="row text-center fs">
  <div class="col-2"><img src="alma/alma-1.png" style="border: solid 1px black" class="img-fluid"><br>1 mosaic</div>
  <div class="col-2"><img src="alma/alma-2.png" style="border: solid 1px black" class="img-fluid"><br>2 mosaics</div>
  <div class="col-2"><img src="alma/alma-8.png" style="border: solid 1px black" class="img-fluid"><br>8 mosaics</div>
  <div class="col-2"><img src="alma/alma-16.png" style="border: solid 1px black" class="img-fluid"><br>16 mosaics</div>
  <div class="col-2"><img src="alma/alma-177.png" style="border: solid 1px black" class="img-fluid"><br>177 mosaics</div>
  <div class="col-2"><img src="alma/alma-1028.png" style="border: solid 1px black" class="img-fluid"><br>1,028 mosaics</div>
</div>

Taylor Swift's "Speak Now (Taylor's Version)" Album Cover:

<div class="row text-center fs">
  <div class="col-2"><img src="2a.png" style="border: solid 1px black" class="img-fluid"><br>2 mosaic</div>
  <div class="col-2"><img src="4a.png" style="border: solid 1px black" class="img-fluid"><br>4 mosaics</div>
  <div class="col-2"><img src="8a.png" style="border: solid 1px black" class="img-fluid"><br>8 mosaics</div>
  <div class="col-2"><img src="16a.png" style="border: solid 1px black" class="img-fluid"><br>16 mosaics</div>
  <div class="col-2"><img src="32a.png" style="border: solid 1px black" class="img-fluid"><br>32 mosaics</div>
  <div class="col-2"><img src="977.png" style="border: solid 1px black" class="img-fluid"><br>977 mosaics</div>
</div>


## Shared Middleware 

The 1989 mosaics was created through a shared middleware, which was designed during the first two weeks of the project and the extended with advanced features.

The shared middleware was created based off of students' design submitted during the first week and then received 18 pull requests (PRs) adding additional features, fixing bugs, creating quality-of-life improvements.  The full middleware source code is available on the <a href="https://github.com/illinois/cs340-sp23-1989-shared-middleware">cs340-sp23-1989-shared-middleware repo</a> in @illinois on GitHub!


## Acknowledgements

This 1,989 mosaics was a crazy idea that could have been a complete failure, but turned into one of the largest collaborative course projects at Illinois!  It would not have been possible within:

- An amazing class of CS 340 students in Spring 2023,
- An equally amazing <a href="https://courses.grainger.illinois.edu/cs240/sp2023/syllabus/">course staff</a> who helped fix bugs in the shared infrastructure, spent hours in office hours with students debugging mosaic generators, provided encouragement to students as they were programming and debugging late into the night, and even last-minute assistance to students during the showcase itself!

Thank you! 🧡💙











