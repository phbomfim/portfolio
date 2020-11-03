import React from "react"
import { Link } from "gatsby"

import phdevlogo from "../images/phdevlogo.png"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"
import stackoverflow from "../images/stackoverflow.svg"
import freecodecamp from "../images/freecodecamp.svg"

export default function Header(){
  return(
    <header>
      <Link to="#">
        <img className="logo" src={phdevlogo} alt="" />
      </Link>
      <ul className="list-links">
        <Link to="https://github.com/phbomfim/"  target="_blank" rel="noreferrer">
          <img className="logo-link github" src={github} alt="" />
        </Link>
        <Link to="https://www.linkedin.com/in/phbomfim/"  target="_blank" rel="noreferrer">
          <img className="logo-link linkedin" src={linkedin} alt="" />
        </Link>
        <Link to="https://pt.stackoverflow.com/users/86147/paulo-bomfim?tab=profile"  target="_blank" rel="noreferrer">
          <img className="logo-link stackoverflow" src={stackoverflow} alt="" />
        </Link>
        <Link to="https://www.freecodecamp.org/phbomfim"  target="_blank" rel="noreferrer">
          <img className="logo-link freecodecamp" src={freecodecamp} alt="" />
        </Link>
      </ul>
    </header>
  )
}