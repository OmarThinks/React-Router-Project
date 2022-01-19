import React, {useEffect} from "react";
import { Routes, Route, Link, useRoutes } from "react-router-dom";
import "./App.css";


function App() {
  console.log("App reRnders");
  

  let element = useRoutes([
    { path: "/", element: <Home />},
    { path: "/about", element: <About /> }
  ]);
  //return element;
  
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      {element}
    </div>
  );
}

export default App;






function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

