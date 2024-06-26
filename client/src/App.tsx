import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TaskPage } from "./pages/TaskPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to= "/task" />} />
        <Route path="/task" element={<TaskPage />} />
        <Route path="/task-create" element={< TaskFormPage/>} />
        <Route path="/task/:id" element={< TaskFormPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;