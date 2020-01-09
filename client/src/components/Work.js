import React, { Fragment } from 'react';
import Footer from './Footer'

function Contact() {
  const divStyle = {
    position: 'relative'
  };
  return (
    <Fragment>
      <main id="work">
        <h1 class="lg-heading">
            My
            <span class="text-secondary">Work</span>
        </h1>
        <h2 class="sm-heading">Check out some of my projects</h2>

        <div class="projects">
            <div class="item">
                <a href="https://github.com/Vuntsova/devconnector" target="blank">
                    <img src="./img/projects/project1.jpg" alt="project" />
                </a>
                <a href="https://github.com/Vuntsova/devconnector"  class="btn-light"><i class="fas fa-eye"></i> Project</a>
                <a href="https://github.com/Vuntsova/devconnector" class="btn-dark"><i class="fab fa-github"></i> Github</a>
            </div>
            <div class="item">
                <a href="https://vuntsova.github.io/NewYorkTimesApp/">
                    <img src="./img/projects/project2.jpg" alt="project" />
                </a>
                <a href="https://vuntsova.github.io/NewYorkTimesApp/" class="btn-light"><i class="fas fa-eye"></i> Project</a>
                <a href="https://github.com/Vuntsova/NewYorkTimesApp/blob/master/index.html" class="btn-dark"><i class="fab fa-github"></i> Github</a>
            </div>
            <div class="item">
                <a href="https://videogame404.herokuapp.com" target="blank">
                    <img src="./img/projects/project3.jpg" alt="project" />
                </a>
                <a href="https://videogame404.herokuapp.com/" class="btn-light"><i class="fas fa-eye"></i> Project</a>
                <a href="https://github.com/Vuntsova/404-not-found" class="btn-dark"><i class="fab fa-github"></i> Github</a>
            </div>
            <div class="item">
                <a href="https://vuntsova.github.io/crypto_portfolio_chart/" target="blank">
                    <img src="./img/projects/project4.jpg" alt="project" />
                </a>
                <a href="https://vuntsova.github.io/crypto_portfolio_chart/" class="btn-light"><i class="fas fa-eye"></i> Project</a>
                <a href="https://github.com/Vuntsova/crypto_portfolio_chart" class="btn-dark"><i class="fab fa-github"></i> Github</a>
            </div>
            <div class="item">
                <a href="http://www.signatureprivacywalls.com/gallery.html" target="blank">
                    <img src="./img/projects/project5.jpg" alt="project" />
                </a>
                <a href="http://www.signatureprivacywalls.com/gallery.html" class="btn-light"><i class="fas fa-eye"></i> Project</a>
                <a href="#" class="btn-dark"><i class="fab fa-github"></i> Github</a>
            </div>
            <div class="item">
                <a href="#" target="blank">
                    <img src="./img/projects/project6.jpg" alt="project" />
                </a>
                <a href="#" class="btn-light"><i class="fas fa-eye"></i> Project</a>
                <a href="#" class="btn-dark"><i class="fab fa-github"></i> Github</a>
            </div>
            <div class="item">
                <a href="#" target="blank">
                    <img src="./img/projects/project7.jpg" alt="project" />
                </a>
                <a href="#" class="btn-light"><i class="fas fa-eye"></i> Project</a>
                <a href="#" class="btn-dark"><i class="fab fa-github"></i> Github</a>
            </div>
            <div class="item">
                <a href="#" target="blank">
                    <img src="./img/projects/project8.jpg" alt="project" />
                </a>
                <a href="https://evening-woodland-13600.herokuapp.com/" class="btn-light"><i class="fas fa-eye"></i> Project</a>
                <a href="https://github.com/Vuntsova/todo_react_app" class="btn-dark"><i class="fab fa-github"></i> Github</a>
            </div>
        </div>
          </main>
          <Footer></Footer>
    </Fragment>
  );
}
export default Contact;
