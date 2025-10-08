import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Contact from './routes/Contact';
import About from './routes/About';

function App() {
  return (
    <BrowserRouter> {/* BrowserRouter allows clientside routing in your React application — meaning your app can have multiple pages or views without reloading the browser.*/}
      <nav>
        <Link to="/">Home</Link> &nbsp; {/*   Link - <Link> is a special React Router component used to navigate between pages without reloading the browser. */}
        <Link to="/Contact">Contact</Link> &nbsp;
        <NavLink to="/About" 
          style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          textDecoration: "none"
        })}
        >About</NavLink> {/* NavLink is similar to Link but allows you to apply styles to the active link. Here, the About link will turn red when it's the current page. */}
      </nav>

      <Routes> {/* Routes is a container (or wrapper) provided by React Router that holds all your Route components. */}
        <Route path="/" element={<Home />} /> 
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        {/*  <Route> is used to define a path (URL) and the component (UI) that should be shown when the user visits  */}
      </Routes>
    </BrowserRouter>
  );
}

/* 
<Link> creates navigation links — and when you click them, it updates the URL without reloading the page.
The <Routes> component then checks all its <Route> paths to find a match with the current URL.
Once a matching <Route> is found, its element (the corresponding component) is rendered on the screen
*/

export default App;

