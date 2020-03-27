import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Api from "../../services/api";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsApp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();
  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      nome,
      email,
      whatsapp,
      city,
      uf
    };
    try {
      const response = await Api.post("/ongs", data);
      alert(`seu id de acesso:${response.data}`);
      history.push("/");
    } catch (error) {}
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />
          <h1>Faça seu cadastro</h1>
          <p>
            Faça seu castro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <input
            type="email"
            placeholder="e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsApp(e.target.value)}
          />
          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
