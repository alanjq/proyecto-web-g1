import React from "react";

function Container({ children }) {
    return (
        <section className="flex flex-col mx-auto max-w-5xl my-8 flex-auto">
            {children}
        </section>
    )
}
export default Container
