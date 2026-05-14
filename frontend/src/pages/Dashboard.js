import React, { useState } from "react";
import API from "../services/api";
import "../App.css";

function Dashboard() {
  const [transporte, setTransporte] = useState("");
  const [energia, setEnergia] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = async () => {
    try {
      const res = await API.post("/huella/calcular", {
        transporte,
        energia,
      });

      setResultado(res.data.huella);
    } catch {
      alert("Error");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🌍 Dashboard</h1>

        <input
          placeholder="Consumo transporte"
          onChange={(e) => setTransporte(e.target.value)}
        />

        <input
          placeholder="Consumo energía"
          onChange={(e) => setEnergia(e.target.value)}
        />

        <button onClick={calcular}>Calcular Huella</button>

        {resultado !== null && (
          <h2>Huella: {resultado} kg CO₂</h2>
        )}
      </div>
    </div>
  );
}

export default Dashboard;