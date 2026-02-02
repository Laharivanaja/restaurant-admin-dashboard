function MenuCard({ item, onToggleAvailability }) {
  const handleClick = () => {
    onToggleAvailability(item._id, item.isAvailable);
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        marginBottom: "12px",
        backgroundColor: "#fafafa"
      }}
    >
      <h3>{item.name}</h3>

      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Price:</strong> ₹{item.price}</p>

      <p>
        <strong>Status:</strong>{" "}
        {item.isAvailable ? "Available ✅" : "Unavailable ❌"}
      </p>

      <button
        onClick={handleClick}
        style={{
          padding: "6px 10px",
          backgroundColor: item.isAvailable ? "#ff4d4d" : "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        {item.isAvailable ? "Mark Unavailable" : "Mark Available"}
      </button>
    </div>
  );
}

export default MenuCard;
