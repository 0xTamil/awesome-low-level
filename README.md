# Awesome Low Level

> A curated collection of resources for learning low-level programming from the ground up, starting with electronics and progressing toward the specialized fields you’re interested in.

---

## Table of Contents

- [Why We Made This](#why-we-made-this-)
- [How to Refer](#how-to-refer-)
  - [If You're an Absolute Beginner](#if-youre-an-absolute-beginner)
    - [But, You Already Have Some Programming Experience](#but-you-already-have-some-programming-experience)
    - [But, You're Really New to Programming](#but-youre-really-new-to-programming)
  - [If You Have Some Low-Level Experience](#if-you-have-some-low-level-experience)
  - [If You Have High-Level Programming Experience](#if-you-have-high-level-programming-experience)
- [How to Learn](#how-to-learn-)
  - [Project-Based Learning](#project-based-learning)
    - [Why is it useful for Low-Level Programming](#why-is-it-useful-for-low-level-programming-)
  - [Using AI Tools](#using-ai-tools)
- [What is Low-Level Programming](#what-is-low-level-programming-)
- [Low-Level Programming vs System Programming](#low-level-programming-vs-system-programming)
- [Why Learning C is Important](#why-learning-c-is-important-)
- [C vs C++ in Low-Level Programming](#what-about-c++-)
- [Let's Gooo](#lets-gooo-)
- [Roadmap](#roadmap)
  - [1. Learn Circuits & Electronics](#1-learn-circuits--electronics)
    - [1. Basic Electronics](#1-basic-electronics)
    - [2. Circuit Analysis](#2-circuit-analysis)
    - [3.  Analog Electronics](#3-analog-electronics)
    - [4. Logic Gates & Boolean Logic](#4-logic-gates--boolean-logic)
    - [5. Bits & Binary](#5-bits--binary)
    - [6. Combinational Logic](#6-combinational-logic)
    - [7. Sequential Logic](#7-sequential-logic)
    - [8. Memory](#8-memory)
    - [9. Finite State Machines](#9-finite-state-machines)
    - [10. Microprocessor](#10-microprocessor)
    - [11. Assembly](#11-assembly)
  - [2. Learn Computer Fundamentals](#2-learn-computer-fundamentals)
  - [3. Learn C & Memory](#3-learn-c--memory)
  - [4. Build Small Projects](#4-build-small-projects)
  - [5. Study Algorithms & Data Structures](#5-study-algorithms--data-structures)
  - [6. Pick a Specialized Field](#6-pick-a-specialized-field)
  - [7. Learn Modern Low-Level Languages (Optional)](#7-learn-modern-low-level-languages-optional)
- [Prerequisites](#prerequisites)
  - [Circuits & Electronics](#circuits--electronics)
  - [Computer Fundamentals](#computer-fundamentals)
- [Core Foundations](#core-foundations)
  - [C Programming](#c-programming)
  - [Data Structures & Algorithms](#data-structures--algorithms)
- [Other Low-Level Languages (Optional)](#other-low-level-languages-optional)
  - [Procedural Languages](#procedural-languages)
    - [C++](#c)
    - [Rust](#rust)
    - [Zig](#zig)
    - [Odin](#odin)
  - [Non-Procedural Languages](#non-procedural-languages)
    - [Ante](#ante)
    - [Carp](#carp)
    - [Futhark](#futhark)
    - [Forth](#forth)
    - [Uxn](#uxn)
- [Specialized Fields](#specialized-fields)
  - [1. Embedded Systems](#1-embedded-systems)
  - [2. FPGA Programming](#2-fpga-programming)
  - [3. Compilers & Interpreters](#3-compilers--interpreters)
  - [4. Operating Systems Development](#4-operating-systems-development)
  - [5. GPGPU & Parallel Computing](#5-gpgpu--parallel-computing)
  - [6. Graphics Programming](#6-graphics-programming)
  - [7. Game Engine Development](#7-game-engine-development)
  - [8. Network Systems Programming](#8-network-systems-programming)
  - [9. Cybersecurity](#9-Cybersecurity)
- [Recommended Creators](#recommended-creators)
- [Web Interface](#web-interface)
- [Discord](#discord)
- [License](#license)

---

## Why We Made This ?

We made this megathread to help self-learners get started with low-level programming and build a strong foundation in its fundamentals. Having a clear learning path and structure can make it much easier to know where to start and what to learn next, so we created this guide to help with that.

We put a lot of time and effort into reviewing the resources included here to make sure they are useful and relevant for learning. This megathread was made purely out of passion for the subject, and we hope it can be useful to anyone who wants to get into low-level programming.

---

## How to Refer ?

This megathread is not perfect, and some resources or topics may be missing. Some sections include multiple resources, including links to other megathreads that cover a topic more comprehensively. You don't need to go through everything, feel free to pick one or two resources that best suit your learning style. So, Let's say;

### If You're an Absolute Beginner

#### But, You Already Have Some Programming Experience

You may be coming from a **CS, EEE, IT, or another technical background**. In that case, you don't need to start learning programming from zero. However, you may still be unfamiliar with how computers work at a lower level. Also, keep in mind that **programming fundamentals are not the same thing as knowing C itself**. You may have learned variables, loops, functions, conditions, and basic data structures in school or through another language, but still need to learn the C-specific concepts that are important for low-level programming.

> For example, a university course may say that you have learned "C basics", but that might mostly mean learning programming fundamentals using C. You should still make sure you understand C itself, especially things like **pointers, memory, arrays, structs, manual memory management, and how C interacts with the machine**.

From there, follow the roadmap and build your understanding step by step.

#### But, You're Really New to Programming

You may coming from a **non-CS background** but want to learn programming and eventually get into low-level programming, don't worry. You don't need to understand everything before starting. First, learn some basic programming & computer science fundamentals. You can check out the;

- **[r/learnprogramming wiki](https://www.reddit.com/r/learnprogramming/wiki/faq/#wiki_getting_started)**: A best learning guide for absolute beginners to get into programming.
- **[CS50: Introduction to Computer Science](https://pll.harvard.edu/course/cs50-introduction-computer-science)**: Harvard's introductory course covering programming, algorithms, abstraction, and computer science fundamentals.
- **[Beej's Guide to Learning Computer Science](https://beej.us/guide/bglcs/)**: A practical roadmap for learning fundamental computer science concepts.
- **[CSdiy](https://csdiy.wiki/en/)**: A self-learning guide to computer science.
- **[Open Source Society University (OSSU)](https://github.com/ossu/computer-science)**: A complete community-driven curriculum for self-taught computer science learners.
- **[Teach Yourself CS](https://teachyourselfcs.com/)**: A structured guide for learning computer science independently.
- **[Awesome CS](https://github.com/prakhar1989/awesome-courses)**: A large collection of free computer science courses and educational resources.

Once you're comfortable with the basics, start learning **C** and **Computer Fundamentals**.

> You don't need to become an expert programmer before starting C. Learn the fundamentals, get comfortable writing simple programs, then gradually learn the C-specific concepts you need for low-level programming.

From there, follow the roadmap and build your understanding step by step.

### If You Have Some Low-Level Experience

You can skip the introductory material and focus on the topics you haven't learned yet. You don't necessarily need to follow the roadmap from the beginning. Use the table of contents to find the concepts you're unfamiliar with and work from there.

### If You Have High-Level Programming Experience

You may already understand high-level programming concepts but have little or no experience with low-level programming. In this case, **don't assume that low-level programming follows the same programming style you're used to.** A lot of low-level code tends to be more **function-oriented, procedural, or data-oriented**, rather than heavily object-oriented. If you're coming from Java or Python, you may want to temporarily put OOP thinking aside and learn how to approach problems in a lower-level style first.

> That doesn't mean OOP is useless in low-level programming. It's still used in many areas, especially things like **game engines, graphics and simulations**. However, it shouldn't be treated as the default way of thinking about low-level programming.

Once you understand those concepts, you can bring OOP or other programming paradigms back into the picture when they're actually useful.

---

## How to Learn ?
 
Low-level programming can be difficult. You will get stuck, make mistakes, feel burnt out, or sometimes regret starting. That is normal. Learning how to deal with difficult problems is part of becoming a programmer. To get a broader perspective on how to learn programming effectively, check out this resource:

- **[Teach Yourself Programming in Ten Years](https://www.norvig.com/21-days.html)**: A great article for beginners that provides a realistic perspective on learning programming and what it takes to become proficient over time.

### Project-Based Learning

Sometimes, you may understand a tutorial but have no idea how to build something on your own. In that case, try **project-based learning**. Pick a topic, choose a resource from here, learn the concept, and then build or implement something using what you learned.

> For example, if you learn about linked lists, implement one yourself in C. If you learn about memory allocation, experiment with memory or try building a small allocator.

Try solving problems yourself before looking for a tutorial with the exact solution. Use documentation to check syntax and technical details, then compare your work with other implementations after you have tried it yourself.

> It is easy to get **stuck in tutorial hell**, where you keep watching tutorials and collecting resources without actually practicing. Focus on **learning the fundamentals and writing code** first. Start by writing something yourself, then learn how to improve it.

#### Why is it useful for Low-Level Programming ?

Low-level programming is not only about knowing concepts. You also need to understand how things actually work in practice. Building projects exposes you to real problems such as pointer bugs, invalid memory access, memory leaks, and debugging. It also forces you to think about how to structure your program and solve problems on your own. You don't need to build large projects. Small experiments and programs are enough. The goal is to apply what you learn instead of only consuming tutorials.

### Using AI Tools

AI tools can be useful, but try not to depend on them for every problem. Before asking AI, spend some time trying to understand and solve the problem yourself. AI can help explain errors, clarify concepts, or guide you in the right direction. However, avoid immediately asking it to write the full solution or build the entire project for you.

> **Use AI to help you learn and think, not to do all the thinking for you.**

You can also try a **no AI challenge** for a week. Avoid using AI for programming and rely on documentation, books, search engines, debugging, and your own thinking instead. It may feel harder at first, but you may start to appreciate the process of figuring things out yourself and become more confident in solving problems.

---

## What is Low-Level Programming ?

 <p align="center">
  <img width="700" alt="Levels of abstraction from hardware to high-level languages" src="https://github.com/user-attachments/assets/f1f502b3-9a2a-4dd5-9107-25d8d7efc99e" />
</p>

The diagram shows different **levels of abstraction** between the programmer and the computer's hardware. At the bottom, we have the **hardware**, which is what the computer physically uses to perform operations. Moving upward, we get **machine code, Assembly, and programming languages**. The higher we go, the more details about the hardware are hidden from the programmer. **Low-level programming** means working **closer to the machine** across **different parts of the stack**. 

It gives programmers more direct control over the **CPU, memory, and hardware resources**, with less abstraction between the code and the machine. This is why low-level programming is often described as being **“close to the hardware.”** Languages such as **Assembly and C** are commonly associated with low-level programming. Languages such as **C++, Rust, Zig, and Odin** can also be used for low-level and systems programming while providing different levels of abstraction and control.

> Low-level programming is commonly used in **operating systems, embedded systems, firmware, device drivers, compilers, game engines, graphics, networking, and performance-critical software**, where programmers need fine control over **memory, hardware, and system performance**.

---

## Low-Level Programming vs System Programming

Often, people confuse **low-level programming** with **systems programming**, but they are not exactly the same. **Low-level programming is about how closely the code works with the hardware**. It involves things like memory, CPU instructions, pointers, and data layout. **Systems programming is about building software that forms part of a larger computer system or provides important services to other software**, such as operating systems, compilers, databases, drivers, and servers. 

The two often overlap. For example, writing an operating system kernel in C is both low-level programming and systems programming. However, systems programming does not always have to be low-level. A programmer can build system software using a language that provides more abstraction.

> **low-level programming describes how close you are to the machine, while systems programming describes the kind of software you are building.**

- **[What is Systems Programming, Really ?](https://willcrichton.net/notes/systems-programming/):** An article explaining the difference between **systems programming** and **low-level programming**.

---

## Why Learning C is Important ?

C is a **de facto standard** in the programming world and has been around for decades.

- C runs on **almost every type of computer and system**, from tiny embedded devices to large operating systems.
- C allows you to write programs that use **very few system resources**, making it well suited for performance-critical and resource-constrained environments.
- C gives you **near-total control over the system**, allowing you to work directly with memory, hardware, and even individual bits when necessary.
- C imposes **very few restrictions on programming style**. Unlike many higher-level languages, it does not strongly enforce a particular programming paradigm or ideology. As a result, there are very few kinds of programs that cannot be written in C.
- Many popular programming languages and tools are implemented in C or C++. For example, interpreters and runtimes for languages such as **Python, Ruby, PHP, and Perl** are largely written in C or C++.

C helps you develop **programming discipline**.

- C gives you a lot of freedom, but that freedom also means it is **easy to make serious mistakes**.
- Problems such as invalid memory access, buffer overflows, memory leaks, and undefined behavior can occur if you are not careful.
- Learning C teaches you to be **careful with memory, pointers, data, and resources**.
- In this sense, C can be a powerful teacher: **mistakes have consequences**, which encourages you to develop better programming habits.

C is also important because its design has influenced **many modern programming languages**. Its concepts and design decisions can be seen throughout the programming ecosystem. 

> By studying C, you can better understand **why certain language features and abstractions became necessary** and gain a deeper understanding of what is happening **under the hood** something that can be harder to see when working only with higher-level languages such as Python or JavaScript.

If you want to understand **how computers work at a lower level**, learn how memory and data are handled, or work in **low level systems**, learning C provides a strong foundation.

---

## C vs C++ in Low-Level Programming

There is a common confusion among beginners about which language is better for low-level programming: **C or C++**. You will often hear the advice **"learn C before C++."** There is a reason behind it, but that doesn't mean C++ is a bad choice.

C is often recommended because it does a better job of making you confront what is happening underneath your program. For example, C gives you much less abstraction around things like strings and memory. You have to understand how they work instead of simply relying on a convenient abstraction.

C++ can hide more of those details. Its classes and other features can make programming easier and allow you to write much larger and more complex software, but that also means it can be easier to use something without understanding what is happening underneath.

Another thing to understand is that C++ does not automatically make your programs "less low-level." You can write C-like code in C++ if that is what the project needs. The language gives you the choice between staying close to the fundamentals and using higher-level abstractions.

> Both languages are capable of building serious software. You can use either one for **low-level systems**.

So, should you always learn C before C++?

**Not necessarily.**

If you prefer C++, you can start with C++ first. You don't have to learn C separately before starting. Just make sure you understand the C fundamentals that C++ is built around as you progress. Likewise, starting with C and moving to C++ later is completely fine.

> The advice to **"learn C before C++"** is mainly about making the fundamentals easier to understand, not because C++ is incapable of low-level programming. C is a great starting point for understanding the fundamentals, but C++ is still a perfectly valid choice.

---

## Let's Gooo !

Now that we have a basic understanding of what low-level programming is, let's start learning it from the ground up. The goal is not to immediately jump into assembly or write an operating system. Instead, we will gradually build an understanding of how computers work, starting from the fundamentals and moving toward programming closer to the hardware.

You may also notice that this collection does not rely heavily on commonly used websites such as **W3Schools, LeetCode, or general-purpose YouTube channels**. That does not mean those resources are bad. If they are included, there is a reason for it. The goal here is to encourage you to become comfortable with **official documentation, books, technical references, courses, source code, and other high-quality learning materials**.

> **Learning how to find and understand information is part of becoming a good programmer.** Don't depend on tutorials for everything. Learn to read documentation, search for answers, experiment, and understand things for yourself.

---

# Roadmap

## 1. Learn Circuits & Electronics

### What to do

Begin with the basics of how computers work at the physical level. Learn about electronics, binary, and logic gates, then explore how circuits can perform calculations and store data. From there, understand how these simple components are combined to build a CPU and how a processor runs programs.

> You don’t necessarily need to learn circuits and electronics in depth. You can **learn them along the way while learning C**. We suggest learning the basics because it depends on the field you want to go into. For example, if you want to work in embedded systems and do bare-metal programming with electronics, this knowledge is important. But if you want to go into another field, want to learn C, or don’t know what you want to do yet, just learn the basics at least up to **assembly**, then move on to **computer fundamentals** and **C**.

### 1. Basic Electronics

- Voltage, current, and resistance
- Ohm's Law
- Power and energy
- Series and parallel circuits
- Kirchhoff's Circuit Laws
- Resistors
- Capacitors
- Inductors
- Diodes
- Transistors
- MOSFETs
- Analog and digital signals

### 2. Circuit Analysis

- Nodes, branches, and loops
- Kirchhoff's Current Law (KCL)
- Kirchhoff's Voltage Law (KVL)
- Voltage dividers
- Current dividers
- Thevenin's theorem
- Norton's theorem
- RC and RL circuits
- Time constants
- Transient and steady-state behavior

### 3. Analog Electronics

- Diodes and rectifiers
- BJT fundamentals
- MOSFET fundamentals
- Transistors as switches
- Transistors as amplifiers
- Operational amplifiers
- Voltage regulators
- Analog-to-digital conversion (ADC)
- Digital-to-analog conversion (DAC)

### 4. Logic Gates & Boolean Logic

- AND, OR, NOT, NOR gates
- XOR and XNOR gates
- NAND as Universal gates
- Truth tables
- Boolean algebra
- Karnaugh maps
- De Morgan's laws

### 5. Bits & Binary

- Bits
- Bytes
- Binary numbers
- Hexadecimal numbers
- Binary arithmetic
- Signed and unsigned numbers
- Two's complement
- Bitwise operations
- Integer overflow


### 6. Combinational Logic

- Adders
- Subtractors
- Multiplexers
- Demultiplexers
- Encoders
- Decoders
- Comparators
- Tri-state logic

### 7. Sequential Logic

- Latches
- Flip-flops
- Clock signals
- Clock edges
- Registers
- Shift registers
- Counters
- Setup and hold time
- Propagation delay

### 8. Memory

- SRAM
- DRAM
- ROM
- Memory addressing
- Address bus
- Data bus
- Read and write operations
- Memory hierarchy

### 9. Finite State Machines

- States
- Transitions
- Inputs and outputs
- State diagrams
- Moore machines
- Mealy machines

### 10. Microprocessor

- CPU architecture
- CPU registers
- Buses
- Control unit
- ALU
- Program counter
- Stack pointer
- Machine instructions
- Instruction encoding
- Instruction dencoding
- Fetch-decode-execute cycle
- Interrupts

### 11. Assembly

- Instruction Set Architecture (ISA)
- Registers and instructions
- Memory addressing
- Stack and calling conventions
- Function calls
- Branches and jumps
- System calls
- Interaction between assmbley and hardware

---

## 2. Learn Computer Fundamentals

### What to do

Learn the purpose of major computer components such as the **CPU, RAM, storage, and input/output devices**. Understand how the CPU executes instructions, how data is stored in memory, and how programs are represented inside a computer.

You should also understand fundamental programming concepts such as:

- Variables and data types
- Conditions and logic
- Loops
- Functions
- Basic input and output
- How programs interact with memory and hardware

---

## 3. Learn C & Memory

### What to do

Learn the **C programming language** with a strong focus on how memory works. Important topics include:

- Pointers and memory addresses
- Pointer arithmetic
- Stack and heap memory
- Manual memory management
- Dynamic memory allocation using `malloc`, `calloc`, `realloc`, and `free`
- Structs and memory layout
- Arrays and strings
- Undefined behavior

---

## 4. Build Small Projects

### What to do

Apply your knowledge by building small but practical projects. Start with simple command-line tools and gradually increase their complexity.

Examples:

- A custom file reader
- A text file parser
- A simple memory logging tool
- A basic shell utility
- A simple command-line text editor
- A small memory allocator

Focus on understanding how your program interacts with memory, files, and the operating system.

---

## 5. Study Algorithms & Data Structures

### What to do

Learn how to organize data and design efficient solutions by understanding common data structures, algorithms, and computational complexity.

Important data structures include:

- Arrays
- Linked lists
- Stacks
- Queues
- Hash tables
- Trees
- Graphs

Also study important algorithmic concepts such as:

- Searching
- Sorting
- Recursion
- Iteration
- Time complexity
- Space complexity

> Try implementing these data structures yourself in C rather than only using library implementations.

---

## 6. Pick a Specialized Field

### What to do

Once you have a solid foundation, choose a specific area of low-level programming to explore further. You can explore areas such as operating systems, graphics programming, embedded systems, compilers, FPGA programming, networking, parallel computing, or game engine development. Start building projects related to the area that interests you the most.

---

## 7. Learn Modern Low-Level Languages *(Optional)*

### What to do

After developing a strong understanding of C and low-level concepts, we recommend learning some additional **procedural languages** such as:

- **C++**: Adds powerful abstractions, object-oriented programming, generic programming, and modern language features while still providing low-level control.
- **Rust**: Provides strong memory safety guarantees without relying on a garbage collector, while still being designed for systems programming.
- **Zig**: Focuses on explicit control, simplicity, predictable behavior, and strong interoperability with C.
- **Odin**: A straightforward systems language focused on simplicity, performance, and practical low-level programming.

> You don't need to learn all of them. Pick one or two that interest you and explore them alongside your C knowledge. You can also **stick with C** if you want. C remains highly relevant to low-level programming and is still widely used for operating systems, embedded systems, firmware, compilers, libraries, and other low-level software. Learning another language is useful, but it is not required to become a strong low-level programmer.

If you want to explore something different, you can also try **non-procedural languages** such as **Ante, Carp, Futhark, Forth, or Uxn**.

> If you're wondering what **procedural** and **non-procedural** languages mean, procedural languages generally organize programs around explicit instructions and sequences of operations, while non-procedural approaches use different programming models, such as functional or stack-based programming.

---

# Prerequisites

## Circuits & Electronics

- **[MIT OpenCourseWare: Circuits & Electronics](https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/)**: A university-level introduction to circuits, electronics, and the fundamental concepts behind electrical and digital systems.
- **[Nand2Tetris](https://www.nand2tetris.org/)**: A famous course about building a general-purpose computer system and a modern software hierarchy from the ground up.

## Computer Fundamentals

- **[Exploring How Computers Work](https://www.youtube.com/watch?v=QZwneRb-zqA)**: A visual introduction to the major components and internal processes of a computer.
- **[Computer Systems: A Programmer's Perspective](https://www.amazon.com/dp/9332573905/)**: A great book covering how computers work and the fundamentals of computer architecture.
- **[The Hidden Language of Computer Hardware and Software](https://charlespetzold.com/code/)**: An introduction to how computers work, starting from simple communication systems and building toward modern computer architecture.

---

# Core Foundations

## C Programming

> Learn C as a systems programming language and develop a strong understanding of memory, pointers, data representation, and low-level software design.

- **[C Roadmap](https://github.com/Koubae/Programming-CookBook/blob/master/Programming%20Languages%2FC%2Froadmap.md)**: An ordered guide to become a C programmer/developer.
- **[C Programming Wiki](https://www.reddit.com/r/C_Programming/wiki/index/)**: Official C_Programming subreddit wiki that fill with useful resources.
- **[Beej's Guide to C Programming](https://beej.us/guide/bgc/)**: A practical guide to learning C and its standard library.
- **[The ANSI C Book](https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628)**: A classic book covering all about C programming.
- **[Dive into Systems](https://diveintosystems.org/book/)**: A gentle introduction about computer systems & C programming language.
- **[C FAQ](https://c-faq.com/)**: Answers to common C questions, including pointers, memory management, and language behavior.
- **[C Interfaces and Implementations](https://github.com/drh/cii)**: Learn how to design modular and reusable C libraries.

## Data Structures & Algorithms

> Data Structures and Algorithms are generally language agnostic, meaning the core concepts can be learned using any programming language. However, since this roadmap focuses on low-level programming, resources that teach DSA concepts using C may be more relevant and useful.

- **[MIT 6.006: Introduction to Algorithms](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/)**: University lectures covering algorithm design and efficiency.
- **[CS3 Data Structures & Algorithms](https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/index.html)**: A collection of data structures and algorithms material with exercises.
- **[Data Structures and Algorithms Tutorial](https://www.w3schools.com/dsa/index.php)**: A beginner-friendly introduction to organizing and processing data.
- **[Notes on Data Structures and Programming Techniques](https://cs.yale.edu/homes/aspnes/classes/223/notes.html)**: A comprehensive list of DSA stuffs that fill with exercises and notes. 
- **[Algorithms for Competitive Programming](https://cp-algorithms.com/)**: A useful site that provides descriptions of many algorithms and data structures.
- **[Algorithms Design in C](https://www.ime.usp.br/~pf/algorithms/)**: Site of a course on algorithms and data structures using the C programming language.
- **[C DSA interactive Suite](https://github.com/darshan2456/C_DSA_interactive_suite)**: Interactive terminal based application for learning DSA written in pure C.
- **[Algorithms (Sedgewick & Wayne)](https://algs4.cs.princeton.edu/home/)**: A detailed textbook and collection of resources covering algorithms and data structures.

---

# Other Low-Level Languages *(Optional)*

## Procedural Languages

### C++

> C++ extends low-level programming with powerful abstraction mechanisms while still providing significant control over performance and memory.

- **[How to Start C++ Development ?](https://github.com/W4RH4WK/cpp-init)**: A practical guide to setting up a C++ development environment.
- **[Learn C++](https://www.learncpp.com/)**: Comprehensive tutorials covering modern C++ from beginner to advanced topics.
- **[C++ By Example](https://cppbyexample.com/)**: Concise examples demonstrating C++ syntax and language features.
- **[C++ Reference](https://en.cppreference.com/w/)**: A comprehensive reference for C++ language features and the standard library.
- **[Modern C++ Features](https://github.com/AnthonyCalandra/modern-cpp-features)**: A summary of important features introduced in modern C++ standards.
- **[Cpp Quiz](https://cppquiz.org/)**: Quizzes focused on C++ language rules and behavior.
- **[Data-Oriented Design Resources](https://github.com/dbartolini/data-oriented-design)**: Resources about organizing data for performance and cache efficiency.
- **[Bit Twiddling Hacks](https://graphics.stanford.edu/~seander/bithacks.html)**: A collection of useful bitwise operations and low-level programming techniques.

### Rust

> Rust focuses on systems programming with strong compile-time guarantees for memory safety and concurrency.

- **[The Rust Programming Language](https://doc.rust-lang.org/book/)**: The official Rust book covering ownership, borrowing, memory safety, and concurrency.
- **[Rustlings](https://github.com/rust-lang/rustlings)**: Small hands-on exercises for practicing Rust.
- **[Rust by Example](https://doc.rust-lang.org/rust-by-example/)**: Runnable examples demonstrating Rust features.
- **[Too Many Linked Lists](https://rust-unofficial.github.io/too-many-lists/)**: Learn advanced memory concepts by implementing linked data structures.
- **[The Rustonomicon](https://doc.rust-lang.org/nomicon/)**: An advanced guide to unsafe Rust and low-level memory operations.
- **[Awesome Rust](https://github.com/rust-unofficial/awesome-rust)**: A curated collection of Rust libraries, tools, and resources.

### Zig

> Zig emphasizes explicit control, predictable behavior, and close interoperability with C while providing a modern approach to systems programming.

- **[Zig Learn](https://ziglearn.org/)**: A structured guide to learning Zig syntax and manual memory management.
- **[Zig Language Reference](https://ziglang.org/documentation/master/)**: Official documentation covering Zig's language features and tooling.
- **[Ziglings](https://codeberg.org/ziglings/exercises)**: Interactive exercises designed to teach Zig through broken code.
- **[Learning Zig](https://pedropark99.github.io/zig-book/)**: A guide to learning systems programming concepts with Zig.
- **[Awesome Zig](https://github.com/zigcc/awesome-zig)**: A curated collection of Zig libraries, tools, and projects.

### Odin

> Odin is a systems programming language focused on simplicity, explicitness, performance, and practical software development.

- **[Odin Overview](https://odin-lang.org/docs/overview/)**: An introduction to Odin's syntax, design philosophy, and memory management.
- **[Odin Demo Program](https://github.com/odin-lang/Odin/blob/master/examples/demo/demo.odin)**: A demonstration program covering many Odin language features.
- **[Understanding the Odin Programming Language](https://odinbook.com/)**: An introductory resource for learning Odin.
- **[Learn Odin in Y Minutes](https://learnxinyminutes.com/odin/)**: A concise overview of Odin syntax.
- **[Awesome Odin](https://github.com/jakubtomsu/awesome-odin)**: A collection of Odin libraries, tools, and community resources.

---

## Non-Procedural Languages

### Ante
> A functional systems language inspired by ML, with Rust-inspired memory management.

- **[Ante Lang](https://antelang.org/)**: Official ante Documentation.

### Carp
> A LISP designed for game development with Rust-inspired memory management and low-level control.
- **[Carp Lang](https://github.com/carp-lang/Carp)**: Official carp Documentation.

### Futhark
>  An ML-style functional language for high-performance parallel computing on GPUs, with CUDA, HIP, and OpenCL backends.
- **[Futhark Lang](https://futhark-lang.org/)**: Official futhark Documentation

### Forth
>  A stack-based language well suited for embedded programming and direct hardware control.
- **[Awesome Forth](https://github.com/lassik/awesome-forth)**: A full list of learning Forth from scratch.

### Uxn
> A small virtual machine and stack-based system for experimenting with low-level programming and hand-written assembly.
- **[Uxn Site](https://100r.co/site/uxn.html)**: A site dedicated to uxn related stuffs.

---

# Specialized Fields

## 1. Embedded Systems

> **Overview:** Embedded programming involves writing software for devices that perform specific tasks, often with limited memory, processing power, and energy. It commonly involves working closely with hardware interfaces, registers, interrupts, timers, and communication protocols.

- **[Awesome Embedded](https://github.com/nhivp/Awesome-Embedded)**: Resources for bare-metal programming, microcontrollers, and low-level firmware.
- **[Awesome Embedded Linux](https://github.com/fkromer/awesome-embedded-linux)**: Tools and guides for running Linux on embedded hardware.

### Addons

- **[Learn STM32 Microcontroller Programming](https://www.youtube.com/watch?v=vKyL43qXPpk)**: A comprehensive course covering STM32 microcontroller programming.

---

## 2. FPGA Programming

> **Overview:** FPGA development is different from traditional programming because you are describing hardware structures rather than simply writing instructions for a CPU. FPGAs can perform many operations in parallel and are commonly used in hardware prototyping, signal processing, networking, and high-performance systems.

- **[Awesome FPGA](https://github.com/Vitorian/awesome-fpga)**: A curated list of FPGA resources, tools, HDLs, and project tutorials.
- **[Awesome FPGA Programming](https://github.com/emanueledelsozzo/awesome-fpga-programming)**: Guides and learning materials for developing custom programmable logic.

---

## 3. Compilers & Interpreters

> **Overview:** Compiler and interpreter development explores how programming languages work internally. You may work with lexers, parsers, abstract syntax trees, type systems, optimizers, intermediate representations, and machine code generation.

- **[Awesome Compilers](https://github.com/aalhour/awesome-compilers)**: A collection of books, courses, frameworks, and projects for compiler and runtime development.

---

## 4. Operating Systems Development

> **Overview:** Operating systems development involves working directly with processor architecture and hardware. Important topics include memory management, process scheduling, interrupts, file systems, device drivers, synchronization, and kernel design.

- **[Awesome OS Dev](https://github.com/devse-org/awesome-osdev)**: Specifications, tutorials, and project resources for operating system development.

---

## 5. GPGPU & Parallel Computing

> **Overview:** GPGPU programming uses graphics processors for general-purpose computation. GPUs are designed to perform large numbers of similar operations in parallel, making them useful for scientific computing, simulations, numerical workloads, machine learning, and other compute-intensive applications.

- **[Awesome GPGPU](https://github.com/jslee02/awesome-gpgpu)**: Frameworks, technical guides, and libraries for GPU computing.
- **[Awesome GPU](https://github.com/Jokeren/Awesome-GPU)**: Resources covering GPU architecture and parallel computing.

---

## 6. Graphics Programming

> **Overview:** Graphics programming combines programming, mathematics, and GPU hardware. You work with rendering pipelines, transformations, lighting, textures, shaders, and graphics APIs such as Vulkan, OpenGL, and DirectX.

- **[Awesome Graphics Programming](https://gist.github.com/notnotrobby/ceef71527b4f15869133ba7b397912e9)**: Curated resources covering graphics mathematics, rendering, and engine development.

---

## 7. Game Engine Development

> **Overview:** Game engine development combines multiple low-level disciplines. A game engine may include rendering, physics, audio, input handling, memory management, resource loading, scripting, and other systems required to create and run games.

- **[Awesome Game Engine Dev](https://github.com/stevinz/awesome-game-engine-dev)**: Books, tutorials, libraries, and resources for building game engines.
- **[Awesome Game Engines](https://github.com/ChessMax/awesome-game-engines)**: A collection of open-source game engines and reference implementations.

---

## 8. Network Systems Programming

> **Overview:** Network systems programming focuses on how computers exchange data. It involves sockets, transport protocols, asynchronous programming, concurrency, packet handling, and performance optimization for applications such as servers, distributed systems, and multiplayer games.

- **[Awesome Networking](https://github.com/facyber/awesome-networking)**: Books, courses, protocols, and tutorials for learning computer networking.
- **[Awesome Computer Networking](https://github.com/nyquist/awesome-networking)**: Resources for understanding and working with computer networks.
- **[Awesome Network Programmability](https://github.com/cisco-ie/awesome-network-programmability)**: Libraries and guides for network automation and programmable networking.
- **[Awesome Game Networking](https://github.com/rumaniel/Awesome-Game-Networking)**: Resources for building multiplayer and real-time networked applications.

---

## 9. Cybersecurity

> **Overview:** Cybersecurity focuses on understanding how computer systems, networks, applications, and data can be protected from attacks and unauthorized access. It involves operating system security, networking, cryptography, vulnerability analysis, secure programming, reverse engineering, digital forensics, and penetration testing.

- **[Awesome Infosec](https://github.com/onlurking/awesome-infosec)**: A curated list of awesome infosec courses and training resources.
- **[Awesome List](https://github.com/0xor0ne/awesome-list)**: Collection of awesome blog posts, write-ups, and papers focusing on cybersecurity.

---

# Recommended Creators

A collection of creators who cover topics related to low-level programming.

> Learn from these creators by watching their videos and following along with their projects. Pay attention to how they approach and solve problems, check out their GitHub repositories and source code, and study how they write and structure their code. Treat these great creators as mentors and learn from their experience.

- **[Tsoding](https://www.youtube.com/@Tsoding)**
- **[ThePrimeTimeagen](https://www.youtube.com/@ThePrimeTimeagen)**
- **[CakeZ](https://www.youtube.com/@Cakez77)**
- **[Artful Bytes](https://www.youtube.com/@artfulbytes)**
- **[hoff._world](https://www.youtube.com/@hoff._world)**
- **[tokyospliff](https://youtube.com/@tokyospliff)**
- **[Sebastian Lague](https://youtube.com/@sebastianlague)**
- **[javidx9](https://youtube.com/@javidx9)**
- **[3Blue1Brown](https://youtube.com/@3blue1brown)**
- **[Code Guild](https://youtube.com/@code-guild)**
- **[TechExplained](https://www.youtube.com/@TechsExplained)**
- **[Low Level Game Dev](https://www.youtube.com/@lowlevelgamedev9330)**
- **[Core Dumped](https://youtube.com/@coredumpped)**
- **[Dave's Garage](https://www.youtube.com/@DavesGarage)**

---

# Web Interface
![Status](https://badgen.net/badge/Status/Broken/red?icon=github)

Browse the entire collection through an interactive, Wikipedia-inspired web interface designed to make discovering and filtering resources easier.

**[Awesome Low Level](https://0xtamil.github.io/awesome-low-level/)**

### Features

- **Search & Filter**: Search resources and filter them by language, topic, or format.
- **Roadmap**: Follow a structured learning path for low-level programming.
- **Bookmarks**: Save useful resources locally for quick access.
- **Dark/Light Mode**: Switch between appearance modes with a Wikipedia Vector 2022-inspired design.
- **Mobile Responsive**: Use the resource collection comfortably on desktop and mobile devices.

---

# Discord

> Join our Discord server if you need help, want to learn low-level programming, or would like to contribute to the wiki.

<a href="https://discord.gg/YZRknMKn2K">
  <img width="400" alt="banner" src="https://github.com/user-attachments/assets/59f2514d-f239-40bf-b620-bc24039dce45" />
</a>

---

# License

> This project is released under the **CC0 1.0 Universal** license, placing the content in the public domain where legally possible.

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

