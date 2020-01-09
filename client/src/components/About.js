import React, { Fragment } from 'react';

function About() {
    const divStyle = {
      position: 'relative'
    };
  return (
    <Fragment>
      <main id="about">
        <h1 className="lg-heading">
          About
          <span className="text-secondary">Me</span>
        </h1>
        <div className="about-info">
          <img
            src="./img/portrait.jpg"
            className="bio-image"
            alt="portrait picture"
          />
          <div className="bio">
            <h3 className="text-secondary">Hi there!</h3>
            <p>
              I am Emiliya, with experience in full stack web development, I
              maintain a healthy balance between functionality and visual impact
              in all my work. I’m extremely passionate about web development in
              all it’s forms and my goal is to help businesses build and improve
              their online presence. If you have a project that you want to get
              started, think you need my help with something or just fancy
              saying hey, then{' '}
              <span href="contact.html" className="secondary-color">
                get in touch
              </span>
              .
            </p>
          </div>

          <div className="job job1">
            <h3>Advantage Software</h3>
            <h6>Court Reporting Software</h6>
            <p>
              "... She put forth great effort, and successfully figured out how
              to accomplish a very significant list of system requirements,
              performing tasks which were previously foreign to her.
            </p>
            <p>
              It is my belief that Emiliya has the potential to grow into a
              highly skilled web developer. She is also a very honest and
              sincere person. I am confident she will find success in her future
              endeavors."
              <h3>Jonathan Taylor</h3>
              <h6>Senior Software Engineer </h6>
              <h6>2019</h6>
            </p>
          </div>
          <div className="job job2" style={divStyle}>
            <h3>The Right Profile</h3>
            <h6>Psychology Software</h6>
            <p>
              "... She brought a lot of creativity to work and formed great
              relationships with her co-workers adding great value to the
              culture of the company.
            </p>
            <p>
              Emiliya is eager to work on new things, often adding valuable
              insight when a project is getting going. She expresses joy when
              starting projects and takes guidance seriously and with an open
              mind."
            </p>

            <h3>Sterling Bates</h3>
            <h6>CTO & COO</h6>
            <h6>2018</h6>
          </div>
          <div className="job job3">
            <h3>Blue Proch Inc </h3>
            <h6>Web Development</h6>
            <p>
              "... Ms Vuntsova has shown exceptional collaborative skills, she
              is inventive and a great communicator with a very detailed
              approach to meeting deadlines.{' '}
            </p>
            <p>
              Ms Vuntsova showed she is a fast learner and can handle multiple
              projects at the same time. Her responsibilities included direct
              contact with clients, graphical research for identity design, and
              website programming."
            </p>

            <h3>Jaime Jimenez</h3>
            <h6>CEO </h6>
            <h6>2016</h6>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
export default About;
