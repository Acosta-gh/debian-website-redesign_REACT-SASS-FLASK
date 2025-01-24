import React from 'react';

// Images import
import mockup__intro from "../../assets/images/laptop.png";
import mockup__performance from "../../assets/images/mockup.png";
import mockup__performance_old from "../../assets/images/mockup-old.png";
import debiansvg__logo from "../../assets/images/debian.svg";
import sponsorI from "../../assets/images/sponsors/1und1.png";
import sponsorII from "../../assets/images/sponsors/ampere.jpg";
import sponsorIII from "../../assets/images/sponsors/bytemark_logo.svg";
import sponsorIV from "../../assets/images/sponsors/conova.png";
import sponsorV from "../../assets/images/sponsors/credativ.png";
import sponsorVI from "../../assets/images/sponsors/fastly.png";
import sponsorVII from "../../assets/images/sponsors/freexian.svg";
import sponsorVIII from "../../assets/images/sponsors/gandi.svg";
import sponsorIX from "../../assets/images/sponsors/google.svg";
import sponsorX from "../../assets/images/sponsors/hetzner-logo.svg";
import sponsorXI from "../../assets/images/sponsors/hpe.png";
import sponsorXII from "../../assets/images/sponsors/logo_leaseweb.png";
import sponsorXIII from "../../assets/images/sponsors/loongson.png";
import sponsorXIV from "../../assets/images/sponsors/manda_logo.png";
import sponsorXV from "../../assets/images/sponsors/osuosl.png";
import sponsorXVI from "../../assets/images/sponsors/rcodezerodns.png";
import sponsorXVII from "../../assets/images/sponsors/ubc.png";
import sponsorXVIII from "../../assets/images/sponsors/wellcome_sanger.png";


// Libraries-components import
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
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
        <img src={debiansvg__logo} alt="Debian Logo" className="home-content-news__logo" />
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

          <div className='home-content-performance__text '>
            <Slide triggerOnce >
              <h3 className='home-content-performance__text--title'>
                More Speed
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rocket-takeoff" viewBox="0 0 16 16" className='home-content-performance__text--title-icon'>
                  <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362s.96-1.932.362-2.531c-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532" />
                  <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9 9 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a10 10 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093q.1.026.16.045c.184.06.279.13.351.295l.029.073a3.5 3.5 0 0 1 .157.721c.055.485.051 1.178-.159 2.065m-4.828 7.475.04-.04-.107 1.081a1.54 1.54 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a9 9 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006M5.205 5c-.625.626-.94 1.351-1.004 2.09a9 9 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a3 3 0 0 0-.045-.283 3 3 0 0 0-.3-.041Z" />
                  <path d="M7.009 12.139a7.6 7.6 0 0 1-1.804-1.352A7.6 7.6 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z" />
                </svg>

              </h3>
            </Slide>
            <Slide triggerOnce>
              <p>Your computer should work as fast as you do. Debian runs lightning quick and doesn't slow down over time. Apps open fast, so you can spend more time being productive.</p>
            </Slide>
          </div>
          <Slide triggerOnce direction="right">
            <img src={mockup__performance} alt="Computer Mockup" className="home-content-performance__image-element" />
          </Slide>
        </div>
        <div className='home-content-performance__block home-content-performance__block--second'>
          <Slide triggerOnce >
            <img src={mockup__performance_old} alt="Computer Mockup" className="home-content-performance__image-element home-content-performance__image-element--second" />
          </Slide>
          <div className='home-content-performance__text home-content-performance__text--second'>
            <Slide triggerOnce direction="right">
              <h3 className='home-content-performance__text--title home-content-performance__text--title--second'> Revive your old PC. Help the planet. </h3>
            </Slide>
            <Slide triggerOnce direction="right">
              <p>We've streamlined Debian to work on computers as old as 15 years. Keep using your PC for longer to save money on upgrades and reduce e-waste to save the environment.</p>
            </Slide>
          </div>
        </div>
      </section >

      <section className='home-content-foss'>
        <Fade triggerOnce duration="500">
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
        </Fade>
      </section>
      <section className='home-content-faq'>
        <Fade triggerOnce duration="500" >

          <h3 className='home-content-faq__title'>Frequently asked questions.</h3>
          <div className='home-content-faq__questions'>
    <p className='home-content-faq__text'>
        <span className='home-content-faq__text home-content-faq__text--question'>Is it free?: </span>
        Yes, Debian is completely free of charge. Almost everything in Debian is also open-source.
    </p>
    <p className='home-content-faq__text'>
        <span className='home-content-faq__text home-content-faq__text--question'>Will it work on my computer?: </span>
        Yes, Debian works on most computers. It can also be run from a live USB stick to make sure everything works fine without having to install anything.
    </p>
    <p className='home-content-faq__text'>
        <span className='home-content-faq__text home-content-faq__text--question'>Can I keep Windows?: </span>
        Yes, you can have both Windows and Debian. A menu asks you which one to use when you start the computer.
    </p>
    <p className='home-content-faq__text'>
        <span className='home-content-faq__text home-content-faq__text--question'>Will it suit my needs?: </span>
        Hopefully. Debian comes with what most people need out of the box as well as easy access to more than 60,000 software packages and 7,800 games.
    </p>
</div>

        </Fade>
      </section>
      <section className='home-content-sponsors'>
        <Fade triggerOnce duration="500" >

          <h3 className='home-content-sponsors__title'>Debian Partners</h3>
          <p className='home-content-sponsors__text'>The Partners Program was created to recognize companies and organizations that provide ongoing assistance to Debian. Because of the substantial support provided by these partners, we have been able to expand and improve Debian. We would like to officially recognize their efforts, and continue to maintain a good working relationship.</p>

          <div className='home-content-sponsors__images'>
            <img src={sponsorI} alt="1und1" />
            <img src={sponsorII} alt="Ampere" />
            <img src={sponsorIII} alt="Bytemark" />
            <img src={sponsorIV} alt="Conova" />
            <img src={sponsorV} alt="Credativ" />
            <img src={sponsorVI} alt="Fastly" />
            <img src={sponsorVII} alt="Freexian" />
            <img src={sponsorVIII} alt="Gandi" />
            <img src={sponsorIX} alt="Google" />
            <img src={sponsorX} alt="Hetzner" />
            <img src={sponsorXI} alt="HPE" />
            <img src={sponsorXII} alt="Leaseweb" />
            <img src={sponsorXIII} alt="Loongson" />
            <img src={sponsorXIV} alt="Manda" />
            <img src={sponsorXV} alt="OSUOSL" />
            <img src={sponsorXVI} alt="RcodeZeroDNS" />
            <img src={sponsorXVII} alt="UBC" />
            <img src={sponsorXVIII} alt="Wellcome Sanger" />
          </div>
        </Fade>
      </section>

    </div >
  );
}

export default Home;
