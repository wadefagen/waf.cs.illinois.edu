---
layout: custom-bc

bc1: Teaching
bc1_url: "/teaching/"

title: "CS 340: Introduction to Systems Programming"
---

# Introduction to Computer Systems (CS 340)

> Basics of computer systems. Number representations, assembly/machine language, abstract models of processors (fetch/execute, memory hierarchy), processes/process control, simple memory management, file I/O and directories, network programming, usage of cloud services.  Credit: 3 hours.

**CS 340: Introduction to Computer Systems** is a modern approach to computer systems and one of the newest courses in the CS core curriculum, teaching students the foundational of computer architecture, systems progrmaming, and cloud computing.  All CS students except CS/ENG can either take a dedicated architecture course (CS 233) and a dedicated systems course (CS 341) or take CS 340 to fulfill both requirements.


## Final Project

One of the highlights of CS 340 is the final project.  Each semester, you will be a part of an experience where you are developing a small but integral part of a complex software system.  The final system runs with everyone single person in the class contributing code to the project.  As part of this project:

1. You will contribute multiple different backend microservices to the final system,
2. You, and the microservices of everyone else, will run simultaneously during the deployment of the system at the end of the semester,
3. The middleware, frontend, and other components are designed collaboratively by the class, with the ability for you to contribute to the shared infrastructure!

### Recent Course-Wide Projects

The final projects completed in recent semesters have been:

- **[The Infinite Maze](infinite-maze/)**, in Spring 2022
- **MIX: Microservice Information eXchange**, in Fall 2021


## Topic Comparison Between CS 340 and CS 233/341

The question I get asked the most is *"What is the difference between CS 340 and 233/341?"*  The answer is two-fold:

1. CS 340's focuses on cloud-based systems, which involve all the systems concepts necessary to build systems that run on the cloud.  This means we cover the majority of topics in CS 341, plus an additional set of cloud topics only covered in CS 340.  You can find a detailed breakdown below.

2. CS 340 gives you the time (and credit hours) to focus on 400-level courses you're personally interested in.  I feel most of the very best courses we offer at Illinois are at the 400- or 500-level.  By taking CS 340, you are able to spend the other 6 credit hours in 400-level courses instead of 200/300-level courses.


### Detailed Topic Comparisons

*Prepared in Summer 2021, based off the content taught Spring 2021.*

<style>
  h2 {
    margin-top: 15px;
  }
  td.gr {
    background-color: #efe;
  }
  td.ye {
    background-color: #ffe;
  }


  th:nth-child(2), th:nth-child(3),
  td:nth-child(2), td:nth-child(3) {
    border-left: solid 2px black;
  }

  div.small:before {
    content: '- ';
  }
  div.small {
    display: inline-block;    
  }

  tr.category {
    font-size: 120%;
    border-bottom: dotted 2px #13294B;
    background-color: #eef;
  }

  tr.sub-category {
    font-weight: bold;
    border-bottom: dotted 2px #13294B;
  }  
</style>

<table class="table table-sm">
<thead>
<tr><th>Topic</th><th>CS 340</th><th>CS 233</th><th>CS 341</th></tr>
</thead>

<tr class="category"><td colspan="4">Programming Languages/Technologies</td></tr>
<tr><td>MIPS</td><td></td><td class="gr">✔️<div class="small">Many MPs / Labs</div></td><td></td></tr>
<tr><td>C</td><td class="gr">✔️<div class="small">First Half (MP1-MP5)</div></td><td class="gr">✔️<div class="small">Many Labs (Choice of C or C++)</div></td><td class="gr">✔️<div class="small">All MPs and Labs</div></td></tr>
<tr><td>C++</td><td></td><td class="gr">✔️<div class="small">Many Labs (Choice of C or C++)</div></td><td></td></tr>
<tr><td>Python</td><td class="gr">✔️<div class="small">Second Half (MP6-MP9 + Final Project)</div></td><td></td><td></td></tr>
<tr><td>Bash</td><td class="gr">✔️<div class="small">MP7 (Docker)</div></td><td></td><td class="ye">Lecture<div class="small">Lecture #30</div></td></tr>
<tr><td>git</td><td class="gr">✔️<div class="small">All Assignments</div></td><td class="gr">✔️<div class="small">All Assignments</div></td><td class="gr">✔️<div class="small">All Assignments</div></td></tr>
<tr><td>Verilog</td><td></td><td class="gr">✔️<div class="small">Early MPs / Labs</div></td><td></td></tr>

