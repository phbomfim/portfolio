import React from "react"

import Layout from "../components/layout"

import phbomfim2 from "../images/phbomfim3.png"

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
        <h2>Senior Software Engineer</h2>
      </div>
      <div className="resume">
        <p>Hey there—I'm Paulo Henrique <span role="img" aria-label="claps">👋🏾</span> </p>
        <p>I'm a Senior Software Engineer with a strong track record in software architecture, cloud solutions, and distributed systems. 
          I've led work on large-scale systems—owning technical direction, driving scalability and performance, and turning complex trade-offs into clear, documented decisions. 
          I'm used to aligning with product and stakeholders across time zones and enjoy mentoring and raising the bar with the teams I work with. 
          I'm always open to new challenges and to collaborating with people who care about building things that last. 
        </p>
        <p>If that resonates, read on to get to know me better <span role="img" aria-label="smile"> 🙂 </span> </p>
      </div>
      <div className="strengths">
        <h1 style={{ marginBottom: '40px', marginTop: '20px' }}><img className="logo-tag" src={lines} alt="" />Core Strengths</h1>
        <ul className="strengths-list">
          <li>
            <img className="logo-tag strength-icon strength-icon-architecture" src={code} alt="" aria-hidden="true" />
            <span><strong>Software architecture</strong> — Designing and evolving systems that align with business goals and stand the test of scale.</span>
          </li>
          <li>
            <img className="logo-tag strength-icon strength-icon-design" src={graphql} alt="" aria-hidden="true" />
            <span><strong>System design</strong> — Breaking down complex problems into clear, maintainable solutions and guiding implementation.</span>
          </li>
          <li>
            <img className="logo-tag strength-icon strength-icon-scale" src={kubernetes} alt="" aria-hidden="true" />
            <span><strong>Scalability and performance</strong> — Identifying bottlenecks, studying traffic patterns, making data-driven optimizations, and planning for growth.</span>
          </li>
          <li>
            <img className="logo-tag strength-icon strength-icon-docs" src={lines} alt="" aria-hidden="true" />
            <span><strong>Software documentation</strong> — Capturing architecture decisions, APIs, playbooks, and guidelines so teams can move fast and onboard smoothly.</span>
          </li>
          <li>
            <img className="logo-tag strength-icon strength-icon-communication" src={telegram} alt="" aria-hidden="true" />
            <span><strong>Communication and stakeholder relationship</strong> — Aligning with product, leadership, and remote teams across time zones and cultures.</span>
          </li>
        </ul>
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
            <li style={{ fontWeight: 'bold' }}><img className="logo-tag rails" src={rubyonrails} alt="" /> Ruby on Rails </li>
            <li><img className="logo-tag tailwindcss" src={tailwindcss} alt="" /> Tailwind CSS </li>
          </ul>
        </div>
        <div className="column">
          <h3>Programming languages</h3>
          <ul className="list-tags">
            <li><img className="logo-tag cplusplus" src={cplusplus} alt="" /> C++ (CPlusPlus) </li>
            <li style={{ fontWeight: 'bold' }}><img className="logo-tag clojure" src={clojure} alt="" /> Clojure </li>
            <li><img className="logo-tag dart" src={dart} alt="" /> Dart </li>
            <li><img className="logo-tag java" src={java} alt="" /> Java </li>
            <li><img className="logo-tag node" src={node} alt="" /> Node.js </li>
            <li><img className="logo-tag python" src={python} alt="" /> Python </li>
            <li style={{ fontWeight: 'bold' }}><img className="logo-tag ruby" src={ruby} alt="" />  Ruby </li>
          </ul>
        </div>
        <div className="column">
          <h3>Database and Storage</h3>
          <ul className="list-tags">
            <li style={{ fontWeight: 'bold' }}><img className="logo-tag datomic" src={datomic} alt="" /> Datomic</li>
            <li style={{ fontWeight: 'bold' }}><img className="logo-tag dynamo" src={dynamo} alt="" /> DynamoDB</li>
            <li><img className="logo-tag graphql" src={graphql} alt="" /> GraphQL </li>
            <li><img className="logo-tag mongodb" src={mongodb} alt="" /> MongoDB</li>
            <li><img className="logo-tag mysql" src={mysql} alt="" /> MySQL </li>
            <li style={{ fontWeight: 'bold' }}><img className="logo-tag postgresql" src={postgresql} alt="" /> PostgreSQL </li>
            <li><img className="logo-tag redis" src={redis} alt="" /> Redis</li>
            <li><img className="logo-tag sqlite" src={sqlite} alt="" /> SQLite</li>
          </ul>
        </div>
        <div className="column">
          <h3>Cloud and DevOps</h3>
          <ul className="list-tags">
            <li><img className="logo-tag azure" src={azure} alt="" /> Azure</li>
            <li style={{ fontWeight: 'bold' }}><img className="logo-tag aws" src={aws} alt="" /> AWS</li>
            <li><img className="logo-tag docker" src={docker} alt="" /> Docker </li>
            <li><img className="logo-tag google_cloud" src={google_cloud} alt="" /> Google Cloud</li>
            <li><img className="logo-tag heroku" src={heroku} alt="" /> Heroku </li>
            <li style={{ fontWeight: 'bold' }}><img className="logo-tag kubernetes" src={kubernetes} alt="" /> Kubernetes</li>
            <li><img className="logo-tag netlify" src={netlify} alt="" /> Netlify </li>    
          </ul>
        </div>      
      </div>
      <div className="about">
        <h1><img className="logo-tag" src={lines} alt="logo to about me"/>About Me</h1>
        <div className="about-text">
          <p>
            I'm a Software Engineer, always open to new ideas! Freelancer, student, and enthusiastic about change. 
            From Salvador, Brazil, developing applications since 2014 and listening to music since 1996 <span role="img" aria-label="smile">🙃</span>
          </p>
          <p>
            I started in this world when I was 14, developing personal game servers and creating cheats for them. 
            I spent many hours watching tutorials, reading files, discovering features, and testing various programs. 
            There was not much documentation in Portuguese, so I had to learn English in a "forced" way.
          </p>
          <p>
            When I started at the Federal University of Bahia (2016), I developed logical programs and participated in several programming competitions. 
            The study of logic took me to a new level, giving me more courage and a stronger desire to continue studying. 
            Shortly thereafter, I entered the world of web development, developing apps, websites, dashboards, and more.
          </p>
          <p>
            In 2017, I made my first contact with a company, and I created a data controller for more than 200 users to use directly. 
            I faced many difficulties because every study was conducted individually, without a supervisor.
          </p>
          <p>
            In 2018, I first contacted a programming team at OmniCode Solutions. 
            It was through this place that I came into contact with the main technologies used by the world's leading programmers, as well as with customers worldwide. 
            Since then, I haven't stopped studying and building solutions for the most diverse clients.
          </p>
          <p>
            In 2019, I began volunteering to teach programming to young people. I really love to teach. 
            I also participated in programming events as an instructor, working mainly with Ruby on Rails. 
            In 2019, I also created <strong><a href="https://blog.phbomfim.dev" target="_blank" rel="noreferrer">my blog</a></strong>, where I aim to share my knowledge with the world. Whenever possible, I make posts about the most diverse content.
          </p>
          <p>
            Since then, I've been working as a Software Engineer at different companies, ranging in size and purpose, always learning and building solutions for the most diverse needs. 
            I'm always looking for new challenges and opportunities to grow professionally.
          </p>
          <p>
            I believe that education is the basis for human and societal development, and I focus on this! <span role="img" aria-label="fist">✊🏾</span>
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
