import React from "react"
import { Link } from "gatsby"
import phdevlogo from "../images/phdevlogo.png"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Header(){
  return(
    <header>
      <Link to="https://github.com/phbomfim/">
        <img className="logo" src={phdevlogo} alt="" />
      </Link>
      <ul>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/">About</ListLink>
        <ListLink to="/">Contact</ListLink>
      </ul>
    </header>
  )
}