<tr class="category"><td colspan="4">Cloud Computing</td></tr>
<tr><td>OSI Model</td><td class="gr">✔️<div class="small">Lecture #14</div></td><td></td><td class="gr">✔️<div class="small">Lecture #25</div></td></tr>
<tr><td>IP / IP Addresses</td><td class="gr">✔️<div class="small">Lecture #14</div></td><td></td><td class="gr">✔️<div class="small">Lecture #24</div></td></tr>
<tr><td>TCP</td><td class="gr">✔️<div class="small">Lecture #14</div></td><td></td><td class="gr">✔️<div class="small">Lecture #25</div></td></tr>
<tr><td>TCP Handshake</td><td class="gr">✔️<div class="small">Lecture #14</div></td><td></td><td class="gr">✔️<div class="small">Lecture #37</div></td></tr>
<tr><td>UDP</td><td class="gr">✔️<div class="small">Lecture #14</div></td><td></td><td class="gr">✔️<div class="small">Lecture #25</div></td></tr>
<tr><td>HTTP</td><td class="gr">✔️<div class="small">Lecture #11</div></td><td></td><td class="gr">✔️<div class="small">Lecture #25</div></td></tr>
<tr><td>HTTP Status Codes</td><td class="gr">✔️<div class="small">Lecture #11</div></td><td></td><td class="gr">✔️<div class="small">MP Assignment</div></td></tr>
<tr><td>HTTP Verbs</td><td class="gr">✔️<div class="small">Lecture #19</div></td><td></td><td class="gr">✔️<div class="small">MP Assignment</div></td></tr>
<tr><td>Raw Sockets</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #26</div></td></tr>
<tr><td>Denial of Service (DoS)</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #36</div></td></tr>
<tr><td>DDoS / IoT DOS</td><td></td><td></td><td class="gr">✔️<div class="small">(Not found in course?)</div></td></tr>
<tr><td>Ports</td><td class="gr">✔️<div class="small">Lecture #16</div></td><td></td><td></td></tr>
<tr><td>Domain Name Service</td><td class="gr">✔️<div class="small">Lecture #20</div></td><td></td><td class="gr">✔️<div class="small">(Not found in course?)</div></td></tr>
<tr><td>FQDN</td><td class="gr">✔️<div class="small">Lecture #20</div></td><td></td><td></td></tr>
<tr><td>DNS Root Servers</td><td class="gr">✔️<div class="small">Lecture #20</div></td><td></td><td></td></tr>
<tr><td>DNS Records</td><td class="gr">✔️<div class="small">Lecture #20</div></td><td></td><td></td></tr>
<tr><td>CDNs</td><td class="gr">✔️<div class="small">Lecture #20</div></td><td></td><td></td></tr>

<tr class="sub-category"><td colspan="4">Cloud Architectures</td></tr>
<tr><td>Monolithic</td><td class="gr">✔️<div class="small">Lecture #16</div></td><td></td><td></td></tr>
<tr><td>Microservice</td><td class="gr">✔️<div class="small">Lecture #16</div></td><td></td><td></td></tr>
<tr><td>User Account Isolation</td><td class="gr">✔️<div class="small">Lecture #17</div></td><td></td><td></td></tr>
<tr><td>Containerization</td><td class="gr">✔️<div class="small">Lecture #17</div></td><td></td><td class="ye">➕<div class="small">Optional Content (Honors)</div></td></tr>
<tr><td>Virtualization</td><td class="gr">✔️<div class="small">Lecture #17</div></td><td></td><td class="ye">➕<div class="small">Optional Content (Honors)</div></td></tr>
<tr><td>MapReduce</td><td class="gr">✔️<div class="small">Lecture #19</div></td><td></td><td class="gr">✔️<div class="small">Lab MapReduce</div></td></tr>
<tr><td>Data Store: Local Memory</td><td class="gr">✔️<div class="small">Lecture #21</div></td><td></td><td class="gr">✔️<div class="small">Lab Assignment</div></td></tr>
<tr><td>Data Store: File-Backed Storage</td><td class="gr">✔️<div class="small">Lecture #21</div></td><td></td><td></td></tr>
<tr><td>Data Store: Key-Value Store</td><td class="gr">✔️<div class="small">Lecture #21</div></td><td></td><td></td></tr>
<tr><td>Data Store: NoSQL Databases</td><td class="gr">✔️<div class="small">Lecture #21</div></td><td></td><td></td></tr>
<tr><td>Data Store: SQL Databases</td><td class="gr">✔️<div class="small">Lecture #21</div></td><td></td><td></td></tr>
<tr><td>Infrastructure as a Service</td><td class="gr">✔️<div class="small">Lecture #21</div></td><td></td><td></td></tr>
<tr><td>IaaS: EC2 / GCP</td><td class="gr">✔️<div class="small">Lecture #21</div></td><td></td><td></td></tr>
<tr><td>Platform as a Service</td><td class="gr">✔️<div class="small">Lecture #21</div></td><td></td><td></td></tr>
<tr><td>PaaS: Docker</td><td class="gr">✔️<div class="small">Lecture #21</div></td><td></td><td></td></tr>
<tr><td>Software as a Service</td><td class="gr">✔️<div class="small">Lecture #21</div></td><td></td><td></td></tr>
<tr><td>SaaS: CDN</td><td class="gr">✔️<div class="small">Lecture #21</div></td><td></td><td></td></tr>

