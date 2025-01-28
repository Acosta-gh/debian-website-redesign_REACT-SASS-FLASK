import React from 'react'
import { Fade } from "react-awesome-reveal";

const FossSection = () => {
    return (
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
    )
}

export default FossSection