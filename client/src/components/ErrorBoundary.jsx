import React, { Component } from "react";
import Error from "../pages/Error";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    //update this so that its logs in a more sophiscated way when disployed
    componentDidCatch(error, errorInfo) {
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <Error />;
        }
        // Render children if no error
        return this.props.children;
    }
};

export default ErrorBoundary;
