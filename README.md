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
  - [Following the Language You Like](following-the-language-you-like)
  - [Following How Close You Want to Be to Hardware](following-how-close-you-want-to-be-to-hardware)
  - [Following Your Interests](following-your-interests)
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

For example, if you're already familiar with programming basics, the following code should look fairly straightforward to you:

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

One of the most common questions beginners ask is: Should I learn C or C++ for low-level programming? You'll often hear people say "learn C before C++." While there's some truth behind that advice, it doesn't mean C++ is the wrong choice.

The reason many people recommend starting with C is that it exposes more of what's happening under the hood. C provides very few abstractions, so you're often forced to understand concepts like memory, pointers, strings, and data representation instead of relying on language features to handle them for you.

C++, on the other hand, offers many additional abstractions and tools that can make development easier. Features like classes, templates, and the standard library allow you to build larger and more complex software with less effort. The trade-off is that it's sometimes possible to use these features without fully understanding what's happening underneath.

That said, using C++ doesn't automatically mean you're programming at a higher level. One of C++'s strengths is that it lets you choose how much abstraction you want. You can write code that's very close to C when you need direct control, or take advantage of higher-level features when they make sense.
 
> Both C and C++ are powerful languages that are widely used for low-level and systems programming. Neither one is inherently better for every situation.
 
So, do you have to learn C before learning C++?

Not at all.

If C++ interests you more, it's perfectly reasonable to start there. You don't need to master C first before touching C++. Just make sure you take the time to understand the fundamental concepts that C++ is built on, especially topics like memory, pointers, data layout, and how programs interact with the system.

Likewise, starting with C and moving to C++ later is also a great path. Many developers find that learning C first makes it easier to appreciate what C++ abstractions are actually doing behind the scenes.
 
> The real purpose behind the advice "learn C before C++" is to help beginners develop a stronger understanding of the fundamentals. It's not because C++ can't be used for low-level programming. C is often an excellent teaching tool for learning how computers work, but C++ remains a completely valid and widely used choice for low-level development.
 
---
 
## Let's Gooo !
 
Now that you have a basic idea of what low-level programming is, it's time to start learning. Don't worry, we're not going to jump straight into assembly or start building an operating system on day one. The goal is to build a solid foundation first, understand how computers work, and gradually move closer to the hardware as your knowledge grows.

Take your time with the roadmap. Low-level programming is a broad field, and it's completely normal if some topics take longer to click than others. Focus on understanding the fundamentals before rushing ahead.
 
You might also notice that this megathread doesn't rely heavily on popular beginner resources like W3Schools, LeetCode, or random programming YouTube channels. That doesn't mean those resources are bad. Many of them are genuinely helpful. However, the purpose of this guide is to help you become comfortable using the same kinds of resources that developers rely on throughout their careers: official documentation, books, technical references, courses, source code, and other high-quality learning materials. 

> One of the most valuable skills you can develop as a programmer is learning how to find and understand information on your own. Tutorials are useful, but they shouldn't be your only source of learning. Get comfortable reading documentation, researching topics, experimenting with code, and figuring things out for yourself. Those skills will help you long after you've finished this roadmap.
 
---
 
# Roadmap
 
<p align="center">
  <img width="300" alt="Roadmap" src="https://github.com/user-attachments/assets/e390e835-4b3a-4410-8399-46203d300b8e" />
</p>

## 1. Basic Electronics
 
You don't need an in-depth knowledge of electronics before you start learning C or low-level programming. A basic understanding is more than enough.

The goal here isn't to become an electrical engineer. Instead, it's to learn a few fundamental concepts that help explain how computers work at the hardware level. Understanding things like voltage, logic gates, and simple digital circuits can make it much easier to grasp what the computer is actually doing behind the scenes.
 
## 2. Computer Fundamentals
 
Once you have a basic idea of the hardware side, start building a strong foundation in computer fundamentals. This is one of the most important stages of the roadmap because many low-level programming concepts build directly on these ideas.

