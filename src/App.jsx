import { Box } from "@mui/material";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./ui/PageNotFound";
import HomePage from "./pages/HomePage";
import ExerciseDetailPage from "./pages/ExerciseDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/exercise/:id" element={<ExerciseDetailPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
