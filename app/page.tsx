import Image from "next/image";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <div className="">
    <Header/>
    <About/>
    <Contact/>
    <Portfolio/>
    </div>
  );
}
