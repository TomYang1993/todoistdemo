import logo from "./logo.svg";
import { Content } from "./components/layout/Content";
import { Header } from "./components/layout/Header";
import { ProjectsProvider, SelectedProjectProvider } from "./context";

export const App = () => {
  return (
    <ProjectsProvider>
      <SelectedProjectProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </SelectedProjectProvider>
    </ProjectsProvider>
  );
};
