export default function NavBar() {
    let icon_name = 'Eswaran Suyamprakasam';
    let nav_items = ['About', 'Services', 'Skills', 'Projects', 'Contact'];

    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            {/* Logo / Icon */}
            <a href="#" className="text-xl font-bold">{icon_name}</a>

            {/* Navigation Items */}
            <ul className="flex space-x-6">
                {nav_items.map((item, index) => (
                    <li key={index}>
                        <a href={`#${item.toLowerCase()}`} className="hover:text-gray-400">{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
