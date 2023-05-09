import React from "react";
import { Container } from "@material-ui/core";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <Container maxWidth="xl">
            <Navbar />
            <Outlet />
        </Container>
    );
};

export default App;
