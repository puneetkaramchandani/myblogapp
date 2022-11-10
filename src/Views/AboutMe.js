import React from "react";
import profile from "../Assets/images/profile.png";
const AboutMe = () => {
  return (
    <div className="row h-100 m-0 p-0 justify-content-center font-monospace">
      <div className="col-md-4 text-center">
        <img
          width={220}
          className="img-fluid border rounded-circle bg-warning"
          src={profile}
          alt="Puneet Karamchandani"
        />
        <h5 className="text-muted mt-2">Software Engineer</h5>
        <h3 className="mt-2">Puneet Karamchandani</h3>
      </div>
      <div className="col-md-6 fs-5">
        <p className="text-justify">
          Hi my name is Puneet Karamchandani and I am tech pundit and a
          management professional trained to solve any business problem with my
          technical and management skills. I am conscientious and value-driven
          person with a great insight into people and situations and I values
          deep, authentic relationships and desire to contribute to the welfare
          of society.
        </p>
        <p className="text-justify">
          I have a great understanding of modern technologies and the ability to
          implement those technologies to build new-age technology products. I
          am a very creative person, passionate about designing, developing, and
          managing technology products that add value to society.
        </p>
        <p>Some of my key skill includes:</p>
        <ul>
            <li>Computer Programming (C, C++, Java, Python, JavaScript, R)</li>
            <li>Software Designing, Development, Management, and Deployment</li>
            <li>Full Stack Web Development</li>
            <li>React,React Native, Redux, BootStrap, Material UI, and many more frontend libraries</li>
            <li>NodeJs, Express and MongoDB</li>
            <li>Machine Learning and Artificial Intelligence</li>
            <li>AWS Cloud Services</li>
            <li>Business & Social Media Analytics (Using R)</li>
            <li>Project Management Tolls (Jira & Asana)</li>
            <li>Development Tools (VS Code, Git, GitHub, Postman, etc.)</li>
            <li>Designing Tools (Figma)</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