<tr class="sub-category"><td colspan="4">Containerization and Virtualization</td></tr>
<tr><td>Container Technology</td><td class="gr">✔️<div class="small">Lecture #18</div></td><td></td><td class="ye">➕<div class="small">Optional Content (Honors)</div></td></tr>
<tr><td>Docker</td><td class="gr">✔️<div class="small">Lecture #18</div></td><td></td><td></td></tr>
<tr><td>Dockerfile</td><td class="gr">✔️<div class="small">Lecture #18</div></td><td></td><td></td></tr>
<tr><td>Docker Image Hierarchy</td><td class="gr">✔️<div class="small">Lecture #18</div></td><td></td><td></td></tr>
<tr><td>Container File System Mounts</td><td class="gr">✔️<div class="small">Lecture #18</div></td><td></td><td></td></tr>
<tr><td>Container Port Forwarding</td><td class="gr">✔️<div class="small">Lecture #18</div></td><td></td><td></td></tr>

<tr class="sub-category"><td colspan="4">Application Interfaces</td></tr>
<tr><td>API Overview</td><td class="gr">✔️<div class="small">Lecture #19</div></td><td></td><td></td></tr>
<tr><td>RESTful APIs</td><td class="gr">✔️<div class="small">Lecture #19</div></td><td></td><td></td></tr>
<tr><td>Stateful APIs</td><td class="gr">✔️<div class="small">Lecture #19</div></td><td></td><td></td></tr>
<tr><td>Frontend Services</td><td class="gr">✔️<div class="small">Lecture #22</div></td><td></td><td></td></tr>
<tr><td>Middleware Services</td><td class="gr">✔️<div class="small">Lecture #22</div></td><td></td><td></td></tr>
<tr><td>Backend Services</td><td class="gr">✔️<div class="small">Lecture #22</div></td><td></td><td></td></tr>
<tr><td>Common Web Server Stacks</td><td class="gr">✔️<div class="small">Lecture #22</div></td><td></td><td></td></tr>














<tr class="category"><td colspan="4">Computer Architecture</td></tr>
<tr><td>Binary</td><td class="gr">✔️<div class="small">Lecture #2</div></td><td class="gr">✔️<div class="small">Lecture #2</div></td><td></td></tr>
<tr><td>Hex</td><td class="gr">✔️<div class="small">Lecture #2</div></td><td class="gr">✔️<div class="small">Lecture #2</div></td><td></td></tr>
<tr><td>Two's Complement</td><td class="gr">✔️<div class="small">Lecture #4</div></td><td class="gr">✔️<div class="small">Lecture #2</div></td><td></td></tr>
<tr><td>Byte Order</td><td class="gr">✔️<div class="small">Lecture #15</div></td><td class="gr">✔️<div class="small">Lecture #7</div></td><td class="gr">✔️<div class="small">Lecture #33</div></td></tr>
<tr><td>Endianness</td><td class="gr">✔️<div class="small">Lecture #15</div></td><td class="gr">✔️<div class="small">Lecture #7</div></td><td></td></tr>
<tr><td>ASCII</td><td class="gr">✔️<div class="small">Lecture #2</div></td><td class="gr">✔️<div class="small">Lecture #11</div></td><td></td></tr>
<tr><td>Unicode / UTF-8</td><td class="gr">✔️<div class="small">Lecture #2</div></td><td></td><td></td></tr>
<tr><td>File Extensions</td><td class="gr">✔️<div class="small">Lecture #3</div></td><td></td><td></td></tr>
<tr><td>Chunk-Based Encoding</td><td class="gr">✔️<div class="small">Lecture #3</div></td><td></td><td></td></tr>
<tr><td>Serialization</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #37</div></td></tr>
<tr><td>Compiler Preprocessor</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #2</div></td></tr>

