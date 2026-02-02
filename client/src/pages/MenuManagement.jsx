import { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard.jsx";
import useDebounce from "../hooks/useDebounce.js";

const API_URL = import.meta.env.VITE_API_URL;

function MenuManagement() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [availability, setAvailability] = useState("");

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    fetchMenu();
  }, [category, availability, debouncedSearch]);

  const fetchMenu = async () => {
    try {
      setLoading(true);

      let url = `${API_URL}/api/menu?`;

      if (category) url += `category=${category}&`;
      if (availability) url += `isAvailable=${availability}&`;

      // ✅ MODIFICATION: call search API only if length >= 3
      if (debouncedSearch.trim().length >= 3) {
        url = `${API_URL}/api/menu/search?q=${debouncedSearch}`;
      }

      const res = await fetch(url);
      const data = await res.json();
      setMenu(data);
    } catch {
      setError("Failed to load menu");
    } finally {
      setLoading(false);
    }
  };

  const handleToggleAvailability = async (id, isAvailable) => {
    const previousMenu = menu;

    setMenu(prev =>
      prev.map(item =>
        item._id === id
          ? { ...item, isAvailable: !isAvailable }
          : item
      )
    );

    try {
      const res = await fetch(
        `${API_URL}/api/menu/${id}/availability`,
        { method: "PATCH" }
      );
      if (!res.ok) throw new Error();
    } catch {
      alert("Update failed. Reverting.");
      setMenu(previousMenu);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Menu Management</h2>

      <input
        placeholder="Search (min 3 characters)..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: 8, width: "100%", marginBottom: 10 }}
      />

      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Appetizer">Appetizer</option>
        <option value="Main Course">Main Course</option>
        <option value="Dessert">Dessert</option>
        <option value="Beverage">Beverage</option>
      </select>

      <select
        value={availability}
        onChange={e => setAvailability(e.target.value)}
        style={{ marginLeft: 10 }}
      >
        <option value="">All</option>
        <option value="true">Available</option>
        <option value="false">Unavailable</option>
      </select>

      <div style={{ marginTop: 15 }}>
        {menu.length === 0 ? (
          <p>No items</p>
        ) : (
          menu.map(item => (
            <MenuCard
              key={item._id}
              item={item}
              onToggleAvailability={handleToggleAvailability}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default MenuManagement;
