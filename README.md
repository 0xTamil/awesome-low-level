## Awesome Low Level

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
  - [Using AI Tools](#using-ai-tools)
- [What is Low-Level Programming](#what-is-low-level-programming-)
- [Low-Level Programming vs System Programming](#low-level-programming-vs-system-programming)
- [Why Learning C is Important](#why-learning-c-is-important-)
- [C vs C++ in Low-Level Programming](#c-vs-c-in-low-level-programming)
- [Let's Gooo](#lets-gooo-)
- [Roadmap](#roadmap)
  - [1. Basic Electronics](#1-basic-electronics)
  - [2. Computer Fundamentals](#2-computer-fundamentals)
  - [3. C Programming](#3-c-programming)
  - [4. Practice Data Structures & Algorithms](#4-practice-data-structures--Algorithms)
  - [5. Build Small Projects](#5-build-small-projects)
  - [6. Learn Modern Low-Level Languages (Optional)](#6-learn-modern-low-level-languages-optional)
  - [7. Pick a Specialized Field](#7-pick-a-specialized-field)
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
- [Discord](#discord)
- [License](#license)

---

## Why We Made This ?

We created this megathread to help complete beginners take their first steps into low-level programming. Getting started can feel overwhelming when you have no idea what to learn, where to begin, or which topics actually matter. That's why we put together a clear learning path that helps you understand the fundamentals in a structured and beginner-friendly way.

We've spent a lot of time reviewing and selecting the resources included here to make sure they're genuinely useful and worth your time. This guide was created by people who are passionate about low-level programming and want to make learning it easier for others. Whether you're completely new or just looking for better direction, we hope this megathread helps you build a strong foundation and gives you a clear idea of what to learn next.

---

## How to Refer ?

This megathread isn't meant to be a perfect or complete guide. There are likely some topics and resources we've missed, and that's completely okay. In several sections, you'll find multiple resources and even links to other megathreads that go into much more detail on specific topics.

Don't feel pressured to read or complete everything. Everyone learns differently, so it's perfectly fine to choose one or two resources that match your learning style and stick with those.

So, where should you start ?

### If You're an Absolute Beginner

#### But, You Already Have Some Programming Experience

Maybe you're studying Computer Science, IT, EEE, or another technical field. Or perhaps you've learned programming on your own before. If that's the case, you don't need to start from scratch and relearn basic programming concepts.

However, low-level programming is a little different. Even if you can write code, you might not yet understand what happens underneath the surface or how a computer actually works at a lower level.
It's also important to remember that knowing programming fundamentals isn't the same as knowing C. 

You may already be comfortable with concepts like variables, loops, functions, conditional statements, and basic data structures from another language, but there are still many C concepts that are essential for low-level programming.

For example, if you're already familiar with programming basics, the following code should look fairly straightforward to you

```c
int age = 20;

if (age >= 18) {
    printf("Adult\n");
}

for (int i = 0; i < 5; i++) {
    printf("%d\n", i);
}
```

However, the C concepts that matter in low-level programming go beyond the usual programming fundamentals. You'll also need to learn topics such as pointers, memory addresses, and manual memory management, which are essential for understanding how software interacts with hardware:

```c
int *ages = malloc(5 * sizeof(int));

for (int i = 0; i < 5; i++) {
    ages[i] = 18 + i;
}

for (int i = 0; i < 5; i++) {
    if (ages[i] >= 18) {
        printf("Adult\n");
    }
}

free(ages);
```

> **How the code works:** `malloc()` allocates memory for 5 `int` values, `ages` stores the address of that memory, the first `for` loop fills the allocated memory, and the second `for` loop reads the values and checks the condition. Finally, `free(ages)` releases the allocated memory.

The good news is that you don't need to relearn everything from scratch. If you already understand the basics of programming, spend your time on the C concepts and computer fundamentals you haven't explored yet. Then simply follow the roadmap and continue building your understanding one step at a time.

#### But, You're Really New to Programming

If you're coming from a non-CS background and want to learn programming before diving into low-level programming, don't stress about knowing everything in advance. Nobody starts out understanding all of this. Focus on learning the basics first, build a solid foundation, and then gradually work your way toward lower-level concepts as you become more comfortable.

You also don't need to go through every resource listed below. Pick what works best for you and learn at your own pace. That said, we generally recommend following them in roughly this order:


1. **[r/learnprogramming wiki](https://www.reddit.com/r/learnprogramming/wiki/faq/#wiki_getting_started)**: If you've never programmed before, this is a great place to start. It provides a beginner-friendly introduction and helps answer common questions about getting into programming.

2. **[CS50: Introduction to Computer Science](https://pll.harvard.edu/course/cs50-introduction-computer-science)**: Once you're comfortable with the basics, CS50 is an excellent next step. It helps build a stronger understanding of both programming and computer science, covering topics such as C, algorithms, data structures and memory.

3. **[Open Source Society University (OSSU)](https://github.com/ossu/computer-science)**: After CS50, you can explore additional computer science topics based on your interests and goals. If you're looking for a more complete and structured self-learning path, OSSU is one of the best options available. It offers a full computer science curriculum covering programming, mathematics, computer systems, theory, and many other important subjects.

The resources above are enough to get you started, but they're not the only options. Below, you'll find several other resources that are also worth checking out depending on what you'd like to learn.

   - **[Beej's Guide to Learning Computer Science](https://beej.us/guide/bglcs/)**: A practical guide to fundamental computer science concepts.
   - **[CSdiy](https://csdiy.wiki/en/)**: A self-learning guide to computer science.
   - **[Teach Yourself CS](https://teachyourselfcs.com/)**: A structured guide for learning computer science independently.
   - **[Awesome CS](https://github.com/prakhar1989/awesome-courses)**: A collection of free computer science courses and resources.

From there, follow the roadmap and build your understanding step by step.

### If You Have Some Low-Level Experience

If you've worked with low-level concepts before, feel free to skip the beginner sections and focus on the areas you're less familiar with. There's no need to follow the roadmap from the very beginning. Instead, use the table of contents to jump directly to the topics you want to learn and fill in any gaps in your knowledge.

### If You Have High-Level Programming Experience

If you already have experience with languages like Python, Java, or C#, you probably have a solid understanding of programming fundamentals. That gives you a good head start. However, low-level programming comes with a different way of thinking, so it's important not to approach everything exactly the same way.

When learning low-level programming, try not to rely too heavily on an object-oriented mindset. Instead, focus on understanding how data is stored, how memory is managed, how control flow works, and how programs interact with the underlying hardware. Depending on what you're learning, you'll encounter programming styles that are more procedural, function-oriented, or data-oriented than what you're used to in many high-level languages.
 
For example, the same task can be approached using OOP in Java and a more procedural style in C.

**Java:**
```java
class Player {
    int health;

    void takeDamage(int damage) {
        health -= damage;
    }
}

Player player = new Player();
player.health = 100;

player.takeDamage(20);
```

**C:**
```c
struct Player {
    int health;
};

void take_damage(struct Player *player, int damage) {
    player->health -= damage;
}

int main(void) {
    struct Player player = {100};
    take_damage(&player, 20);
    printf("%d\n", player.health);

    return 0;
}
```

> **Why is C written this way ?** C doesn't have classes or methods like Java. Instead, C provides `struct` for grouping data and regular functions for defining behavior. This means the data and functions are separate, and you explicitly pass the data to the function when you want it to operate on that data.

This C style of programming gives you greater control over how data is stored, accessed, and modified. Instead of relying on layers of abstraction, you can clearly see what data is being passed around, where it lives in memory, and how different parts of the program interact with it.

> This doesn't mean OOP is bad or something you should avoid. In fact, it's heavily used in C++, especially in areas like game development, graphics programming, simulations, and large-scale software projects. The key point is not to treat OOP as the default solution to every problem.

Once you become comfortable with concepts like memory, data representation, and program flow, you can explore other programming paradigms and learn where each one makes sense.

From there, simply continue following the roadmap and gradually build up your low-level programming knowledge one step at a time.

## How to Learn ?
 
Learning low-level programming isn't always easy. There will be times when you're stuck on a bug for hours, confused by a concept, feeling burned out, or even questioning why you started in the first place. That's completely normal. Every programmer goes through it. In fact, learning how to work through difficult problems is a big part of becoming a better programmer.

If you'd like a broader perspective on what learning programming actually looks like, we highly recommend the following article:
 
- [Teach Yourself Programming in Ten Years](https://www.norvig.com/21-days.html): A classic article that sets realistic expectations about learning programming and explains why becoming proficient takes time, patience, and consistent practice.

### Project-Based Learning
 
One of the most common problems beginners face is understanding a tutorial but having no idea how to build something on their own afterward. If that sounds familiar, try taking a project-based approach to learning.

Pick a topic, learn the fundamentals from one of the resources in this guide, and then build something with it. Applying what you've learned is where most of the real learning happens.

> For example, if you've just learned about linked lists, try implementing one yourself in C. If you're studying memory allocation, experiment with how memory works or try creating a simple memory allocator of your own.
 
Whenever possible, attempt to solve problems yourself before searching for a tutorial that walks you through the exact solution. Use documentation when you need help with syntax or technical details, but try to think through the problem first. Once you've built something on your own, compare your solution with other implementations and see what you can learn from them.
 
> Be careful not to fall into tutorial hell. It's easy to spend hours watching videos, reading articles, and saving resources without ever writing code. Tutorials can teach you concepts, but they can't replace hands-on practice. Focus on learning the fundamentals, building small projects, and writing your own code. It's perfectly fine if your first solutions aren't great. What's important is starting, making mistakes, and gradually improving over time.
 
### Using AI Tools
 
AI can be a great learning aid, but it's best used as a tool, not a shortcut. When you run into a problem, try spending some time working through it on your own before turning to AI. Struggling with a problem might feel frustrating, but that's often where the most valuable learning happens.

AI is most helpful when you use it to explain concepts, help you understand error messages, point out mistakes in your reasoning, or guide you toward possible solutions. Try to avoid immediately asking it to write the entire program or solve the problem from start to finish.
 
> Use AI to support your learning, not to replace the thinking and problem-solving that help you grow as a programmer.

You can also challenge yourself to spend a week learning without AI. Instead, rely on documentation, books, search engines, debugging tools, and your own problem-solving skills. It may feel slower and more difficult at first, but you'll likely develop a deeper understanding of the material and become more confident tackling problems on your own.

> The goal isn't to avoid AI forever. It's to make sure you're building the skills to solve problems independently, so that when you do use AI, it becomes a helpful assistant rather than something you depend on for every step.

---

## What is Low-Level Programming ?

<p align="center">
  <img width="4139" alt="Untitled-2026-08-25-2028" src="https://github.com/user-attachments/assets/8c9d045b-edb1-46d5-91dd-558e0dd53737" />
</p>

The diagram illustrates the different layers that sit between the programmer and the computer's hardware. At the very bottom is the hardware itself, the physical components that actually execute instructions and perform computations. Above that are machine code, assembly, and programming languages. As you move up the stack, more of the hardware's complexity is hidden behind layers of abstraction, making programming easier but giving you less direct control over what's happening underneath.
 
Low-level programming is about working closer to the machine and understanding what's happening across these layers. Instead of relying heavily on abstractions, you interact more directly with things like memory, the CPU, and other hardware resources.

That's why low-level programming is often described as being "close to the hardware." Languages such as Assembly and C are classic examples of low-level programming languages. Modern languages like C++, Rust, Zig, and Odin are also widely used for low-level and systems programming, while offering different trade-offs between control, safety, and abstraction.
 
> Low-level programming is commonly used in areas where performance, efficiency, and hardware control matter most. This includes operating systems, embedded systems, firmware, device drivers, compilers, game engines, graphics programming, networking, and other performance-critical software. In these domains, programmers often need precise control over memory usage, hardware interaction, and system behavior.

---

## Low-Level Programming vs System Programming

A common misconception is that low-level programming and systems programming are the same thing. While they're closely related and often overlap, they describe two different ideas.

Low-level programming is about how closely your code interacts with the hardware. It focuses on concepts like memory, CPU instructions, pointers, registers, and data representation. In other words, it's concerned with understanding and controlling what happens underneath the abstractions provided by higher-level languages.
 
Systems programming, on the other hand, is defined more by the type of software being built. It involves creating software that supports, manages, or provides services for other software. Examples include operating systems, compilers, databases, device drivers, runtimes, networking software, and servers.
 
Because many system-level applications need direct access to hardware and efficient resource management, the two areas frequently overlap. For example, writing an operating system kernel in C is both systems programming and low-level programming. However, not all systems programming is necessarily low-level. Modern languages can be used to build system software while providing more abstraction, safety, or convenience.

> A simple way to think about it is this: low-level programming describes how close your code is to the hardware, while systems programming describes the kind of software you're building.

- **[What is Systems Programming, Really ?](https://willcrichton.net/notes/systems-programming/):** A beginner-friendly article that explores what systems programming actually means and how it differs from low-level programming.

---

## Why Learning C is Important ?
 
If you're interested in low-level programming, C is one of the best places to start. Despite being over 50 years old, it remains one of the most important and widely used programming languages in the world. Many of the ideas, tools, and technologies that modern programmers use today have their roots in C.

Some of the reasons C is still so important include:
 
- C runs almost everywhere. From tiny microcontrollers and embedded devices to desktop applications, servers, and operating systems, C can be found on nearly every type of computing platform.
- C is efficient and lightweight. It allows programmers to write software that uses very little memory and processing power, making it ideal for performance-critical and resource-constrained systems.
- C is flexible. Unlike many modern languages, C doesn't force you into a specific programming style or paradigm. It gives you the freedom to structure programs in whatever way makes the most sense for the problem you're solving.
- C imposes very few restrictions on programming style. Unlike many higher-level languages, it does not strongly enforce a particular programming paradigm or ideology. As a result, there are very few kinds of programs that cannot be written in C.
- A huge amount of software is built on C. Many programming languages, operating systems, databases, compilers, and developer tools are written in C or heavily influenced by it. Languages such as Python, Ruby, PHP, and Perl rely on runtimes and implementations that are largely written in C or C++.
 
One of the biggest strengths of C is that it teaches you to be careful.
The language gives you a lot of power and freedom, but with that freedom comes responsibility. Small mistakes can lead to serious problems if you're not paying attention.
For example, you may encounter issues such as:

- Invalid memory access
- Buffer overflows
- Memory leaks
- Undefined behavior 
- Pointer related bugs

Learning to avoid these problems forces you to think more carefully about how memory, data, and system resources are being used.
 
> In many ways, C is an excellent teacher. It doesn't hide as much from you as higher-level languages do, and mistakes often have visible consequences. While this can be frustrating at times, it also helps you develop stronger debugging skills and better programming habits.

Another reason C remains valuable is its influence on the programming world. Many modern languages have borrowed ideas, syntax, and design choices directly from C
 
> By learning C, you'll gain a better understanding of why many modern language features exist in the first place. It also helps you see what's happening behind the scenes, something that's often hidden when working with higher-level languages like Python, JavaScript, or Java.

So, that's why learning C provides a strong foundation.
 
---
 
## C vs C++ in Low-Level Programming
 
There is a common confusion among beginners about which language is better for low-level programming: C or C++. You will often hear the advice "learn C before C++." There is a reason behind it, but that doesn't mean C++ is a bad choice.
 
C is often recommended because it does a better job of making you confront what is happening underneath your program. For example, C gives you much less abstraction around things like strings and memory. You have to understand how they work instead of simply relying on a convenient abstraction.
 
C++ can hide more of those details. Its classes and other features can make programming easier and allow you to write much larger and more complex software, but that also means it can be easier to use something without understanding what is happening underneath.
 
Another thing to understand is that C++ does not automatically make your programs "less low-level." You can write C-like code in C++ if that is what the project needs. The language gives you the choice between staying close to the fundamentals and using higher-level abstractions.
 
> Both languages are capable of building serious software. You can use either one for low-level systems.
 
So, should you always learn C before C++?
 
Not necessarily.
 
If you prefer C++, you can start with C++ first. You don't have to learn C separately before starting. Just make sure you understand the C fundamentals that C++ is built around as you progress. Likewise, starting with C and moving to C++ later is completely fine.
 
> The advice to "learn C before C++" is mainly about making the fundamentals easier to understand, not because C++ is incapable of low-level programming. C is a great starting point for understanding the fundamentals, but C++ is still a perfectly valid choice.
 
---
 
## Let's Gooo !
 
Now that we have a basic understanding of what low-level programming is, let's start learning it from the ground up. The goal is not to immediately jump into assembly or write an operating system. Instead, we will gradually build an understanding of how computers work, starting from the fundamentals and moving toward programming closer to the hardware.
 
You may also notice that this collection does not rely heavily on commonly used websites such as W3Schools, LeetCode, or general-purpose YouTube channels. That does not mean those resources are bad. If they are included, there is a reason for it. The goal here is to encourage you to become comfortable with official documentation, books, technical references, courses, source code, and other high-quality learning materials.
 
> Learning how to find and understand information is part of becoming a good programmer. Don't depend on tutorials for everything. Learn to read documentation, search for answers, experiment, and understand things for yourself.
 
---
 
# Roadmap
 
<p align="center">
  <img width="300" alt="Roadmap" src="https://github.com/user-attachments/assets/e390e835-4b3a-4410-8399-46203d300b8e" />
</p>

## 1. Basic Electronics
 
You don't need to study electronics in depth before learning C. A basic understanding of electronics is enough to understand how computers work at the hardware level.
 
## 2. Computer Fundamentals
 
After that, build a strong foundation in computer fundamentals. Learn how computers represent and process information, how the CPU executes instructions, how memory works, and how hardware and software interact. Topics such as binary, CPU architecture, memory, storage, registers, caches, and instruction execution become increasingly important as you move toward lower-level programming.
 
## 3. C Programming
 
Once you have a foundation in computer fundamentals, start learning C. Don't focus only on syntax. Pay particular attention to pointers, arrays, structs, memory allocation, stack and heap memory, data representation, bitwise operations, and how programs use memory. The goal is to understand not only what your code does, but also what happens in memory when your code runs.
 
> You don't need to master every part of C before moving forward. Build a solid understanding of the language, especially the parts that help you reason about memory and how programs interact with the machine.
 
## 4. Practice Data Structures & Algorithms
 
After becoming comfortable with C, start practicing data structures and algorithms (DSA). Learn how data can be organized, stored, accessed, and processed efficiently. Focus on structures such as arrays, linked lists, stacks, queues, hash tables, trees, heaps, and graphs, along with algorithms for searching, sorting, traversal, recursion, and problem solving.
 
> Don't treat DSA as something completely separate from C. Implement the structures and algorithms yourself rather than simply relying on libraries. This will strengthen your understanding of both C and problem solving.
 
## 5. Build Small Projects
 
Once you have a solid understanding of C and have practiced data structures and algorithms, start building small projects. This is where you begin applying what you've learned instead of only studying concepts.
 
Build things yourself, experiment with different approaches, debug your own mistakes, and gradually work on projects that require you to think about memory, data, program structure, and system behavior.
 
> Don't worry about making large or impressive projects. Small programs are enough if they force you to understand what you're doing. The goal is to turn your knowledge of C, computer fundamentals, and DSA into practical programming experience.
 
## 6. Learn Modern Low-Level Languages (Optional)
 
After gaining practical experience through projects, you can optionally explore additional procedural low-level languages such as C++, Rust, Zig, or Odin.
 
> You don't need to learn all of them. Pick one or two that interest you and explore them alongside your C knowledge. You can also stick with C if you want. C remains highly relevant to low-level programming and is still widely used for operating systems, embedded systems, firmware, compilers, libraries, and other low-level software. Learning another language is useful, but it is not required to become a strong low-level programmer.
 
You can also explore non-procedural or alternative programming languages such as Ante, Carp, Futhark, Forth, or Uxn if you want to experiment with different programming models.
 
> If you're not sure what procedural and non-procedural languages mean, procedural languages generally organize programs around explicit instructions and sequences of operations, while non-procedural approaches use different programming models, such as functional or stack-based programming.
 
## 7. Pick a Specialized Field
 
Once you have built a strong foundation in computer fundamentals, C, data structures and algorithms, and practical programming experience, you can choose a specialized field to focus on.
 
> The different specialized fields are covered in the Specialized Field section. You don't need to choose a specialization immediately. First build a strong foundation, gain practical experience, and then explore the areas that interest you most.
 
This keeps the main roadmap clean and makes it clear that the actual specialization paths are explained later.

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

<img width="150" alt="c_512x512" src="https://github.com/user-attachments/assets/4b52552b-d591-4bf8-9d59-64f2e86d61cc" />

- **[The ANSI C Book](https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628)**: A classic book covering all about C programming.
- **[Beej's Guide to C Programming](https://beej.us/guide/bgc/)**: A practical guide to learning C and its standard library.
- **[C FAQ](https://c-faq.com/)**: Answers to common C questions, including pointers, memory management, and language behavior.
- **[Dive into Systems](https://diveintosystems.org/book/)**: A gentle introduction about computer systems & C programming language.
- **[C Interfaces and Implementations](https://github.com/drh/cii)**: Learn how to design modular and reusable C libraries.

## Data Structures & Algorithms

Data Structures and Algorithms (DSA) are generally language agnostic, meaning the core concepts can be learned using any programming language. However, since this roadmap focuses on low-level programming, resources that teach DSA using C may be more relevant and useful.

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

<img width="150" alt="cpp_logo" src="https://github.com/user-attachments/assets/3ed8fce0-cc22-48ae-bde1-3d136f6f4ad1" />

C++ extends low-level programming with powerful abstraction mechanisms while still giving you significant control over memory, performance, and hardware-level details.
 
> C++ is a continuously evolving language. Many older books, tutorials, and resources teach outdated versions of C++ or practices that are no longer recommended. When learning C++, we recommend focusing on resources that teach modern C++ standards such as C++17, C++20, and C++23.
 
We recommend starting with LearnCpp. It’s free, comprehensive, regularly updated, and covers modern C++ from beginner to advanced topics.

- **[LearnCpp](https://www.learncpp.com/)**: Comprehensive tutorials covering modern C++ from beginner to advanced topics.

From there, you can supplement your learning with a book depending on your background.

If you're completely new to programming or new to C++, use:

- **[Programming: Principles and Practice Using C++](https://www.amazon.com/dp/0138308683)**: The 3rd edition covers C++20 and C++23. A good choice for beginners who are new to both programming and C++.

If you already have some C++ programming experience, use:

- **[A Tour of C++](https://www.amazon.com/dp/013681648)**: The 3rd edition provides a concise introduction to modern C++ and covers C++20. The 2nd edition covers C++17.

Once you're comfortable with the language, use cppreference as your primary documentation and reference:

- **[cppreference](https://en.cppreference.com/)**: A comprehensive reference for the C++ language and standard library. It's best used for looking up specific language features, library functions, and technical details rather than as a primary learning resource.

That's pretty much all you need to get started with C++. You don't need to go through dozens of different resources. Use cppreference whenever you need to look something up. As you become more comfortable with C++, you can also explore other approaches to structuring performance-oriented software:

- **[Data-Oriented Design Resources](https://github.com/dbartolini/data-oriented-design)**: A collection of resources for learning about data-oriented design and performance.

### Rust

<img width="150" alt="rust-logo-512x512" src="https://github.com/user-attachments/assets/86e703e4-ff32-44c2-9e65-4dc8af1093c7" />

Rust focuses on systems programming with strong compile-time guarantees for memory safety and concurrency.

- **[The Rust Programming Language](https://doc.rust-lang.org/book/)**: The official Rust book covering ownership, borrowing, memory safety, and concurrency.
- **[Rustlings](https://github.com/rust-lang/rustlings)**: Small hands-on exercises for practicing Rust.
- **[Rust by Example](https://doc.rust-lang.org/rust-by-example/)**: Runnable examples demonstrating Rust features.
- **[Too Many Linked Lists](https://rust-unofficial.github.io/too-many-lists/)**: Learn advanced memory concepts by implementing linked data structures.
- **[The Rustonomicon](https://doc.rust-lang.org/nomicon/)**: An advanced guide to unsafe Rust and low-level memory operations.
- **[Awesome Rust](https://github.com/rust-unofficial/awesome-rust)**: A curated collection of Rust libraries, tools, and resources.

### Zig

<img width="150" alt="zig-programming-language-icon" src="https://github.com/user-attachments/assets/fa4257a9-5645-48a2-ae13-6657c2710d0a" />

Zig emphasizes explicit control, predictable behavior, and close interoperability with C while providing a modern approach to systems programming.

- **[Zig Learn](https://ziglearn.org/)**: A structured guide to learning Zig syntax and manual memory management.
- **[Zig Language Reference](https://ziglang.org/documentation/master/)**: Official documentation covering Zig's language features and tooling.
- **[Ziglings](https://codeberg.org/ziglings/exercises)**: Interactive exercises designed to teach Zig through broken code.
- **[Learning Zig](https://pedropark99.github.io/zig-book/)**: A guide to learning systems programming concepts with Zig.
- **[Awesome Zig](https://github.com/zigcc/awesome-zig)**: A curated collection of Zig libraries, tools, and projects.

### Odin

<img width="150" alt="odin" src="https://github.com/user-attachments/assets/0d3d6347-2da6-4545-9a8c-391259d70d93" />

Odin is a systems programming language focused on simplicity, explicitness, performance, and practical software development.

- **[Odin Overview](https://odin-lang.org/docs/overview/)**: An introduction to Odin's syntax, design philosophy, and memory management.
- **[Odin Demo Program](https://github.com/odin-lang/Odin/blob/master/examples/demo/demo.odin)**: A demonstration program covering many Odin language features.
- **[Understanding the Odin Programming Language](https://odinbook.com/)**: An introductory resource for learning Odin.
- **[Learn Odin in Y Minutes](https://learnxinyminutes.com/odin/)**: A concise overview of Odin syntax.
- **[Awesome Odin](https://github.com/jakubtomsu/awesome-odin)**: A collection of Odin libraries, tools, and community resources.

---

## Non-Procedural Languages

### Ante
A functional systems language inspired by ML, with Rust-inspired memory management.

- **[Ante Lang](https://antelang.org/)**: Official ante Documentation.

### Carp
A LISP designed for game development with Rust-inspired memory management and low-level control.
- **[Carp Lang](https://github.com/carp-lang/Carp)**: Official carp Documentation.

### Futhark
An ML-style functional language for high-performance parallel computing on GPUs, with CUDA, HIP, and OpenCL backends.
- **[Futhark Lang](https://futhark-lang.org/)**: Official futhark Documentation

### Forth
A stack-based language well suited for embedded programming and direct hardware control.
- **[Awesome Forth](https://github.com/lassik/awesome-forth)**: A full list of learning Forth from scratch.

### Uxn
A small virtual machine and stack-based system for experimenting with low-level programming and hand-written assembly.
- **[Uxn Site](https://100r.co/site/uxn.html)**: A site dedicated to uxn related stuffs.

---

# Specialized Fields

<p align="center">
 <img width="3810" alt="Stack" src="https://github.com/user-attachments/assets/cceac376-ee29-4695-b2ad-9fdba303d9ce" />
</p>


Use the diagram above as a guide when deciding which specialization to explore. You can approach it based on the language you enjoy, the domain you're interested in, or how closely you want to work with hardware:
 
- Language-Driven Path: If you enjoy working with a particular language, consider the fields where that language is commonly used or considered a strong choice. Languages highlighted as Gold Standard in the diagram can be especially relevant for those domains. For example, if you enjoy C++, you may want to explore areas such as Game Engine Development, Graphics Programming, and GPGPU & Parallel Computing.

- Hardware-Driven Path: If you want to work closer to physical hardware, pay attention to the Electronics requirement badges on the right side of the diagram, ranging from Low to High. Fields closer to the hardware, such as FPGA Programming and Embedded Systems, generally require a stronger understanding of electronics and digital hardware.

- Interest-Driven Learning: You don't need to decide on a specialization immediately, nor do you need to master every foundational topic first. Pick a field that interests you, start building projects, and learn the missing concepts as you encounter them. Your learning path can change as you discover what you enjoy.
The sections below provide an overview of each specialization, starting with areas that are closest to the hardware and gradually moving toward higher levels of abstraction.


## 1. Embedded Systems

Overview: Embedded programming involves writing software for devices that perform specific tasks, often with limited memory, processing power, and energy. It commonly involves working closely with hardware interfaces, registers, interrupts, timers, and communication protocols.

- **[Awesome Embedded](https://github.com/nhivp/Awesome-Embedded)**: Resources for bare-metal programming, microcontrollers, and low-level firmware.
- **[Awesome Embedded Linux](https://github.com/fkromer/awesome-embedded-linux)**: Tools and guides for running Linux on embedded hardware.

### Addons

- **[Learn STM32 Microcontroller Programming](https://www.youtube.com/watch?v=vKyL43qXPpk)**: A comprehensive course covering STM32 microcontroller programming.

---

## 2. FPGA Programming

Overview: FPGA development is different from traditional programming because you are describing hardware structures rather than simply writing instructions for a CPU. FPGAs can perform many operations in parallel and are commonly used in hardware prototyping, signal processing, networking, and high-performance systems.

- **[Awesome FPGA](https://github.com/Vitorian/awesome-fpga)**: A curated list of FPGA resources, tools, HDLs, and project tutorials.
- **[Awesome FPGA Programming](https://github.com/emanueledelsozzo/awesome-fpga-programming)**: Guides and learning materials for developing custom programmable logic.

---

## 3. Compilers & Interpreters

Overview: Compiler and interpreter development explores how programming languages work internally. You may work with lexers, parsers, abstract syntax trees, type systems, optimizers, intermediate representations, and machine code generation.

- **[Awesome Compilers](https://github.com/aalhour/awesome-compilers)**: A collection of books, courses, frameworks, and projects for compiler and runtime development.

---

## 4. Operating Systems Development

Overview: Operating systems development involves working directly with processor architecture and hardware. Important topics include memory management, process scheduling, interrupts, file systems, device drivers, synchronization, and kernel design.

- **[Awesome OS Dev](https://github.com/devse-org/awesome-osdev)**: Specifications, tutorials, and project resources for operating system development.

---

## 5. GPGPU & Parallel Computing

Overview: GPGPU programming uses graphics processors (GPUs) for general-purpose computation. GPUs are designed to perform large numbers of similar operations in parallel, making them useful for scientific computing, simulations, numerical workloads, machine learning, and other compute-intensive applications.

- **[Awesome GPGPU](https://github.com/jslee02/awesome-gpgpu)**: Frameworks, technical guides, and libraries for GPU computing.
- **[Awesome GPU](https://github.com/Jokeren/Awesome-GPU)**: Resources covering GPU architecture and parallel computing.

---

## 6. Graphics Programming

Overview: Graphics programming combines programming, mathematics, and GPU hardware. You work with rendering pipelines, transformations, lighting, textures, shaders, and graphics APIs such as Vulkan, OpenGL, and DirectX.

- **[Awesome Graphics Programming](https://gist.github.com/notnotrobby/ceef71527b4f15869133ba7b397912e9)**: Curated resources covering graphics mathematics, rendering, and engine development.

---

## 7. Game Engine Development

Overview: Game engine development combines multiple low-level disciplines. A game engine may include rendering, physics, audio, input handling, memory management, resource loading, scripting, and other systems required to create and run games.

- **[Awesome Game Engine Dev](https://github.com/stevinz/awesome-game-engine-dev)**: Books, tutorials, libraries, and resources for building game engines.
- **[Awesome Game Engines](https://github.com/ChessMax/awesome-game-engines)**: A collection of open-source game engines and reference implementations.

---

## 8. Network Systems Programming

Overview: Network systems programming focuses on how computers exchange data. It involves sockets, transport protocols, asynchronous programming, concurrency, packet handling, and performance optimization for applications such as servers, distributed systems, and multiplayer games.

- **[Awesome Networking](https://github.com/facyber/awesome-networking)**: Books, courses, protocols, and tutorials for learning computer networking.
- **[Awesome Computer Networking](https://github.com/nyquist/awesome-networking)**: Resources for understanding and working with computer networks.
- **[Awesome Network Programmability](https://github.com/cisco-ie/awesome-network-programmability)**: Libraries and guides for network automation and programmable networking.
- **[Awesome Game Networking](https://github.com/rumaniel/Awesome-Game-Networking)**: Resources for building multiplayer and real-time networked applications.

---

## 9. Cybersecurity

Overview: Cybersecurity focuses on understanding how computer systems, networks, applications, and data can be protected from attacks and unauthorized access. It involves operating system security, networking, cryptography, vulnerability analysis, secure programming, reverse engineering, digital forensics, and penetration testing.

- **[Awesome Infosec](https://github.com/onlurking/awesome-infosec)**: A curated list of awesome infosec courses and training resources.
- **[Awesome List](https://github.com/0xor0ne/awesome-list)**: Collection of awesome blog posts, write-ups, and papers focusing on cybersecurity.

---

# Recommended Creators

A collection of creators who cover topics related to low-level programming.

> Learn from these creators by watching their videos, following their projects, and studying their code and problem-solving approaches. Treat them as mentors and learn from their experience.

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

# Discord

<p align="center">
  <a href="https://discord.gg/YZRknMKn2K">
    <img width="400" alt="banner" src="https://github.com/user-attachments/assets/59f2514d-f239-40bf-b620-bc24039dce45" />
  </a>
</p>

Join our Discord server if you need help, want to learn low-level programming, or would like to contribute to the megathread.

---

# License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

This project is released under the **CC0 1.0 Universal** license, placing the content in the public domain where legally possible.

