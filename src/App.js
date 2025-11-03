import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">🌾 AgriBridge</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#impact">Impact</a>
        </div>
        <div className="nav-buttons">
          <button className="outline-btn">Join as Farmer</button>
          <button className="filled-btn">Join as Expert</button>
        </div>
      </nav>

      <main className="hero">
        <div className="hero-text">
          <span className="badge">Empowering Agriculture Globally</span>
          <h1>
            Connecting Farmers, Experts, and Communities for Sustainable
            Agriculture
          </h1>
          <p>
            AgriBridge is a comprehensive platform that bridges the gap between
            farmers, agricultural experts, and support networks. Our mission is
            to democratize access to farming knowledge, create meaningful
            connections, and drive sustainable agricultural practices worldwide.
          </p>
          <div className="hero-buttons">
            <button className="filled-btn">Join as Farmer</button>
            <button className="outline-btn">Explore Knowledge</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.pexels.com/photos/10255172/pexels-photo-10255172.jpeg"
            alt="Farming field"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
