import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

export default function NavBar() {
    let icon_name = 'Eswaran Suyamprakasam';
    let nav_items = ['About', 'Services', 'Skills', 'Projects', 'Contact'];
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-violet-600 text-2xl font-bold">{icon_name}</a>

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

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="text-violet-600 w-6 h-6" /> : <Menu className="text-violet-600 w-6 h-6" />}
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
