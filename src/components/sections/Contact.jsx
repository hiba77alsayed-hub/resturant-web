export default function Contact() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-red-600 font-semibold mb-2">
                        CONTACT US
                    </h2>
                    <h3 className="text-4xl font-bold">
                        Get In Touch
                    </h3>
                </div>

                {/* Form */}
                <form className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8 space-y-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />

                    <textarea
                        rows="4"
                        placeholder="Your Message"
                        className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    ></textarea>

                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-medium">
                        Send Message
                    </button>
                </form>

            </div>
        </section>
    )
}
