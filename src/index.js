import React from "react";
import ReactDOM from "react-dom";

const teams = (
    <div>
        <img src="../public/logo512.png" width="40px" alt="react logo" />
        <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
    </div>
)

ReactDOM.render(teams, document.getElementById('root'))
