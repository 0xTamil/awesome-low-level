## Awesome Low Level

> மின்னணுவியலில் (Electronics) தொடங்கி, கணினித் துறையில் உங்களுக்கு விருப்பமான உயர் பிரிவுகள் வரை, Low-Level Programming-ஐ அடிப்படையிலிருந்து கற்றுக்கொள்வதற்கான சிறந்த வளங்களின் தொகுப்பு.

---

## உள்ளடக்க அட்டவணை

- [நாங்கள் ஏன் இதை உருவாக்கினோம்](#why-we-made-this-)
- [இதை எப்படிப் பயன்படுத்துவது](#how-to-refer-)
  - [நீங்கள் முற்றிலும் புதியவர் என்றால்](#if-youre-an-absolute-beginner)
    - [உங்களுக்கு ஏற்கனவே கொஞ்சம் Programming அனுபவம் இருந்தால்](#but-you-already-have-some-programming-experience)
    - [நீங்கள் Programming-க்கே முற்றிலும் புதியவர் என்றால்](#but-youre-really-new-to-programming)
  - [உங்களுக்கு ஏற்கனவே கொஞ்சம் Low-Level அனுபவம் இருந்தால்](#if-you-have-some-low-level-experience)
  - [உங்களுக்கு High-Level Programming அனுபவம் இருந்தால்](#if-you-have-high-level-programming-experience)
- [கற்கும் முறை](#how-to-learn-)
  - [Project-வழி கற்றல்](#project-based-learning)
  - [AI கருவிகளைப் பயன்படுத்துதல்](#using-ai-tools)
- [Low-Level Programming என்றால் என்ன](#what-is-low-level-programming-)
- [Low-Level Programming vs System Programming](#low-level-programming-vs-system-programming)
- [C கற்பது ஏன் அவசியம்](#why-learning-c-is-important-)
- [Low-Level Programming-இல் C vs C++](#c-vs-c-in-low-level-programming)
- [வாருங்கள் தொடங்கலாம்](#lets-gooo-)
- [கற்றல் பாதை (Roadmap)](#roadmap)
  - [1. அடிப்படை Electronics](#1-basic-electronics)
  - [2. Computer Fundamentals](#2-computer-fundamentals)
  - [3. C Programming](#3-c-programming)
  - [4. Data Structures & Algorithms பயிற்சி](#4-practice-data-structures--Algorithms)
  - [5. சிறிய Projects உருவாக்குதல்](#5-build-small-projects)
  - [6. நவீன Low-Level மொழிகளைக் கற்றல் (விருப்பப்பட்டால்)](#6-learn-modern-low-level-languages-optional)
  - [7. ஒரு குறிப்பிட்ட துறையைத் தேர்ந்தெடுத்தல்](#7-pick-a-specialized-field)
- [முன்தேவைகள் (Prerequisites)](#prerequisites)
  - [Circuits & Electronics](#circuits--electronics)
  - [Computer Fundamentals](#computer-fundamentals)
- [அடிப்படை பாடங்கள்](#core-foundations)
  - [C Programming](#c-programming)
  - [Data Structures & Algorithms](#data-structures--algorithms)
- [பிற Low-Level மொழிகள் (விருப்பப்பட்டால்)](#other-low-level-languages-optional)
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
- [சிறப்புத் துறைகள் (Specialized Fields)](#specialized-fields)
  - [1. Embedded Systems](#1-embedded-systems)
  - [2. FPGA Programming](#2-fpga-programming)
  - [3. Compilers & Interpreters](#3-compilers--interpreters)
  - [4. Operating Systems Development](#4-operating-systems-development)
  - [5. GPGPU & Parallel Computing](#5-gpgpu--parallel-computing)
  - [6. Graphics Programming](#6-graphics-programming)
  - [7. Game Engine Development](#7-game-engine-development)
  - [8. Network Systems Programming](#8-network-systems-programming)
  - [9. Cybersecurity](#9-Cybersecurity)
- [பரிந்துரைக்கப்படும் Content Creator-கள்](#recommended-creators)
- [Web Interface](#web-interface)
- [Discord](#discord)
- [License](#license)

---

## நாங்கள் ஏன் இதை உருவாக்கினோம் ?

சுயமாகக் கற்றுக்கொள்பவர்கள் (Self-learners) Low-Level Programming-ஐ எந்தவித குழப்பமும் இன்றித் தொடங்கி, அதன் அடிப்படைகளில் வலுவான அறிவைப் பெற உதவுவதற்காகவே இந்த Megathread-ஐ உருவாக்கினோம். ஒரு தெளிவான கற்றல் பாதையும் அமைப்பும் இருக்கும்போது, எங்கிருந்து தொடங்குவது, அடுத்து என்ன படிப்பது என்பது எளிதாகப் புரியும்.

இங்குப் பகிரப்பட்டுள்ள Resources அனைத்தும் கற்றலுக்கு எந்தளவுக்குப் பயனுள்ளவையாக இருக்கும் என்பதை ஆராய்ந்து சேர்க்க அதிக நேரத்தையும் உழைப்பையும் செலுத்தியுள்ளோம். இந்த Megathread முற்றிலும் கணினித் துறையின் மீதான ஆர்வத்தால் உருவாக்கப்பட்டது. Low-level programming கற்க விரும்பும் எவருக்கும் இது நிச்சயமாகப் பயன்படும் என்று நம்புகிறோம். 

---

## இதை எப்படிப் பயன்படுத்துவது ?

இந்த Megathread முழுமையானது அல்ல, இதில் சில Topics அல்லது Resources விடுபட்டிருக்கலாம். சில பகுதிகளில் ஒன்றுக்கும் மேற்பட்ட Resources கொடுக்கப்பட்டுள்ளன. அவற்றில் சில, குறிப்பிட்ட தலைப்புகளை இன்னும் விரிவாகப் பேசும் பிற Megathread-களின் Links ஆகும். நீங்கள் எல்லாவற்றையும் படிக்கத் தேவையில்லை; உங்கள் கற்றல் முறைக்குச் சரியாக வரும் ஒன்று அல்லது இரண்டு Resources-ஐ மட்டும் தேர்ந்தெடுத்துப் படிக்கலாம்.

உதாரணத்திற்கு:

### நீங்கள் முற்றிலும் புதியவர் என்றால்

#### உங்களுக்கு ஏற்கனவே கொஞ்சம் Programming அனுபவம் இருந்தால்

நீங்கள் CS, EEE, IT அல்லது வேறு ஏதேனும் Technical பின்னணியிலிருந்து வந்திருக்கலாம். அப்படிப்பட்டவர்களுக்கு Programming-ஐ பூஜ்ஜியத்திலிருந்து கற்க வேண்டிய அவசியமில்லை. ஆனால், கணினிகள் அடிமட்டத்தில் (Lower Level) எப்படி வேலை செய்கின்றன என்பதில் உங்களுக்குத் தெளிவு இல்லாமல் இருக்கலாம்.

அதேபோல, Programming Fundamentals அறிவதும், C Language அறிவதும் ஒன்றல்ல என்பதை நினைவில் கொள்ளுங்கள். Variables, Loops, Functions, Conditions மற்றும் அடிப்படை Data Structures போன்றவற்றை நீங்கள் கல்லூரியிலோ அல்லது வேறு மொழியிலோ கற்றிருக்கலாம். ஆனால் Low-Level Programming-க்குத் தேவையான C Concepts-ஐ நீங்கள் தனியாகக் கற்க வேண்டும்

உதாரணத்திற்கு, உங்களுக்கு Programming Fundamentals தெரிந்திருந்தால், கீழே உள்ள Code எளிதாகப் புரியும் :

```c
int age = 20;

if (age >= 18) {
    printf("Adult\n");
}

for (int i = 0; i < 5; i++) {
    printf("%d\n", i);
}
```

ஆனால் Low-Level Programming-க்குத் தேவையான C Concepts இதையும் தாண்டி, Pointers மற்றும் Manual Memory Management போன்ற விஷயங்களை உள்ளடக்கியது :

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

> இந்த Code எப்படி வேலை செய்கிறது: `malloc()` என்பது 5 `int` மதிப்புகளுக்கான Memory-ஐ ஒதுக்குகிறது. `ages` என்பது அந்த Memory-யின் முகவரியைச் சேமிக்கிறது. முதல் `for` loop ஒதுக்கப்பட்ட Memory-யில் மதிப்புகளை நிரப்புகிறது; இரண்டாவது `for` loop அந்த மதிப்புகளைப் படித்து Condition-ஐச் சரிபார்க்கிறது. இறுதியில், `free(ages)` ஒதுக்கப்பட்ட Memory-ஐ விடுவிக்கிறது.

நாங்கள் சொல்ல வருவது என்னவென்றால், நீங்கள் எல்லாவற்றையும் முதலிலிருந்து கற்கத் தேவையில்லை. அடிப்படை விஷயங்கள் ஏற்கனவே தெரிந்திருந்தால், நீங்கள் இதுவரை கற்காத C Concepts மற்றும் Computer Fundamentals மீது கவனம் செலுத்துங்கள். பிறகு Roadmap-ஐப் பின்பற்றி படிப் படியாக உங்கள் அறிவை வளர்த்துக் கொள்ளுங்கள்.

#### நீங்கள் Programming-க்கே முற்றிலும் புதியவர் என்றால்

நீங்கள் Engineering அல்லாத பின்னணியிலிருந்து வந்து, Low-Level Programming-க்குள் நுழைவதற்கு முன் Programming கற்றுக்கொள்ள விரும்பினால், கவலைப்பட வேண்டாம். ஆரம்பத்திலேயே எல்லாவற்றையும் தெரிந்து வைத்திருக்க வேண்டும் என்ற அவசியமில்லை. எளிய அடிப்படைகளிலிருந்து தொடங்கி, அடித்தளத்தைப் பலப்படுத்தி, மெதுவாக Low-Level கருத்துகளை நோக்கி நகருங்கள்.

கீழே பட்டியலிடப்பட்டுள்ள அனைத்து Resources-ஐயும் நீங்கள் படிக்க வேண்டியதில்லை. இந்த வரிசையில் படிப்பது சிறப்பாக இருக்கும் :

1. **[r/learnprogramming wiki](https://www.reddit.com/r/learnprogramming/wiki/faq/#wiki_getting_started)**: நீங்கள் Programming-க்கு முற்றிலும் புதியவர் என்றால் இங்குத் தொடங்குங்கள். இது தொடக்கநிலையாளர்களுக்கு ஒரு தெளிவான வழிகாட்டுதலைத் தரும்.

2. **[CS50: Introduction to Computer Science](https://pll.harvard.edu/course/cs50-introduction-computer-science)**: அடிப்படைகளைப் புரிந்துகொண்ட பிறகு, Computer Science மற்றும் Programming-இல் நல்ல அடித்தளம் அமைக்க CS50 பாடத்திட்டத்தைப் படிக்கலாம். இதில் C, Algorithms, Data Structures, Memory, மற்றும் Resource Management போன்றவை கற்றுத்தரப்படுகின்றன.

3. **[Open Source Society University (OSSU)](https://github.com/ossu/computer-science)**: CS50-க்கு பிறகு, கணினி அறிவியலை எவ்வளவு ஆழமாகக் கற்க விரும்புகிறீர்களோ அதற்கு ஏற்பக் கீழே உள்ள வளங்களைத் தேர்ந்தெடுக்கலாம். ஒரு முழுமையான மற்றும் கட்டமைக்கப்பட்ட பாதை வேண்டுமென்றால் OSSU சிறந்த தேர்வு. இது Programming, Mathematics, Systems, Theory என அனைத்துப் பகுதிகளையும் உள்ளடக்கிய ஒரு சுய கற்றல் பாடத்திட்டம்.

கூடுதலாகப் பார்க்க வேண்டிய சில நல்ல Resources :

   - **[Beej's Guide to Learning Computer Science](https://beej.us/guide/bglcs/)**: கணினி அறிவியலின் முக்கியக் கருத்துகளைப் பற்றிப் பேசும் எளிய வழிகாட்டி.
   - **[CSdiy](https://csdiy.wiki/en/)**: Computer Science சுய கற்றலுக்கான வழிகாட்டி.
   - **[Teach Yourself CS](https://teachyourselfcs.com/)**: கணினி அறிவியலைச் சொந்தமாகப் படிப்பதற்கான கட்டமைக்கப்பட்ட Resource.
   - **[Awesome CS](https://github.com/prakhar1989/awesome-courses)**: இலவச Computer Science பாடங்கள் மற்றும் வளங்களின் தொகுப்பு.

அடிப்படைகளில் தெளிவு வந்ததும், C மற்றும் Computer Fundamentals-க்கு நகரலாம்.

> Low-Level Programming தொடங்க ஒரு நிபுணரான Programmer-ஆகவோ அல்லது CS Degree முடித்தவராகவோ இருக்க வேண்டிய அவசியமில்லை. தேவையான அடிப்படைகளை மட்டும் அமைத்துக் கொண்டு, பின் Low-Level-க்குத் தேவையான C Concepts மற்றும் Computer Fundamentals-ஐப் படிப்படியாகக் கற்றுக் கொள்ளுங்கள்.

அங்கிருந்து, Roadmap-ஐப் பின்பற்றி உங்கள் புரிதலைச் சீராக வளர்த்துக் கொள்ளுங்கள்.

### உங்களுக்கு ஏற்கனவே கொஞ்சம் Low-Level அனுபவம் இருந்தால்

நீங்கள் தொடக்கப் பயிற்சிகளைத் தவிர்த்துவிட்டு, இதுவரை படிக்காத தலைப்புகளில் நேரடியாகக் கவனம் செலுத்தலாம். Roadmap-ஐ முதளிலிருந்தே பின்பற்ற வேண்டும் என்பதில்லை; உள்ளடக்க அட்டவணையைப் பயன்படுத்தி உங்களுக்குத் தெரியாத தலைப்புகளைக் கண்டறிந்து அங்கிருந்து தொடருங்கள்.

### உங்களுக்கு High-Level Programming அனுபவம் இருந்தால்

Python அல்லது Java போன்ற High-Level Language-களில் ஏற்கனவே அனுபவம் இருந்தால், உங்களுக்கு Programming Fundamentals நன்றாகப் புரிந்திருக்கும். ஆனால், Low-Level Programming முற்றிலும் வேறுபட்ட அணுகுமுறையைக் கொண்டது. எனவே நீங்கள் பழகிய அதே வழியில் இதையும் அணுகலாம் என்று நினைக்க வேண்டாம்.

ஆரம்பத்தில், OOP (Object-Oriented Programming) சிந்தனையிலிருந்து சற்று வெளியே வந்து, Data, Memory, Control Flow மற்றும் Program எப்படி கணினியோடு தொடர்பு கொள்கிறது என்பதில் அதிக கவனம் செலுத்துங்கள். நீங்கள் வேலை செய்யும் பகுதியைப் பொறுத்து, Procedural, Function-Oriented அல்லது Data-Oriented பாணிகளைச் சந்திக்க நேரிடும்.

உதாரணத்திற்கு, ஒரே வேலையை Java-வில் OOP பாணியிலும், C-யில் Procedural பாணியிலும் எப்படிச் செய்வது என்று பாருங்கள் :

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

> C-யில் ஏன் இப்படி எழுதப்படுகிறது ? C-யில் Java போல Classes அல்லது Methods கிடையாது. அதற்குப் பதிலாக, Data-வை ஒன்றுசேர்க்க struct-உம், செயல்களைச் செய்ய சாதாரண Functions-உம் உள்ளன. அதாவது Data-வும் Functions-உம் தனித்தனியானவை. ஒரு Data-வில் வேலை செய்ய வேண்டுமென்றால், அதை நீங்களே வெளிப்படையாக Function-க்கு அனுப்ப வேண்டும்.

இந்த C பாணி, Data, Memory மற்றும் Functions மீது உங்களுக்கு நேரடி கட்டுப்பாட்டைத் தருகிறது. High-Level Abstractions-ஐ நம்பியிருக்காமல், என்ன Data கடத்தப்படுகிறது, அது எங்குச் சேமிக்கப்படுகிறது, எப்படி மாறுகிறது என்பதை உங்களால் நேரடியாகப் பார்க்க முடியும்.

> இதற்காக OOP மோசமானது என்றோ பயனில்லாதது என்றோ அர்த்தமல்ல. C++ மொழியில் OOP இன்னும் அதிகளவில் பயன்படுத்தப்படுகிறது; குறிப்பாக Game Engines, Graphics, Simulations மற்றும் பெரிய Systems உருவாக்கத்தில். முக்கியமானது என்னவென்றால், Low-Level Programming-இல் எடுத்தவுடனேயே OOP-ஐப் பயன்படுத்தாமல், முதலில் அடிப்படைகளைப் புரிந்துகொள்வதுதான்.

இந்தக் கருத்துகளில் தெளிவு பெற்ற பிறகு, நீங்கள் மீண்டும் பிற Programming Paradigms-ஐப் பயன்படுத்தி, எந்த அணுகுமுறை எங்குப் பயன்படும் என்பதைக் கற்றுக் கொள்ளலாம்.

அங்கிருந்து, Roadmap-ஐத் தொடர்ந்து உங்களது Low-Level Programming அடித்தளத்தை உயர்த்துங்கள்.

## கற்கும் முறை ?
 
Low-Level Programming சற்றே கடினமானதுதான். சில இடங்களில் தேங்கி நிற்பீர்கள், தவறுகள் செய்வீர்கள், சலிப்பு ஏற்படும், அல்லது "ஏன் இதை ஆரம்பித்தோம்" என்று கூடத் தோன்றும். அது மிகவும் இயல்பானது. சிக்கலான பிரச்சினைகளை எப்படி அணுகுவது என்பதைக் கற்றுக்கொள்வதே ஒரு நல்ல Programmer ஆவதற்கான வழி. Programming-ஐ திறம்படக் கற்பது எப்படி என்ற பரந்த பார்வையைப் பெற, இந்தக் கட்டுரையைப் படியுங்கள் :

- **[Teach Yourself Programming in Ten Years](https://www.norvig.com/21-days.html)**: Programming
கற்பது பற்றிய யதார்த்தமான பார்வையையும், அதில் நிபுணராக மாற எவ்வளவு காலம் பிடிக்கும் என்பதையும் விளக்கும் அருமையான கட்டுரை.

### Project-வழி கற்றல்

சில நேரங்களில், Tutorials பார்க்கும்போது புரியும், ஆனால் சொந்தமாக எதையும் செய்ய வராது. அந்த நேரத்தில் Project-based Learning முறையை முயலுங்கள். ஒரு Topic-ஐத் தேர்ந்தெடுங்கள், அதற்கான Resource-ஐப் படியுங்கள், Concept-ஐப் புரிந்துகொண்ட பிறகு, அதைப் பயன்படுத்திச் சொந்தமாக ஒரு சிறிய நிரலை எழுதுங்கள்.

> உதாரணத்திற்கு, நீங்கள் Linked Lists பற்றிப் படித்தால், C மொழியில் நீங்களே சொந்தமாக ஒரு Linked List எழுதிப் பாருங்கள். Memory Allocation பற்றிப் படித்தால், Memory வைத்துச் சோதனை செய்யுங்கள் அல்லது ஒரு சிறிய Allocator எழுதிப் பாருங்கள்.

தயாராக இருக்கும் Tutorial-ஐத் தேடுவதற்கு முன், பிரச்சினையை நீங்களே தீர்க்க முயலுங்கள். Syntax மற்றும் விவரங்களுக்கு Documentation-ஐப் பயன்படுத்துங்கள். முயற்சி செய்து முடித்த பிறகு, மற்றவர்கள் அதை எப்படி எழுதியிருக்கிறார்கள் என்று ஒப்பிட்டுப் பாருங்கள்.

> சொந்தமாகச் செய்து பார்க்காமல், வெறும் Videos பார்த்து வளங்களைச் சேகரிக்கும் Tutorial Hell-இல் சிக்குவது மிகவும் எளிது. அடிப்படைகளைக் கற்றுக்கொண்டு Code எழுதுவதில் கவனம் செலுத்துங்கள். முதலில் நீங்களே எதையாவது எழுதுங்கள், பிறகு அதை எப்படி மேம்படுத்துவது என்று கற்றுக் கொள்ளுங்கள்.

### AI கருவிகளைப் பயன்படுத்துதல்

AI கருவிகள் மிகவும் பயனுள்ளவைதான், ஆனால் ஒவ்வொரு பிரச்சனைக்கும் அதைச் சார்ந்திருக்காதீர்கள். AI-யிடம் கேட்பதற்கு முன், பிரச்சனையை நீங்களே புரிந்துகொண்டு தீர்க்க சிறிது நேரம் ஒதுக்குங்கள். AI உங்கள் Errors-ஐ விளக்க, Concepts-ஐத் தெளிவுபடுத்த, அல்லது சரியான வழியைக் காட்டப் பயன்படும். ஆனால், உடனே அதனிடம் முழு Code-ஐயும் எழுதவோ அல்லது Project-ஐயே முடிக்கவோ கேட்காதீர்கள்.

> AI-ஐ நீங்கள் யோசிப்பதற்கும் கற்பதற்கும் பயன்படுத்துங்கள்; உங்களது யோசிக்கும் வேலையை அது செய்ய விட்டுவிடாதீர்கள்.

ஒரு வாரத்திற்கு "No AI Challenge" கூட முயற்சித்துப் பார்க்கலாம். AI இல்லாமல் Documentation, Books, Search Engines, Debugging மற்றும் உங்களது சொந்த யோசனையை மட்டும் வைத்து வேலை செய்யுங்கள். ஆரம்பத்தில் கடினமாக இருந்தாலும், விஷயங்களை நீங்களே கண்டுபிடிப்பதில் இருக்கும் சுவாரஸ்யமும் தன்னம்பிக்கையும் உங்களுக்குக் கிடைக்கும்.

---

## Low-Level Programming என்றால் என்ன ?

<p align="center">
  <img width="4139" alt="Untitled-2026-08-25-2028" src="https://github.com/user-attachments/assets/8c9d045b-edb1-46d5-91dd-558e0dd53737" />
</p>

இந்த வரைபடம், ஒரு Programmer-க்கும் கணினியின் Hardware-க்கும் இடையே உள்ள பல்வேறு Abstraction நிலைகளைக் (Levels of abstraction) காட்டுகிறது. அடியில் Hardware உள்ளது; இதுவே கணினி இயற்பியல் ரீதியாக வேலை செய்யும் பகுதி. மேலே செல்லச் செல்ல Machine code, Assembly, மற்றும் Programming languages வருகின்றன. மேலே செல்லச் செல்ல Hardware பற்றிய விவரங்கள் மறைக்கப்படுகின்றன. Low-Level Programming என்பது கணினி இயங்கும் அடுக்கில் (Stack) இயந்திரத்திற்கு (Machine) மிக நெருக்கமாக வேலை செய்வதாகும்.

இது Code-க்கும் Machine-க்கும் இடையே குறைந்த அருவமாக்கலுடன் (Abstraction), CPU, Memory, மற்றும் Hardware Resources மீது நேரடி கட்டுப்பாட்டைத் தருகிறது. இதனால்தான் Low-Level Programming-ஐ "Close to the hardware" என்று கூறுகிறார்கள். Assembly மற்றும் C போன்ற மொழிகள் பொதுவாக Low-Level Programming உடன் தொடர்புபடுத்தப்படுகின்றன. C++, Rust, Zig, மற்றும் Odin போன்ற மொழிகளும் தேவைக்கேற்ப Abstraction மற்றும் நேரடிக் கட்டுப்பாட்டை வழங்கி, Low-Level மற்றும் Systems Programming-க்கு பயன்படுகின்றன.

> Low-Level Programming பொதுவாக Operating Systems, Embedded Systems, Firmware, Device Drivers, Compilers, Game Engines, Graphics, Networking, மற்றும் அதிக செயல்திறன் தேவைப்படும் Software உருவாக்கத்தில் பயன்படுத்தப்படுகிறது. இங்குதான் Programmer-களுக்கு Memory, Hardware மற்றும் System Performance மீது துல்லியமான கட்டுப்பாடு தேவைப்படும்.

---

## Low-Level Programming vs System Programming

பல நேரங்களில் மக்கள் Low-Level Programming-ஐயும் Systems Programming-ஐயும் ஒன்று என நினைத்துக் குழப்பிக்கொள்கிறார்கள்; ஆனால் இரண்டும் ஒன்றல்ல.

Low-Level Programming என்பது Code எவ்வளவு தூரம் Hardware-உடன் நெருக்கமாக வேலை செய்கிறது என்பதைப் பற்றியது. இது Memory, CPU Instructions, Pointers, மற்றும் Data Layout போன்ற விஷயங்களைக் கையாள்கிறது.

Systems Programming என்பது ஒரு பெரிய கணினி அமைப்பின் பாகமாக இருக்கும் மென்பொருளையோ அல்லது பிற Software-களுக்குத் தேவையான சேவைகளை வழங்கும் மென்பொருளையோ உருவாக்குவது பற்றியது. உதாரணத்திற்கு: Operating Systems, Compilers, Databases, Drivers, மற்றும் Servers.

இரண்டும் பல இடங்களில் ஒன்றோடொன்று இணைகின்றன. உதாரணத்திற்கு, C மொழியில் ஒரு OS Kernel எழுதுவது Low-Level Programming மற்றும் Systems Programming ஆகிய இரண்டுமே ஆகும். ஆனால், Systems Programming எப்போதும் Low-Level ஆக இருக்க வேண்டியதில்லை; அதிக Abstraction தரும் ஒரு மொழியைப் பயன்படுத்தியும் ஒருவர் System Software உருவாக்க முடியும்.

> Low-Level Programming என்பது நீங்கள் Machine-க்கு எவ்வளவு அருகில் இருக்கிறீர்கள் என்பதைக் குறிக்கிறது; Systems Programming என்பது நீங்கள் எந்த வகையான Software-ஐ உருவாக்குகிறீர்கள் என்பதைக் குறிக்கிறது.

- **[What is Systems Programming, Really ?](https://willcrichton.net/notes/systems-programming/): Systems Programming மற்றும் Low-Level Programming இடையே உள்ள வேறுபாட்டை விளக்கும் கட்டுரை.

---

## C கற்பது ஏன் அவசியம் ?

C என்பது Programming உலகின் De facto Standard; இது பல தசாப்தங்களாகப் பயன்படுத்தப்பட்டு வருகிறது.

- சிறிய Embedded சாதனங்கள் முதல் பெரிய Operating Systems வரை கிட்டத்தட்ட அனைத்து வகை கணினிகளிலும் C இயங்குகிறது.
- C மொழியானது மிகக் குறைந்த System Resources-ஐப் பயன்படுத்தி இயங்கும் நிரல்களை எழுத உதவுகிறது. இதனால் வளங்கள் குறைவாக உள்ள சூழல்களுக்கு இது மிகவும் ஏற்றது.
- C உங்களுக்கு System-ன் மீது முழு கட்டுப்பாட்டைத் தருகிறது; தேவைப்படும்போது Memory, Hardware, மற்றும் Bits வரை நேரடியாக வேலை செய்ய அனுமதிக்கிறது.
- C மொழி எந்தவொரு குறிப்பிட்ட Programming பாணியையும் கட்டாயப்படுத்துவதில்லை. உயர்மட்ட மொழிகளைப் போலன்றி, இது ஒரு குறிப்பிட்ட வழியில் மட்டுமே எழுத வேண்டும் என்று வற்புறுத்துவதில்லை. அதனால், C மொழியில் எழுத முடியாத நிரல்களே இல்லை எனலாம்.
- பல பிரபலமான Languages மற்றும் Tools, C அல்லது C++ மொழியில்தான் உருவாக்கப்பட்டுள்ளன. உதாரணத்திற்கு Python, Ruby, PHP, மற்றும் Perl போன்ற மொழிகளின் Interpreters மற்றும் Runtimes பெரும்பாலும் C/C++ மொழியில் எழுதப்பட்டவைதான்.

C மொழி உங்களுக்குச் சிறந்த Programming ஒழுக்கத்தைக் (Discipline) கற்றுத் தருகிறது.

- C அதிக சுதந்திரத்தைத் தருகிறது, ஆனால் அதே சுதந்திரத்தால் பெரிய தவறுகளைச் செய்வதும் எளிது.
- கவனமாக இல்லையென்றால் Invalid Memory Access, Buffer Overflows, Memory Leaks, மற்றும் Undefined Behavior போன்ற சிக்கல்கள் வரக்கூடும்.
- C கற்பதன் மூலம் Memory, Pointers, Data, மற்றும் Resources ஆகியவற்றைக் கவனமாகக் கையாளப் பழகலாம்.
- அந்த வகையில் C ஒரு சிறந்த ஆசிரியர்: தவறுகளுக்கான விளைவுகள் உடனடியாகத் தெரியும், அது உங்களை நல்ல வழக்கங்களுக்கு மாற்றும்.

நவீன Programming Languages பலவற்றின் வடிவமைப்புக்கு C-யே அடிப்படையாக இருந்தது. அதன் கருத்துகளைப் பல மொழிகளில் காணலாம்.

> C மொழியைப் படிப்பதன் மூலம், சில அம்சங்களும் Abstractions-களும் ஏன் உருவாக்கப்பட்டன என்பதைப் புரிந்து கொள்ள முடியும். மேலும் திரைக்குப் பின்னால் (Under the hood) என்ன நடக்கிறது என்பதை ஆழமாக அறிய முடியும், Python அல்லது JavaScript போன்ற High-level மொழிகளில் மட்டும் வேலை செய்தால் இதைப் புரிந்துகொள்வது கடினம்.

கணினிகள் அடிமட்டத்தில் எப்படி வேலை செய்கின்றன என்பதை அறியவும், Memory மற்றும் Data எப்படிச் கையாளப்படுகின்றன என்பதைப் புரிந்துகொள்ளவும், Low-Level Systems-இல் வேலை செய்யவும் C மொழி சிறந்த அடித்தளத்தை அமைத்துக் கொடுக்கும்.

---

## Low-Level Programming-இல் C vs C++

Low-Level Programming-க்கு எந்த மொழி சிறந்தது என்பதில் ஆரம்பக்கட்டக் குழப்பம் இருப்பது இயல்பு: C அல்லது C++. "C++ கற்பதற்கு முன் C கற்றுக்கொள்ளுங்கள்" என்ற அறிவுரையை அடிக்கடி கேட்பீர்கள். அதற்குப் பின்னால் நியாயமான காரணம் உள்ளது, ஆனால் அதற்காக C++ மோசமானது என்று அர்த்தமல்ல.

C மொழி பரிந்துரைக்கப்படக் காரணம், அது உங்கள் Program-க்கு அடியில் என்ன நடக்கிறது என்பதை நேரடியாக உங்களிடம் காட்டிவிடும். Strings மற்றும் Memory போன்ற விஷயங்களில் C எந்த மறைமுக அருவமாக்கலையும் (Abstraction) தராது; அவை எப்படி வேலை செய்கின்றன என்பதை நீங்களேதான் கையாள வேண்டும்.

C++ அந்த விவரங்களை மறைக்கக்கூடும். அதன் Classes மற்றும் பிற வசதிகள் பெரிய Software-களை எளிதாக எழுத உதவினாலும், அடியில் என்ன நடக்கிறது என்பதைப் புரியாமலேயே பயன்படுத்தும் வாய்ப்பையும் ஏற்படுத்துகிறது.

மற்றொரு விஷயம், C++ பயன்படுத்துவதால் மட்டுமே உங்கள் Program "குறைவான Low-Level" ஆகிவிடாது. தேவைப்பட்டால் C++ உள்ளேயும் C போன்ற Code-ஐ எழுத முடியும். Fundamentals-க்கு அருகில் இருப்பதா அல்லது High-Level Abstractions-ஐப் பயன்படுத்துவதா என்ற தேர்வை C++ உங்களுக்கே தருகிறது.

> இரண்டு மொழிகளாலுமே உயர்தர Software-களை உருவாக்க முடியும். Low-Level Systems உருவாக்க இரண்டில் எதை வேண்டுமானாலும் பயன்படுத்தலாம்.

அப்படியானால், எப்போதும் C++ -க்கு முன் C கற்பது கட்டாயமா?

அவசியமில்லை.

உங்களுக்கு C++ பிடிக்கும் என்றால், நேரடி தேர்வாக அதிலிருந்தே தொடங்கலாம். தனியாக C படித்த பிறகுதான் வர வேண்டும் என்பதில்லை. ஆனால், C++ படிக்கும்போதே அதன் அடியில் இருக்கும் C Fundamentals-ஐயும் புரிந்து படிக்கிறீர்களா என்பதை உறுதிசெய்து கொள்ளுங்கள். அதேபோல, C-யில் தொடங்கி பின் C++ -க்கு மாறுவதும் நல்ல வழிதான்.

> "C++ -க்கு முன் C படிக்க வேண்டும்" என்ற அறிவுரை, அடிப்படைகளை எளிதாகப் புரிந்து கொள்ளத்தானே தவிர, C++ மொழியால் Low-Level Programming செய்ய முடியாது என்பதால் அல்ல. Fundamentals புரிய C சிறந்த தொடக்கம், ஆனால் C++ -உம் சரியான தேர்வுதான்.

---

## வாருங்கள் தொடங்கலாம் !

Low-Level Programming என்றால் என்ன என்ற அடிப்படைப் புரிதல் இப்போது கிடைத்திருக்கும். இனி அதை அடிப்படையிலிருந்து கற்கத் தொடங்குவோம். எடுத்தவுடனேயே Assembly எழுதுவதோ அல்லது Operating System உருவாக்குவதோ நமது நோக்கமல்ல. மாறாக, கணினிகள் எப்படி வேலை செய்கின்றன என்பதை மெதுவாகப் புரிந்து கொண்டு, Hardware-க்கு நெருக்கமான நிரலாக்கத்தை நோக்கி நகரப் போகிறோம்.

இந்தத் தொகுப்பில் W3Schools, LeetCode, அல்லது பொதுவான YouTube சேனல்கள் அதிகளவில் சேர்க்கப்படவில்லை என்பதை நீங்கள் கவனிக்கலாம். அதற்காக அவை மோசமானவை என்று அர்த்தமல்ல; இங்குச் சேர்க்கப்பட்டுள்ள ஒவ்வொன்றிற்கும் ஒரு காரணம் உண்டு. Official Documentation, Books, Technical References, Courses, மற்றும் Source Code போன்ற உயர்தர கற்றல் மூலங்களைப் பயன்படுத்தப் பழகுவதே இதன் முக்கிய நோக்கம்.

> தகவல்களைத் தேடிக் கண்டுபிடித்துப் புரிந்துகொள்வதே ஒரு நல்ல Programmer-க்கான அடையாளம். எல்லாவற்றிற்கும் Tutorials-ஐ எதிர்பார்த்து நிற்காதீர்கள். Documentation படிக்கவும், விடைகளைத் தேடவும், சோதித்துப் பார்க்கவும் கற்றுக்கொள்ளுங்கள்.

---

# கற்றல் பாதை (Roadmap)

<p align="center">
  <img width="300" alt="Roadmap" src="https://github.com/user-attachments/assets/e390e835-4b3a-4410-8399-46203d300b8e" />
</p>

## 1. அடிப்படை Electronics

C படிப்பதற்கு முன் Electronics-ஐ ஆழமாகப் படிக்கத் தேவையில்லை. கணினிகள் Hardware மட்டத்தில் எப்படி வேலை செய்கின்றன என்பதைப் புரிந்துகொள்ளும் அளவுக்கு அடிப்படை Electronics அறிவே போதுமானது.

## 2. Computer Fundamentals

அதன்பின், Computer Fundamentals-இல் நல்ல தெளிவு பெறுங்கள். கணினிகள் தகவல்களை 어떻게 சேமித்துச் செயலாக்குகின்றன, CPU எப்படி Instructions-ஐருக்குகிறது, Memory எப்படி வேலை செய்கிறது, Hardware-உம் Software-உம் எப்படித் தொடர்பு கொள்கின்றன என்பதைக் கற்றுக் கொள்ளுங்கள். Low-Level நோக்கி நகரும்போது Binary, CPU Architecture, Memory, Storage, Registers, Caches, மற்றும் Instruction Execution போன்ற தலைப்புகள் மிகவும் முக்கியமாகும்.

## 3. C Programming

Computer Fundamentals புரிந்ததும், C படிக்க ஆரம்பிக்கலாம். வெறும் Syntax மட்டும் படிக்காமல், Pointers, Arrays, Structs, Memory Allocation, Stack & Heap Memory, Data Representation, Bitwise Operations, மற்றும் Programs எப்படி Memory-ஐப் பயன்படுத்துகின்றன என்பதில் கூடுதல் கவனம் செலுத்துங்கள். Code என்ன செய்கிறது என்பதை விட, அது இயங்கும்போது Memory-யில் என்ன நடக்கிறது என்பதைப் புரிந்துகொள்வதே முக்கியம்.

> அடுத்த கட்டத்திற்குச் செல்லும் முன் C-யின் எல்லாப் பகுதியிலும் Master ஆக வேண்டியதில்லை. மொழியைப் பற்றிய நல்ல புரிதலும், குறிப்பாக Memory மற்றும் Hardware உடன் Program எப்படித் தொடர்பு கொள்கிறது என்ற அறிவும் இருந்தால் போதும்.

## 4. Data Structures & Algorithms பயிற்சி

C மொழியில் வசதியான பிறகு, Data Structures மற்றும் Algorithms பயிற்சி செய்யத் தொடங்குங்கள். Data-வை எப்படித் திறம்பட ஒழுங்கமைப்பது, சேமிப்பது, அணுகுவது மற்றும் செயலாக்குவது என்பதைக் கற்றுக்கொள்ளுங்கள். Arrays, Linked Lists, Stacks, Queues, Hash Tables, Trees, Heaps, மற்றும் Graphs போன்ற அமைப்புகளையும், Searching, Sorting, Traversal, Recursion, மற்றும் Problem Solving போன்ற Algorithms-ஐயும் பாருங்கள்.

> DSA-வை C மொழியிலிருந்து தனியாகப் பார்க்காதீர்கள். தயாராக இருக்கும் Libraries-ஐப் பயன்படுத்தாமல், Structures மற்றும் Algorithms-ஐ நீங்களே C மொழியில் எழுதிச் செயல்படுத்துங்கள். இது C மற்றும் Problem Solving இரண்டையுமே வலுப்படுத்தும்.

## 5. சிறிய Projects உருவாக்குதல்

C மற்றும் DSA பயிற்சி முடித்த பின், சிறிய Projects உருவாக்கத் தொடங்குங்கள். வெறும் கருத்துகளைப் படிப்பதை நிறுத்திவிட்டு, கற்றதை நடைமுறையில் பயன்படுத்தும் இடம் இதுதான்.

சொந்தமாக உருவாக்குங்கள், வெவ்வேறு அணுகுமுறைகளைச் சோதியுங்கள், உங்கள் Bugs-ஐ நீங்களே Debug செய்யுங்கள். Memory, Data, Program Structure மற்றும் System Behavior பற்றி யோசிக்க வைக்கும் Projects-இல் மெதுவாகப் பணியாற்றுங்கள்.

> பெரிய அல்லது பிரம்மாண்டமான Projects செய்ய வேண்டும் என்ற கவலையில்லை. நீங்கள் செய்வதைப் புரிய வைத்தால் சிறிய Programs கூட போதுமானது. உங்களது C, Computer Fundamentals, மற்றும் DSA அறிவை நடைமுறை அனுபவமாக மாற்றுவதே இலக்கு.

## 6. நவீன Low-Level மொழிகளைக் கற்றல் (விருப்பப்பட்டால்)

Projects மூலம் அனுபவம் பெற்ற பிறகு, விருப்பமிருந்தால் C++, Rust, Zig, அல்லது Odin போன்ற பிற Procedural Low-Level மொழிகளையும் ஆராயலாம்.

> இவை அனைத்தையும் படிக்க வேண்டியதில்லை. விருப்பமான ஒன்று அல்லது இரண்டைத் தேர்ந்தெடுத்து உங்களது C அறிவோடு ஒப்பிட்டுப் பாருங்கள். அல்லது C மொழியிலேயே தொடர்வதென்றாலும் தொடரலாம். C மொழி இன்றும் Operating Systems, Embedded Systems, Firmware, Compilers, Libraries போன்றவற்றில் அதிகளவில் பயன்படுத்தப்படுகிறது. வேறு மொழி கற்பது நல்லது, ஆனால் சிறந்த Low-Level Programmer ஆக அது கட்டாயமில்லை.

வேறுபட்ட Programming Models-ஐச் சோதிக்க விரும்பினால் Ante, Carp, Futhark, Forth, அல்லது Uxn போன்ற Non-procedural அல்லது மாற்று மொழிகளையும் பார்க்கலம்.

> Procedural மற்றும் Non-procedural வேறுபாடு தெரியவில்லை என்றால்: Procedural மொழிகள் வெளிப்படையான கட்டளைகள் மற்றும் வரிசைமுறைச் செயல்பாடுகளைக் கொண்டிருக்கும்; Non-procedural மொழிகள் Functional அல்லது Stack-based போன்ற வேறுபட்ட மாதிரிகளைப் பயன்படுத்தும்.

## 7. ஒரு குறிப்பிட்ட துறையைத் தேர்ந்தெடுத்தல்

Fundamentals, C, Data Structures & Algorithms, மற்றும் Projects அனுபவம் கிடைத்துவிட்டதால், இனி நீங்கள் கவனம் செலுத்த விரும்பும் ஒரு சிறப்புத் துறையைத் தேர்ந்தெடுக்கலாம்.

> இதற்கான பல்வேறு துறைகள் "Specialized Fields" பகுதியில் கொடுக்கப்பட்டுள்ளன. எடுத்தவுடனேயே துறையைத் தேர்ந்தெடுக்க வேண்டாம். முதலில் நல்ல அடித்தளத்தை அமைத்து, அனுபவம் பெற்ற பின், உங்களுக்குப் பிடித்தமான துறையைத் தேர்ந்தெடுங்கள்.

இதுதான் முதன்மை Roadmap-ஐத் தெளிவாக வைத்துக்கொள்ள உதவும்.

---

# முன்தேவைகள் (Prerequisites)

## Circuits & Electronics

- **[MIT OpenCourseWare: Circuits & Electronics](https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/)**: Circuits, Electronics மற்றும் டிஜிட்டல் அமைப்புகளின் அடிப்படைகளைப் பேசும் பல்கலைக்கழகப் பாடத்திட்டம்.
- **[Nand2Tetris](https://www.nand2tetris.org/)**: ஓர் எளிய கணினி அமைப்பையும் அதன் மென்பொருளையும் அடிப்படையிலிருந்து நீங்களே உருவாக்குவதற்கான புகழ்பெற்ற பாடநெறி.

## Computer Fundamentals

- **[Exploring How Computers Work](https://www.youtube.com/watch?v=QZwneRb-zqA)**: கணினியின் முக்கியப் பாகங்கள் மற்றும் அதன் உள் செயல்பாடுகளைப் பற்றிய காட்சிப் பதிவு.
- **[Computer Systems: A Programmer's Perspective](https://www.amazon.com/dp/9332573905/)**: கணினிகள் இயங்கும் விதம் மற்றும் Computer Architecture பற்றி விளக்கும் சிறந்த புத்தகம்.
- **[The Hidden Language of Computer Hardware and Software](https://charlespetzold.com/code/)**: எளிய தொடர்பாடலில் தொடங்கி நவீன கணினி வடிவமைப்பு வரை விளக்கும் எளிய அறிமுக புத்தகம்.

---

# அடிப்படை பாடங்கள்

## C Programming

<img width="150" alt="c_512x512" src="https://github.com/user-attachments/assets/4b52552b-d591-4bf8-9d59-64f2e86d61cc" />

- **[The ANSI C Book](https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628)**: C Programming பற்றிய அனைத்து விவரங்களும் அடங்கிய புகழ்பெற்ற புத்தகம்.
- **[Beej's Guide to C Programming](https://beej.us/guide/bgc/)**: C மற்றும் அதன் Standard Library பற்றிய நடைமுறை வழிகாட்டி.
- **[C FAQ](https://c-faq.com/)**: Pointers, Memory Management உட்பட C மொழியின் பொதுவான சந்தேகங்களுக்கான விடைகள்.
- **[Dive into Systems](https://diveintosystems.org/book/)**: Computer Systems மற்றும் C Programming பற்றிய எளிய வழிகாட்டி
- **[C Interfaces and Implementations](https://github.com/drh/cii)**: மீண்டும் பயன்படுத்தக்கூடிய Modular C Libraries-ஐ எப்படி வடிவமைப்பது என்பதற்கான வழிகாட்டி

## Data Structures & Algorithms

Data Structures மற்றும் Algorithms என்பது எந்தவொரு குறிப்பிட்ட மொழிக்கும் உரியதல்ல; அதன் முதன்மைக் கருத்துகளை எந்த மொழியிலும் கற்கலாம். ஆனால் இந்த Roadmap, Low-Level Programming-ஐ மையமாகக் கொண்டிருப்பதால், C மொழியைப் பயன்படுத்திக் கற்பிக்கும் வளங்கள் உங்களுக்கு மிகவும் உதவியாக இருக்கும்.

- **[MIT 6.006: Introduction to Algorithms](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/)**: Algorithm வடிவமைப்பு மற்றும் செயல்திறன் பற்றிய பல்கலைக்கழக விரிவுரைகள்.
- **[CS3 Data Structures & Algorithms](https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/index.html)**: பயிற்சிகளுடன் கூடிய DSA பாடப் புத்தகத் தொகுப்பு.
- **[Data Structures and Algorithms Tutorial](https://www.w3schools.com/dsa/index.php)**: Data-வை ஒழுங்கமைப்பது பற்றிய தொடக்கநிலை வழிகாட்டி.
- **[Notes on Data Structures and Programming Techniques](https://cs.yale.edu/homes/aspnes/classes/223/notes.html)**: குறிப்புகள் மற்றும் பயிற்சிகள் நிறைந்த விரிவான DSA பட்டியல்.
- **[Algorithms for Competitive Programming](https://cp-algorithms.com/)**: பல Algorithms மற்றும் Data Structures பற்றிய விளக்கங்களைத் தரும் பயனுள்ள தளம்.
- **[Algorithms Design in C](https://www.ime.usp.br/~pf/algorithms/)**: C மொழியைப் பயன்படுத்தி Algorithms கற்பிக்கும் இணையத்தளம்.
- **[C DSA interactive Suite](https://github.com/darshan2456/C_DSA_interactive_suite)**: pure C-யில் எழுதப்பட்ட, Terminal வழியே DSA கற்க உதவும் ஊடாடும் செயலி.
- **[Algorithms (Sedgewick & Wayne)](https://algs4.cs.princeton.edu/home/)**: Algorithms பற்றிய விரிவான புத்தகமும் வளங்களும்

---

# பிற Low-Level மொழிகள் (விருப்பப்பட்டால்)

## Procedural Languages

### C++

<img width="150" alt="cpp_logo" src="https://github.com/user-attachments/assets/3ed8fce0-cc22-48ae-bde1-3d136f6f4ad1" />

C++ மொழி, Memory, Performance, மற்றும் Hardware அளவிலான கட்டுப்பாட்டைத் தரும் அதே வேளையில், சக்திவாய்ந்த Abstraction வசதிகளையும் Low-Level Programming-க்கு வழங்குகிறது.

> C++ தொடர்ந்து மேம்படுத்தப்பட்டு வரும் மொழி. பழைய புத்தகங்களும் Tutorials-களும் தற்காலத்திற்கு ஒவ்வாத பழைய முறைகளைக் கற்பிக்கக்கூடும். எனவே C++17, C++20, மற்றும் C++23 போன்ற நவீன C++ Standards-ஐக் கற்பிக்கும் வளங்களைப் பயன்படுத்துங்கள்.

LearnCpp தளத்திலிருந்து தொடங்கப் பரிந்துரைக்கிறோம். இது இலவசமானது, விரிவானது, தொடர்ந்து புதுப்பிக்கப்படுவது, மற்றும் நவீன C++-ஐ அடிப்படையிலிருந்து கற்பிப்பது.

- **[LearnCpp](https://www.learncpp.com/)**: நவீன C++-ஐ அடிப்படையிலிருந்து கற்றுத் தரும் விரிவான பயிற்சிகள்.

கூடுதலாக உங்களது பின்னணிக்கு ஏற்பப் புத்தகங்களையும் படிக்கலாம்.

நீங்கள் Programming-ற்கோ அல்லது C++ -ற்கோ புதியவர் என்றால் :

- **[Programming: Principles and Practice Using C++](https://www.amazon.com/dp/0138308683)**: 3rd Edition (C++20 & C++23). புதியவர்களுக்கு ஏற்ற சிறந்த புத்தகம்.

உங்களுக்கு ஏற்கனவே C++ அனுபவம் இருந்தால் :

- **[A Tour of C++](https://www.amazon.com/dp/013681648)**: 3rd Edition (C++20) நவீன C++ பற்றிய சுருக்கமான அறிமுகத்தைத் தரும். 2nd Edition C++17-ஐக் குறிக்கும்.

மொழியில் தெளிவு வந்ததும், cppreference-ஐ முதன்மை ஆவணமாகப் பயன்படுத்துங்கள்:

- **[cppreference](https://en.cppreference.com/)**: C++ Language மற்றும் Standard Library-க்கான முழுமையான Reference. குறிப்பிட்ட Features மற்றும் Functions-ஐத் தேடிப் படிக்க இது சிறந்தது.

C++ தொடங்க இவை போதுமானது. டஜன் கணக்கிலான வளங்களைத் தேடத் தேவையில்லை. ஒன்றை மட்டும் தேர்ந்தெடுத்துக் Code எழுதிப் பழகுங்கள்; சந்தேகம் வரும்போது cppreference-ஐப் பாருங்கள். C++ பழகியதும், Performance சார்ந்த அணுகுமுறைகளையும் ஆராயலாம் :

- **[Data-Oriented Design Resources](https://github.com/dbartolini/data-oriented-design)**: Data-oriented design மற்றும் செயல்திறன் பற்றிய வளங்களின் தொகுப்பு.

### Rust

<img width="150" alt="rust-logo-512x512" src="https://github.com/user-attachments/assets/86e703e4-ff32-44c2-9e65-4dc8af1093c7" />

Rust மொழி, Memory Safety மற்றும் Concurrency-க்குக் கடுமையான Compile-time சோதனைகளை வழங்கி Systems Programming-இல் கவனம் செலுத்துகிறது.

- **[The Rust Programming Language](https://doc.rust-lang.org/book/)**: Ownership, Borrowing, Memory Safety, Concurrency போன்றவற்றை விளக்கும் அதிகாரப்பூர்வ புத்தகம்.
- **[Rustlings](https://github.com/rust-lang/rustlings)**: Rust பயிற்சி செய்வதற்கான எளிய பயிற்சிகள்.
- **[Rust by Example](https://doc.rust-lang.org/rust-by-example/)**: இயக்கிப் பார்க்கக்கூடிய எடுத்துக்காட்டுகளுடன் கூடிய வழிகாட்டி.
- **[Too Many Linked Lists](https://rust-unofficial.github.io/too-many-lists/)**: Linked Data Structures உருவாக்கிப் பார்ப்பதன் மூலம் மேம்பட்ட Memory கருத்துகளைக் கற்றல்.
- **[The Rustonomicon](https://doc.rust-lang.org/nomicon/)**: Unsafe Rust மற்றும் Low-level memory செயல்பாடுகளுக்கான வழிகாட்டி.
- **[Awesome Rust](https://github.com/rust-unofficial/awesome-rust)**: Rust Libraries, Tools மற்றும் வளங்களின் தொகுப்பு.

### Zig

<img width="150" alt="zig-programming-language-icon" src="https://github.com/user-attachments/assets/fa4257a9-5645-48a2-ae13-6657c2710d0a" />

Zig வெளிப்படையான கட்டுப்பாடு, துல்லியமான நடத்தை மற்றும் C மொழியோடு எளிதாகக் கலக்கும் தன்மையை (Interoperability) வழங்கி Systems Programming-க்கு நவீன வழியைத் தருகிறது.

- **[Zig Learn](https://ziglearn.org/)**: Zig Syntax மற்றும் Manual Memory Management கற்பதற்கான வழிகாட்டி.
- **[Zig Language Reference](https://ziglang.org/documentation/master/)**: அதிகாரப்பூர்வ ஆவணங்கள்.
- **[Ziglings](https://codeberg.org/ziglings/exercises)**: பழுதுள்ள Code-ஐ சரிசெய்வதன் மூலம் Zig கற்பிக்கும் பயிற்சிகள்.
- **[Learning Zig](https://pedropark99.github.io/zig-book/)**: Zig மூலம் Systems Programming கருத்துகளைக் கற்பித்தல்.
- **[Awesome Zig](https://github.com/zigcc/awesome-zig)**: Zig Libraries மற்றும் Projects தொகுப்பு.

### Odin

<img width="150" alt="odin" src="https://github.com/user-attachments/assets/0d3d6347-2da6-4545-9a8c-391259d70d93" />

Odin என்பது எளிமை, வெளிப்படைத்தன்மை, செயல்திறன் மற்றும் நடைமுறை மென்பொருள் உருவாக்கத்தை மையமாகக் கொண்ட ஒரு Systems Programming மொழி.

- **[Odin Overview](https://odin-lang.org/docs/overview/)**: Odin Syntax, தத்துவம் மற்றும் Memory Management அறிமுகம்.
- **[Odin Demo Program](https://github.com/odin-lang/Odin/blob/master/examples/demo/demo.odin)**: மொழியின் முக்கிய அம்சங்களைக் காட்டும் Demo Code.
- **[Understanding the Odin Programming Language](https://odinbook.com/)**: Odin கற்பதற்கான ஆரம்பக்கட்ட புத்தகம்.
- **[Learn Odin in Y Minutes](https://learnxinyminutes.com/odin/)**: Odin Syntax-ன் சுருக்கமான பார்வை.
- **[Awesome Odin](https://github.com/jakubtomsu/awesome-odin)**: Odin சார்ந்த வளங்களின் தொகுப்பு.

---

## Non-Procedural Languages

### Ante
ML-ஆல் ஈர்க்கப்பட்ட, Rust போன்ற Memory Management கொண்ட ஒரு Functional Systems மொழி.
- **[Ante Lang](https://antelang.org/)**: அதிகாரப்பூர்வ Ante ஆவணங்கள்.

### Carp
Game Development-க்காக வடிவமைக்கப்பட்ட, Rust போன்ற Memory Management கொண்ட ஒரு LISP வகை மொழி.
- **[Carp Lang](https://github.com/carp-lang/Carp)**: அதிகாரப்பூர்வ Carp ஆவணங்கள்.

### Futhark
GPUs-இல் அதிக செயல்திறனுடன் Parallel Computing செய்ய உதவும் Functional மொழி. (CUDA, HIP, OpenCL Backends உடையது).
- **[Futhark Lang](https://futhark-lang.org/)**: அதிகாரப்பூர்வ Futhark ஆவணங்கள்.

### Forth
Embedded Programming மற்றும் நேரடி Hardware கட்டுப்பாட்டிற்கு ஏற்ற Stack-based மொழி.
- **[Awesome Forth](https://github.com/lassik/awesome-forth)**: Forth கற்பதற்கான முழுப் பட்டியல்.

### Uxn
Low-level programming மற்றும் Assembly பயிற்சிகளுக்கான ஒரு சிறிய Virtual Machine அமைப்பு.
- **[Uxn Site](https://100r.co/site/uxn.html)**: Uxn சார்ந்த தகவல்கள் அடங்கிய தளம்.

---

# Specialized Fields

<p align="center">
 <img width="3810" alt="Stack" src="https://github.com/user-attachments/assets/cceac376-ee29-4695-b2ad-9fdba303d9ce" />
</p>

எந்தத் துறையைத் தேர்ந்தெடுப்பது என்பதைத் தீர்மானிக்க மேலே உள்ள வரைபடத்தைப் பயன்படுத்துங்கள். உங்களுக்குப் பிடித்தமான Language, ஆர்வமுள்ள Domain, அல்லது Hardware-க்கு எவ்வளவு அருகில் வேலை செய்ய விரும்புகிறீர்கள் என்பதை வைத்துத் தீர்மானிக்கலாம் :

Language-Driven Path : ஒரு குறிப்பிட்ட மொழி உங்களுக்குப் பிடித்திருந்தால், அந்த மொழி அதிகம் பயன்படும் துறையைத் தேர்ந்தெடுக்கலாம். வரைபடத்தில் Gold Standard எனக் குறிக்கப்பட்ட மொழிகள் அத்துறைக்கு மிகவும் ஏற்றவை. உதாரணத்திற்கு C++ பிடித்தால் Game Engine Development, Graphics Programming, அல்லது GPGPU & Parallel Computing போன்ற துறைகளைத் தேர்ந்தெடுக்கலாம்.

Hardware-Driven Path: நேரடி Hardware-இல் வேலை செய்ய ஆசையென்றால், வரைபடத்தின் வலதுபுறம் உள்ள Electronics குறியீட்டைப் பாருங்கள் (Low முதல் High வரை). FPGA Programming, Embedded Systems போன்ற துறைகளுக்கு Electronics பற்றிய நல்ல அறிவு அவசியம்.

Interest-Driven Learning: எடுத்தவுடனேயே துறையை முடிவு செய்ய வேண்டிய கட்டாயமில்லை; அல்லது அனைத்து Fundamentals-ஐயும் முடித்திருக்க வேண்டும் என்பதில்லை. பிடித்துள்ள ஒரு துறையை எடுத்து Projects செய்யத் தொடங்குங்கள்; வழியில் தேவைப்படும் கருத்துகளை அப்படியே கற்றுக்கொள்ளுங்கள்.

கீழே உள்ள பிரிவுகள் ஒவ்வொரு துறையைப் பற்றியும் சுருக்கமாக விளக்குகின்றன; Hardware-க்கு மிக அருகில் இருக்கும் துறையிலிருந்து தொடங்கி High-Level Abstractions நோக்கி இவை வரிசைப்படுத்தப்பட்டுள்ளன.

## 1. Embedded Systems

விளக்கம்: குறிப்பிட்ட பணிகளைச் செய்யும் சிறிய சாதனங்களுக்கு மென்பொருள் எழுதுவது (Embedded Programming). இதில் Memory, Power ஆகியவை குறைவாகவே இருக்கும். Hardware interfaces, Registers, Interrupts, Timers, மற்றும் Communication Protocols-இல் நேரடியாக வேலை செய்ய நேரிடும்.

- **[Awesome Embedded](https://github.com/nhivp/Awesome-Embedded)**: Bare-metal programming, Microcontrollers, Firmware வளங்கள்.
- **[Awesome Embedded Linux](https://github.com/fkromer/awesome-embedded-linux)**: Embedded சாதனங்களில் Linux இயக்குவதற்கான வழிகாட்டி.

### Addons

- **[Learn STM32 Microcontroller Programming](https://www.youtube.com/watch?v=vKyL43qXPpk)**: STM32 Microcontroller Programming கற்பிக்கும் முழுப் பயிற்சி.

---

## 2. FPGA Programming

விளக்கம்: FPGA உருவாக்கம் சாதாரண Programming போலிருக்காது; இங்கு CPU-க்கான Instructions எழுதுவதற்குப் பதிலாக Hardware அமைப்பையே குறியீடாக விவரிப்பீர்கள். FPGAs ஒரே நேரத்தில் பல வேலைகளைச் செய்ய வல்லவை (Parallel Processing). இவை Prototyping, Signal Processing, Networking-இல் பயன்படுகின்றன.

- **[Awesome FPGA](https://github.com/Vitorian/awesome-fpga)**: FPGA வளங்கள், HDLs, மற்றும் Tutorials.
- **[Awesome FPGA Programming](https://github.com/emanueledelsozzo/awesome-fpga-programming)**: Programmable logic உருவாக்குவதற்கான கற்றல் பொருட்கள்.

---

## 3. Compilers & Interpreters

விளக்கம்: Programming Languages உள்ளே எப்படி வேலை செய்கின்றன என்பதை ஆராயும் துறை. Lexers, Parsers, Abstract Syntax Trees (AST), Type Systems, Optimizers, Intermediate Representations (IR), மற்றும் Machine Code Generation போன்றவற்றில் வேலை செய்வீர்கள்.

- **[Awesome Compilers](https://github.com/aalhour/awesome-compilers)**: Compiler உருவாக்கம் பற்றிய புத்தகங்கள், பாடங்கள் மற்றும் Frameworks.

---

## 4. Operating Systems Development

விளக்கம்: Processor Architecture மற்றும் Hardware உடன் நேரடியாக வேலை செய்வது. Memory Management, Process Scheduling, Interrupts, File Systems, Device Drivers, Synchronization, மற்றும் Kernel Design ஆகியவை முக்கிய தலைப்புகள்.

- **[Awesome OS Dev](https://github.com/devse-org/awesome-osdev)**: OS உருவாக்கத்திற்கான Tutorials மற்றும் Resources

---

## 5. GPGPU & Parallel Computing

விளக்கம்: பொதுவான கணக்கீடுகளுக்கு Graphics Processors (GPU)-ஐப் பயன்படுத்துவது GPGPU. ஒரே நேரத்திலான கணக்கீடுகளுக்கு GPUs உகந்தவை. Scientific Computing, Simulations, Machine Learning, மற்றும் கணக்கீடு சார்ந்த பணிகளுக்குப் பயன்படுகின்றன.

- **[Awesome GPGPU](https://github.com/jslee02/awesome-gpgpu)**: GPU Computing-க்கான Frameworks மற்றும் Libraries.
- **[Awesome GPU](https://github.com/Jokeren/Awesome-GPU)**: GPU Architecture பற்றிய வளங்கள்.

---

## 6. Graphics Programming

விளக்கம்: Programming, Mathematics, மற்றும் GPU Hardware மூன்றும் இணையும் பகுதி. Rendering Pipelines, Transformations, Lighting, Textures, Shaders, மற்றும் Vulkan, OpenGL, DirectX போன்ற Graphics APIs-இல் வேலை செய்வீர்கள்.

- **[Awesome Graphics Programming](https://gist.github.com/notnotrobby/ceef71527b4f15869133ba7b397912e9)**: Graphics Math, Rendering, Engine Development சார்ந்த வளங்கள்.

---

## 7. Game Engine Development

விளக்கம்: பல Low-Level துறைகளை ஒன்று சேர்க்கும் துறை. Rendering, Physics, Audio, Input Handling, Memory Management, Resource Loading, Scripting எனப் பல அமைப்புகளை ஒரு Game Engine கொண்டிருக்கும்.

- **[Awesome Game Engine Dev](https://github.com/stevinz/awesome-game-engine-dev)**: Game Engines உருவாக்க பயன்படும் புத்தகங்கள் மற்றும் Libraries.
- **[Awesome Game Engines](https://github.com/ChessMax/awesome-game-engines)**: Open-source Game Engines தொகுப்பு.

---

## 8. Network Systems Programming

விளக்கம்: கணினிகள் தரவை எப்படிப் பரிமாறிக்கொள்கின்றன என்பதில் கவனம் செலுத்துவது. Sockets, Transport Protocols, Asynchronous Programming, Concurrency, Packet Handling, மற்றும் Servers, Multiplayer Games-க்கான Performance Optimization இதில் அடங்கும்.

- **[Awesome Networking](https://github.com/facyber/awesome-networking)**: Networking கற்பதற்கான புத்தகங்கள் மற்றும் பாடங்கள்.
- **[Awesome Computer Networking](https://github.com/nyquist/awesome-networking)**: Computer Networks பற்றிய வளங்கள்.
- **[Awesome Network Programmability](https://github.com/cisco-ie/awesome-network-programmability)**: Network Automation க்கான வளங்கள்.
- **[Awesome Game Networking](https://github.com/rumaniel/Awesome-Game-Networking)**: Multiplayer Games Networking பற்றிய வளங்கள்.

---

## 9. Cybersecurity

விளக்கம்: கணினிகள், நெட்வொர்க்குகள், மற்றும் தரவை ஊடுருவல்களிலிருந்து எப்படிப் பாதுகாப்பது என்பதைப் படிக்கும் துறை. OS Security, Cryptography, Vulnerability Analysis, Secure Programming, Reverse Engineering, Digital Forensics, மற்றும் Penetration Testing ஆகியவை இதில் அடங்கும்.

- **[Awesome Infosec](https://github.com/onlurking/awesome-infosec)**: Infosec பாடங்கள் மற்றும் பயிற்சிகள்.
- **[Awesome List](https://github.com/0xor0ne/awesome-list)**: Cybersecurity கட்டுரைகள் மற்றும் ஆய்வுக் கட்டுரைகளின் தொகுப்பு.

---

# பரிந்துரைக்கப்படும் Content Creator-கள்

Low-Level Programming சார்ந்த விஷயங்களைப் பேசும் படைப்பாளிகள்

> இவர்களது Videos மற்றும் Projects-ஐப் பார்த்துப் பின்பற்றுங்கள். சிக்கல்களை இவர்கள் எப்படி அணுகுகிறார்கள், Code-ஐ எப்படி அமைக்கிறார்கள் என்பதைக் கவனியுங்கள். இவர்களது GitHub Repositories-ஐ ஆராய்ந்து கற்றுக்கொள்ளுங்கள்.

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

இங்குள்ள வளங்களை எளிதாகத் தேடிக் கண்டறிய விக்கிப்பீடியா பாணியிலான இணைய இடைமுகத்தைப் பயன்படுத்தலாம்.

**[Awesome Low Level](https://0xtamil.github.io/awesome-low-level/)**

---

# Discord

<p align="center">
  <a href="https://discord.gg/YZRknMKn2K">
    <img width="400" alt="banner" src="https://github.com/user-attachments/assets/59f2514d-f239-40bf-b620-bc24039dce45" />
  </a>
</p>

உங்களுக்குச் சந்தேகங்கள் இருந்தாலோ, கற்க விரும்பினாலோ அல்லது இதில் பங்களிக்க விரும்பினாலோ எங்கள் Discord Server-இல் இணையுங்கள்.

---

# License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

இந்தத் திட்டம் CC0 1.0 Universal உரிமத்தின் கீழ் பொதுக் களத்தில் (Public Domain) வெளியிடப்பட்டுள்ளது.

