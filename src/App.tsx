import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  CalendarPage,
  EventDetailsPage,
  HomePage,
  SignInPage,
  SignUpPage,
  UpdateEventPage,
} from "./pages";
import { ProtectedRoute, PublicRoute } from "./components";
import { AuthProvider } from "./providers";
import CreateEventPage from "./pages/CreateEventPage/CreateEventPage";

function App() {
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
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/create" element={<CreateEventPage />} />
            <Route path="/update/:eventId" element={<UpdateEventPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
