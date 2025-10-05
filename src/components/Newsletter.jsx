import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

function Newsletter() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  // 🔹 Your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxWw0B9Bj0X2rI97WRf2TZ5P7eFAnUyskVZedjJNOZbHleVu19eKH3ey76CUBGl4I0gww/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    if (!form.current.checkValidity()) {
      form.current.reportValidity(); // Show the default browser error UI
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
        redirect: "follow",
      });

      const data = await res.json();
      console.log("Response from Google Apps Script:", data);
      if (data.result == "success") {
        toast.success("Subscribed successfully!", {
          position: "top-center",
        });
        getintouch();
        setTimeout(() => {
          form.current.reset(); // ✅ this will clear the form
        }, 1000);
      } else if (data.result === "error") {
        toast.info("You are already subscribed!", {
          position: "top-center",
        });
      } else {
        toast.error("Something went wrong. Please try again.", {
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  const getintouch = async () => {
    try {
      const res = await fetch("/.netlify/functions/sendSubscribedEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.current.firstName.value,
          lastName: form.current.lastName.value,
          email: form.current.email.value,
          message: form.current.message.value,
        }),
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <footer className="newsletter">
      <div className="n-1">
        <p id="n-11">JOIN MY NEWSLETTER</p>
        <p>To keep up to date with original works...</p>
      </div>

      <form ref={form} onSubmit={handleSubmit} className="n-2">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          required
        />
        <button type="submit" onClick={handleSubmit} disabled={loading}>
          {loading ? "Submitting..." : "Sign Up"}
        </button>
      </form>

      <div className="n-3">
        <p>We respect your privacy</p>
      </div>

      <div className="n-4">
        <a
          style={{ color: "black" }}
          href="https://www.instagram.com/tesinthomas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          style={{ color: "black" }}
          href="https://www.facebook.com/tesin.thomas.927?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a
          href="https://www.artstation.com/tesin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-artstation"></i>
        </a>
      </div>
    </footer>
  );
}

export default Newsletter;
