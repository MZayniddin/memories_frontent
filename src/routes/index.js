import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import App from "../App";
import Home from "../components/Home/Home";
import Auth from "../components/Auth/Auth";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="auth" element={<Auth />} />
        </Route>
    )
);

export default router;
