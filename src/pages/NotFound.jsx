import React from "react";
import { useNavigate } from "react-router-dom";
import "../notFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1>404 - Page Not Found 😕</h1>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
}
