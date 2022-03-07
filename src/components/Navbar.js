import React from 'react';

const Navbar = (props) => {
    return (
       <nav
        className={props.darkMode ? "dark" : ""}
       >

           <img 
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" 
            alt="react img" 
            className="nav--icon" 
            />

           <h3 className="nav--logo_text">ReactFacts</h3>

           <div
            className="toggler"
           >

            <p className="toggler--light">Light</p>
           {/* <h4 className="nav--title">React Course - Project 1</h4> */}

           <div 
                className="toggler--slider"
                onClick={props.toggleDarkMode}
            >
                <div className="toggler--slider--circle"></div>

            </div>
                <p className="toggler--dark">Dark</p>
           </div>
       </nav>
    );
}

export default Navbar;