<tr class="sub-category"><td colspan="4">Circuits / Bit Manipulation</td></tr>
<tr><td>Boolean Logic</td><td class="gr">✔️<div class="small">Lecture #4</div></td><td class="gr">✔️<div class="small">Lecture #1</div></td><td></td></tr>
<tr><td>Bitwise Operators</td><td class="gr">✔️<div class="small">Lecture #4</div></td><td class="gr">✔️<div class="small">Lecture #1</div></td><td></td></tr>
<tr><td>AND Gate</td><td class="gr">✔️<div class="small">Lecture #4</div></td><td class="gr">✔️<div class="small">Lecture #1</div></td><td></td></tr>
<tr><td>OR Gate</td><td class="gr">✔️<div class="small">Lecture #4</div></td><td class="gr">✔️<div class="small">Lecture #1</div></td><td></td></tr>
<tr><td>XOR Gate</td><td class="gr">✔️<div class="small">Lecture #5</div></td><td class="gr">✔️<div class="small">Lecture #1</div></td><td></td></tr>
<tr><td>NOT Gate</td><td class="gr">✔️<div class="small">Lecture #4</div></td><td class="gr">✔️<div class="small">Lecture #1</div></td><td></td></tr>
<tr><td>Truth Tables</td><td class="gr">✔️<div class="small">Lecture #4</div></td><td class="gr">✔️<div class="small">Lecture #2</div></td><td></td></tr>
<tr><td>Binary Addition</td><td class="gr">✔️<div class="small">Lecture #4</div></td><td class="gr">✔️<div class="small">Lecture #2</div></td><td></td></tr>
<tr><td>Bitshift Operators</td><td class="gr">✔️<div class="small">Lecture #4</div></td><td class="gr">✔️<div class="small">Lecture #2</div></td><td></td></tr>
<tr><td>Half Adder</td><td class="gr">✔️<div class="small">Lecture #5</div></td><td class="gr">✔️<div class="small">Lecture #3</div></td><td></td></tr>
<tr><td>Full Adder</td><td class="gr">✔️<div class="small">Lecture #5</div></td><td class="gr">✔️<div class="small">Lecture #3</div></td><td></td></tr>
<tr><td>Ripple Carry Adder</td><td class="gr">✔️<div class="small">Lecture #5</div></td><td class="gr">✔️<div class="small">Lecture #3</div></td><td></td></tr>
<tr><td>Multiplexers</td><td></td><td class="gr">✔️<div class="small">Lecture #3</div></td><td></td></tr>
<tr><td>ALU</td><td></td><td class="gr">✔️<div class="small">Lecture #3</div></td><td></td></tr>
<tr><td>Flip-flops</td><td></td><td class="gr">✔️<div class="small">Lecture #4</div></td><td></td></tr>
<tr><td>Finite State Machines</td><td></td><td class="gr">✔️<div class="small">Lecture #4</div></td><td></td></tr>
<tr><td>Registers</td><td></td><td class="gr">✔️<div class="small">Lecture #5</div></td><td></td></tr>
<tr><td>Reigster Files</td><td></td><td class="gr">✔️<div class="small">Lecture #5</div></td><td></td></tr>
<tr><td>Circuit Propagation Delay</td><td></td><td class="gr">✔️<div class="small">Lecture #5</div></td><td></td></tr>
<tr><td>RAM</td><td class="gr">✔️<div class="small">Lecture #5</div></td><td class="gr">✔️<div class="small">Lecture #5</div></td><td></td></tr>
<tr><td>Binary Multiplication</td><td class="gr">✔️<div class="small">Lecture #4</div></td><td class="gr">✔️<div class="small">Lecture #6</div></td><td></td></tr>

