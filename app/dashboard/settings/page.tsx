export default function DashboardSettingsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold font-display">Settings</h1>

      <div className="space-y-6 max-w-2xl">
        <div className="border rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold">Store Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Store Name</label>
              <input
                type="text"
                defaultValue="Cebastian Co"
                className="w-full h-10 px-3 rounded-md border bg-background focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Contact Email</label>
              <input
                type="email"
                defaultValue="support@cebastian.co"
                className="w-full h-10 px-3 rounded-md border bg-background focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold">Security</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Current Password</label>
              <input
                type="password"
                className="w-full h-10 px-3 rounded-md border bg-background focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">New Password</label>
              <input
                type="password"
                className="w-full h-10 px-3 rounded-md border bg-background focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
          </div>
        </div>

        <button className="px-6 py-2 bg-teal-500 text-black rounded-md font-medium hover:bg-teal-600 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}
