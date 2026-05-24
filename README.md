# Isaac Newton – Architect of the Universe

> High school computer science graduation project  
> **Student:** Alexe Andrei-Cristian, 12th Grade A  

## Overview

**"Isaac Newton – Architect of the Universe"** is a digital educational platform built as a tribute to one of the greatest scientific minds in history. The project uses the core web stack — **HTML5, CSS3, and JavaScript (ES6+)** — to bridge the scientific rigor of the 17th century with modern methods of knowledge dissemination.

### Goals

- **Educational interactivity** – moving from passive reading to active learning through dynamic elements
- **Universal accessibility** – built on the *Progressive Enhancement* principle, with no heavy external dependencies, running smoothly across a wide range of hardware and browser configurations
- **Historical and technical accuracy** – presenting the laws of motion and infinitesimal calculus while respecting Newton's original terminology (the concept of *fluxions*)

---

## Features

| Section | Description |
|---|---|
| **Classical Mechanics** | In-depth exploration of Newton's three laws of motion with flexible layouts |
| **Optics & Technology** | The corpuscular nature of light and the reflecting telescope; optimized image gallery |
| **Mathematical Calculus** | JavaScript-powered visualization of the link between geometry and differential calculus |
| **Interactive Quiz** | Testing engine using the Fisher-Yates algorithm to randomly shuffle questions and answers |
| **Dark Mode** | Dynamic CSS variable management to reduce eye strain |
| **Print-Ready** | `@media print` rules that hide interactive elements and paginate the document correctly |

---

## Project Structure

```
newton-cs-graduation-project/
│
├── index.html          # Main page (Entry Point)
├── viata.html          # Biography and historical context
├── realizari.html      # Physics and mathematics (calculus, optics)
├── legi.html           # Laws of motion with interactive animations
├── curiozitati.html    # Interactive quiz
│
├── css/
│   ├── style.css               # Global styles (Dark Mode, print, responsive)
│   └── style-introducere.css   # Styles specific to the main page
│
├── js/
│   ├── componente.js   # Dynamically generated, reusable header and footer
│   └── script.js       # Dark Mode logic, scroll behavior, Fisher-Yates algorithm
│
└── imgs/
    ├── favicon.png
    └── galerie/        # Optimized images and animations (JPG, PNG, GIF)
```

**Architecture:** *Separation of Concerns* model — HTML for structure, CSS for presentation, JavaScript for behavior.

---

## Technical Details

### Development Environment

- **Visual Studio Code** – Primary IDE with Linter extensions and IntelliSense
- **Git & GitHub** – Version control and hosting via GitHub Pages
- **Web Developer Tools** – JavaScript debugging and resource monitoring

### Key Implementation Decisions

**Vanilla JS/CSS (no frameworks)**  
Removing external libraries (jQuery, Bootstrap) reduces HTTP requests and ensures faster loading on slow connections and legacy browsers.

**Fisher-Yates Algorithm**  
Implemented in the Quiz engine to randomly shuffle questions and answer choices, preventing mechanical memorization and encouraging genuine understanding.

**Graceful Degradation**  
Fallback rendering solutions for older browser engines: `display: inline-block`, controlled `float`, avoiding experimental CSS properties.

**Relative Pathing**  
Using `href="css/style.css"` instead of absolute paths ensures full portability — the project runs from a USB drive, external HDD, or a web server without any changes.

**Reusable Components**  
The header and footer are dynamically generated via `genereazaHeader()` in `componente.js`, eliminating code duplication across pages.

---

## Rationale

The choice of **"Isaac Newton – Architect of the Universe"** as a theme was driven by a desire to explore the intersection between the rigor of the history of science and the dynamism of modern web development. The project goes beyond a simple biographical presentation — it is a technical exercise in building an educational platform that meets current standards of interactivity, accessibility, and digital ergonomics.

By visualizing abstract mathematical concepts through interactive UI elements, the project transforms the user from a passive reader into an active participant in the learning process.

---

## Bibliography

### Academic Sources

- **Newton, Isaac (1687).** *The Principia: Mathematical Principles of Natural Philosophy*
- **Westfall, Richard S. (1983).** *Never at Rest: A Biography of Isaac Newton*. Cambridge University Press
- **Hall, A. Rupert (1996).** *Isaac Newton: Adventurer in Thought*. Cambridge University Press

### Technical Documentation

- **MDN Web Docs** – https://developer.mozilla.org *(HTML5 Semantic, CSS3, Flexbox)*
- **W3C HTML5.2 Specification** – Used for validating page structure and accessibility
- **ECMAScript® 2025 Language Specification** – Ecma International
- **Knuth, Donald E. (1998).** *The Art of Computer Programming, Vol. 2* – Theoretical basis for the Fisher-Yates algorithm
