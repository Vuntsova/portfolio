import React, { Fragment } from 'react';
import Footer from './Footer';

function Contact() {
  const divStyle = {
    position: 'relative'
  };
  return (
    <Fragment>
      <main id="work">
        <h1 className="lg-heading">
            My
            <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">Check out some of my projects</h2>

        <div className="projects">
            <div className="item">
                <a href="https://github.com/Vuntsova/devconnector" target="blank">
                    <img src="./img/projects/project1.jpg" alt="project" />
                </a>
                <a href="https://github.com/Vuntsova/devconnector"  className="btn-light"><i className="fas fa-eye"></i> Project</a>
                <a href="https://github.com/Vuntsova/devconnector" className="btn-dark"><i className="fab fa-github"></i> Github</a>
            </div>
            <div className="item">
                <a href="https://vuntsova.github.io/NewYorkTimesApp/">
                    <img src="./img/projects/project2.jpg" alt="project" />
                </a>
                <a href="https://vuntsova.github.io/NewYorkTimesApp/" className="btn-light"><i className="fas fa-eye"></i> Project</a>
                <a href="https://github.com/Vuntsova/NewYorkTimesApp/blob/master/index.html" className="btn-dark"><i className="fab fa-github"></i> Github</a>
            </div>
            <div className="item">
                <a href="https://videogame404.herokuapp.com" target="blank">
                    <img src="./img/projects/project3.jpg" alt="project" />
                </a>
                <a href="https://videogame404.herokuapp.com/" className="btn-light"><i className="fas fa-eye"></i> Project</a>
                <a href="https://github.com/Vuntsova/404-not-found" className="btn-dark"><i className="fab fa-github"></i> Github</a>
            </div>
            <div className="item">
                <a href="https://vuntsova.github.io/crypto_portfolio_chart/" target="blank">
                    <img src="./img/projects/project4.jpg" alt="project" />
                </a>
                <a href="https://vuntsova.github.io/crypto_portfolio_chart/" className="btn-light"><i className="fas fa-eye"></i> Project</a>
                <a href="https://github.com/Vuntsova/crypto_portfolio_chart" className="btn-dark"><i className="fab fa-github"></i> Github</a>
            </div>
            <div className="item">
                <a href="http://www.signatureprivacywalls.com/gallery.html" target="blank">
                    <img src="./img/projects/project5.jpg" alt="project" />
                </a>
                <a href="http://www.signatureprivacywalls.com/gallery.html" className="btn-light"><i className="fas fa-eye"></i> Project</a>
                <a href="#" className="btn-dark"><i className="fab fa-github"></i> Github</a>
            </div>
            <div className="item">
                <a href="#" target="blank">
                    <img src="./img/projects/project6.jpg" alt="project" />
                </a>
                <a href="#" className="btn-light"><i className="fas fa-eye"></i> Project</a>
                <a href="#" className="btn-dark"><i className="fab fa-github"></i> Github</a>
            </div>
            <div className="item">
                <a href="#" target="blank">
                    <img src="./img/projects/project7.jpg" alt="project" />
                </a>
                <a href="#" className="btn-light"><i className="fas fa-eye"></i> Project</a>
                <a href="#" className="btn-dark"><i className="fab fa-github"></i> Github</a>
            </div>
            <div className="item">
                <a href="#" target="blank">
                    <img src="./img/projects/project8.jpg" alt="project" />
                </a>
                <a href="https://evening-woodland-13600.herokuapp.com/" className="btn-light"><i className="fas fa-eye"></i> Project</a>
                <a href="https://github.com/Vuntsova/todo_react_app" className="btn-dark"><i className="fab fa-github"></i> Github</a>
            </div>
        </div>
          </main>
          <Footer></Footer>
    </Fragment>
  );
}
export default Contact;
