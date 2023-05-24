import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import Home from './views/Home';
import Demo from './views/Demo';
import Contact from './views/Contact';
import About from './views/About';
import NoPage from "./views/NoPage";
import hopeforcpp from "./hopeforcpp.svg";
import './App.css';

function App() {
  return (
    <>
      <div className="main-body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="demo" element={<Demo />} />
              <Route path="about" element={<About />}/>
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <footer className="page-foot">
        <div>
          <section className='foot-note-one'>
            <img className="footer-logo" src={hopeforcpp} alt="hope for cpp logo"/>
            <div>
              Hope for a Cpp
            </div>
          </section>
          <section className='creator-section'>
            Designed and created by <a id="author" href='https://github.com/MeanPaper'> MeanPaper</a> for the "good" memory from ECE 391
          </section>
        </div>
      </footer>
    </>
  );
}
export default App;


