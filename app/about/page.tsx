import React from "react";
import NavHeader from "../components/navheader";
import Footer from "../components/footer";

export default function About() {
  return (
    <>
      <NavHeader />
      <main>
        <div className="py-20 flex flex-col lg:flex-row gap-5">
          <div className="lg:w-1/2 sm:w-full h-100 order-2 lg:order-1 bg-gray-300">
            {/* <img src="/me.jpg" alt="about me" /> */}
          </div>
          <div className="lg:w-1/2 sm:w-full text-gray-800 lg:order-2">
            <h1 className="text-gray-800">About me</h1>
            <p className="text-gray-800">
              in August 2019, I had my first internship opportunity in the IT
              area. I started my professional journey working as a graphic
              designer and web designer, in the meantime, I entered the Computer
              Science university and prepared myself for an opportunity as a
              developer. In May 2021, I got this opportunity, and since then I
              have been focused on deepening my knowledge on the front end with
              ReactJS and Next.Js, and on the backend with NodeJs and NestJs.
              But on my journey, I&apos;ve had the opportunity to work with
              several languages, such as Python, Dart, C++.{" "}
            </p>
            <p>
              Last year, I had the opportunity to lead a squad of three people,
              where I comprehensively applied the concepts of agile methodology.
              During this period, I conducted activities such as backlog
              refinement, sprint planning, assigning scores to tasks and
              prioritizing demands. Furthermore, I focused on teamwork,
              promoting collaboration and sharing knowledge continuously.
            </p>
          </div>
        </div>
        <div>
          <h2 className="py-5 text-gray-800">Education</h2>
          <hr />
          <div className="py-5">
            <h3 className="text-gray-800">
              Bachelor&apos;s Degree in Computer Science
            </h3>
            <h5 className="text-gray-800">2020 - 2024</h5>
          </div>
        </div>
        <div>
          <h2 className="py-5 text-gray-800">Experiences</h2>
          <hr />
          <div className="py-5">
            <h3 className="text-gray-800">
              Fullstack Developer - Solution4Fleet
            </h3>
            <ul className="text-gray-800 list-disc w-11/12 m-auto mt-3">
              <li>
                Front-end application development using ReactJS, NextJS, Styled
                Components, Chakra UI, Axios, React Query;
              </li>
              <li>
                API development using NestJS, Typescript, ORM Prisma, Swagger,
                Postman and MySQL database, REST Api;
              </li>
              <li>
                Web systems and website maintenance in PHP, Laravel, HTMLS,
                CSS3, JavaScript;
              </li>
              <li>
                Squad leadership, backlog refinement, activity prioritization,
                SCRUM, KANBAN;
              </li>
            </ul>
          </div>
          <div className="py-5">
            <h3 className="text-gray-800">
              Fullstack Developer - Cartão Vai Bem
            </h3>
            <ul className="text-gray-800 list-disc w-11/12 m-auto mt-3">
              <li>
                Website development with ReactJS, NextJS, Styled Components,
                Axios, StoryBook;
              </li>
              <li>
                API development with Typescript, Express, NodeJs, Swagger, REST
                Api;
              </li>
              <li>
                Microservices development and maintenance with NestJS, gRPC and
                HTTP communication, messaging with RabbitMQ;
              </li>
              <li>Routine development and maintenance in Python, Django;</li>
              <li>Mobile development with Flutter, Dart;</li>
            </ul>
          </div>
          <div className="py-5">
            <h3 className="text-gray-800">Web Designer - Delfa</h3>
            <ul className="text-gray-800 list-disc w-11/12 m-auto mt-3">
              <li>E-commerce management on the Tray platform;</li>
              <li>
                Creation of Landing Pages with HTMLS, CSS3 and JavaScript;
              </li>
            </ul>
          </div>
          <div className="py-5">
            <h3 className="text-gray-800">
              Web Design Assistant - Casa Freitas
            </h3>
            <ul className="text-gray-800 list-disc w-11/12 m-auto mt-3">
              <li>
                Web application development using HTML, CSS3, JavaScript and
                Bootstrap;
              </li>
              <li>Image editing and graphic design;</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
