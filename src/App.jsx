import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Blog from "./pages/blog/Blog.jsx";
import ErrorPage from "./pages/errorPage/ErrorPage.jsx";
import AllPosts from "./pages/allPosts/AllPosts.jsx";
import Footer from "./components/footer/Footer.jsx";
import NavBar from "./components/navBar/NavBar.jsx";
import BlogDetail from "./pages/blogDetail/BlogDetail.jsx";

function App() {
    return (
        <div className="page-container">
            <NavBar/>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/nieuwe-blog-post" element={<Blog />} />
                    <Route path="/error-pagina" element={<ErrorPage />} />
                    <Route path="/alle-blog-posts" element={<AllPosts />} />
                    <Route path="/blog/:id" element={<BlogDetail />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}

export default App
