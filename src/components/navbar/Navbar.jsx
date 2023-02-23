import React from 'react';

function Navbar() {
    return (
        <header className="bg-white sticky top-0">
            <div className="max-w-5xl mx-auto py-4 gap-4 flex">
                <span className="flex-none text-lg text-blue-700 font-bold">GrupoWeb</span>
                <span className="flex-auto"></span>

                <nav className="flex text-center gap-4">
                    <a className="flex-auto px-3 py-2" href="#home">Home</a>
                    <a className="flex-auto px-3 py-2" href="#about">About</a>
                    <a className="flex-auto px-3 py-2" href="#services">Dervices</a>
                    <a className="flex-auto px-3 py-2" href="#work">Work</a>
                </nav>
            </div>
        </header>
    )
}
export default Navbar
