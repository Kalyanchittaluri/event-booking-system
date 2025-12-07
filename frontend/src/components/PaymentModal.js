import { useState } from "react";
import "./PaymentModal.css";

export default function PaymentModal({ event, onClose, onSuccess }) {
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    if (card.length < 16 || cvv.length !== 3) {
      alert("Enter valid card details");
      return;
    }

    setTimeout(() => {
      alert("🎉 Payment Successful!");
      onSuccess();
    }, 1500);
  };

  return (
    <div className="modal-overlay">
      <div className="payment-box">
        <h2>Payment</h2>
        <p>Event: <b>{event.title}</b></p>
        <p>Amount: <b>₹{event.price}</b></p>

        <input
          type="text"
          placeholder="Card Number"
          maxLength="16"
          value={card}
          onChange={(e) => setCard(e.target.value)}
        />

        <div className="row">
          <input
            type="text"
            placeholder="MM/YY"
            maxLength="5"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />
          <input
            type="password"
            placeholder="CVV"
            maxLength="3"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>

        <button onClick={handlePayment}>Confirm Payment</button>
        <button className="cancel" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
