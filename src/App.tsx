import { Route, Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import ToolsPage from './pages/ToolsPage';
import FinalTouchPage from './pages/FinalTouchPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutme" element={<AboutMePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/tools" element={<ToolsPage />} />
      <Route path="/finalTouch" element={<FinalTouchPage />} />
    </Routes>
  );
};

export default App;
