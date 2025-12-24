export default function DashboardProductsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold font-display">Products</h1>
        <button className="px-4 py-2 bg-teal-500 text-black rounded-md font-medium hover:bg-teal-600 transition-colors">
          Add Product
        </button>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-card border-b">
            <tr>
              <th className="text-left p-4">Product</th>
              <th className="text-left p-4">Category</th>
              <th className="text-left p-4">Price</th>
              <th className="text-left p-4">Stock</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Tech Hoodie", category: "Hoodies", price: "$89.99", stock: 24 },
              { name: "Street Jacket", category: "Jackets", price: "$149.99", stock: 12 },
              { name: "Urban Tee", category: "T-Shirts", price: "$39.99", stock: 48 },
            ].map((product, i) => (
              <tr key={i} className="border-b last:border-0 hover:bg-accent/50">
                <td className="p-4 font-medium">{product.name}</td>
                <td className="p-4 text-muted-foreground">{product.category}</td>
                <td className="p-4">{product.price}</td>
                <td className="p-4">{product.stock}</td>
                <td className="p-4">
                  <button className="text-teal-500 hover:underline mr-4">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
