import React from "react";
// import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="logo">
          <h2>SUGAR</h2>
        </div>
        <ul className="sidebar-links">
          <li className="active">Dashboard</li>
          <li>Orders</li>
          <li>Products</li>
          <li>Categories</li>
          <li>Customers</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </aside>

      <div className="admin-main">
        <header className="admin-header">
          <h1>Dashboard Overview</h1>
          <p>Hello, Jyoti 👋</p>
        </header>

        <section className="dashboard-stats">
          <div className="stat-card pink">
            <h3>Total Sales</h3>
            <p>₹2,49,300</p>
          </div>
          <div className="stat-card gray">
            <h3>Orders</h3>
            <p>1,238</p>
          </div>
          <div className="stat-card pink">
            <h3>New Users</h3>
            <p>384</p>
          </div>
          <div className="stat-card gray">
            <h3>Products</h3>
            <p>148</p>
          </div>
        </section>

        <section className="dashboard-panel">
          <div className="panel-card">
            <h3>Recent Orders</h3>
            <p>+ View all orders</p>
          </div>
          <div className="panel-card">
            <h3>Inventory Low Stock</h3>
            <p>+ View low stock</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
