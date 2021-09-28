import { Link } from "react-router-dom"

function Header(){
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to='/' class="navbar-brand" > COVID-19 </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to ='/' className="nav-link" >Home <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link to='/addcountry' className="nav-link" >Add Data</Link>
      </li>
      <li className="nav-item">
        <Link to='/about' className="nav-link" >About</Link>
      </li>        
    </ul>
  </div>
</nav>
        </>
       )
}

export default Header