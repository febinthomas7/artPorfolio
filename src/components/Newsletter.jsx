import { useState } from 'react';

function Newsletter() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }

    try {
      const params = {
        First_Name: formData.firstName,
        Last_Name: formData.lastName,
        Email_id: formData.email,
      };

      if (window.emailjs) {
        await window.emailjs.send('service_0ti6tap', 'template_5tey5xi', params);
        setFormData({ firstName: '', lastName: '', email: '' });
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <footer className="newsletter">
      <div className="n-1">
        <p id="n-11">JOIN MY NEWSLETTER</p>
        <p>To keep up to date with original works...</p>
      </div>

      {showAlert && <div className="alert">Fill The Fields Properly</div>}
      {showSuccess && <div className="success">&nbsp;Subscribed&nbsp;</div>}

      <div className="n-2">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address"
          required
        />
        <button onClick={handleSubmit}>sign up</button>
      </div>

      <div className="n-3">
        <p>We respect your privacy</p>
      </div>

      <div className="n-4">
        <a
          style={{ color: 'black' }}
          href="https://www.instagram.com/tesinthomas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          style={{ color: 'black' }}
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
