import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import { Home } from "./pages/Home";
import { Books } from "./pages/Books";
import { BookDetail } from "./pages/BookDetail";
import { Authors } from "./pages/Authors";
import { AuthorDetail } from "./pages/AuthorDetail";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { AuthProvider } from "./context/AuthContext";


function App() {

  return (
      <AuthProvider>

        <Nav />

        <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/books" element={<Books />} />
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/author/:id" element={<AuthorDetail />} />

        </Routes>
    </AuthProvider>
  )
}

export default App;
