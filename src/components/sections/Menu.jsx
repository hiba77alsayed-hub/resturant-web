import MenuCard from "../cards/MenuCard"

import { menuItems } from "../../data/menuData"



export default function Menu() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-red-600 font-semibold mb-2">
                        OUR MENU
                    </h2>
                    <h3 className="text-4xl font-bold">
                        Delicious Selection
                    </h3>
                </div>

                {/* Grid */}
                <div className="relative">
                    {/* Buttons */}
                    <button
                        onClick={() =>
                            document.getElementById("menu-scroll").scrollBy({
                                left: -300,
                                behavior: "smooth",
                            })
                        }
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10"
                    >
                        ◀
                    </button>

                    <button
                        onClick={() =>
                            document.getElementById("menu-scroll").scrollBy({
                                left: 300,
                                behavior: "smooth",
                            })
                        }
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10"
                    >
                        ▶
                    </button>

                    {/* Scroll Container */}
                    <div
                        id="menu-scroll"
                        className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
                    >
                        {menuItems.map((item) => (
                            <MenuCard key={item.id} item={item} />
                        ))}

                    </div>
                </div>


            </div>
        </section>
    )
}
