import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage, SignInPage, SignUpPage } from "./pages";
import { ProtectedRoute, PublicRoute } from "./components";
import { AuthProvider } from "./providers";

function App() {
  // return null;

  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoute />}>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
