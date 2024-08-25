import NavHeader from "./components/navheader";
import Content from "./components/main";
import Projects from "./components/projects";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <NavHeader />
      <Content />
      <Projects />
      <Footer />
    </main>
  );
}
