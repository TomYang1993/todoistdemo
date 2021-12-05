import logo from "./logo.svg";
import { useState } from "react";
import { Content } from "./components/layout/Content";
import { Header } from "./components/layout/Header";
import { ProjectsProvider, SelectedProjectProvider } from "./context";

export const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  return (
    <ProjectsProvider>
      <SelectedProjectProvider>
        <main data-testid="application" className={darkMode ? "darkmode" : undefined}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
        </main>
      </SelectedProjectProvider>
    </ProjectsProvider>
  );
};
