import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function OrdersDashboard() {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchOrders();
  }, [status]);

  const fetchOrders = async () => {
    let url = `${API_URL}/api/orders`;
    if (status) url += `?status=${status}`;

    const res = await fetch(url);
    const data = await res.json();
    setOrders(data.data || []);
  };

  const updateStatus = async (id, newStatus) => {
    await fetch(`${API_URL}/api/orders/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus })
    });
    fetchOrders();
  };

  return (
    <div>
      <h2>Orders Dashboard</h2>

      <select onChange={e => setStatus(e.target.value)}>
        <option value="">All</option>
        <option value="Pending">Pending</option>
        <option value="Preparing">Preparing</option>
        <option value="Ready">Ready</option>
        <option value="Delivered">Delivered</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      {orders.map(order => (
        <div
          key={order._id}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            marginTop: 10
          }}
        >
          <p><strong>Order:</strong> {order.orderNumber}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Total:</strong> ₹{order.totalAmount}</p>

          <select
            value={order.status}
            onChange={e => updateStatus(order._id, e.target.value)}
          >
            <option>Pending</option>
            <option>Preparing</option>
            <option>Ready</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default OrdersDashboard;
