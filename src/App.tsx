import { lazy, Suspense } from "react";
import { AppLayout } from "./components/layout/AppLayout";

const About = lazy(() => import("./features/About/components/About"));
const Experience = lazy(
  () => import("./features/Experience/components/Experience"),
);
const Projects = lazy(() => import("./features/Projects/components/Projects"));
const Skills = lazy(() => import("./features/Skills/components/Skills"));
const Contact = lazy(() => import("./features/Contact/components/Contact"));

function App() {
  return (
    <AppLayout>
      <Suspense fallback={<p className="loading-copy">Loading section...</p>}>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </Suspense>
    </AppLayout>
  );
}

export default App;
