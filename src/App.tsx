import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SignInPage, SignUpPage } from "./pages";
import { HomePage } from "./pages/HomePage";

function App() {
  // return null;

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
