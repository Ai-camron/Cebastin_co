export default function DashboardOrdersPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold font-display">Orders</h1>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-card border-b">
            <tr>
              <th className="text-left p-4">Order ID</th>
              <th className="text-left p-4">Customer</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Total</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: "#1234", customer: "John Doe", date: "2024-12-20", total: "$89.99", status: "Processing" },
              { id: "#1233", customer: "Jane Smith", date: "2024-12-19", total: "$149.99", status: "Shipped" },
              { id: "#1232", customer: "Bob Johnson", date: "2024-12-18", total: "$39.99", status: "Delivered" },
              { id: "#1231", customer: "Alice Brown", date: "2024-12-17", total: "$199.99", status: "Processing" },
            ].map((order, i) => (
              <tr key={i} className="border-b last:border-0 hover:bg-accent/50">
                <td className="p-4 font-medium">{order.id}</td>
                <td className="p-4">{order.customer}</td>
                <td className="p-4 text-muted-foreground">{order.date}</td>
                <td className="p-4">{order.total}</td>
                <td className="p-4">
                  <span className="px-2 py-1 rounded-full text-xs bg-teal-500/20 text-teal-500">
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
