import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/avatar.jpg";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Shivam Anand.
        </BigTitle>
        <Subtitle>Full Stack Web Developer.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Experiences</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="canvas.space"
            link="https://canvas.space/"
            bg="#ffffff38"
          >
            Responsible For building Reusable Feature components in NextJS.
          </ProjectCard>
          <ProjectCard
            title="HackerLabs"
            // link="https://shivam-chatapp.herokuapp.com//"
            bg="#ffffff38"
          >
            Responsible for making Reusable UI Components in ReactJS for various
            Projects.
          </ProjectCard>
          <ProjectCard
            title="Altcampus"
            link="https://altcampus.school/"
            bg="#ffffff38"
          >
            Understood and used frameworks in project for stability of
            application.
          </ProjectCard>
          <ProjectCard
            title="BLOG"
            link="https://darkshadow.netlify.com/"
            bg="#ffffff38"
          >
            This is my blog.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Shivam Anand" />
          <AboutSub>
            Experienced Web Developer adept in all stages of advanced web
            development especially on MERN Stack.
            <a href="https://darkshadow.netlify.com/"> here</a>.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Bringing forth expertise in design, installation, testing and
          maintenance of web systems. <br />
          <br />
          {/* At present I am working a Task Manager Web App. The project aims at
          designing a To-Do application which can be used in saving daily tasks,
          we can view pending task and completed ones separately. I had used
          HTML, CSS and JavaScript for client side where as NodeJS and MongoDB
          for server side. */}
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:shivamanand252@gmail.com">Hi</a> or find me on
            other platforms:{" "}
            <a href="https://www.instagram.com/shivamanand.dev">Instagram </a>
            <a href="https://github.com/shivamanand-dev"> Github </a>
            <a href="https://twitter.com/er_shivam_anand">Twitter.</a>
            <br />
          </ContactText>
        </Inner>
        <Footer />
      </Contact>
    </Parallax>
  </>
);

export default Index;
