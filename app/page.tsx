import Image from "next/image";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="">
    <Header/>
    <About/>
    <Contact/>
    </div>
  );
}
