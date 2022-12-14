import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar(props) {
  console.log(props)
  function logout(){
    window.localStorage.removeItem('token');
    props.dispatch({type:'LOGOUT'})
  }
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-info navbar-dark">
        <div class="container-fluid align-content-center">
          <ul class="navbar-nav  ">
            <li class="nav-item">
              <Link to="/" class="nav-link active ">
                <img src="/kh2logo.png" className="" style={{width:'100px'}}></img>
              </Link>
            </li>
            <li class="nav-item" style={!props.isLoggedIn?{display:'none'}:{}}>
              <Link to="/quiz" class="nav-link active">Quiz</Link>
            </li>
            <li class="nav-item" style={!props.isLoggedIn?{display:'none'}:{}}>
              <Link to="/addProduct" class="nav-link active">Add Product</Link>
            </li>
            <li class="nav-item">
              <Link to="/allProducts" class="nav-link active">All Product</Link>
            </li>
            <li class="nav-item">
              <Link to="/login" class="nav-link active" style={!props.isLoggedIn?{}:{display:'none'}}>Login</Link>
            </li>
            <li class="nav-item">
              <span class="nav-link active" style={props.isLoggedIn?{}:{display:'none'}} onClick={logout}>Logout</span>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default connect(store=>store)(Navbar)