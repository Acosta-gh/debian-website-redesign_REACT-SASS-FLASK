import React from 'react'
import { Fade } from "react-awesome-reveal";

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

const SponsorSection = () => {
    return (
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
    )
}

export default SponsorSection