import { useState } from "react";

function Login (){
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    ime: "",
    prezime: "",
    email: "",
    telefon: "",
  });
  const [greska, setGreska] = useState({});

  const handleChange = (e) => {
    const {className , value} = e.target

    setFormData((prev) => ({
      ...prev,
      [className]: value,
    }));
  }

  const validacija = () => {

    const novaGreska = {};

    if(formData.ime === "") novaGreska.ime = 'Ime je obavezno polje!';

    if (formData.prezime === "") novaGreska.prezime = 'Prezime je obavezno polje!';

    if(formData.email === "") novaGreska.email = 'Email je obavezno polje!';
    else if(!formData.email.includes('@')) novaGreska.email = 'Email mora sadrzavati @';

    if(formData.telefon === "") novaGreska.telefon = 'Telefon je obavezno polje!';


    return novaGreska;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setGreska(validacija());

    if (Object.keys(greska).length === 0) {
      alert('Registracija uspješna!');

      // Resetuj formu
      setFormData({
        ime: '',
        email: '',
        prezime: '',
        telefon: '',
      });
      setSubmitted(false);
    }
  }
  
  return (
    <form 
      className="login-form"
      onSubmit={handleSubmit}>

      <label>Ime</label><br/>
      <input 
        className="ime"
        type="text"
        value={formData.ime}
        onChange={handleChange}>
      </input> 
      <br/>
      {submitted && greska.ime && <p style={{ color: 'red' }}>{greska.ime}</p>}

      <label>Prezime</label><br/>
      <input 
        className="prezime"
        type="text"
        value={formData.prezime}
        onChange={handleChange}>
      </input>
      <br/>
      {submitted && greska.prezime && <p style={{ color: 'red' }}>{greska.prezime}</p>}

      <label>Email</label><br/>
      <input 
        className="email"
        type="email"
        value={formData.email}
        onChange={handleChange}>
      </input>
      <br/>
      {submitted && greska.email && <p style={{ color: 'red' }}>{greska.email}</p>}

      <label>Telefon</label><br/>
      <input 
        className="telefon"
        type="tel"
        value={formData.telefon}
        onChange={handleChange}> 
      </input>
      <br/>
      {submitted && greska.telefon && <p style={{ color: 'red' }}>{greska.telefon}</p>}

      <button type="submit">Login</button>
    </form>
  )
}

export default Login;

/*
import React, { useState } from 'react';

function Registracija() {
  const [forma, setForma] = useState({
    ime: '',
    email: '',
    sifra: '',
  });

  const [greske, setGreske] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForma((prevForma) => ({
      ...prevForma,
      [name]: value,
    }));
  };

  const validiraj = () => {
    const noveGreske = {};

    if (forma.ime.trim() === '') {
      noveGreske.ime = 'Ime je obavezno';
    }

    if (!forma.email.includes('@')) {
      noveGreske.email = 'Email mora sadržavati @';
    }

    if (forma.sifra.length < 6) {
      noveGreske.sifra = 'Šifra mora imati barem 6 karaktera';
    }

    return noveGreske;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const greskeValidacije = validiraj();
    setGreske(greskeValidacije);

    if (Object.keys(greskeValidacije).length === 0) {
      alert('Registracija uspješna!');

      // Resetuj formu
      setForma({
        ime: '',
        email: '',
        sifra: '',
      });
      setSubmitted(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Ime:</label>
        <input
          type="text"
          name="ime"
          value={forma.ime}
          onChange={handleChange}
        />
        {submitted && greske.ime && <p style={{ color: 'red' }}>{greske.ime}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={forma.email}
          onChange={handleChange}
        />
        {submitted && greske.email && <p style={{ color: 'red' }}>{greske.email}</p>}
      </div>

      <div>
        <label>Šifra:</label>
        <input
          type="password"
          name="sifra"
          value={forma.sifra}
          onChange={handleChange}
        />
        {submitted && greske.sifra && <p style={{ color: 'red' }}>{greske.sifra}</p>}
      </div>

      <button type="submit">Registruj se</button>
    </form>
  );
}

*/