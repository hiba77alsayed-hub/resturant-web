export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <h4 className="text-xl font-bold text-white mb-2">
                    Klassy Cafe
                </h4>

                <p className="text-sm mb-4">
                    © {new Date().getFullYear()} All Rights Reserved
                </p>

                <div className="flex justify-center gap-6 text-lg">
                    <span className="hover:text-red-500 cursor-pointer">Facebook</span>
                    <span className="hover:text-red-500 cursor-pointer">Instagram</span>
                    <span className="hover:text-red-500 cursor-pointer">Twitter</span>
                </div>

            </div>
        </footer>
    )
}
