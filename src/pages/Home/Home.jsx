import React from 'react';
import mockup__intro from "../../assets/images/laptop.png";
import mockup__performance from "../../assets/images/mockup.png";
import mockup__performance_old from "../../assets/images/mockup-old.png";

import DebianSVG from "../../assets/images/debian.svg";

import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { ReactTyped } from "react-typed";
import NewsCard from '../../components/NewsCard/NewsCard';

const Home = () => {
  const descriptions = [
    "is Free Software.",
    "is stable and secure.",
    "has extensive Hardware Support.",
    "offers a flexible Installer.",
    "provides smooth Upgrades.",
    "is the Base for many other Distributions.",
    "is a Community."
  ];

  return (


    <div className="home">

      <section className="home-content-intro">

        <Fade cascade triggerOnce damping={0.18}>
          <h2 className="home-content-intro__title">
            Debian
          </h2>

          <h3 className="home-content-intro__subtitle">The Universal Operating System</h3>
          <h4 className="home-content-intro__caption">
            <ReactTyped
              strings={descriptions}
              typeSpeed={100}
              loop
              backSpeed={20}
              showCursor={true}
            />
          </h4>
          <div className="home-content-intro__buttons">
            <Link to="/" className="home-content-intro__button">

              Try Debian Live
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16" className='home-content-intro__button-icon'>
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
              </svg>
            </Link>
            <Link to="/" className="home-content-intro__button">
              Learn More
            </Link>
          </div>

          <img src={mockup__intro} alt="Computer Mockup" className="home-content-intro__image-element" />
        </Fade>


      </section>
      <section className='home-content-news'>
        <img src={DebianSVG} alt="Debian Logo" className="home-content-news__logo" />
        <h2 className="home-content-news__title">
          What's new in Debian 12
        </h2>
        <p className='home-content-news__text'>
          The new release of Debian includes significantly more software than its predecessor, Bullseye, with over 11,089 new packages, bringing the total to over 64,419 packages. More than 43,254 packages have been updated, which accounts for 67% of all packages in Bullseye. Additionally, over 6,296 packages (10% of those in Bullseye) have been removed for various reasons, and these will be marked as "obsolete" in package management front-ends.        </p>
        <div className='home-content-news__cards'>
          <NewsCard
            title="Updated Debian 12: 12.9 released"
            description="The Debian project is pleased to announce the ninth update of its stable distribution Debian 12. This point release mainly adds corrections for security issues, along with a few adjustments for serious problems. Security advisories have already been published separately and are referenced where available."
            imageUrl="https://picsum.photos/seed/picsum/600"
            date="January 11th, 2025"
          />
          <NewsCard
            title="Updated Debian 11: 11.11 released"
            description="The Debian project is pleased to announce the eleventh and final update of its oldstable distribution Debian 11. This point release mainly adds corrections for security issues, along with a few adjustments for serious problems. Security advisories have already been published separately and are referenced where available."
            imageUrl="https://picsum.photos/seed/picsum/600"
            date="August 31st, 2024"
          />
          <NewsCard
            title="Security support for Bullseye handed over to the LTS team"
            description=" As of 14 August 2024, three years after the initial release, the regular security support for Debian 11, comes to an end. The Debian Long Term Support (LTS) Team will take over security support from the Security and the Release Teams. "
            imageUrl="https://picsum.photos/seed/picsum/600"
            date="August 14th, 2024"
          />
        </div>
      </section>
      <section className='home-content-performance'>
        <div className='home-content-performance__block'>
          <div className='home-content-performance__text '><h3 className='home-content-performance__text--title'> More Speed </h3> <p>Your computer should work as fast as you do. Debian runs lightning quick and doesn't slow down over time. Apps open fast, so you can spend more time being productive.</p></div>
          <img src={mockup__performance} alt="Computer Mockup" className="home-content-performance__image-element" />
        </div>
        <div className='home-content-performance__block home-content-performance__block--second'>
          <img src={mockup__performance_old} alt="Computer Mockup" className="home-content-performance__image-element home-content-performance__image-element--second" />

          <div className='home-content-performance__text home-content-performance__text--second'><h3 className='home-content-performance__text--title home-content-performance__text--title--second'> Revive your old PC. Help the planet. </h3> <p>We've streamlined Debian to work on computers as old as 15 years. Keep using your PC for longer to save money on upgrades and reduce e-waste to save the environment.</p></div>
        </div>
      </section>
      <section className='home-content-foss'>
        <div className='home-content-foss__intro'>
          <h3 className='home-content-foss__title'>Everything We Do is Open Source</h3>
          <p className='home-content-foss__description'>
            Our platform itself is entirely open source, and it’s built upon a strong foundation of Free & Open Source software (like GNU/Linux). Plus, we actively collaborate within the ecosystem to improve it for everyone.
          </p>
          <a className='home-content-foss__link' href='#'> Explore Our Stack </a>
        </div>
        <div className='home-content-foss__features'>
          <div className='home-content-foss__feature'>
            <h4 className='home-content-foss__feature-title'>Secure & Privacy-respecting</h4>
            <p className='home-content-foss__feature-description'>
              When source code is available to audit, anyone—a security researcher, a concerned user, or an OEM shipping the OS on their hardware—can verify that the software is secure and not collecting or leaking personal information.
            </p>
            <a className='home-content-foss__feature-link' href='#'>Security Notices</a>
          </div>
          <div className='home-content-foss__feature'>
            <h4 className='home-content-foss__feature-title'>Built for Developers</h4>
            <p className='home-content-foss__feature-description'>
              Whether your app could benefit from a new system feature or API or you’re curious as to how an existing feature or design pattern was built, you have complete access to our source code. Copy it, learn from it, remix it, modify it, and redistribute it.
            </p>
            <a className='home-content-foss__feature-link' href='#'>Get Involved</a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
