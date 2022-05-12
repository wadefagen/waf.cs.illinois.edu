---
layout: custom-bc

bc1: Teaching
bc1_url: "/teaching/"

bc2: CS 340
bc2_url: "/teaching/cs340/"

title: Infinite Maze (Spring 2022)

---

<style>
.maze-caption {
  font-size: 12px;
}
</style>

# Illinois' Infinite Maze

One design goal of <span class="or">CS 240 / CS 340: Introduction to Computer Systems</span> is to provide students with an experience where they are developing a small but integral part of a complex software system.  In the course, the final project is a large-scale system that uses a microservice-based design where:

1. Every student contributes multiple backend microservices to the final system, 
2. All of the microservice runs simultaneously during the deployment of the system,
3. The middleware, frontend, and other components are designed collaboratively by the class, with the ability for top students to contribute to the shared infrastructure

## The Maze

In Spring 2022, students in CS 240 built the <b>Illinois' Infinite Maze</b>.  After four weeks of design, implementation, integration, and deployment, 91 students running on 91 separate VMs simultaneously launched a 218 individual processes that each acted as an individual microservice that could generate a dynamic maze segment.

When we met together for the final exam, everyone's services worked together to build one <b>GIANT</b> maze live that has now been archived here.  In all, this maze includes:

- 218 maze generators, randomly selected from when a new segment needs to be generated,
- 92 virtual machines, including 91 student-run VMs and a single VM running the middleware,
- 108 simultaneously explorers that each choose their favorite color,
- 7,150 maze segments generated, colored with the color of the explorers who first generated the segment

At the end of the exam, a <a href="mazeState.json">JSON of the entire maze</a> was saved and now <a href="maze.html">available to explored by anyone</a> (<b>or</b> <a href="maze.html?all=true">explore it with everything pre-explored</a>):

<div class="text-center mb-3">
  <a href="maze.html?all=true">
    <img src="full-maze.png">
    <div class="maze-caption">The infinite maze, centered at (0, 0).</div>
  </a>
</div>



## The Maze Segments

The primary software deliverable of reach student was a minimum of two "maze generators" or "MGs".  Each student was given a fresh Ubuntu 18.04 VM as part of the Computer Science educational cloud and was responsible for running their MG on their personal VM.

The creativity of many of the maze segments was amazing:

<div class="row text-center mb-3">
  <div class="col-3">
    <img src="block-i.png" class="img-fluid" />
    <div class="maze-caption">A Illinois "Block-I", found at <a href="maze.html?x=-14&y=2&all=true">(-14, 2)</a></div>
  </div>
  <div class="col-3">
    <img src="clock.png" class="img-fluid" />
    <div class="maze-caption">A digital clock at 8:53pm, found at <a href="maze.html?x=87&y=150&all=true">(87, 150)</a></div>
  </div>
  <div class="col-3">
    <img src="face.png" class="img-fluid" />
    <div class="maze-caption">A happy face, found at <a href="maze.html?x=-77&y=-7&all=true">(-77, -7)</a></div>
  </div>
  <div class="col-3">
    <img src="waves.png" class="img-fluid" />
    <div class="maze-caption">Ocean waves, found at <a href="maze.html?x=142&y=57&all=true">(142, 57)</a></div>
  </div>
</div>

Additionally, students extended the maze to allow for multi-segment mazes to make artwork and other designs that exceeded the 7x7 limitation of a basic segment.  Several designs were made, including the course name in block letters:

<div class="row text-center mb-3">
  <div class="col-12">
    <img src="mb-cs240.png" class="img-fluid" />
    <div class="maze-caption">A multi-segment maze piece, found at <a href="maze.html?x=196&y=73&all=true">(196, 73)</a></div>
  </div>
</div>


## Shared Middleware 

The infinite maze was created through a shared middleware, which was designed during the first two weeks of the project and the extended with advanced features.

The shared middleware was created based off of students' design submitted during the first week and then received 20 pull requests (PRs) adding additional features, fixing bugs, creating quality-of-life improvements.  The full middleware source code is available on the <a href="https://github.com/cs240-illinois/sp22_cs240_infinite-maze-shared">sp22_cs240_infinite-maze-shared repo</a> in @cs240-illinois on GitHub!


## Acknowledgements

This infinite maze was a crazy idea that could have been a complete failure, but turned into one of the largest collaborative course projects at Illinois!  It would not have been possible within:

- An amazing class of CS 240 students in Spring 2022,
- An equally amazing course staff including <a href="https://courses.grainger.illinois.edu/cs240/sp2022/syllabus/">Patrick, Eunice, Bora, Jeremy, Jackson, and Kevin</a> who helped fix bugs in the shared infrastructure, spent hours in office hours with students debugging maze generators, provided encouragement to students as they were programming and debugging late into the night, and even last-minute assistance to students during the maze showcase itself!

Thank you! 🧡💙











