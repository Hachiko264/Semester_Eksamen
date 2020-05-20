import React from "react";

function Heading({ title, subtitle }) {
    return (
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </>
    );
}

export default Heading;