// import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
import People from "./components/People/People";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Work/Work";
import css from './styles/app.module.scss';
import MainSection from "./components/MainSection/MainSection";

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header /> 
    {/* <Hero />
    <About /> */}
    <MainSection />
    <Work />
    <Portfolio />
    <People />
    <Footer />
  </div>;
};

export default App;