<tr class="sub-category"><td colspan="4">CPU</td></tr>
<tr><td>Instruction Set Architectures (ISAs)</td><td class="gr">✔️<div class="small">Lecture #1</div></td><td class="gr">✔️<div class="small">Lecture #7</div></td><td></td></tr>
<tr><td>Instruction Memory</td><td></td><td class="gr">✔️<div class="small">Lecture #7</div></td><td></td></tr>
<tr><td>Control Instructions</td><td></td><td class="gr">✔️<div class="small">Lecture #8</div></td><td></td></tr>
<tr><td>Load Upper Immediate (LUI)</td><td></td><td class="gr">✔️<div class="small">Lecture #8</div></td><td></td></tr>
<tr><td>LOAD/STORE Pipeline</td><td></td><td class="gr">✔️<div class="small">Lecture #9</div></td><td></td></tr>
<tr><td>CPU Registers</td><td></td><td class="gr">✔️<div class="small">Lecture #10</div></td><td></td></tr>
<tr><td>Register Naming Conventions</td><td></td><td class="gr">✔️<div class="small">Lecture #10</div></td><td></td></tr>
<tr><td>Programming Registers</td><td></td><td class="gr">✔️<div class="small">Lecture #10</div></td><td></td></tr>
<tr><td>Function Call</td><td></td><td class="gr">✔️<div class="small">Lecture #11</div></td><td></td></tr>
<tr><td>Caller Save Functions</td><td></td><td class="gr">✔️<div class="small">Lecture #11</div></td><td></td></tr>
<tr><td>Hardware Interrupts</td><td></td><td class="gr">✔️<div class="small">Lecture #13</div></td><td></td></tr>
<tr><td>Hardware Exceptions</td><td></td><td class="gr">✔️<div class="small">Lecture #13</div></td><td></td></tr>
<tr><td>CPU Registers</td><td></td><td class="gr">✔️<div class="small">Lecture #14</div></td><td></td></tr>
<tr><td>Iron Law of Computing</td><td></td><td class="gr">✔️<div class="small">Lecture #14</div></td><td></td></tr>
<tr><td>Latency and Throughput</td><td></td><td class="gr">✔️<div class="small">Lecture #14</div></td><td></td></tr>
<tr><td>Pipelining</td><td></td><td class="gr">✔️<div class="small">Lecture #16</div></td><td></td></tr>
<tr><td>Stalls and Flushes</td><td></td><td class="gr">✔️<div class="small">Lecture #17</div></td><td></td></tr>
<tr><td>CPU Caches</td><td></td><td class="gr">✔️<div class="small">Lecture #20</div></td><td></td></tr>
<tr><td>Direct-Mapped Caches</td><td></td><td class="gr">✔️<div class="small">Lecture #20</div></td><td></td></tr>
<tr><td>Set Associative Caches</td><td></td><td class="gr">✔️<div class="small">Lecture #21</div></td><td></td></tr>
<tr><td>Cache Prefetching</td><td></td><td class="gr">✔️<div class="small">Lecture #23</div></td><td></td></tr>
<tr><td>TLB</td><td></td><td class="gr">✔️<div class="small">Lecture #26</div></td><td class="gr">✔️<div class="small">Lecture #21</div></td></tr>
<tr><td>Power Scaling (Single / Multi-core)</td><td></td><td class="gr">✔️<div class="small">Lecture #28</div></td><td></td></tr>
<tr><td>Cache coherence</td><td></td><td class="gr">✔️<div class="small">Lecture #28</div></td><td></td></tr>
<tr><td>False Sharing</td><td></td><td class="gr">✔️<div class="small">Lecture #28</div></td><td></td></tr>


