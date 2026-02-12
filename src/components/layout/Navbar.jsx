import { useState } from "react"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="text-3xl font-bold text-red-600">
                    Klassy
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-8 text-gray-700 text-lg font-semibold">
                    <li className="hover:text-red-600 cursor-pointer">Home</li>
                    <li className="hover:text-red-600 cursor-pointer">About</li>
                    <li className="hover:text-red-600 cursor-pointer">Menu</li>
                    <li className="hover:text-red-600 cursor-pointer">Chefs</li>
                    <li className="hover:text-red-600 cursor-pointer">Contact</li>
                </ul>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-3xl"
                >
                    ☰
                </button>

            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white px-6 pb-4">
                    <ul className="flex flex-col items-center gap-4 text-gray-700 font-medium">
                        <li className="hover:text-red-600 cursor-pointer ">Home</li>
                        <li className="hover:text-red-600 cursor-pointer">About</li>
                        <li className="hover:text-red-600 cursor-pointer">Menu</li>
                        <li className="hover:text-red-600 cursor-pointer">Chefs</li>
                        <li className="hover:text-red-600 cursor-pointer">Contact</li>
                    </ul>
                </div>
            )}
        </nav>
    )
}
