export default function ChefCard({ chef }) {
    return (
        <div className="min-w-[220px] text-center bg-white rounded-xl shadow-md p-6">
            <img
                src={chef.image}
                alt={chef.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />

            <h4 className="font-semibold text-lg">
                {chef.name}
            </h4>

            <p className="text-red-600 text-sm">
                {chef.role}
            </p>
        </div>
    )
}
