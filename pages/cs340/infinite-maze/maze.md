---
layout: custom-bc

bc1: Teaching
bc1_url: "/teaching/"

bc2: CS 340
bc2_url: "/pages/cs340/"

bc3: Infinite Maze (Spring 2022)
bc3_url: "/pages/cs340/infinite-maze/"

title: Final Maze

disableFooter: 1
---

# Illinois' Infinite Maze (Spring 2022)

<div style="font-size: 14px; margin-top: -8px; line-height: 16px;">
  A maze created via a cloud-based micro-service architecture using 218 servers exclusively by CS 240 students during Spring 2022.<br><a href="/pages/cs340/infinite-maze/">Read more about this project in the full project overview</a>.
</div>

<div class="row mt-2" style="text-align:center; margin-bottom: 10px;">
  <div class="col-12 mb-1">
    Use <b>arrows keys</b> to move, <b>z</b> to zoom, and <b>space</b> to return home (ex: if you get stuck).
  </div>
  <div class="col-6">
    Your current location: <b id="location">0, 0</b>
  </div>
  <div class="col-6">
    You have explored: <b id="explored">0.00% (0 / 7150)</b>
  </div>
</div>

<div id="maze" class="text-center">
  <canvas id="myCanvas" width="1000" height="600" style="border: solid 1px black"></canvas>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous" ></script>
<script type="text/javascript" src="js/paper-full.js"></script>
<script type="text/javascript" src="js/maze.js"></script>
<script type="text/javascript" src="js/index.js"></script>