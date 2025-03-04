import { useState } from "react";

export default function NavBar() {
    let icon_name = 'Eswaran Suyamprakasam';
    let nav_items = ['About', 'Services', 'Skills', 'Projects', 'Contact'];
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-violet-800 text-2xl font-bold">{icon_name}</a>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6">
                    {nav_items.map((item, index) => (
                        <li key={index}>
                            <a href={`#${item.toLowerCase()}`} className="text-violet-600 hover:text-violet-800">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button (SVG Icons) */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <svg className="w-6 h-6 text-violet-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-violet-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 bg-white shadow-lg rounded-md">
                    <ul className="flex flex-col space-y-2 p-4">
                        {nav_items.map((item, index) => (
                            <li key={index}>
                                <a href={`#${item.toLowerCase()}`} className="text-violet-600 hover:text-violet-800 block">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
