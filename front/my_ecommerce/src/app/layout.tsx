import React from "react";

import "./globals.css"

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
        {children}
        </html>
    );
}