import { useState } from "react";
import axios from "axios";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [seats, setSeats] = useState("");

  const addEvent = async () => {
    const token = localStorage.getItem("token");
    await axios.post("http://localhost:5000/api/events", {
      title,
      date,
      price,
      availableSeats: seats
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert("Event added!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 style={{ color: "#4c8bf5" }}>Admin - Add Event</h2>

      <input placeholder="Event Title" onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Date (e.g. 2025-12-20)" onChange={(e) => setDate(e.target.value)} />
      <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
      <input placeholder="Seats" onChange={(e) => setSeats(e.target.value)} />

      <button onClick={addEvent}>Add Event</button>
    </div>
  );
}
