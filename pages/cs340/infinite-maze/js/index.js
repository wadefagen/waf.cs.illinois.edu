// Make the paper scope global, by injecting it into window:
paper.install(window);

var zoomlevel = 200;
var maze = new Maze(zoomlevel); //CANVAS_H = 600 -> 3 blocks high
var colorSelectionModal;
var userColorHex;
var grid = {};
var gridColors = {};
var _explored = 0;

const urlParams = new URLSearchParams(window.location.search);
var _start_x = 0;
var _start_y = 0;
var _show_all = false;

if (urlParams.get('x') !== null && urlParams.get('y') !== null) {
  _start_x = +urlParams.get('x');
  _start_y = +urlParams.get('y');
}

if (urlParams.get('all')) {
  _show_all = true;
}

var x = _start_x;
var y = _start_y;

(minX = 0), (maxX = 0), (minY = 0), (maxY = 0);

// Generate a random user ID for now
const getRandomLetters = (length = 1) => Array(length).fill().map(e => String.fromCharCode(Math.floor(Math.random() * 26) + 65 + 32)).join('');
let uid = localStorage.getItem("cs240_maze_uid");

if (!uid) {
  uid = getRandomLetters(16);
  localStorage.setItem("cs240_maze_uid", uid);
}

// $( function ) runs once the DOM is ready:

let _mazeState;

_update_location = () => {
  $("#location").html(`${x}, ${y}`);
}

$(() => {
  

  $.getJSON("mazeState.json")
  .done((mazeState) => {
    _mazeState = mazeState;

    userColorHex = "#000000";
    paper.setup("myCanvas");

    if (_show_all) {
      let startingUnit = computeUnit(x, y);
      let startingKey = `${startingUnit.row}_${startingUnit.col}`; 

      for (let key of Object.keys(_mazeState)) {
        if (key == startingKey) { continue; }

        const key_split = key.split("_");
        const gridX = +key_split[0];
        const gridY = +key_split[1];

        setTimeout(
          () => {
            requestGrid(-3 + (gridY * 7), -3 + (gridX * 7), true);
            
            if (_explored % 276 == 0) {
              const _mazeState_len = Object.keys(_mazeState).length;
              $("#explored").html(
                `${ (_explored / _mazeState_len * 100).toFixed(2) }% (${_explored} / ${_mazeState_len})`
              )
            }
          },
          0
        );

      }
    }

    setTimeout(() => {
      _update_location();
      requestGrid(x, y);
    }, 0);
  });

  /*  
  if (typeof oneMaze !== "undefined") {
    userColorHex = "#000000";
    paper.setup("myCanvas");
    requestGrid(-3, -3);
    return;
  }

  let randomColor = localStorage.getItem("cs240_maze_color");
  if (!randomColor) {
    randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  }
  $("#colorInput").val(randomColor);

  colorSelectionModal = new bootstrap.Modal(document.getElementById('colorSelectionModal'), {});
  colorSelectionModal.show();
  */
});

/*
initColor = () => {
  //colorSelectionModal.hide();

  userColorHex = "#000000";
  localStorage.setItem("cs240_maze_color", userColorHex);
  myCrumbs.color = userColorHex;
  $.post(`/addUserColor/${uid}/${userColorHex.substring(1)}`);

  paper.setup("myCanvas");
  requestGrid(-3, -3);

  setTimeout(() => { sendHeartbeat(); }, 1000);
  setTimeout(() => { movePlayers(); }, 1000);  
};
*/

zoomMaze = () => {
  zoomlevel /= 2;
  if (zoomlevel < 20) {
    zoomlevel = 200;
  }
  maze.zoom(zoomlevel);
};

computeUnit = (requestX, requestY) => {
  return {
    col: Math.floor( ((requestX + BLOCK_C) / BLOCK_W) ),
    row: Math.floor( ((requestY + BLOCK_C) / BLOCK_W) ),
  };
};



maze_cb = (gridX, gridY, initialLoad = false, cb) => {
  let key = `${gridX}_${gridY}`;
  maze_cb_key(key, initialLoad, cb), 0
};

