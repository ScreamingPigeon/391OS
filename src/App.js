import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import Home from './views/Home';
import Demo from './views/Demo';
import Contact from './views/Contact';
import About from './views/About';
import NoPage from "./views/NoPage";
import MarkdownLoader from "./components/MarkdownLoader";
import hopeforcpp from "./hopeforcpp.svg";
import './App.css';

// Note: the file location used by the markDownPath is the relative path of the CheckpointHolder element to the md file

const mdFileList = ["checkpoint1", "checkpoint2",  "checkpoint3","checkpoint4","checkpoint5",];

function App() {
  return (
    <>
      <div className="main-body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Demo />}>
              {/* <Route index element={<Home />} /> */}
              {/* <Route path="demo" element={<Demo />} /> */}
              {/* <Route path="about"> */}
                {/* <Route index element={<About />} />
                {mdFileList.map((item, index)=> {
                  return <Route key={`${item}-${index}`} path={item} element={<MarkdownLoader markDownPath={`../checkpointMD/${item}.md`}/>}/> 
                })}
              </Route> */}
              {/* <Route path="contact" element={<Contact />} /> */}
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <footer className="page-foot">
        <div>
          {/* <section className='foot-note-one'>
            <img className="footer-logo" src={hopeforcpp} alt="hope for c++ logo"/>
            <div>
              Hope for a C++
            </div>
          </section> */}
          <section className='creator-section'>
            Website designed and developed by <a id="author" href='https://github.com/MeanPaper' target="_black">MeanPaper</a>. Operating System developed by Group 29 during ECE391 SP24.
          </section>
          <div style={{display: 'none'}}> {new Date().getFullYear()} &copy; MeanPaper </div>
        </div>
      </footer>
    </>
  );
}
export default App;


