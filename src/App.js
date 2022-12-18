import './App.css';
import Header from "./Component/Header/Header.js"
import DownHeader from "./Component/Downheader/DownHeader.js"
import Slider from "./Component/Slider/Slider.js"
import About from "./Component/AboutMe/Aboutme.js"
import Trands from "./Component/Trands/Trands.js"
import Video from "./Component/Video/Video.js"
import Artical from "./Component/Artical/Artical.js"
import Things from "./Component/Things/Things.js"
import News from "./Component/News/News.js"
import Footer from "./Component/Footer/Footer.js"

function App() {
  return (
    <div className="App">
      <Header/>
      <DownHeader/>
      <Slider/>
      <About/>
      <Trands/>
      <Video/>
      <Artical/>
      <Things/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
