import { motion } from "framer-motion";
import React from "react";
import { Route } from "react-router-dom";

const ActualRoute = ({ children, ...rest }) => {
    return (
        <Route {...rest}>{children}</Route>
    );
}

export default ActualRoute