export default function Hero() {
    return (
        <section className="h-screen bg-[url('/hero.jpg')] bg-cover bg-center">
            <div className="h-full bg-black/70 flex items-center">
                <div className="max-w-7xl mx-auto px-6 text-white">

                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        Best Restaurant Experience
                    </h1>

                    <p className="text-lg md:text-xl mb-6 max-w-xl">
                        Fresh ingredients, talented chefs and unforgettable taste.
                    </p>

                    <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-medium">
                        Discover Menu
                    </button>

                </div>
            </div>
        </section>
    )
}