maze_cb_key = (key, initialLoad, cb) => {
  //if (!initialLoad) { console.log(key); }

  if (_mazeState[key]) {
    let d = _mazeState[key];

    _explored++;
    if (!initialLoad) {
      const _mazeState_len = Object.keys(_mazeState).length;
      $("#explored").html(
        `${ (_explored / _mazeState_len * 100).toFixed(2) }% (${_explored} / ${_mazeState_len})`
      )  
    }

    // Existing Cell
    r = {
      geom: d[0].geom,
      color: "#" + d[1],
    };
    if (!r.geom) { r.geom = d[0] }

    if (r.geom && Array.isArray(r.geom)) {
      //console.log("ADDING: " + key);
      let clean_geom = [];
      for (let i = 0; i < 7; i++) {
        clean_geom.push( r.geom[i].substring(0, 7) );
      }
      r.geom = clean_geom;
      cb(r);

      //cb( r );
      return;
    }
  }

  // Out of Bounds or Error
  r = {
    geom: ["baa2aae", "dfffffd", "5fffff5", "4fffff1", "5fffff5", "7fffff7", "baa8aae"],
    color: "#000000"
  }
  cb( r );
};


requestGrid = (requestX, requestY, initialLoad = false) => {
  //console.log(`RequestGrid(${requestX}, ${requestY})`);

  let gen_seg_request;
  let data = computeUnit(requestX, requestY);
  /*
  if (typeof oneMaze !== "undefined") {
    gen_seg_request = "/generateSegment/" + oneMaze;

    data["free"] = []
    data["main"] = [ data.row, data.col ];

    for (let scanX = -10; scanX <= 10; scanX++) {
      for (let scanY = -10; scanY <= 10; scanY++) {        
        let sX = requestX + scanX * BLOCK_W;
        let sY = requestX + scanY * BLOCK_W;
        let sUnit = computeUnit(sX, sY);

        if (!(sX in grid && sY in grid[sX])) {
          data["free"].push(sUnit.row);
          data["free"].push(sUnit.col);
        } else {
          console.log(`NOT FREE: ${sUnit.row} ${sUnit.col}`);
        }
      }
    }

    console.log(data);
  } else {
    gen_seg_request = "/" + uid + "/generateSegment";
  }

  $.ajax({
    url: gen_seg_request,
    data: {row: data.row, col: data.col, data: JSON.stringify(data)},
    type: "GET",
    contentType: "application/json; charset=utf-8",
  })
  */

  maze_cb(data.row, data.col, initialLoad, function (data) {
      //console.log(data);
      /*
      if (Math.abs(data.row) < 3 && Math.abs(data.col) < 3) {
        console.log(geom);
      } else {
        return;
      }
      */


      // get origin information for the maze segment
      var ox = data["originX"] ?? 0;
      var oy = data["originY"] ?? 0;
      
      // adjust the request's x and y based on segment origin
      let gridUnit = computeUnit(requestX, requestY);
      let ry = (gridUnit.row * BLOCK_W) - 3;
      let rx = (gridUnit.col * BLOCK_W) - 3;

      // verify we don't have a multiblock segment with no origin
      let geom = data["geom"];
      if (!(geom.length == BLOCK_W && geom[0].length == BLOCK_W)) {
        if (!("originX" in data && "originY" in data)) {
          //alert("WARNING: origin X and Y not specified for multiblock maze segment");
          console.error("WARNING: origin X and Y not specified for multiblock maze segment");
          return false;
        }
      }

      let populateGrid = (rx, ry, geom) => {
        // populate the local grid as necessary
        for (let curY = 0; curY < geom.length; curY++) {
          let g = geom[curY];

          for (let curX = 0; curX < g.length; curX++) {
            let c = g[curX];

            if (!grid[curX + rx]) {
              grid[curX + rx] = {};
            }
            grid[rx + curX][ry + curY] = c;

            if (rx + curX < minX) {
              minX = rx + curX;
            }
            if (rx + curX > maxX) {
              maxX = rx + curX;
            }
            if (ry + curY < minY) {
              minY = ry + curY;
            }
            if (ry + curY > maxY) {
              maxY = ry + curY;
            }
          }
        }
      };
      populateGrid(rx, ry, geom);

      if (data["extern"]) {
        for (let key in data["extern"]) {
          let gridCoord = key.split("_");
          let gY = +gridCoord[0];
          let gX = +gridCoord[1];
          let gGeom = data["extern"][key]["geom"];

          //console.log("ADDING: " + gX + ", " + gY);
          //console.log("ADDING: " + (rx + (gX * 7)) + ", " + (ry + (gY * 7)));

          populateGrid(-3 + (gX * 7), -3 + (gY * 7), gGeom);

          let gridString = `${gX},${gY}`
          gridColors[gridString] = userColorHex;

          maze.addBlock(-3 + (gX * 7), -3 + (gY * 7), gGeom, initialLoad);
        }
      }


      //console.log(grid);

      let gridString = gridUnit["col"] + "," + gridUnit["row"];
      if ("color" in data) { // If color is passed through with data (if block has already been generated)
        gridColors[gridString] = data["color"]
      } else { // If this is the first time the block is being generated
        gridColors[gridString] = userColorHex
      }

      // actually add the block to the grid for rendering purposes
      maze.addBlock(rx, ry, geom, initialLoad);
    })
    /*
    .fail(function (data) {
      $("#maze").html(`<hr><h3>Error</h3><p>${JSON.stringify(data)}</p>`);
    });
    */
};