<tr class="category"><td colspan="4">Computer Systems</td></tr>
<tr><td>Memory Access Patterns</td><td class="gr">✔️<div class="small">Lecture #5</div></td><td class="gr">✔️<div class="small">Lecture #22</div></td><td class="gr">✔️<div class="small">Lecture #8</div></td></tr>
<tr><td>Memory Hierarchy</td><td class="gr">✔️<div class="small">Lecture #5</div></td><td class="gr">✔️<div class="small">Lecture #21</div></td><td></td></tr>
<tr><td>Cache-Optimized Code</td><td class="gr">✔️<div class="small">Lecture #5</div></td><td class="gr">✔️<div class="small">Lecture #24</div></td><td></td></tr>
<tr><td>Locality of Reference</td><td class="gr">✔️<div class="small">Lecture #6</div></td><td class="gr">✔️<div class="small">Lecture #24</div></td><td></td></tr>
<tr><td>Virtual Memory</td><td class="gr">✔️<div class="small">Lecture #6</div></td><td class="gr">✔️<div class="small">Lecture #26</div></td><td class="gr">✔️<div class="small">Lecture #21</div></td></tr>
<tr><td>Segmentation</td><td class="gr">✔️<div class="small">Lecture #6</div></td><td></td><td class="gr">✔️<div class="small">Lecture #8</div></td></tr>
<tr><td>Heap Memory Allocation</td><td class="gr">✔️<div class="small">Lecture #7</div></td><td></td><td class="gr">✔️<div class="small">Lecture #1</div></td></tr>
<tr><td>Pointers</td><td class="gr">✔️<div class="small">Lecture #7</div></td><td class="gr">✔️<div class="small">Lecture #12</div></td><td class="gr">✔️<div class="small">Lecture #3</div></td></tr>
<tr><td>Pointer Arithmetic</td><td class="gr">✔️<div class="small">Lecture #7</div></td><td class="gr">✔️<div class="small">Lecture #11</div></td><td class="gr">✔️<div class="small">Lecture #3</div></td></tr>
<tr><td>Malloc Specifics</td><td class="gr">✔️<div class="small">Lecture #7</div></td><td></td><td class="gr">✔️<div class="small">Lecture #8</div></td></tr>
<tr><td>Memory Coalescing</td><td class="gr">✔️<div class="small">Lecture #8</div></td><td></td><td class="gr">✔️<div class="small">Lecture #9</div></td></tr>
<tr><td>Free Lists</td><td class="gr">✔️<div class="small">Lecture #8</div></td><td></td><td class="gr">✔️<div class="small">Lecture #9</div></td></tr>
<tr><td>Buffer Overflow</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #10</div></td></tr>
<tr><td>Memory Pools</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #10</div></td></tr>
<tr><td>Memory Byte/Word Alignment</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #10</div></td></tr>
<tr><td>Page Tables</td><td class="gr">✔️<div class="small">Lecture #9</div></td><td class="gr">✔️<div class="small">Lecture #26</div></td><td class="gr">✔️<div class="small">Lecture #21</div></td></tr>
<tr><td>Page Table Index and Offset Bits</td><td class="gr">✔️<div class="small">Lecture #9</div></td><td class="gr">✔️<div class="small">Lecture #26</div></td><td class="gr">✔️<div class="small">Lecture #21</div></td></tr>
<tr><td>Page Table Sizes</td><td class="gr">✔️<div class="small">Lecture #9</div></td><td class="gr">✔️<div class="small">Lecture #26</div></td><td class="gr">✔️<div class="small">Lecture #21</div></td></tr>
<tr><td>Multi-Level Page Tables</td><td class="gr">✔️<div class="small">Lecture #9</div></td><td class="gr">✔️<div class="small">Lecture #26</div></td><td class="gr">✔️<div class="small">Lecture #21</div></td></tr>
<tr><td>Virtual Pages</td><td class="gr">✔️<div class="small">Lecture #9</div></td><td></td><td class="gr">✔️<div class="small">Lecture #21</div></td></tr>
<tr><td>Page Faults</td><td class="gr">✔️<div class="small">Lecture #9</div></td><td class="gr">✔️<div class="small">Lecture #26</div></td><td class="gr">✔️<div class="small">Lecture #21</div></td></tr>
<tr><td>Optimal Page Replacement</td><td class="gr">✔️<div class="small">Lecture #9</div></td><td></td><td class="gr">✔️<div class="small">Lecture #21</div></td></tr>
<tr><td>Page Replacement Schemes</td><td class="gr">✔️<div class="small">Lecture #9</div></td><td></td><td class="gr">✔️<div class="small">Lecture #21</div></td></tr>
<tr><td>Segmentation Fault</td><td class="gr">✔️<div class="small">Lecture #9</div></td><td></td><td class="gr">✔️<div class="small">Lecture #21</div></td></tr>

