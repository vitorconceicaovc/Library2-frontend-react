import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import { Home } from "./pages/Home";
import { Books } from "./pages/Books";
import { BookDetail } from "./pages/BookDetail";
import { Authors } from "./pages/Authors";
import { AuthorDetail } from "./pages/AuthorDetail";

function App() {
  return (
    <>
    <Nav />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/author/:id" element={<AuthorDetail />} />
        {/* <Route path="/requirements" element={<Requirements />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
    </Routes>
  </>
  )
}

export default App;
