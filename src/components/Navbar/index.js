import React, { useEffect, useState } from 'react';
import './styles.css'

function Navbar() {

    const [show, handleShow] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null)
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png"
                alt="Netflix Logo"
            />

            <img
                className="nav__avatar"
                src="https://occ-0-293-999.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYnnca7HCf0z4YHtIK5R8MIGCeMyodAsxBYSBmMkYHqjSw46VWWyNQirfwxT-CkbxPkp-G84Wu-iOMwGG-r9QAs.png?r=f71"
                alt="Avatar"
            />
        </div>
    )
}

export default Navbar;
