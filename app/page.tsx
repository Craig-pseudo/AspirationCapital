import Image from "next/image";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUS";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
    <Header/>
    <About/>
    <WhyChooseUs/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
  );
}
