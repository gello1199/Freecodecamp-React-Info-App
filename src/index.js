/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

import React from "react";
import ReactDOM from "react-dom";
import './style.css'

function Header() {
    return (
    <header>
        <nav className="nav">
            <img className="nav-logo" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react img" />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2022 Tsaganeas development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
         <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>Reusability</li>
                <li>Hirable skills</li>
            </ol>
    </div>
    )
}

function CustomPage() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer /> 
        </div>
    )
}

ReactDOM.render(<CustomPage />, document.getElementById('root'))

// Quiz

// 1. Why do we need to `import React from "react"` in our files?
// React is what defines JSX

// 2. If I were to console.log(page) in index.js, what would show up?
// A JavaScript object. React elements that describe what React should
// eventually add to the real DOM for us.

// 3. What's wrong with this code:
// ```
// const page = (
//     <h1>Hello</h1>
//     <p>This is my website!</p>
// )
// ```
// We need our JSX to be nested under a single parent element

// 4. What does it mean for something to be "declarative" instead of "imperative"?
// Declarative means I can tell the computer WHAT to do 
// and expect it to handle the details. Imperative means I need
// to tell it HOW to do each step.

// 5. What does it mean for something to be "composable"?
// We have small pieces that we can put together to make something
// larger/greater than the individual pieces.
