//import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./books";
import Book from "./Book";
import BookList from "./BookList";


function Greeting()
{
    const title = "Welcome";
    return (
        <>
            <Greeting1/>
            <Greeting2/>
            <h1>{title}</h1>
        </>
    );
}

function Greeting1()
{
   return <h2 className="heading"> First Greeting </h2>;
}

function Greeting2()
{
    return <h2> Second Greeting </h2>;
}

ReactDOM.render(<BookList/>, document.getElementById("root"));