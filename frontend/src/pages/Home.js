import { useEffect, useState } from "react";
import axios from "axios";
import PaymentModal from "../components/PaymentModal";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/events")
      .then(res => setEvents(res.data));
  }, []);

  const handleSuccess = async () => {
    const token = localStorage.getItem("token");
    await axios.post(
      `http://localhost:5000/api/events/book/${selectedEvent._id}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setEvents(events.map(ev =>
      ev._id === selectedEvent._id
        ? { ...ev, availableSeats: ev.availableSeats - 1 }
        : ev
    ));

    setSelectedEvent(null);
  };

  const openPayment = (event) => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Please login first!");
    setSelectedEvent(event);
  };

  return (
    <div style={{ background: "#0c0d11", minHeight: "100vh", color: "white", padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#4c8bf5" }}>
        Available Events
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "25px",
      }}>
        {events.map(event => (
          <div key={event._id} style={{
            background: "#20232a",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center"
          }}>
            <h2 style={{ color: "#61dafb" }}>{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>Price: ₹{event.price}</p>
            <p>Seats: {event.availableSeats}</p>

            <button
              onClick={() => openPayment(event)}
              style={{
                width: "100%",
                padding: "10px",
                background: "#4c8bf5",
                color: "white",
                border: "none",
                borderRadius: "8px"
              }}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <PaymentModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onSuccess={handleSuccess}
        />
      )}
    </div>
  );
}