<tr class="sub-category"><td colspan="4">OS, Threads, and Processes</td></tr>
<tr><td>POST / EFI</td><td class="gr">✔️<div class="small">Lecture #10</div></td><td></td><td></td></tr>
<tr><td>Bootloader</td><td class="gr">✔️<div class="small">Lecture #10</div></td><td></td><td></td></tr>
<tr><td>Init Process</td><td class="gr">✔️<div class="small">Lecture #10</div></td><td></td><td></td></tr>
<tr><td>Processes</td><td class="gr">✔️<div class="small">Lecture #10</div></td><td></td><td class="gr">✔️<div class="small">Lecture #6</div></td></tr>
<tr><td>Context Switching</td><td class="gr">✔️<div class="small">Lecture #10</div></td><td></td><td class="gr">✔️<div class="small">Lecture #32</div></td></tr>
<tr><td>Fork-Exec-Wait Pattern</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #6</div></td></tr>
<tr><td>Environmental Variables</td><td class="gr">✔️<div class="small">Lecture #16</div></td><td></td><td class="gr">✔️<div class="small">Lecture #5</div></td></tr>
<tr><td>Signals</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #7</div></td></tr>
<tr><td>Signal Masking</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #35</div></td></tr>
<tr><td>Threads</td><td class="gr">✔️<div class="small">Lecture #10</div></td><td class="gr">✔️<div class="small">Lecture #28</div></td><td class="gr">✔️<div class="small">Lecture #11</div></td></tr>
<tr><td>Thread Start</td><td class="gr">✔️<div class="small">Lecture #12</div></td><td></td><td class="gr">✔️<div class="small">Lecture #11</div></td></tr>
<tr><td>Thread Join</td><td class="gr">✔️<div class="small">Lecture #12</div></td><td></td><td class="gr">✔️<div class="small">Lecture #11</div></td></tr>
<tr><td>Thread Parallelism</td><td class="gr">✔️<div class="small">Lecture #12</div></td><td></td><td class="gr">✔️<div class="small">Lecture #11</div></td></tr>
<tr><td>Thread Pools</td><td></td><td></td><td class="gr">✔️<div class="small">(Not found in course?)</div></td></tr>
<tr><td>Task Queues</td><td></td><td></td><td class="gr">✔️<div class="small">(Not found in course?)</div></td></tr>
<tr><td>Processes vs. Threads</td><td class="gr">✔️<div class="small">Lecture #12</div></td><td></td><td class="gr">✔️<div class="small">Lecture #11</div></td></tr>
<tr><td>Blocking Operations</td><td class="gr">✔️<div class="small">Lecture #12</div></td><td></td><td class="gr">✔️<div class="small">Lecture #14</div></td></tr>
<tr><td>User Accounts</td><td class="gr">✔️<div class="small">Lecture #17</div></td><td></td><td class="gr">✔️<div class="small">Lecture #30</div></td></tr>
<tr><td>SUID, UID, EUID</td><td></td><td></td><td class="gr">✔️<div class="small">(Not found in course?)</div></td></tr>
<tr><td>Non-blocking I/O</td><td></td><td></td><td class="gr">✔️<div class="small">(Not found in course?)</div></td></tr>

<tr class="sub-category"><td colspan="4">Synchronization</td></tr>
<tr><td>Critical Sections</td><td class="gr">✔️<div class="small">Lecture #13</div></td><td></td><td class="gr">✔️<div class="small">Lecture #13</div></td></tr>
<tr><td>Atomic Operations</td><td></td><td class="gr">✔️<div class="small">Lecture #28</div></td><td></td></tr>
<tr><td>Mutex Locks</td><td class="gr">✔️<div class="small">Lecture #12</div></td><td class="gr">✔️<div class="small">Lecture #28</div></td><td class="gr">✔️<div class="small">Lecture #13</div></td></tr>
<tr><td>Race Conditions</td><td class="gr">✔️<div class="small">Lecture #13</div></td><td class="gr">✔️<div class="small">Lecture #28</div></td><td class="gr">✔️<div class="small">Lecture #14</div></td></tr>
<tr><td>Conditional Variables</td><td class="gr">✔️<div class="small">Lecture #13</div></td><td></td><td class="gr">✔️<div class="small">Lecture #15</div></td></tr>
<tr><td>Semaphores</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #16</div></td></tr>
<tr><td>Barriers</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #18</div></td></tr>
<tr><td>Producer/Consumer Model</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #17</div></td></tr>
<tr><td>Readers-Writers Problem</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #17</div></td></tr>
<tr><td>Deadlock</td><td class="gr">✔️<div class="small">Lecture #13</div></td><td></td><td class="gr">✔️<div class="small">Lecture #18</div></td></tr>
<tr><td>Coffman Conditions</td><td class="gr">✔️<div class="small">Lecture #13</div></td><td></td><td class="gr">✔️<div class="small">Lecture #19</div></td></tr>
<tr><td>Resource Allocation Graphs</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #19</div></td></tr>
<tr><td>Livelock</td><td class="gr">✔️<div class="small">Lecture #13</div></td><td></td><td class="gr">✔️<div class="small">Lecture #20</div></td></tr>
<tr><td>Dining Philosophers</td><td class="gr">✔️<div class="small">Lecture #13</div></td><td></td><td class="gr">✔️<div class="small">Lecture #20</div></td></tr>
<tr><td>Peterson's Solution</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #14</div></td></tr>
<tr><td>Banker's algorithm</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #19</div></td></tr>

