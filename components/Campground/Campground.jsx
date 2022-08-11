import styles from './Campground.module.scss'

const Campground = () =>{
    return(
        <div className={styles.camp}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src="/assets/Logo.svg" alt="" />
                </div>
                <div className={styles.menu}>
                    <img  className={styles.ham} src="/assets/Hamburger Menu.svg" alt="" />
                    <img  className={styles.cross} src="/assets/Close.svg" alt="" />
                </div>
                <div className="cta">
                    <a href="">Login</a>
                    <a href="">Create an account</a>
                </div>
            </div>
        </div>
    )
}
export default Campground