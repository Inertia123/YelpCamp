import styles from './Authenticate.module.scss'

const Authenticate = (props) =>{
    return(
        <div className = {styles.main} >
            <div className={styles.content}>
                <div className= {styles.header}>
                    <img  className = {styles.logo} src="/assets/Logo.svg" alt="" />
                    <a href=""> <img src="/assets/leftarrow.png" alt="" /> Back to campgrounds</a>
                </div>
                <div className={styles.startWrapper}>
                    <div className={styles.start}>
                        <h1>Start exploring camps from all around the world.</h1>
                        <div className={styles.inputs}>
                            <div className={styles.firstInput}>
                                <label htmlFor="Username">Username</label>
                                <input type="text" placeholder='inertia__05' />
                            </div>
                            <div className={styles.secondInput}>
                                <label htmlFor="Username">Password</label>
                                <input type="password" placeholder='Choose Password' />
                            </div>
                        </div>
                        <div className={styles.cta}>
                            <button>
                                {props.ctaBtn}
                            </button>
                            <p>{props.ctaPara} <a href="">{props.ctaLink}</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.comment}>
                <div className={styles.comWrapper}>
                    <div className={styles.text}>
                        <h1>"YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added."</h1>
                    </div>
                    <div className={styles.profile}>
                        <div className={styles.profileImg}>
                            <img src="/assets/User Testimonial.svg" alt="" />
                        </div>
                        <div className={styles.profileName}>
                            <h3>May Andrews</h3>
                            <p>Professional Hiker</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authenticate