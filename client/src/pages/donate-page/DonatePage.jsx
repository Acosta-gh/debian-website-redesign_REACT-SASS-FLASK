import React from 'react';
import { Fade } from "react-awesome-reveal";

function DonatePage() {
    return (
        <div className="donate">
            <Fade cascade triggerOnce damping={0.1}>
                <h3 className="donate__maintitle">Debian Donaciones</h3>
                <div className="donate__content">
                    <p className="donate__description">
                        Debian es un proyecto libre y comunitario que depende de tu apoyo. ¡Tu donación ayuda a mantener Debian disponible para todos!
                    </p>
                    <a
                        className="donate__button"
                        href="https://www.debian.org/donations"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Donar ahora
                    </a>
                </div>
            </Fade>
        </div>
    );
}

export default DonatePage;