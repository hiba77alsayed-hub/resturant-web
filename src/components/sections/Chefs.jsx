import { chefs } from "../../data/chefsData"
import ChefCard from "../cards/ChefCard"

export default function Chefs() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-red-600 font-semibold mb-2">
                        OUR CHEFS
                    </h2>
                    <h3 className="text-4xl font-bold">
                        We Offer The Best Ingredients
                    </h3>
                </div>

                {/* Slider */}
                <div className="relative">
                    <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4">
                        {chefs.map((chef) => (
                            <ChefCard key={chef.id} chef={chef} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
