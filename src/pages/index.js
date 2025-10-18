import React from "react"

import Layout from "../components/layout"

import phbomfim2 from "../images/phbomfim2.png"

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
import graphql from "../images/graphql.svg"
import bootstrap from "../images/bootstrap.svg"
import cplusplus from "../images/cplusplus.svg"
import docker from "../images/docker.svg"
import heroku from "../images/heroku.svg"
import linux from "../images/linux.svg"
import mysql from "../images/mysql.svg"
import netlify from "../images/netlify.svg"
import postgresql from "../images/postgresql.svg"
import tailwindcss from "../images/tailwindcss.svg"
import node from "../images/node-js.svg"
import clojure from "../images/clojure.svg"
import dart from "../images/dart.svg"
import java from "../images/java.svg"
import python from "../images/python.svg"
import aws from "../images/aws.svg"
import dynamo from "../images/dynamo-db.svg"
import mongodb from "../images/mongo-db.svg"
import redis from "../images/redis.svg"
import google_cloud from "../images/google-cloud.svg"
import kubernetes from "../images/kubernetes.svg"
import azure from "../images/azure.svg"
import sqlite from "../images/sqlite.svg"
import datomic from "../images/datomic.svg"

export default function Home() {
  return (
    <Layout>
      <div className="content">
        <img className="avatar" src={phbomfim2} alt="perfil_photo"/>
        <h1>Paulo Henrique Bomfim </h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="resume">
        <p>Hey there—I'm Paulo <span role="img" aria-label="claps">👋🏾</span> </p>
        <p>I'm a software engineer full of passion for all aspects of building great software. 
        I've worked on projects of various scales, both solo and as part of a team.</p>
        <p>I'm keen to collaborate with passionate people working on interesting projects. 
        If that's you're looking for the right guy for a job, continue reading to get to know me and see if we're a match.</p>
      </div>
      <div className="skills row">
        <h1><img className="logo-tag" src={code} alt="logo to skills"/>Skillset</h1>
        <div className="column">
          <h3>Web development</h3>
          <ul className="list-tags">
            <li><img className="logo-tag bootstrap" src={bootstrap} alt="" /> Bootstrap </li>
            <li><img className="logo-tag css3" src={css3} alt="" /> CSS </li>
            <li><img className="logo-tag gatsby" src={gatsby} alt="" /> Gatsby</li>
            <li><img className="logo-tag js" src={javascript} alt="" /> Javascript</li>
            <li><img className="logo-tag php" src={php} alt="" /> PHP </li>        
            <li><img className="logo-tag react" src={react} alt="" /> React </li>
            <li><img className="logo-tag rails" src={rubyonrails} alt="" /> Ruby on Rails </li>
            <li><img className="logo-tag tailwindcss" src={tailwindcss} alt="" /> Tailwind CSS </li>
          </ul>
        </div>
        <div className="column">
          <h3>Programming languages</h3>
          <ul className="list-tags">
            <li><img className="logo-tag cplusplus" src={cplusplus} alt="" /> C++ (CPlusPlus) </li>
            <li><img className="logo-tag clojure" src={clojure} alt="" /> Clojure </li>
            <li><img className="logo-tag dart" src={dart} alt="" /> Dart </li>
            <li><img className="logo-tag java" src={java} alt="" /> Java </li>
            <li><img className="logo-tag node" src={node} alt="" /> Node.js </li>
            <li><img className="logo-tag python" src={python} alt="" /> Python </li>
            <li><img className="logo-tag ruby" src={ruby} alt="" />  Ruby </li>
          </ul>
        </div>
        <div className="column">
          <h3>Database and Storage</h3>
          <ul className="list-tags">
            <li><img className="logo-tag aws" src={aws} alt="" /> AWS S3</li>
            <li><img className="logo-tag datomic" src={datomic} alt="" /> Datomic</li>
            <li><img className="logo-tag dynamo" src={dynamo} alt="" /> DynamoDB</li>
            <li><img className="logo-tag graphql" src={graphql} alt="" /> GraphQL </li>
            <li><img className="logo-tag mongodb" src={mongodb} alt="" /> MongoDB</li>
            <li><img className="logo-tag mysql" src={mysql} alt="" /> MySQL </li>
            <li><img className="logo-tag postgresql" src={postgresql} alt="" /> PostgreSQL </li>
            <li><img className="logo-tag redis" src={redis} alt="" /> Redis</li>
            <li><img className="logo-tag sqlite" src={sqlite} alt="" /> SQLite</li>
          </ul>
        </div>
        <div className="column">
          <h3>Cloud and DevOps</h3>
          <ul className="list-tags">
            <li><img className="logo-tag azure" src={azure} alt="" /> Azure</li>
            <li><img className="logo-tag aws" src={aws} alt="" /> AWS</li>
            <li><img className="logo-tag docker" src={docker} alt="" /> Docker </li>
            <li><img className="logo-tag google_cloud" src={google_cloud} alt="" /> Google Cloud</li>
            <li><img className="logo-tag heroku" src={heroku} alt="" /> Heroku </li>
            <li><img className="logo-tag kubernetes" src={kubernetes} alt="" /> Kubernetes</li>
            <li><img className="logo-tag linux" src={linux} alt="" />  Linux </li>
            <li><img className="logo-tag netlify" src={netlify} alt="" /> Netlify </li>    
          </ul>
        </div>      
      </div>
      <div className="about">
        <h1><img className="logo-tag" src={lines} alt="logo to about me"/>About Me</h1>
        <div className="about-text">
          <p>
            I'm a Software Engineer, always open to new ideas !
            Freelancer, student and enthusiastic about change. From Salvador, Brazil, developing applications since 2014 and listening to music since 1996 <span role="img" aria-label="smile2">🙃</span>
          </p>
          <p>
            I started in this world when I was 14 years old, developing personal games servers and creating cheats for them.  
            I spent many hours watching tutorials, reading files, discovering features and testing various programs.
            There was not much documentation in Portuguese, so I had to learn English in a "forced" way.
          </p>
          <p>
            When I started in the Federal University of Bahia (2016), I developed logical programs and participated in several programming competitions.
            The study of logic took me to another level, giving me more courage and more desire to continue studying.
            Shortly thereafter I entered the world of web programming, developing apps, websites, dashboards and a lot of programs.
          </p>
          <p>
            In 2017 I made my first contact with a company and I created a data controller for more than 200 user to use directly.
            I faced many difficulties, considering that every study was done individually, without the presence of a supervisor.
          </p>
          <p>
            In 2018 I made my first contact with a programming team, at OmniCode Solutions. 
            It was this place that I had contact with the main technologies used by the main programmers in the world, in addition to making contact with customers worldwide.
            Since then I don't stopped studying and building solutions for the most diverse clients.
          </p>
          <p>
            In 2019 I started participating in volunteer projects to teach programming to young people. I really love to teach.
            I also participated in programming events as an instructor, working mainly with Ruby on Rails.
            And 2019 I also created <strong><a href="https://blog.phbomfim.dev" target="_blank" rel="noreferrer">my blog</a></strong>, where I try to pass on my knowledge to the world. Whenever possible I make posts about the most diverse contents.
          </p>
          <p>
              Since them, I'm working as a Software Engineer in different companies, from different sizes and purposes, always learning and building solutions for the most diverse needs.
              I'm always looking for new challenges and opportunities to grow as a professional.
          </p>
          <p>
            <strong>I believe that education is the basis for human and living development focused on this! <span role="img" aria-label="hand">✊🏾</span></strong>
          </p>
          <p>
            If you want to see my complete curriculum, access the <strong><a href="https://resume.phbomfim.dev" target="_blank" rel="noreferrer">English</a></strong> or <strong><a href="https://curriculo.phbomfim.dev" target="_blank" rel="noreferrer">Portuguese</a></strong> version.
          </p>
        </div>
      </div>
      <div className="contact">
        <h2>Want to get in touch ?<img className="logo-tag" src={telegram} alt="get logo"/> </h2>
        <p>Shoot me an email and I'll get back to you soon <span role="img" aria-label="smile">🙂</span></p>
        <div className="contact-box"><a href="mailto:contact@phbomfim.dev"><h4 className="ct">Get In Touch </h4></a></div>
      </div>
    </Layout>
  );
}