expandGrid = (dX, dY) => {
  requestGrid(x + dX, y + dY);

  /*
  if (dX == 1) {
    requestGrid(x, y - 3);
  }
  if (dX == -1) {
    requestGrid(x - 6, y - 3);
  }
  if (dY == 1) {
    requestGrid(x - 3, y);
  }
  if (dY == -1) {
    requestGrid(x - 3, y - 6);
  }
  */
};

move = (dX, dY) => {
  if (!grid[x] || !grid[x][y]) {
    return false; //ignore key events if our current maze section isn't loaded
  }

  x += dX;
  y += dY;

  if (!grid[x] || !grid[x][y]) {
    //console.log("Expand Grid!");
    expandGrid(dX, dY);
  }

  maze.renderPlayer(x, y);
  maze.renderMaze();
};

const NORTH_WALL_MASK = 8;
const EAST_WALL_MASK = 4;
const SOUTH_WALL_MASK = 2;
const WEST_WALL_MASK = 1;

document.onkeydown = (e) => {
  let sq = parseInt(grid[x][y], 16);
  let wallNorth = sq & NORTH_WALL_MASK;
  let wallEast = sq & EAST_WALL_MASK;
  let wallSouth = sq & SOUTH_WALL_MASK;
  let wallWest = sq & WEST_WALL_MASK;

  if (e.keyCode == "38" && !wallNorth) {
    if (grid[x] && grid[x][y - 1] && parseInt(grid[x][y - 1], 16) & SOUTH_WALL_MASK) { return; }
    myCrumbs["steps"].push([x, y]);
    move(0, -1);
  } else if (e.keyCode == "40" && !wallSouth) {
    if (grid[x] && grid[x][y + 1] && parseInt(grid[x][y + 1], 16) & NORTH_WALL_MASK) { return; }
    myCrumbs["steps"].push([x, y]);
    move(0, 1);
  } else if (e.keyCode == "37" && !wallWest) {
    if (grid[x - 1] && grid[x - 1][y] && parseInt(grid[x - 1][y], 16) & EAST_WALL_MASK) { return; }
    myCrumbs["steps"].push([x, y]);
    move(-1, 0);
  } else if (e.keyCode == "39" && !wallEast) {
    if (grid[x + 1] && grid[x + 1][y] && parseInt(grid[x + 1][y], 16) & WEST_WALL_MASK) { return; }
    myCrumbs["steps"].push([x, y]);
    move(1, 0);
  } else if (e.keyCode == "90") {
    zoomMaze();
  } else if (e.keyCode == '32') {
    myCrumbs["steps"] = [];
    x = _start_x; y = _start_y;
    maze.renderPlayer(x, y);
  }

  _update_location();
};

// player breadcrumb update heartbeat
const myCrumbs = {
  "user"  : uid,
  "x"     : x,
  "y"     : y,
  "steps" : [],
  "color" : undefined,
};

var players = {};

movePlayers = () => {
  maze.renderMaze();
  // document.getElementById("debug").innerHTML = JSON.stringify(players);

  setTimeout(() => {
    movePlayers();
  }, 100);
}

sendHeartbeat = () => {
  // Update my crumbs:
  myCrumbs.x = x;
  myCrumbs.y = y;  
  
  // Create a summary for the server:
  let serverCrumbs = {
    user: myCrumbs.user,
    x: myCrumbs.x,
    y: myCrumbs.y,
    steps: myCrumbs.steps.slice(-10),
    color: myCrumbs.color,
  }
  serverCrumbs.steps.reverse();

  $.ajax({
    type: "PATCH",
    url: "/heartbeat",
    data: JSON.stringify(serverCrumbs),
    contentType: "application/json; charset=utf-8",
  })
  .done(function (data) {
    for (const [k, p] of Object.entries(data)) {
      if (k == "_totalBlocks") {
        $("#total-segments").html(`Total Maze Blocks: ${p}`);
        continue;
      } else if (k == "_userBlocks") {
        $("#user-segments").html(`Maze Blocks <b>YOU</b> Discovered: ${p}`);
      }

      if (!(k in players)) {
        players[k] = p;
      }
      else if (p["time"] > players[k]["time"]) {
        players[k] = p;
      }
    }
  });

  setTimeout(() => {
    sendHeartbeat();
  }, 1000);
}
