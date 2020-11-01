import React from 'react'
import styles from './products.module.css'

const products = () => {
    return (
        <div>
            <div className={styles.sidebarmodalcontent}>
        <ul>
            <li className={styles.clickable}><i className="bx bx-x"></i></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Help</a></li>
        </ul>

        <a href="#">Login</a>
        <a href="#">Create Account</a>
        <a href="#">Company</a>
        <a href="#">Press</a>
        <a href="#">FAQ</a>
        <a href="#">Shipping & Production</a>
    </div>
    <div className={styles.container}>

        <div className={styles.promotionbar}>Enjoy 30% OFF in the October Sale <strong>Use code: BPKTL</strong></div>
        <div className={styles.navbar}>
            <div className={styles.burger}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.header}>CHIVALRY</div>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </nav>
            <div className={styles.account}>
                <i className='bx bx-user'></i>
                <i className='bx bx-shopping-bag'></i>
            </div>
        </div>

        <div className={styles.hero}></div>
        {/* <div className={styles.ponsors}>
            PARTNERS: 
            <div>
                <img src={require('./images/logos/YG_Entertainment_Logo.svg')} />
                <img src={require("./images/logos/blackpink.png")} />
                <img src={require("./images/logos/guess_jeans.png")} />
            </div>
            <div>
                <img src={require("./images/logos/MBC.png")} />
                <img src={require("./images/logos/mtv.png")} />
            </div>
        </div> */}
        <div className={styles.featured-products}>
            
            <div className={styles.cardwrapper}>
                <div className={styles.card}>
                    <img className={styles.cardimg} src={require("./images/Garments/alexandre-trouve-LP3HsuFxMxM-unsplash.jpg")} />
                    <div className={styles.cardtitle}>Suits for you to run the world</div>
                    <div className={styles.cardprice}>$50</div>
                    <button className={styles.cardbutton}>Buy</button>
                </div>
                <div className={styles.card}>
                    <img className={styles.cardimg} src={require("./images/Garments/austin-wade-lNy-Yi0U-3o-unsplash.jpg")} />
                    <div className={styles.cardtitle}>Charm her with a perfect date night</div>
                    <div className={styles.cardprice}>$50</div>
                    <button className={styles.cardbutton}>Buy</button>
                </div>
            </div>

            <div className={styles.cardwrapper}>
                <div className={styles.card}>
                    <img className={styles.cardimg} src={require("./images/Garments/ilya-gorborukov-syx5GyrkeZ8-unsplash.jpg")} />
                    <div className={styles.cardtitle}>It's time to light up the backstreets</div>
                    <div className={styles.cardprice}>$50</div>
                    <button className={styles.cardbutton}>Buy</button>
                </div>
                <div className={styles.card}>
                    <img className={styles.cardimg} src={require("./images/Garments/sorin-sirbu-ifYt0sKdJYk-unsplash.jpg")} />
                    <div className={styles.cardtitle} >A rock concert? No issues</div>
                    <div className={styles.cardprice} >$50</div>
                    <button className={styles.cardbutton}>Buy</button>
                    
                </div>
            </div>
        </div>

        <div className={styles.jeans}>
            <div className={styles.jeanswrapper}>
                <img className={styles.jeansimg} src={require("./images/Garments/pedram-normohamadian-w-93ar9an2Q-unsplash.jpg")} />
                <div className={styles.jeanstext} >
                    <h2 className={styles.jeansheader} >You take control of the your Suits.</h2>
                    <p>It all started in 1981 when the Marciano brothers designed a pair of stonewashed, slimcut jeans. Since then, GUESS has continued to create iconic women’s denim that sets the trends across the industry. Whether they are lowrise or highwaisted, you’ll turn heads in our sculpting women's jeans with a secondskin fit that hugs your every curve.</p>
                    <div className={styles.jeansextratext}>
                        <p>Explore women’s jeans in classic skinny jeans, bestselling Sexy Curve and ontrend flared cuts with a selection of light wash jeans, dark wash jeans and straight jeans. Find everything from distressed details to trendright cropped hems, perfect for warmer weather. Look for modern takes on retro styles like highrise bootcut jeans in an ultraflattering slim fit.</p>
                        <p>Denim doesn’t just stop at jeans. Pair denim jackets for women with cutoff shorts for a laidback look. Dress for a night out in a blue denim jumpsuit or an embellished jean mini skirt. Take your look daytonight in a jean jacket with zipfront designs, button details and faded finishes.</p>
                    </div>
                    <p className={styles.jeansreadmore}>Read more...</p>
                    <button className={styles.jeansbutton}>Shop More Suits</button>
                </div>
            </div>
        </div>

        <div className={styles.instagram}>
            <div className={styles.instagramwrapper}>
                <h2>#BeAMan</h2>
                <ul className={styles.instagramphotos}>
                    <li><img src={require("./images/instagram/1.jpg")} /></li>
                    <li><img src={require("./images/instagram/2.jpg")} /></li>
                    <li><img src={require("./images/instagram/3.jpg")} /></li>
                    <li><img src={require("./images/instagram/4.jpg")} /></li>
                    <li><img src={require("./images/instagram/5.jpg")} /></li>
                </ul>
            </div>
        </div>

        <div className={styles.footer}>
            <div className={styles.footerwrapper}>
                <div className={styles.footerlist}>
                    <ul>
                        <li>More</li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Jeans</a></li>
                        <li><a href="#">Kids</a></li>
                        <li><a href="#">Apparel</a></li>
                    </ul>
                    <ul>
                        <li>Help</li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Customer Service</a></li>
                    </ul>
                    <ul>
                        <li>Discover</li>
                        <li><a href="#">Stores</a></li>
                        <li><a href="#">Wholesale</a></li>
                        <li><a href="#">Refer Friends</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className={styles.signup}>
                    <p>Sign up for our free newsletter and be the first to hear about upcoming sales, discount codes and new arrivals.</p>
                    <div className={styles.signupform}>
                        <input className={styles.signupinput} type="text" name="mail" placeholder="Enter Email Address" />
                        <button className={styles.signupbutton}><i className='bx bxs-right-arrow-circle'></i></button>
                    </div>
                    <div className={styles.signupicons}>
                        <i className='bx bxl-facebook-circle'></i>
                        <i className='bx bxl-twitter'></i>
                        <i className='bx bxl-youtube'></i>
                        <i className='bx bxl-instagram'></i>
                        <i className='bx bxl-pinterest'></i>
                    </div>
                </div>
            </div> 
        </div> 

    </div> 
        </div>
    )
}

export default products
