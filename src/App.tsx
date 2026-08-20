import { LocationProvider, Router, Route, useLocation } from "preact-iso";
import { useEffect } from "preact/hooks";
import Index from "./pages/Index";
import AllProjects from "./pages/AllProjects";
import NotFound from "./pages/NotFound";

const ScrollToTop = () => {
  const { path } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [path]);

  return null;
};

const App = () => (
  <LocationProvider>
    <ScrollToTop />
    <Router>
      <Route path="/" component={Index} />
      <Route path="/projects" component={AllProjects} />
      <Route default component={NotFound} />
    </Router>
  </LocationProvider>
);

export default App;
