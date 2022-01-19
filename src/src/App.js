import React, {useEffect} from "react";
import { Routes, Route, Link, useRoutes, useLocation, useSearchParams, useParams    } from "react-router-dom";
import "./App.css";





function App() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  console.log("App reRnders");
  let location = useLocation();


console.log(location.pathname);

const homeStyle= (location.pathname==="/")?{backgroundColor:"red"}:{};
const aboutStyle= (location.pathname==="/about")?{backgroundColor:"red"}:{};



  return (
    <div className="App">
      <nav>
        <ul>
        <Link to="/" style={{...homeStyle}}>Home </Link>
          <Link to="/about" style={{...aboutStyle}}>About</Link>
        </ul>
      </nav>

      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;






/*
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

*/





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

