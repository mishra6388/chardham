import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const PopupForm = ({ onClose }) => {
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    travel_date: "",
    mobile: "",
    package: "",
    departure_city: "Allahabad",
    budget: "Economy",
  });

  // Show popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_5rwqzkj", // Replace with your EmailJS Service ID
        "template_iku7grd", // Replace with your EmailJS Template ID
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          travel_date: formData.travel_date,
          mobile: formData.mobile,
          package: formData.package,
          departure_city: formData.departure_city,
          budget: formData.budget,
        },
        "qp9AiaEtDpkaPVyR7" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          alert("Email sent successfully!");
          console.log("SUCCESS!", response.status, response.text);
          setShowPopup(false); // Close popup after submission
        },
        (error) => {
          alert("Failed to send email. Try again.");
          console.log("FAILED...", error);
        }
      );
  };

  if (!showPopup) return null; // Ensure popup does not render initially

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2 style={styles.heading}>Travel Inquiry Form</h2>
        <form onSubmit={sendEmail} style={styles.form}>
          <input type="text" name="from_name" placeholder="Name" required onChange={handleChange} style={styles.input} />
          <input type="email" name="from_email" placeholder="Email" required onChange={handleChange} style={styles.input} />
          <input type="date" name="travel_date" required onChange={handleChange} style={styles.input} />
          <input type="tel" name="mobile" placeholder="Mobile (10 digits)" pattern="[0-9]{10}" required onChange={handleChange} style={styles.input} />

          <select name="package" required onChange={handleChange} style={styles.input}>
            <option value="">Select Package</option>
            <option value="Char Dham">Char Dham</option>
            <option value="Kedarnath">Kedarnath</option>
            <option value="Badrinath">Badrinath</option>
          </select>

          <select name="departure_city" required onChange={handleChange} style={styles.input}>
            <option value="Allahabad">Allahabad</option>
            <option value="Delhi">Delhi</option>
          </select>

          <select name="budget" required onChange={handleChange} style={styles.input}>
            <option value="Economy">Economy</option>
            <option value="Standard">Standard</option>
            <option value="Luxury">Luxury</option>
          </select>

          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.submitButton}>Submit</button>
            <button type="button" onClick={() => setShowPopup(false)} style={styles.closeButton}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;

// ✅ **Styles for better UI**
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
