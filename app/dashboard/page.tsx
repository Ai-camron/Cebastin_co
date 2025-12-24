export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold font-display mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back, Owner</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Sales", value: "$24,567", change: "+12.5%" },
          { label: "Orders", value: "143", change: "+5.2%" },
          { label: "Customers", value: "1,234", change: "+8.1%" },
          { label: "Products", value: "48", change: "+2" },
        ].map((stat, i) => (
          <div key={i} className="border rounded-lg p-6 space-y-2">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-sm text-teal-500">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
        <div className="space-y-3">
          {[
            { order: "#1234", customer: "John Doe", amount: "$89.99", status: "Processing" },
            { order: "#1233", customer: "Jane Smith", amount: "$149.99", status: "Shipped" },
            { order: "#1232", customer: "Bob Johnson", amount: "$39.99", status: "Delivered" },
          ].map((order, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b last:border-0">
              <div>
                <p className="font-medium">{order.order}</p>
                <p className="text-sm text-muted-foreground">{order.customer}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{order.amount}</p>
                <p className="text-sm text-muted-foreground">{order.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