<tr class="sub-category"><td colspan="4">IPC</td></tr>
<tr><td>Pipes</td><td class="gr">✔️<div class="small">Lecture #10</div></td><td></td><td class="gr">✔️<div class="small">Lecture #22</div></td></tr>
<tr><td>mmap</td><td class="gr">✔️<div class="small">Lecture #10</div></td><td></td><td class="gr">✔️<div class="small">Lecture #21</div></td></tr>
<tr><td>I/O Multiplexing</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #33</div></td></tr>
<tr><td>RPC</td><td class="gr">✔️<div class="small">Lecture #10</div></td><td></td><td class="gr">✔️<div class="small">Lecture #37</div></td></tr>
<tr><td>Common Message Formats</td><td class="gr">✔️<div class="small">Lecture #10</div></td><td></td><td class="gr">✔️<div class="small">(Not found in course?)</div></td></tr>

<tr class="sub-category"><td colspan="4">File Systems and Disks</td></tr>
<tr><td>Reading / Writing Files To System</td><td class="gr">✔️<div class="small">Lecture #4</div></td><td></td><td class="gr">✔️<div class="small">Lecture #4</div></td></tr>
<tr><td>Technical File I/O</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #4</div></td></tr>
<tr><td>Circular Buffer</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #16</div></td></tr>
<tr><td>File Seek</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #22</div></td></tr>
<tr><td>inodes</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #27</div></td></tr>
<tr><td>direct blocks</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #27</div></td></tr>
<tr><td>indirect blocks</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #27</div></td></tr>
<tr><td>Linux Permission Bits</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #28</div></td></tr>
<tr><td>Symbolic Links</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #29</div></td></tr>
<tr><td>Hard Links</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #29</div></td></tr>
<tr><td>Hidden Files</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #29</div></td></tr>
<tr><td>I/O Multiplexing</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #30</div></td></tr>
<tr><td>Linux Virtual File System (/proc, etc)</td><td></td><td></td><td class="gr">✔️<div class="small">(Not found in course?)</div></td></tr>
<tr><td>RAID</td><td></td><td class="gr">✔️<div class="small">Lecture #26</div></td><td class="gr">✔️<div class="small">Lecture #31</div></td></tr>
<tr><td>HDDs (Spinning Disks)</td><td></td><td class="gr">✔️<div class="small">Lecture #26</div></td><td class="gr">✔️<div class="small">Lecture #34</div></td></tr>
<tr><td>SSDs</td><td></td><td class="gr">✔️<div class="small">Lecture #26</div></td><td class="gr">✔️<div class="small">Lecture #34</div></td></tr>

<tr class="sub-category"><td colspan="4">Scheduling</td></tr>
<tr><td>CPU Scheduling</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #32</div></td></tr>
<tr><td>FIFO</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #32</div></td></tr>
<tr><td>EDF</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #32</div></td></tr>
<tr><td>Round Robin</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #32</div></td></tr>
<tr><td>Starvation</td><td></td><td></td><td class="gr">✔️<div class="small">Lecture #32</div></td></tr>

<tr class="sub-category"><td colspan="4">Security</td></tr>
<tr><td>Confidentiality Integrity Availability</td><td></td><td></td><td class="gr">✔️<div class="small">Textbook Reading</div></td></tr>
<tr><td>Code analysis</td><td></td><td></td><td class="gr">✔️<div class="small">Textbook Reading</div></td></tr>
<tr><td>Broken trust boundaries</td><td></td><td></td><td class="gr">✔️<div class="small">Textbook Reading</div></td></tr>
<tr><td>Reuse after free</td><td></td><td></td><td class="gr">✔️<div class="small">Textbook Reading</div></td></tr>
<tr><td>Adversarial networks</td><td></td><td></td><td class="gr">✔️<div class="small">Textbook Reading</div></td></tr>
<tr><td>Broken thread initialization</td><td></td><td></td><td class="gr">✔️<div class="small">Textbook Reading</div></td></tr>
<tr><td>Broken turn-based CSP</td><td></td><td></td><td class="gr">✔️<div class="small">Textbook Reading</div></td></tr>
<tr><td>Broken circular buffer</td><td></td><td></td><td class="gr">✔️<div class="small">Textbook Reading</div></td></tr>

</table>








