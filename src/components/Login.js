function Login(){
  return(
    <div className='Login'>
      <form>
        <label>Ime</label> <br></br>
        <input className='Ime' type="text" autoFocus></input> <br></br>
        <label>Prezime</label> <br></br>
        <input type="text"></input> <br></br>
        <label>Email</label> <br></br>
        <input type="email"></input> <br></br>
        <label>Broj Telefona</label> <br></br>
        <input type="tel"></input> <br></br>
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default Login;