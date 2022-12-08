import Content from "../components/Content";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

export default function index() {
  return (
    <>
      <Header />
      <NavBar />
      <Hero />
      <Content />
    </>
  );
}
