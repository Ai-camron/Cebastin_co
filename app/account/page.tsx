export default function AccountPage() {
  return (
    <div className="container px-4 py-12 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-display">My Account</h1>
        <p className="text-muted-foreground text-lg">
          Manage your account and orders
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold">Profile</h3>
          <p className="text-sm text-muted-foreground">
            Update your personal information
          </p>
        </div>

        <div className="border rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold">Orders</h3>
          <p className="text-sm text-muted-foreground">
            View your order history
          </p>
        </div>

        <div className="border rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold">Addresses</h3>
          <p className="text-sm text-muted-foreground">
            Manage shipping addresses
          </p>
        </div>
      </div>
    </div>
  );
}