Learn how computers store and represent information, how the CPU executes instructions, how memory is organized, and how software communicates with hardware. As you progress further into low-level programming, topics such as binary, CPU architecture, memory, storage, registers, caches, and instruction execution will become increasingly important.

> The better you understand how a computer works internally, the easier it becomes to understand what's really happening when your code runs. Many concepts that seem confusing in low-level programming start to make much more sense once you have a solid grasp of these fundamentals.
 
## 3. C Programming
 
Once you've built a basic understanding of how computers work, it's time to start learning C. While learning the syntax is important, don't stop there. Pay special attention to concepts such as pointers, arrays, structs, memory allocation, stack and heap memory, data representation, and bitwise operations. These topics form the foundation of low-level programming.

As you learn, try to look beyond what your code does and start asking how it works. Where is the data stored? What happens in memory when a function is called? How does the program access and modify data? Developing this mindset will help you get much more out of C than simply learning the language's syntax.
 
> You don't need to become a C expert before moving on. The goal is to build a solid understanding of the language, especially the concepts that help you reason about memory, data, and how software interacts with the underlying machine.
 
## 4. Practice Data Structures & Algorithms
 
Once you're comfortable writing programs in C, start learning data structures and algorithms (DSA). These are fundamental tools for organizing data efficiently and solving problems effectively.

Focus on learning common data structures such as arrays, linked lists, stacks, queues, hash tables, trees, heaps, and graphs. Alongside them, study important algorithmic concepts like searching, sorting, recursion, traversal techniques, and general problem-solving strategies.
 
The goal isn't just to memorize how these structures and algorithms work, but to understand why they're useful, when to use them, and what trade-offs they involve.

> Try not to treat DSA as a completely separate topic from C. Instead of relying solely on library implementations, build the data structures and algorithms yourself. Implementing them from scratch will deepen your understanding of memory, pointers, performance, and problem solving while also making you a stronger C programmer.
 
## 5. Build Small Projects
 
Once you feel comfortable with C and have some experience with data structures and algorithms, start building small projects of your own. This is where everything you've learned begins to come together.

Reading about concepts is important, but real understanding comes from using them. Writing your own programs will force you to make decisions, solve problems, debug errors, and think more carefully about memory, data structures, program design, and how your code behaves.

Don't be afraid to experiment. Try different approaches, break things, fix them, and learn from the process. That's how most programmers improve.
 
> You don't need to build something huge or impressive. A simple project that teaches you a new concept is often more valuable than a large project you don't fully understand. The goal is to take the knowledge you've gained from C, computer fundamentals, and DSA and turn it into practical, hands-on experience. 

## 6. Learn Modern Low-Level Languages (Optional)
 
Once you've built a solid foundation with C and completed a few projects, you may want to explore other low-level languages. Popular choices include C++, Rust, Zig, and Odin, each offering a different balance between performance, control, safety, and developer experience.

The good news is that there's no need to learn all of them.
 
Pick one or two that genuinely interest you and learn them alongside C. And if you enjoy working with C, it's perfectly fine to stick with it. C remains one of the most important languages in low-level programming and is still widely used in operating systems, embedded systems, firmware, compilers, libraries, and other system-level software. Learning additional languages can broaden your perspective, but it's not a requirement for becoming a skilled low-level programmer.
 
If you're curious about different ways of thinking about programming, you can also experiment with less traditional languages such as Ante, Carp, Futhark, Forth, or Uxn. Exploring these languages can expose you to programming concepts and ideas that are very different from what you'll encounter in C.
 
> If terms like procedural and non-procedural sound confusing, don't worry too much about them right now. Procedural languages, such as C, generally focus on a sequence of instructions that tell the computer exactly what to do step by step. Other programming models, such as functional or stack-based programming, approach problem solving in different ways and can give you a fresh perspective on how programs can be designed.

The goal isn't to collect as many languages as possible. It's to deepen your understanding of programming and learn new ways to think about problems. A programmer who understands the fundamentals well can usually pick up new languages much more easily when needed.
 
