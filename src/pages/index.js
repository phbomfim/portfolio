import React from "react"

import Layout from "../components/layout"

import phbomfim from "../images/phbomfim.png"

import code from "../images/code.svg"
import telegram from "../images/telegram.svg"
import lines from "../images/lines.svg"
import css3 from "../images/css3.svg"
import gatsby from "../images/gatsby.svg"
import javascript from "../images/javascript.svg"
import php from "../images/php.svg"
import react from "../images/react.svg"
import ruby from "../images/ruby.svg"
import rubyonrails from "../images/rubyonrails.svg"
import wordpress from "../images/wordpress.svg"
import bootstrap from "../images/bootstrap.svg"
import cplusplus from "../images/cplusplus.svg"
import docker from "../images/docker.svg"
import graphql from "../images/graphql.svg"
import heroku from "../images/heroku.svg"
import linux from "../images/linux.svg"
import mysql from "../images/mysql.svg"
import netlify from "../images/netlify.svg"
import postgresql from "../images/postgresql.svg"
import tailwindcss from "../images/tailwindcss.svg"
import webpack from "../images/webpack.svg"

export default function Home() {
  return (
    <Layout>
      <div className="content">
        <img className="avatar" src={phbomfim} />
        <h1>Paulo Henrique Bomfim </h1>
        <h2>Full-stack engineer</h2>
      </div>
      <div className="resume">
        <p>Hey there—I'm Paulo.</p>
        <p>I'm a full-stack developer full of passion for all aspects of building great software. 
        I've worked on projects of various scales, both solo and as part of a team.</p>
        <p>I'm keen to collaborate with passionate people working on interesting projects. 
        If that's you and you're looking for the right guy for a job, continue reading to get to know me and see if we're a match.</p>
      </div>
      <div className="skills row">
        <h1><img className="logo-tag" src={code}/>Skillset</h1>
        <div className="column">
          <h3>Front-end development</h3>
          <ul className="list-tags">
            <li><img className="logo-tag bootstrap" src={bootstrap} alt="" /> BOOTSTRAP </li>
            <li><img className="logo-tag css3" src={css3} alt="" /> CSS </li>
            <li><img className="logo-tag gatsby" src={gatsby} alt="" /> GATSBY</li>
            <li><img className="logo-tag js" src={javascript} alt="" /> JAVASCRIPT</li>
            <li><img className="logo-tag react" src={react} alt="" /> REACT </li>
            <li><img className="logo-tag rails" src={rubyonrails} alt="" /> RUBY IN RAILS </li>
            <li><img className="logo-tag tailwindcss" src={tailwindcss} alt="" /> TAILWIND CSS </li>
            <li><img className="logo-tag webpack" src={webpack} alt="" /> WEBPACK </li>
            <li><img className="logo-tag word" src={wordpress} alt="" /> WORDPRESS </li>
          </ul>
        </div>
        <div className="column">
          <h3>Back-end development</h3>
          <ul className="list-tags">
            <li><img className="logo-tag cplusplus" src={cplusplus} alt="" /> CPLUSPLUS </li>
            <li><img className="logo-tag graphql" src={graphql} alt="" /> GRAPHQL </li>
            <li><img className="logo-tag mysql" src={mysql} alt="" /> MYSQL </li>
            <li><img className="logo-tag php" src={php} alt="" /> PHP </li>
            <li><img className="logo-tag postgresql" src={postgresql} alt="" /> POSTGRESQL </li>
            <li><img className="logo-tag ruby" src={ruby} alt="" />  RUBY </li>        
          </ul>
        </div>
        <div className="column">
          <h3>DevOps</h3>
          <ul className="list-tags">
            <li><img className="logo-tag docker" src={docker} alt="" /> DOCKER </li>
            <li><img className="logo-tag heroku" src={heroku} alt="" /> HEROKU </li>
            <li><img className="logo-tag linux" src={linux} alt="" />  LINUX </li>
            <li><img className="logo-tag netlify" src={netlify} alt="" /> NETLIFY </li>    
          </ul>
        </div>      
      </div>
      <div className="about">
        <h1><img className="logo-tag" src={lines}/>About Me</h1>
        <p className="about-text">
          I'm a Software Enginer, always open to new ideas !
          Freelancer, student and enthusiastic about change. From Salvador, Brazil, developing applications since 2016.
          I started in this world when I was 14 years old, developing personal games servers and creating cheats for them.
          When I started in a university I developed logical programs and participated in several programming competitions.
          Shortly thereafter I entered the world of web programming, developing apps, websites, dashboards and a lot of programs.
          In 2017 I made my first contact with a company and I created a data controller for more than 200 user to use directly.
          In 2018 I made my first contact with a programming team, at OmniCode Solutions. It was this place that I had contatc with the main tecnologies used by the main programmers in the world.
          Since then I don't stop to study and building solutions to the most diverse clients.
          In 2019 I started participating in volunteer projects to teach programming to young people. I really love teach.
          And 2019 I also created <a href="https://phbomfim.dev" target="_blank">my blog</a>, where I try to pass on my knowledge to the world. Whenever possible I make posts about the most diverse contents.
        </p>
      </div>
      <div className="contact">
        <h2>Want to get in touch ?<img className="logo-tag" src={telegram}/> </h2>
        <p>Shoot me an email and I'll get back to you soon 🙂 </p>
        <div className="contact-box"><a href="mailto:contact@phbomfim.dev"><h4 className="ct">Get In Touch </h4></a></div>
      </div>
    </Layout>
  );
}