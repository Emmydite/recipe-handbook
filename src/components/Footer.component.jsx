import React, { Component } from 'react'
import {FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa'

 class Footer extends Component {
    render() {
        return (
           <footer className="page__footer">
               <div className='container'>
                   <div className="column three">
                       <h2>Connect</h2>
                       <ul className="connect-list">
                        <li className="connect-list__item">
                            <a className="connect-list__link" href="https://uk.linkedin.com/in/emmy" target="newwindow">
                              <FaLinkedin className="social-icon"/>
                            </a>

                        </li>
                        <li className="connect-list__item">
                            <a className="connect-list__link" href="https://www.github.com/emmydite" target="newwindow">
                              <FaGithub className="social-icon"/>
                            </a>

                        </li>
                        <li className="connect-list__item">
                            <a className="connect-list__link" href="https://twitter.com/emmysteve" target="newwindow">
                              <FaTwitter className="social-icon"/>
                            </a>

                        </li>
                       </ul>

                   </div>
               </div>

           </footer>
        );
    }
}

export default Footer;
