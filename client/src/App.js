import { useAtom } from "jotai";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import { authAtom } from "./store/authStore";

function App() {
  const [auth, setAuth] = useAtom(authAtom);

  useEffect(() => {
    console.log(auth.user);
    if (auth.user) {
      localStorage.setItem("user", JSON.stringify(auth.user));
    }
  }, [auth.user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
