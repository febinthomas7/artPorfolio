import { useRef, useState } from "react";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import { toast, ToastContainer } from "react-toastify";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const getintouch = async (e) => {
    e.preventDefault();

    if (!form.current.checkValidity()) {
      form.current.reportValidity();
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.current.firstName.value,
          lastName: form.current.lastName.value,
          email: form.current.email.value,
          message: form.current.message.value,
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("✅ Your message was sent successfully!");
        form.current.reset();
      } else {
        toast.error("❌ Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("⚠️ An error occurred while sending your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <div className="c-2">
        <div className="c-3">
          <p>CONTACT US</p>
          <p>tesin96thomas@gmail.com</p>
          <p>Delhi, India</p>
          <div className="c-5">
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
              style={{ color: "black" }}
              href="https://www.artstation.com/tesin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-artstation"></i>
            </a>
          </div>
        </div>

        <div className="c-4">
          <form
            ref={form}
            onSubmit={getintouch}
            id="contactForm"
            autoComplete="on"
          >
            <div
              className="name"
              style={{ paddingBottom: 0, display: "block", width: "100%" }}
            >
              <label htmlFor="firstName">Name*</label>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: "41px",
                }}
              >
                <div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email">Email*</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <div>
              <label htmlFor="message">Message*</label>
              <br />
              <textarea
                name="message"
                id="message"
                cols="50"
                rows="5"
                required
              ></textarea>
            </div>

            <div id="send">
              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="c-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224096.9209838606!2d76.95314720104403!3d28.64431287838633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1678388696099!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Delhi Location"
        ></iframe>
      </div>

      <Newsletter />
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar
        theme="dark"
      />
    </div>
  );
}

export default Contact;
