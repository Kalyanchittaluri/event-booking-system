import { useEffect, useState } from "react";
import axios from "axios";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:5000/api/events/my", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setBookings(res.data))
    .catch(() => alert("Error loading bookings"));
  }, []);

  return (
    <div style={{ padding: "30px", color: "white" }}>
      <h2 style={{ color: "#4c8bf5" }}>My Bookings</h2>

      {bookings.length === 0 && <p>No bookings yet</p>}

      <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
        {bookings.map(b => (
          <div key={b._id} style={{
            background: "#20232a",
            padding: "15px",
            borderRadius: "10px"
          }}>
            <h3>{b.eventId?.title}</h3>
            <p>Date: {b.eventId?.date}</p>
            <p>Price: ₹{b.eventId?.price}</p>
            <p>Booked On: {new Date(b.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
