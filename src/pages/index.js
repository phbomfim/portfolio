import React from "react"

import Layout from "../components/layout"

import phbomfim from "../images/phbomfim.png"

import css3 from "../images/css3.svg"
import gatsby from "../images/gatsby.svg"
import javascript from "../images/javascript.svg"
import php from "../images/php.svg"
import react from "../images/react.svg"
import ruby from "../images/ruby.svg"
import rubyonrails from "../images/rubyonrails.svg"
import wordpress from "../images/wordpress.svg"

export default function Home() {
  return (
    <Layout>
      <div className="content" id="Home">
        <img className="avatar" src={phbomfim} />
        <div className="info">
          <h1>Paulo Henrique Bomfim </h1>
          <p>
            Do you want to have your dream solution ? I'm the perfect persom to do this !!
            Talk to me !!
          </p>
        </div>
        <div className="about" id="About">
          <h1>About Me</h1>
          <p>
            I'm a Software Enginer, always open to new ideas !
            Freelancer, student and enthusiastic about change. From Salvador, Brazil, developing applications since 2016.
            I started in this world when I was 14 years old, developing personal games servers and creating cheats for them :)
            When I started in a university I developed logical programs and participated in several programming competitions.
            Shortly thereafter I entered the world of web programming, developing apps, websites, dashboards and a lot of programs.
            In 2017 I made my first contact with a company and I created a data controller for more than 200 user to use directly.
            In 2018 I made my first contact with a programming team, at OmniCode Solutions. It was this place that I had contatc with the main tecnologies used by the main programmers in the world.
            Since then I don't stop to study and building solutions to the most diverse clients.
            In 2019 I started participating in volunteer projects to teach programming to young people. I really love teach.
            And 2019 I also created my blog, where I try to pass on my knowledge to the world. Whenever possible I make posts about the most diverse contents.
          </p>
        </div>
        <div className="skills" id="Skills">
          <h1>Main skills</h1>
          <ul className="list-tags">
            <img className="logo-link css3" src={css3} alt="" />
            <img className="logo-link gatsby" src={gatsby} alt="" />
            <img className="logo-link js" src={javascript} alt="" />
            <img className="logo-link php" src={php} alt="" />
            <img className="logo-link react" src={react} alt="" />
            <img className="logo-link ruby" src={ruby} alt="" />
            <img className="logo-link rails" src={rubyonrails} alt="" />
            <img className="logo-link word" src={wordpress} alt="" />
          </ul>
        </div>
        <div className="contact" id="Contact">
          <a href="mailto:contact@phbomfim.dev"><h1>Contact Me !</h1></a>
        </div>
      </div>
    </Layout>
  );
}