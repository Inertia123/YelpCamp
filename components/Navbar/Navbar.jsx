import styles from './Navbar.module.scss'
import React, { useState } from 'react'

const Navbar = () => {
    const [active, setActive] = useState(false);
    return(
        <div className={styles.nav}>
            <div className={styles.logo}>
                <img src="/assets/Logo.svg" alt="" />
            </div>
            <div className={styles.menu} onClick={ () =>setActive(! active)} >
                <img className={active ? styles.closeHam : styles.ham} src="/assets/Hamburger Menu.svg" alt="" />
                <img className={active ? styles.openCross : styles.cross} src="/assets/Close.svg" alt="" />
            </div>
            <div className={active ? styles.visible : styles.cta}>
                <a href="">Login</a>
                <a href="">Create an account</a>
            </div>
        </div>
    )
}

export default Navbar