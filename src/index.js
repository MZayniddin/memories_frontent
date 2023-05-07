import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import "./index.css";
import router from "./routes";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <GoogleOAuthProvider clientId="229089176297-4klu2spnhcuvusu4fdg70pfcimt6kn9l.apps.googleusercontent.com">
            <RouterProvider router={router} />
        </GoogleOAuthProvider>
    </Provider>
);
