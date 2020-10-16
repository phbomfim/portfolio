import React from "react"

import Layout from "../components/layout"

import phbomfim from "../images/phbomfim.png"

export default function Home() {
  return (
    <Layout>
      <div className="content" id="Home">
        <img className="avatar" src={phbomfim} />
        <div className="info">
          <h1>Paulo Henrique Bomfim </h1>
          <p>
          What do I like to do? Lots of course but definitely enjoy building
          What do I like to do? Lots of course but definitely enjoy building
          What do I like to do? Lots of course but definitely enjoy building
          What do I like to do? Lots of course but definitely enjoy building
          What do I like to do? Lots of course but definitely enjoy building
        </p>
        </div>
        <div className="about" id="About">
          <h1>About Me</h1>
          <p>
            I’m good enough, I’m smart enough, and gosh darn it, people like me!
            I’m good enough, I’m smart enough, and gosh darn it, people like me!
            I’m good enough, I’m smart enough, and gosh darn it, people like me!
            I’m good enough, I’m smart enough, and gosh darn it, people like me!
            I’m good enough, I’m smart enough, and gosh darn it, people like me!
            I’m good enough, I’m smart enough, and gosh darn it, people like me!
            I’m good enough, I’m smart enough, and gosh darn it, people like me!
            </p>
        </div>
        <div className="skills" id="Skills">
          <h1>Skills</h1>
          <p>
            I’m good enough, I’m smart enough, and gosh darn it, people like me!
          </p>
        </div>
        <div className="contact" id="Contact">
          <a href="mailto:contact@phbomfim.dev"><h1>Contact Me !</h1></a>
        </div>
      </div>
    </Layout>
  );
}