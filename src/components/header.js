import React from "react"
import { Link } from "gatsby"
import phdevlogo from "../images/phdevlogo.png"

export default function Header(){
  return(
    <header>
      <Link to="https://github.com/phbomfim/"  target="_blank">
        <img className="logo" src={phdevlogo} alt="" />
      </Link>
      <ul>
        <a to="/" className="head-link">Home</a>
        <a to="/" className="head-link">About</a>
        <a to="/" className="head-link">Contact</a>
      </ul>
    </header>
  )
}