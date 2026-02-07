export default function MenuCard({ item }) {
    return (
        <div className="min-w-[260px] bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition">
            <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover"
            />

            <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">{item.name}</h4>
                    <span className="text-red-600 font-bold">
                        {item.price}
                    </span>
                </div>

                <p className="text-gray-600 text-sm">
                    {item.description}
                </p>
            </div>
        </div>
    )
}
