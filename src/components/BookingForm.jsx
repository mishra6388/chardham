import React, { useState } from "react";
import emailjs from "emailjs-com";

const BookingForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    travel_date: "",
    phone: "",
    package: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission & Send Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_5rwqzkj", // Replace with your EmailJS Service ID
        "template_hzykbtp", // Replace with your EmailJS Template ID
        formData,
        "qp9AiaEtDpkaPVyR7" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          alert("Booking request sent successfully!");
          console.log("SUCCESS!", response.status, response.text);
          onClose(); // Close Form After Submission
        },
        (error) => {
          alert("Failed to send booking request. Please try again.");
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2 style={styles.heading}>Book Your Travel</h2>
        <form onSubmit={sendEmail} style={styles.form}>
          <input type="text" name="name" placeholder="Name" required onChange={handleChange} style={styles.input} />
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} style={styles.input} />
          <input type="date" name="travel_date" required onChange={handleChange} style={styles.input} />
          <input type="tel" name="phone" placeholder="Phone (10 digits)" pattern="[0-9]{10}" required onChange={handleChange} style={styles.input} />

          <select name="package" required onChange={handleChange} style={styles.input}>
            <option value="">Select Package</option>
            <option value="Char Dham">Char Dham</option>
            <option value="Kedarnath">Kedarnath</option>
            <option value="Badrinath">Badrinath</option>
          </select>

          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.submitButton}>Submit</button>
            <button type="button" onClick={onClose} style={styles.closeButton}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;

// ✅ **Styles for Better UI**
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  popup: {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    width: "90%",
    maxWidth: "400px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "10px",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  submitButton: {
    background: "#28a745",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    flex: 1,
    marginRight: "5px",
  },
  closeButton: {
    background: "#dc3545",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    flex: 1,
    marginLeft: "5px",
  },
};
