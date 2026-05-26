import { Route, Routes } from "react-router-dom";
import "./App.css";
import { EventDetailsPage, HomePage, SignInPage, SignUpPage } from "./pages";
import { ProtectedRoute, PublicRoute } from "./components";
import { AuthProvider } from "./providers";
import { Toaster } from "react-hot-toast";

function App() {
  // return null;

  return (
    <>
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
            <Route path="/events/:eventId" element={<EventDetailsPage />} />
          </Route>

          {/* <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </AuthProvider>

      <Toaster />
    </>
  );
}

export default App;