## 7. Pick a Specialized Field
 
By this point, you should have a solid foundation in computer fundamentals, C programming, data structures and algorithms, and some hands-on project experience. Once you're comfortable with these core concepts, you can start exploring a specific area of low-level programming that interests you most.

There’s no rush to specialize right away. Many beginners make the mistake of jumping into advanced topics too early before building the fundamentals. Taking the time to develop a strong foundation first will make learning specialized topics much easier later on.
 
> The different specialization paths are covered in the Specialized Fields section later in this guide. For now, focus on learning the fundamentals, building projects, and gaining practical experience. Once you have a better understanding of the field, you'll naturally discover which areas interest you the most.
 
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
 
> C++ is a continuously evolving language. Because of that, many old tutorials, books, and videos you find online may teach outdated methods or older versions of the language. If you're starting today, it's much better to focus on modern C++, specifically standards like C++17, C++20, and C++23, since those reflect how C++ is actually used nowadays.
 
For learning, the resource that gets recommended the most is LearnCpp, and after going through it, it's easy to see why. It's completely free, regularly updated, beginner-friendly, and covers everything from the basics to more advanced concepts using modern C++ practices.

- **[LearnCpp](https://www.learncpp.com/)**: Comprehensive tutorials covering modern C++ from beginner to advanced topics.

Honestly, this is probably the best place to start before looking anywhere else.

After that, you can pick up a book depending on your experience level.
If you're completely new to programming or have never used C++ before, a great choice is:

- **[Programming: Principles and Practice Using C++](https://www.amazon.com/dp/0138308683)**: The 3rd edition covers modern C++ standards, including C++20 and C++23. It's written with beginners in mind and does a good job teaching both programming concepts and the language itself.

If you already have some programming experience and just want to learn modern C++, then:

- **[A Tour of C++](https://www.amazon.com/dp/013681648)**: The 3rd edition covers C++20, while the 2nd edition focuses on C++17. It's a solid option if you're looking for a quicker overview rather than a beginner-focused textbook.

Once you start feeling comfortable with the language, you'll eventually need a place to look up syntax, language features, or how specific library functions work. That's where cppreference comes in.

- **[cppreference](https://en.cppreference.com/)**: The go-to reference site for the C++ language and standard library. It's incredibly useful when you need to check details about a feature or function, but it's generally better as a reference than as a primary learning resource.

Starting with LearnCpp, using a book that matches your experience level, and relying on cppreference whenever you need to look something up is more than enough to build a strong foundation. As you become more comfortable with C++, you can also explore other approaches to structuring performance-oriented software:

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
- **[Uxn Site](https://100r.co/site/uxn.html)**: A site dedicated to learning uxn related stuffs.

---

# Specialized Fields

Choosing a direction in low-level programming can feel overwhelming at first, especially because there are several different ways to approach the decision. Maybe, You can follow the programming languages you enjoy most, focus on topics that genuinely interest you, or think about how closely you want to work with computer hardware itself.
 
## Following the Language You Like

One easy way to explore different fields is by starting with a programming language you already enjoy. Different domains tend to favor certain languages, and many fields have a few languages that are considered industry standards.

> For example, if you enjoy writing C++, you might find yourself interested in areas like Game Engine Development, Graphics Programming, or GPGPU and Parallel Computing, since C++ is heavily used in those fields. Rather than forcing yourself into a specialization first, it can be useful to see where your favorite language is commonly applied and explore from there.

## Following How Close You Want to Be to Hardware

Another approach is to think about how much interaction you want with actual hardware and electronics.

Some areas of low-level programming require very little electronics knowledge, while others demand a much deeper understanding of digital logic, computer architecture, and hardware design. In general, the closer a field is to the hardware itself, the more you'll need to understand how electronic systems work behind the scenes.

> For example, areas like Embedded Systems and FPGA Programming sit much closer to the hardware layer, so they usually require a stronger understanding of how electronic systems work behind the scenes.

## Following Your Interests

Personally, we think this is the least stressful approach for beginners.
You don't need to pick a specialization right away, and you definitely don't need to master every fundamental topic before starting something interesting. If a particular field catches your attention, just begin building small projects and learning as you go. Whenever you run into a concept you don't understand, that's the perfect opportunity to learn it.

Your interests will probably change over time anyway, and that's completely normal. Many people start in one area and later discover another field they enjoy even more.

The good news is that you don't have to lock yourself into a single path from day one. Just pick something that seems fun, keep building things, and let your interests guide you as you gain more experience.

The sections below introduce each specialization, starting with hardware-focused fields and gradually moving toward higher-level domains.

## 1. Embedded Systems

Embedded programming is about writing software for dedicated devices that perform specific tasks, such as microcontrollers, IoT devices, robots, automotive systems, drones, smart home devices, and industrial equipment. Unlike desktop or web development, you'll often work much closer to the hardware, where memory, processing power, and energy are limited.

In this field, you'll commonly use languages like C and C++, with Rust becoming increasingly popular in some projects. You'll likely work with microcontrollers such as STM32, ESP32, AVR (Arduino), PIC, and ARM Cortex-M based chips. A large part of development involves communicating with hardware through protocols like UART, SPI, I²C, CAN, and USB, while also dealing with concepts such as GPIO pins, hardware registers, interrupts, timers, DMA, ADCs, and DACs. 

> Depending on the project, you may work with sensors, motors, displays, Wi-Fi modules, Bluetooth devices, and real-time operating systems such as FreeRTOS or Zephyr. For debugging and testing, tools like JTAG, SWD, logic analyzers, and oscilloscopes are commonly used.

- **[Awesome Embedded](https://github.com/nhivp/Awesome-Embedded)**: Resources for bare-metal programming, microcontrollers, and low-level firmware.
- **[Awesome Embedded Linux](https://github.com/fkromer/awesome-embedded-linux)**: Tools and guides for running Linux on embedded hardware.

---

## 2. FPGA Programming

FPGA (Field-Programmable Gate Array) development is quite different from traditional programming because you're not simply writing instructions for a CPU to execute. Instead, you're describing how the hardware itself should be structured and operate. This makes FPGA development feel much closer to digital circuit design than conventional software engineering.

In this field, you'll primarily work with hardware description languages such as Verilog, VHDL, and sometimes SystemVerilog. Common development tools include Xilinx Vivado, Intel Quartus, and various simulation tools used to test hardware designs before deploying them to an FPGA board. Along the way, you'll encounter concepts such as logic gates, flip-flops, finite state machines (FSMs), clock domains, pipelines, timing analysis, and digital signal processing (DSP).

> FPGAs excel at parallel processing, meaning they can perform many operations simultaneously rather than executing instructions one by one like a typical CPU. Because of this, they're widely used in hardware prototyping, signal processing, telecommunications, networking equipment, high-frequency trading, AI acceleration, and other high-performance computing systems where speed and low latency are critical.

- **[Awesome FPGA](https://github.com/Vitorian/awesome-fpga)**: A curated list of FPGA resources, tools, HDLs, and project tutorials.
- **[Awesome FPGA Programming](https://github.com/emanueledelsozzo/awesome-fpga-programming)**: Guides and learning materials for developing custom programmable logic.

---

## 3. Compilers & Interpreters

Compiler and interpreter development focuses on understanding what happens behind the scenes when you write and run code. Instead of building applications, you're building the tools that process programming languages and translate them into something a computer can understand and execute.

In this field, you'll encounter concepts such as lexers (tokenizers), parsers, Abstract Syntax Trees (ASTs), type systems, semantic analysis, Intermediate Representations (IRs), optimizations, and machine code generation. You'll learn how source code moves through different stages before becoming an executable program.

> The tech stack often includes languages like C++, Rust, C, OCaml, and Java, along with tools and projects such as LLVM, Clang, GCC, MLIR, ANTLR, Flex, and Bison. You may also work with virtual machines, bytecode, JIT (Just-In-Time) compilers, garbage collectors, and CPU architectures such as x86-64, ARM, or RISC-V.

- **[Awesome Compilers](https://github.com/aalhour/awesome-compilers)**: A collection of books, courses, frameworks, and projects for compiler and runtime development.

---

## 4. Operating Systems Development

Operating systems development is one of the closest software fields to computer hardware. It focuses on building the software layer that sits between applications and the hardware, managing resources such as the CPU, memory, storage devices, and peripherals. When working in this area, you'll gain a deeper understanding of how computers actually function under the hood.

In this field, you'll commonly use C, C++, Rust, and occasionally Assembly. You'll work with topics such as memory management, virtual memory, process and thread scheduling, interrupts, system calls, file systems, device drivers, synchronization, concurrency, and kernel architecture. You'll also encounter processor architectures like x86-64, ARM, and RISC-V, along with low-level concepts such as paging, context switching, bootloaders, and hardware abstraction layers.

> Many operating system developers study or contribute to projects like Linux, FreeBSD, Windows internals, Minix, or hobby operating systems. Debugging often involves tools such as GDB, QEMU, Bochs, and various kernel debugging utilities.

- **[Awesome OS Dev](https://github.com/devse-org/awesome-osdev)**: Specifications, tutorials, and project resources for operating system development.

---

## 5. GPGPU & Parallel Computing

GPGPU (General-Purpose Computing on Graphics Processing Units) is the practice of using GPUs for more than just rendering graphics. Instead of drawing images, the GPU is used to perform large-scale computations that can be broken into thousands or even millions of smaller tasks running in parallel.

In this field, you'll typically work with languages and frameworks such as CUDA, OpenCL, SYCL, HIP, and C++. You'll learn concepts like parallel programming, threads, warps, kernels, shared memory, memory bandwidth, vectorized computation, and GPU architecture. Typical hardware includes NVIDIA, AMD, and Intel GPUs, often paired with powerful CPUs in high-performance computing systems.

> GPGPU is heavily used in areas such as scientific computing, physics simulations, computational biology, financial modeling, machine learning, artificial intelligence, image processing, and other workloads that require massive amounts of computation. Since GPUs contain thousands of smaller processing cores, they can often solve certain problems much faster than traditional CPUs.

- **[Awesome GPGPU](https://github.com/jslee02/awesome-gpgpu)**: Frameworks, technical guides, and libraries for GPU computing.
- **[Awesome GPU](https://github.com/Jokeren/Awesome-GPU)**: Resources covering GPU architecture and parallel computing.

---

## 6. Graphics Programming

Graphics programming sits at the intersection of programming, mathematics, and GPU hardware. It focuses on creating and rendering visual content, from simple 2D graphics to realistic 3D worlds used in games, simulations, virtual reality, and visualization software. You'll learn how data is transformed into pixels on a screen and how modern GPUs efficiently render complex scenes in real time.

In this field, you'll commonly use C++ along with graphics APIs such as Vulkan, OpenGL, DirectX 12, and sometimes Metal (Apple). You'll encounter concepts like rendering pipelines, vertex transformations, camera systems, lighting models, textures, materials, shadows, animation, rasterization, and ray tracing. You'll also write shaders using languages such as GLSL, HLSL, or SPIR-V, which run directly on the GPU.

> Graphics programming relies heavily on mathematical topics like linear algebra, vectors, matrices, transformations, and geometry. You'll work closely with GPU hardware from companies like NVIDIA, AMD, and Intel, learning how to optimize rendering performance and efficiently use graphics resources.

Graphics programming is used in game engines, 3D modeling software, VR/AR applications, scientific visualization, CAD software, simulation systems, and modern user interfaces.

- **[Awesome Graphics Programming](https://gist.github.com/notnotrobby/ceef71527b4f15869133ba7b397912e9)**: Curated resources covering graphics mathematics, rendering, and engine development.

---

## 7. Game Engine Development

Game engine development is one of the broadest areas in low-level programming because it combines several disciplines into a single system. Instead of building an entire game, you're building the technology that games run on. A game engine acts as the foundation that handles graphics, physics, audio, input, memory management, and many other systems working together behind the scenes.

In this field, you'll primarily work with C++, and sometimes C#, Rust, or scripting languages such as Lua. You'll encounter systems like rendering engines, physics engines, audio systems, animation systems, resource management, entity-component systems (ECS), memory allocators, multithreading, scripting systems, and asset pipelines. Graphics APIs such as Vulkan, DirectX, and OpenGL are also commonly used, along with mathematical concepts like vectors, matrices, transformations, and collision detection.

> Game engine developers often work with technologies found in engines such as Unreal Engine, Unity, Godot, Source Engine, and custom in-house engines. The field also overlaps with graphics programming, physics simulation, network programming, tools development, and performance optimization.

- **[Awesome Game Engine Dev](https://github.com/stevinz/awesome-game-engine-dev)**: Books, tutorials, libraries, and resources for building game engines.
- **[Awesome Game Engines](https://github.com/ChessMax/awesome-game-engines)**: A collection of open-source game engines and reference implementations.

---

## 8. Network Systems Programming

Network systems programming focuses on how computers communicate and exchange data over networks. Instead of building websites or user interfaces, you're working on the underlying systems that allow devices, servers, and applications to send, receive, and process data efficiently. This field powers everything from web servers and cloud infrastructure to multiplayer games and distributed systems.

In this field, you'll commonly use C, C++, Rust and Go. You'll work with networking concepts such as sockets, TCP/IP, UDP, HTTP, WebSockets, DNS, TLS/SSL, packet transmission, routing, and load balancing. You'll also encounter important systems programming topics like asynchronous programming, multithreading, concurrency, event loops, epoll, io_uring, and performance optimization.

> The tech stack often includes tools and technologies such as Linux networking, Nginx, HAProxy, Wireshark, gRPC, Redis, Kafka, and cloud platforms. You'll spend time analyzing network traffic, handling thousands or even millions of connections, reducing latency, and ensuring reliable communication between distributed systems.

- **[Awesome Networking](https://github.com/facyber/awesome-networking)**: Books, courses, protocols, and tutorials for learning computer networking.
- **[Awesome Computer Networking](https://github.com/nyquist/awesome-networking)**: Resources for understanding and working with computer networks.
- **[Awesome Network Programmability](https://github.com/cisco-ie/awesome-network-programmability)**: Libraries and guides for network automation and programmable networking.
- **[Awesome Game Networking](https://github.com/rumaniel/Awesome-Game-Networking)**: Resources for building multiplayer and real-time networked applications.

---

## 9. Cybersecurity

Cybersecurity is the field focused on protecting computer systems, networks, applications, and data from attacks, vulnerabilities, and unauthorized access. Rather than building features for users, you're learning how systems can be secured, how attackers exploit weaknesses, and how those weaknesses can be detected and prevented.

In this field, you'll commonly work with Linux, Windows Internals, C, C++, Python, Rust, and scripting languages like Bash or PowerShell. You'll encounter topics such as network security, operating system security, cryptography, secure coding, authentication, authorization, malware analysis, reverse engineering, binary exploitation, digital forensics, incident response, and vulnerability assessment.

> The tech stack often includes tools such as Wireshark, Nmap, Burp Suite, Metasploit, Ghidra, IDA Pro, Sysinternals, John the Ripper, Hashcat, and various SIEM platforms. You'll also learn about networking protocols like TCP/IP, DNS, HTTP/HTTPS, TLS, and how attackers and defenders interact within modern computer systems.

Cybersecurity spans multiple specializations, including penetration testing, security engineering, application security, cloud security, malware research, reverse engineering, digital forensics, and security operations (SOC).

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

