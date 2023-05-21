import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import V86Container from './components/V86Container';
import bios from './emulatorFiles/seabios.bin'
import vgabios from './emulatorFiles/vgabios.bin'
import mp3 from './osImg/mp3.img'
import v86wasm from './emulatorFiles/v86.wasm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;


const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};
const Home = () => {
  return <h1><V86Container biosURL={bios} vgaURL={vgabios} hdaURL={mp3} wasmPath={v86wasm}/>
  </h1>;
};
const Blogs = () => {
  return <h1>Blog Articles</h1>;
};
const Contact = () => {
  return <h1>Contact Me</h1>;
};
const NoPage = () => {
  return <h1>404</h1>;
};
