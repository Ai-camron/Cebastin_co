export default function DashboardCustomersPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold font-display">Customers</h1>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-card border-b">
            <tr>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Orders</th>
              <th className="text-left p-4">Total Spent</th>
              <th className="text-left p-4">Joined</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "John Doe", email: "john@example.com", orders: 5, spent: "$449.95", joined: "2024-10-15" },
              { name: "Jane Smith", email: "jane@example.com", orders: 3, spent: "$339.97", joined: "2024-11-01" },
              { name: "Bob Johnson", email: "bob@example.com", orders: 2, spent: "$179.98", joined: "2024-11-20" },
            ].map((customer, i) => (
              <tr key={i} className="border-b last:border-0 hover:bg-accent/50">
                <td className="p-4 font-medium">{customer.name}</td>
                <td className="p-4 text-muted-foreground">{customer.email}</td>
                <td className="p-4">{customer.orders}</td>
                <td className="p-4">{customer.spent}</td>
                <td className="p-4 text-muted-foreground">{customer.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
