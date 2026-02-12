export default function About() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

                {/* Image */}
                <div className="md:w-1/2">
                    <img
                        src="/about.jpg"
                        alt="Restaurant"
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* Content */}
                <div className="md:w-1/2">
                    <h2 className="text-red-600 font-semibold mb-4 text-2xl">
                        ABOUT US
                    </h2>

                    <h3 className="text-4xl font-bold mb-4">
                        We Leave A Delicious Memory
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Klassy Cafe is one of the best restaurant HTML templates with
                        Bootstrap framework. You can feel free to use this template for
                        your restaurant business.
                    </p>

                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md">
                        Learn More
                    </button>
                </div>

            </div>
        </section>
    )
}
