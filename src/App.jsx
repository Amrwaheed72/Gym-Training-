import { Box } from "@mui/material";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./ui/PageNotFound";
import HomePage from "./pages/HomePage";
import ExerciseDetailPage from "./pages/ExerciseDetailPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60+1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <BrowserRouter>
        <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
          <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route path="/exercise/:id" element={<ExerciseDetailPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Box>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              color: "red",
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white)",
              Color: "var(--color-grey-700)",
            },
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
