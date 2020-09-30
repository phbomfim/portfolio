import React from "react"

import Layout from "../components/layout"

import phbomfim from "../images/phbomfim.jpg"

export default function Home() {
  return (
    <Layout>
      <div className="info-content">
        <img className="avatar" src={phbomfim} alt="" />
        <h1> Software Engineer </h1>
        <p>
          What do I like to do? Lots of course but definitely enjoy building
          What do I like to do? Lots of course but definitely enjoy building
          What do I like to do? Lots of course but definitely enjoy building
          What do I like to do? Lots of course but definitely enjoy building
          What do I like to do? Lots of course but definitely enjoy building
          What do I like to do? Lots of course but definitely enjoy building
          What do I like to do? Lots of course but definitely enjoy building
          What do I like to do? Lots of course but definitely enjoy building
        </p>
      </div>
      <div className="about-content">
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
      <div className="contact-content">
        <a href="mailto:contact@phbomfim.dev"><h1>Contact Me</h1></a>
        <p>
          Contact me ! Contact me ! Contact me ! Contact me !
          Contact me ! Contact me ! Contact me ! Contact me !
          Contact me ! Contact me ! Contact me ! Contact me !
          Contact me ! Contact me ! Contact me ! Contact me !
          Contact me ! Contact me ! Contact me ! Contact me ! 
          Contact me ! Contact me ! Contact me !
        </p>
      </div>
    </Layout>
  );
}

