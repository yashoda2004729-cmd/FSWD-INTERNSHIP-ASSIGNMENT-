import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm password
    if (password !== confirmPassword) {
      newErrors.confirm = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Signup Successful 🎉");
    }
  };
  const styles = {
  page: {
    height: "100vh",
    backgroundColor: "#0a66ff", // blue background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },

  logo: {
    position: "absolute",
    top: "20px",
    left: "30px",
    color: "white",
    fontWeight: "bold"
  },

  container: {
    background: "white",
    padding: "40px",
    borderRadius: "10px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
  },

  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },

  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#0a66ff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};
const handleSignup = (e) => {
  e.preventDefault();

  if (!email.includes("@")) {
    alert("Invalid Email ❌");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters ❌");
    return;
  }

  const newWindow = window.open("", "_blank");
  newWindow.document.write(`
    <h1 style="text-align:center; margin-top:100px;">
      Login Successful 🎉
    </h1>
  `);
};

  return (
  <div style={styles.page}>
    
    {/* Company Name */}
    <h2 style={styles.logo}>Supermentr</h2>

    {/* Signup Box */}
    <div style={styles.container}>
      <h3>Sign Up</h3>

      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Enter Email"
          style={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          style={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  </div>
);
}

export default App;