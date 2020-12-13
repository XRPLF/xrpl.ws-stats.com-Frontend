import React from "react";
import Index from './pages/Index';

export default function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <Index />
            </div>
        </div>
    );
}