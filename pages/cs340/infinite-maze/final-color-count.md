---
layout: custom-bc

bc1: Teaching
bc1_url: "/teaching/"

bc2: CS 340
bc2_url: "/pages/cs340/"

bc3: Infinite Maze (Spring 2022)
bc3_url: "/pages/cs340/infinite-maze/"

title: Infinite Maze Color Distribution
---

<style>
th:nth-child(2), th:nth-child(3), th:nth-child(4),
td:nth-child(2), td:nth-child(3), td:nth-child(4) {
  text-align: right;
}
</style>

# Color Distribution

In the [Infinite Maze](/pages/cs340/infinite-maze/), a maze segment is generated every time a user explores an unexplored space.  That maze segment is then colored using the color of the explorer who first discovered the tile.  This table is the distribution of the colors of maze segments in the maze.

*(We observed that the first 19 (22%) of colors represent 79.9% of all the colors in the maze, making this another distributing following the [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).)*


<table class="table">
<thead>
<tr>
<th>Color</th>
<th>Maze Segments Discovered</th>
<th>% Discovered</th>
<th>CDF</th>
</tr>
</thead>
<tbody>
<tr style="color: #1100ff"><td>#1100ff</td><td><b>1007</b></td><td>14.08%</td><td>14.08%</td></tr>
<tr style="color: #5b9a9a"><td>#5b9a9a</td><td><b>639</b></td><td>8.94%</td><td>23.02%</td></tr>
<tr style="color: #01c7fc"><td>#01c7fc</td><td><b>469</b></td><td>6.56%</td><td>29.58%</td></tr>
<tr style="color: #d83658"><td>#d83658</td><td><b>438</b></td><td>6.13%</td><td>35.71%</td></tr>
<tr style="color: #8ce6a7"><td>#8ce6a7</td><td><b>433</b></td><td>6.06%</td><td>41.76%</td></tr>
<tr style="color: #b51a00"><td>#b51a00</td><td><b>379</b></td><td>5.3%</td><td>47.06%</td></tr>
<tr style="color: #4b2edc"><td>#4b2edc</td><td><b>356</b></td><td>4.98%</td><td>52.04%</td></tr>
<tr style="color: #a3a6ff"><td>#a3a6ff</td><td><b>356</b></td><td>4.98%</td><td>57.02%</td></tr>
<tr style="color: #94e2f5"><td>#94e2f5</td><td><b>250</b></td><td>3.5%</td><td>60.52%</td></tr>
<tr style="color: #5ee8d8"><td>#5ee8d8</td><td><b>216</b></td><td>3.02%</td><td>63.54%</td></tr>
<tr style="color: #f391ae"><td>#f391ae</td><td><b>216</b></td><td>3.02%</td><td>66.56%</td></tr>
<tr style="color: #6933bf"><td>#6933bf</td><td><b>133</b></td><td>1.86%</td><td>68.42%</td></tr>
<tr style="color: #036313"><td>#036313</td><td><b>130</b></td><td>1.82%</td><td>70.24%</td></tr>
<tr style="color: #ef3a3f"><td>#ef3a3f</td><td><b>127</b></td><td>1.78%</td><td>72.01%</td></tr>
<tr style="color: #c61010"><td>#c61010</td><td><b>126</b></td><td>1.76%</td><td>73.78%</td></tr>
<tr style="color: #1e25e6"><td>#1e25e6</td><td><b>123</b></td><td>1.72%</td><td>75.5%</td></tr>
<tr style="color: #ff9ec0"><td>#ff9ec0</td><td><b>116</b></td><td>1.62%</td><td>77.12%</td></tr>
<tr style="color: #0433ff"><td>#0433ff</td><td><b>102</b></td><td>1.43%</td><td>78.55%</td></tr>
<tr style="color: #c1538a"><td>#c1538a</td><td><b>99</b></td><td>1.38%</td><td>79.93%</td></tr>
<tr style="color: #00ff1e"><td>#00ff1e</td><td><b>84</b></td><td>1.17%</td><td>81.1%</td></tr>
<tr style="color: #785700"><td>#785700</td><td><b>66</b></td><td>0.92%</td><td>82.03%</td></tr>
<tr style="color: #af8364"><td>#af8364</td><td><b>64</b></td><td>0.9%</td><td>82.92%</td></tr>
<tr style="color: #fe3644"><td>#fe3644</td><td><b>63</b></td><td>0.88%</td><td>83.8%</td></tr>
<tr style="color: #5211a2"><td>#5211a2</td><td><b>59</b></td><td>0.83%</td><td>84.63%</td></tr>
<tr style="color: #dd2730"><td>#dd2730</td><td><b>56</b></td><td>0.78%</td><td>85.41%</td></tr>
<tr style="color: #63a6e6"><td>#63a6e6</td><td><b>53</b></td><td>0.74%</td><td>86.15%</td></tr>
<tr style="color: #974e95"><td>#974e95</td><td><b>49</b></td><td>0.69%</td><td>86.84%</td></tr>
<tr style="color: #390797"><td>#390797</td><td><b>48</b></td><td>0.67%</td><td>87.51%</td></tr>
<tr style="color: #fd17a8"><td>#fd17a8</td><td><b>47</b></td><td>0.66%</td><td>88.17%</td></tr>
<tr style="color: #2d83ae"><td>#2d83ae</td><td><b>46</b></td><td>0.64%</td><td>88.81%</td></tr>
<tr style="color: #4cd3d9"><td>#4cd3d9</td><td><b>44</b></td><td>0.62%</td><td>89.43%</td></tr>
<tr style="color: #f02ae8"><td>#f02ae8</td><td><b>42</b></td><td>0.59%</td><td>90.01%</td></tr>
<tr style="color: #fbc1da"><td>#fbc1da</td><td><b>41</b></td><td>0.57%</td><td>90.59%</td></tr>
<tr style="color: #e8e8e8"><td>#e8e8e8</td><td><b>39</b></td><td>0.55%</td><td>91.13%</td></tr>
<tr style="color: #ed6c06"><td>#ed6c06</td><td><b>37</b></td><td>0.52%</td><td>91.65%</td></tr>
<tr style="color: #1a5fb4"><td>#1a5fb4</td><td><b>35</b></td><td>0.49%</td><td>92.14%</td></tr>
<tr style="color: #ff40ff"><td>#ff40ff</td><td><b>35</b></td><td>0.49%</td><td>92.63%</td></tr>
<tr style="color: #beeefe"><td>#beeefe</td><td><b>33</b></td><td>0.46%</td><td>93.09%</td></tr>
<tr style="color: #000000"><td>#000000</td><td><b>32</b></td><td>0.45%</td><td>93.54%</td></tr>
<tr style="color: #2e5cf3"><td>#2e5cf3</td><td><b>29</b></td><td>0.41%</td><td>93.94%</td></tr>
<tr style="color: #832aac"><td>#832aac</td><td><b>24</b></td><td>0.34%</td><td>94.28%</td></tr>
<tr style="color: #00ffe1"><td>#00ffe1</td><td><b>23</b></td><td>0.32%</td><td>94.6%</td></tr>
<tr style="color: #0056d6"><td>#0056d6</td><td><b>23</b></td><td>0.32%</td><td>94.92%</td></tr>
<tr style="color: #070708"><td>#070708</td><td><b>23</b></td><td>0.32%</td><td>95.24%</td></tr>
<tr style="color: #00ccff"><td>#00ccff</td><td><b>21</b></td><td>0.29%</td><td>95.54%</td></tr>
<tr style="color: #4a7eb7"><td>#4a7eb7</td><td><b>20</b></td><td>0.28%</td><td>95.82%</td></tr>
<tr style="color: #ff91af"><td>#ff91af</td><td><b>19</b></td><td>0.27%</td><td>96.08%</td></tr>
<tr style="color: #b7c672"><td>#b7c672</td><td><b>17</b></td><td>0.24%</td><td>96.32%</td></tr>
<tr style="color: #ba97dd"><td>#ba97dd</td><td><b>17</b></td><td>0.24%</td><td>96.56%</td></tr>
<tr style="color: #f90b0b"><td>#f90b0b</td><td><b>17</b></td><td>0.24%</td><td>96.8%</td></tr>
<tr style="color: #6d487e"><td>#6d487e</td><td><b>16</b></td><td>0.22%</td><td>97.02%</td></tr>
<tr style="color: #f5f5f5"><td>#f5f5f5</td><td><b>15</b></td><td>0.21%</td><td>97.23%</td></tr>
<tr style="color: #ffac70"><td>#ffac70</td><td><b>15</b></td><td>0.21%</td><td>97.44%</td></tr>
<tr style="color: #b3fff2"><td>#b3fff2</td><td><b>12</b></td><td>0.17%</td><td>97.61%</td></tr>
<tr style="color: #8f8ed2"><td>#8f8ed2</td><td><b>11</b></td><td>0.15%</td><td>97.76%</td></tr>
<tr style="color: #71d3f4"><td>#71d3f4</td><td><b>11</b></td><td>0.15%</td><td>97.92%</td></tr>
<tr style="color: #412a2a"><td>#412a2a</td><td><b>10</b></td><td>0.14%</td><td>98.06%</td></tr>
<tr style="color: #770157"><td>#770157</td><td><b>10</b></td><td>0.14%</td><td>98.2%</td></tr>
<tr style="color: #d0c3b1"><td>#d0c3b1</td><td><b>10</b></td><td>0.14%</td><td>98.34%</td></tr>
<tr style="color: #974444"><td>#974444</td><td><b>9</b></td><td>0.13%</td><td>98.46%</td></tr>
<tr style="color: #0bd563"><td>#0bd563</td><td><b>8</b></td><td>0.11%</td><td>98.57%</td></tr>
<tr style="color: #3a29bc"><td>#3a29bc</td><td><b>8</b></td><td>0.11%</td><td>98.69%</td></tr>
<tr style="color: #d86bff"><td>#d86bff</td><td><b>8</b></td><td>0.11%</td><td>98.8%</td></tr>
<tr style="color: #e2f63f"><td>#e2f63f</td><td><b>8</b></td><td>0.11%</td><td>98.91%</td></tr>
<tr style="color: #216afd"><td>#216afd</td><td><b>7</b></td><td>0.1%</td><td>99.01%</td></tr>
<tr style="color: #347945"><td>#347945</td><td><b>7</b></td><td>0.1%</td><td>99.1%</td></tr>
<tr style="color: #6b8eb3"><td>#6b8eb3</td><td><b>6</b></td><td>0.08%</td><td>99.19%</td></tr>
<tr style="color: #9b94ff"><td>#9b94ff</td><td><b>6</b></td><td>0.08%</td><td>99.27%</td></tr>
<tr style="color: #ff00d0"><td>#ff00d0</td><td><b>6</b></td><td>0.08%</td><td>99.36%</td></tr>
<tr style="color: #cc7c2a"><td>#cc7c2a</td><td><b>5</b></td><td>0.07%</td><td>99.43%</td></tr>
<tr style="color: #ff0099"><td>#ff0099</td><td><b>5</b></td><td>0.07%</td><td>99.5%</td></tr>
<tr style="color: #15cb2b"><td>#15cb2b</td><td><b>4</b></td><td>0.06%</td><td>99.55%</td></tr>
<tr style="color: #22872d"><td>#22872d</td><td><b>4</b></td><td>0.06%</td><td>99.61%</td></tr>
<tr style="color: #ff66b0"><td>#ff66b0</td><td><b>4</b></td><td>0.06%</td><td>99.66%</td></tr>
<tr style="color: #ffb3b3"><td>#ffb3b3</td><td><b>4</b></td><td>0.06%</td><td>99.72%</td></tr>
<tr style="color: #41c85c"><td>#41c85c</td><td><b>3</b></td><td>0.04%</td><td>99.76%</td></tr>
<tr style="color: #750000"><td>#750000</td><td><b>3</b></td><td>0.04%</td><td>99.8%</td></tr>
<tr style="color: #f50f7e"><td>#f50f7e</td><td><b>3</b></td><td>0.04%</td><td>99.85%</td></tr>
<tr style="color: #17fdda"><td>#17fdda</td><td><b>2</b></td><td>0.03%</td><td>99.87%</td></tr>
<tr style="color: #ff004c"><td>#ff004c</td><td><b>2</b></td><td>0.03%</td><td>99.9%</td></tr>
<tr style="color: #ffd877"><td>#ffd877</td><td><b>2</b></td><td>0.03%</td><td>99.93%</td></tr>
<tr style="color: #007bff"><td>#007bff</td><td><b>1</b></td><td>0.01%</td><td>99.94%</td></tr>
<tr style="color: #37be95"><td>#37be95</td><td><b>1</b></td><td>0.01%</td><td>99.96%</td></tr>
<tr style="color: #c2260a"><td>#c2260a</td><td><b>1</b></td><td>0.01%</td><td>99.97%</td></tr>
<tr style="color: #d51b53"><td>#d51b53</td><td><b>1</b></td><td>0.01%</td><td>99.99%</td></tr>
<tr style="color: #f50a22"><td>#f50a22</td><td><b>1</b></td><td>0.01%</td><td>100%</td></tr>
</tbody>
</table>
