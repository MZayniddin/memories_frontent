import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
} from "react-router-dom";

import App from "../App";
import Home from "../components/Home/Home";
import Auth from "../components/Auth/Auth";
import PostDetails from "../components/PostDetails/PostDetails";

const user = JSON.parse(localStorage.getItem("profile"));

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />}>
            <Route index element={<Navigate to="/posts" replace />} />
            <Route path="/posts" element={<Home />} />
            <Route path="/posts/search" element={<Home />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route
                path="auth"
                element={!user ? <Auth /> : <Navigate to="/posts" replace />}
            />
        </Route>
    )
);

export default router;
