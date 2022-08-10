import styles from './Landing.module.scss'

const Landing = () =>{
    return(
        <div className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <div className={styles.logo}>
                        <img src="/assets/Logo.svg" alt="" />
                    </div>
                    <div className={styles.heroImgMob}>
                        <img src="/assets/Hero Image (Tablet and Mobile).jpg" alt="" />
                    </div>
                    <div className={styles.textWrapper}>
                        <div className={styles.heroText}>
                        <h1>
                            Explore the best camps on Earth.
                        </h1>
                        <p>YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.</p>
                        <div className={styles.ticks}>
                            <div className={styles.tick}>
                                <img src="/assets/Checkmark.svg" alt="" />
                                <p>Add your own camp suggestions.</p>
                            </div>
                            <div className={styles.tick}>
                                <img src="/assets/Checkmark.svg" alt="" />
                                <p>Leave reviews and experiences.</p>
                            </div>
                            <div className={styles.tick}>
                                <img src="/assets/Checkmark.svg" alt="" />
                                <p>See locations for all camps.</p>
                            </div>
                        </div>
                        <button>View Campgrounds</button>
                        <div className={styles.brands}>
                            <p>Patnered with:</p>
                            <div className={styles.brandNames}>
                                <img src="/assets/Airbnb.svg" alt="" />
                                <img src="/assets/Booking.svg" alt="" />
                                <img src="/assets/Plum Guide.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={styles.heroImg}>
                    <img src="/assets/Hero Image.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Landing