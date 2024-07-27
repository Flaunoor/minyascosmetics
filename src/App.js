import './App.css';
import user from './images/user.png';
import search_icon from './images/chercher.png';
import bag_icon from './images/panier.png';
import close_btn from './images/close-button.png';
import home_01 from './images/home1.jpg';
import about_01 from './images/about1.jpg';
import about_03 from './images/about3.jpg';
import arrow from "./images/arrow-right.png";
import p_1 from './images/p1.jpg'
import p_2 from './images/p2.jpg'
import p_3 from './images/p3.jpg'
import p_4 from './images/p4.jpg'
import p_5 from './images/p5.jpg'
import p_6 from './images/p6.jpg'
import p_7 from './images/p7.jpg'
import p_8 from './images/p8.jpg'
import p_9 from './images/p9.jpg'
import p_15 from './images/p15.jpg'
import blog_1 from './images/blog1.jpg'
import blog_2 from './images/blog2.jpg'
import blog_3 from './images/blog3.jpg'
import { useState , useEffect} from 'react';
import t_1 from './images/t1.png'
import t_2 from './images/t2.jpeg'
import t_3 from './images/t3.jpeg'
import fa from './images/facebook.png'
import insta from './images/instagram.png'
import tick from './images/tik-tok.png'
import yout from './images/youtube.png'
import address from './images/location.png'

import phone from './images/telephone.png'
import letter from './images/email.png'
import time from './images/clock.png'
import shopping_bag from './images/shopping-bag.png'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


import women_bg from './images/butterfly-bg2.png'
import buterfly from './images/butterfly-bg1.png'
function App() {

  const [isOpen , setIsOpen] =useState(false);
  const [isShopOpen, setIsShopOpen] =useState(false);
  const [isSearchOpen, setIsSearchOpen] =useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled , setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0);

  

  
  const openNavbar = () => {
    setIsOpen(true);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const shopList =()=>{
    setIsShopOpen(!isShopOpen);
  };


  const searchpage = () =>{
     setIsSearchOpen(!isSearchOpen)
  }
 

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY <= lastScrollY || currentScrollY === 0);
     // Update background color based on scroll position
     setIsScrolled(currentScrollY > 0);
    setLastScrollY(currentScrollY);
   
  };

 

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);


  /**animation */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden-item');
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    if (isShopOpen || isSearchOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function to ensure no-scroll is removed when the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isShopOpen, isSearchOpen]);


  

  return (
    <div className="App">

      <div className={`topbar ${isVisible ? '' : "hidden"} ${isScrolled ? 'scrolled' : ''}`}>
        <div className='left-topbar flex-row-center'>
          <img src={address} alt="location"/>
          <p>Rais 2eme etage</p>
          <div className='seperator'></div>
          <img src={time} alt="time"/>
          
          <p>
            Daily : from 10:00 am to 6:00 pm 
          </p>
        </div>

        <div className='right-topbar flex-row-center'>
          <img src={phone} alt="phone"/>
          <p>+213 36 89 56 20</p>
          <div className='seperator'></div>
          <img src={letter} alt="email"/>
          <p>
            cosmetics@minyas.com
          </p>
        </div>

      </div>

      <header className={`header ${isVisible ? '' : "hidden"} ${isScrolled ? 'scrolled' : ''}`}>
       
        <div className='side-menu flex-center' onClick={openNavbar}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
       
      
       
        <nav className= {`navbar ${isOpen ? 'open' : ''}`}>
          <div className='sidebar-top'>
            <div className='logo'>Minyas</div>
            <div className='transparent-btn close-btn' onClick={closeNavbar}>
              <img src={close_btn} alt="close" width='22px' height='22px'/>
            </div>
          </div>

          <ul className='flex-center navbar-list p-text'>
            <li><a href="#home">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Blog</a></li>
          </ul>


          <div className='contact-div flex-center'>
            <div className='seperator'></div>
            <h2 className='p-title'>Contact us</h2>
            <div className='flex-row-center'>
              <img src={address} alt="location"/>
              <p className='p-text'>Rais 2eme etage</p>
            </div>

             

            <div className='flex-row-center'>
             <img src={time} alt="time"/>
             <p className='p-text'> from 10:00 am to 6:00 pm </p>
            </div>
            
            

            <div className='flex-row-center'>
              <img src={phone} alt="phone"/>
              <p className='p-text'>+213 36 89 56 20</p>
            </div>

           
          
            <div className='flex-row-center'>
              <img src={letter} alt="email"/>
              <p className='p-text'> cosmetics@minyas.com </p>
            </div>

          </div>
        </nav>
        
        
        <div className='flex-center logo'>Minyas</div>


       
        <div className='client-div'>
          <div className='transparent-btn'>
            <img src={user} alt="user_svg" width='22px' height='22px'/>
          </div>
          <div className='transparent-btn' onClick={searchpage} >
            <img src={search_icon} alt="user_svg" width='22px' height='22px'/>
          </div>
          <div className='transparent-btn' onClick={shopList}>
            <img src={bag_icon} alt="user_svg" width='22px' height='22px'/>
          </div>
        </div>

        

        

          
        <div className={`shop-list ${isShopOpen ? 'openshop' : ''}`}>
          <div className='transparent-btn close-btn' onClick={shopList}>
            <img src={close_btn} alt="close" width='22px' height='22px'/>
          </div>
          <div className='flex-center shop-list-container'>
          <p className='p-title'>CART</p>
          <img src={shopping_bag} alt="shopping bag" />
          <p className='p-text'>No product in the cart</p>
          <button className='btn'>
            Back To shop
          </button>
          </div>
        </div>
        
      

      </header>

      <div className={`search-page ${isSearchOpen ? 'opensearch' : 'closesearch'}`}>
       <div className='transparent-btn close-btn' onClick={searchpage}>
          <img src={close_btn} alt="close" width='30px' height='30px'/>

        </div>
        
        <div className='search-bar' >
          <input type="text" className='search-input p-text' placeholder='search for product'/>
          <button className='flex-center'>
            <img src={search_icon} alt="search-icon" width='20px' height='20px' />
          </button>
        </div>
      </div>


      <section className='app__home-sec section-box' id='home'>
        <div className='container-top flex-center'>
          <div className='div-hero flex-center'>
           <h2 className='hero-title'>Discover Cosmetics</h2>
           <h2 className='hero-title'>for a unique beauty</h2>
          </div>
          <div className='flex-center'>
            <h4 className='p-sub-title'>Enhancing beauty through innovation and nature-inspired formulations.</h4>
            <button className='btn'>Explore our product</button>
          </div>
        </div>
        <div className='container-bottom'>
         <div><img src={p_8} alt="home pic" /></div>
         <div><img src={p_4} alt="home pic" /></div>
         <div><img src={home_01} alt="home pic" /></div>
         <div><img src={p_9} alt="home pic" /></div>
         <div><img src={p_7} alt="home pic" /></div>
        </div>

      </section>



      <section className='app__aboutUs-sec section-box flex-center' id='aboutus'>
        <h2 className='section-title '>About us</h2>
        <div className='container flex-center'>

          <div className='about-pic hidden-item'>
            <img src={p_15} alt="about" />
          </div>

          <div className=' about-description flex-center'>
            <p className='p-text  hidden-item'>
            At <span>Minyas</span>, we believe that radiant skin is
            the foundation of confidence and beauty.
            Our brand is dedicated to crafting luxurious
            skincare solutions that harness the power of
            nature and science.<br/> From nourishing serums
            to revitalizing masks, each product is
            meticulously formulated with premium,
            ethically-sourced ingredients designed
            to enhance and rejuvenate your skin.<br/>
            With a commitment to sustainability
            and innovation, Minyas offers a holistic 
            approach to skincare that not only transforms 
            your complexion but also respects the planet. 
            Discover the essence of timeless beauty with 
             Minyas where every product is a step towards 
            your healthiest, most luminous self.
            </p>
          </div>
         
          <div className='about-pic hidden-item'>
            <img src={about_03} alt="about" />
          </div>

        </div>

      </section>


      <section className='app__products section-box flex-center'>
        <h2 className='section-title'>Our beauty</h2>
       

        <div className='product-container flex-center'>

        
        
          <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}

          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
          }}

          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container" >

            
            <SwiperSlide className='flex-center'>
              <div className='product-card  flex-center'>
                <div className='product-pic'>
                    <img src={p_1} alt="product-pic" />
                </div>
                <div>
                <p className='p-title'>Pink Misk</p>
                <div>
                  <p className='p-text'>300 DZ</p>
                  <img src={arrow} alt="arrow" width='18px' height='18px'/>
                </div>  
              </div> 
              </div>
              
            </SwiperSlide>
          
            <SwiperSlide>
              <div className='product-card flex-center'>
                <div className='product-pic'>
                    <img src={p_2} alt="product-pic"/>
                </div>
                <div>
                <p className='p-title'>Red Misk</p>
                <div>
                  <p className='p-text'>300 DZ</p>
                  <img src={arrow} alt="arrow" width='18px' height='18px'/>
                </div>  
              </div> 
              </div>
              
            </SwiperSlide>
            <SwiperSlide>
              <div className='product-card flex-center'>
                <div className='product-pic'>
                    <img src={p_3} alt="product-pic"/>
                </div>
                <div>
                <p className='p-title'>Day Cream</p>
                <div>
                  <p className='p-text'>1500 DZ</p>
                  <img src={arrow} alt="arrow" width='18px' height='18px'/>
                </div>  
              </div> 
              </div>
              
            </SwiperSlide>
            <SwiperSlide>
              <div className='product-card flex-center'>
                <div className='product-pic'>
                    <img src={p_4} alt="product-pic"/>
                </div>
                <div>
                <p className='p-title'>Oil</p>
                <div>
                  <p className='p-text'>500 DZ</p>
                  <img src={arrow} alt="arrow" width='17px' height='18px'/>
                </div>  
              </div> 
              </div>
              
            </SwiperSlide>
            <SwiperSlide>
              <div className='product-card flex-center'>
                <div className='product-pic'>
                    <img src={p_5} alt="product-pic"/>
                </div>
                <div>
                <p className='p-title'>Special Misk</p>
                <div>
                  <p className='p-text'>450 DZ</p>
                  <img src={arrow} alt="arrow" width='18px' height='18px'/>
                </div>  
              </div> 
              </div>
              
            </SwiperSlide>
            <SwiperSlide>
              <div className='product-card flex-center'>
                <div className='product-pic'>
                    <img src={p_6} alt="product-pic" />
                </div>
                <div>
                <p className='p-title'>Blue Nila</p>
                <div>
                  <p className='p-text'>800 DZ</p>
                  <img src={arrow} alt="arrow" width='18px' height='18px'/>
                </div>  
              </div> 
              </div>
              
            </SwiperSlide>
            <SwiperSlide>
              <div className='product-card flex-center'>
                <div className='product-pic'>
                    <img src={p_7} alt="product-pic" />
                </div>
                <div>
                <p className='p-title'>Ikr Fassi</p>
                <div>
                  <p className='p-text'>750 DZ</p>
                  <img src={arrow} alt="arrow" width='18px' height='18px'/>
                </div>  
              </div> 
              </div>
              
            </SwiperSlide>
            <SwiperSlide>
              <div className='product-card flex-center'>
                <div className='product-pic'>
                    <img src={p_8} alt="product-pic" />
                </div>
                <div>
                <p className='p-title'>Savon</p>
                <div>
                  <p className='p-text'>150 DZ</p>
                  <img src={arrow} alt="arrow" width='18px' height='18px'/>
                </div>  
              </div> 
              </div>
              
            </SwiperSlide>
           
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>

              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>

              <div className="swiper-pagination"></div>

            </div>
            
          </Swiper>
       </div>
       <button className='btn'>see all products</button>
      </section>



      <section className='app__blog-sec  section-box flex-center'>
          <h2 className='section-title'>Our Blog</h2>
          <h3 className='p-sub-title'> Expert advice, tips and tricks for healthy & glowing skin</h3>
          <img src={women_bg} alt="bg" className='bg-leaf'/>
          <img src={buterfly} alt="bg" className='bg-butterfly'/>
          <div className='blog-container flex-row-center'>
            <div className='blog-card '>
              <img src={blog_1} alt="blog-pic" />
              <p className='p-text'>25-10-2023</p>
              <p className='p-title'>The best ingredients for a sensetive skin</p>
              <p className='p-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore doloribus quibusdam quidem dolorum porro magni
                 
              </p>
              <p className='p-text'>Read More</p>
            </div>
            <div className='blog-card '>
              <img src={blog_2} alt="blog-pic" />
              <p className='p-text'>02-05-2024</p>
              <p className='p-title'>The benifits od Exfoliating your skin</p>
              <p className='p-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore doloribus quibusdam quidem dolorum porro magni
                 
              </p>
              <p className='p-text'>Read More</p>
            </div>
            <div className='blog-card '>
              <img src={blog_3} alt="blog-pic" />
              <p className='p-text'>18-07-2024</p>
              <p className='p-title'>How to get ride of dark skin</p>
              <p className='p-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore doloribus quibusdam quidem dolorum porro magni
                 
              </p>
              <p className='p-text'>Read More</p>
            </div>
          </div>
      </section>

      <section className='best-seller-section section-box flex-center'>
          <h2 className='section-title'>Best selling products</h2>
          
            <p className=' sold-offer p-text'>30% Offer</p>
         
          <h3 className='p-sub-title'>
            Discover the ultimate skincare revolution with our
            best-selling products, now available
            at an exclusive offer of <span>30% off</span>
          </h3>
          <div className='container flex-row-center'>

            <div className='product-card'>
              <div className='product-pic'>
                <img src={p_1} alt="p-pic" />
              </div>
              <div className='description '>
                <p className='product-title'>Pink Misk</p>
                <div>
                  <p className='p-text'><span>300 DZ</span> 210 DZ </p>
                  <img src={arrow} alt="arrow" width='18px' height='18px'/>
                </div>  
              </div> 
            </div>
            <div className='product-card'>
              <div className='product-pic'>
                <img src={p_6} alt="p-pic" />
              </div>
              <div className='description'>
                <p className='product-title'>Blue Nila</p>
                <div>
                  <p className='p-text'><span>800 DZ</span> 560 DZ </p>
                  <img src={arrow} alt="arrow" width='18px' height='18px'/>
                </div>  
              </div> 
            </div>
            <div className='product-card'>
              <div className='product-pic'>
                <img src={p_4} alt="p-pic" />
              </div>
              <div className='description'>
                <p className='product-title'>Oil</p>
                <div>
                  <p className='p-text'><span>500 DZ</span> 350 DZ </p>
                  <img src={arrow} alt="arrow" width='18px' height='18px'/>
                </div>  
              </div> 
            </div>



          </div>
      </section>

      <section className='app__testimonial section-box flex-center'>
        <h2 className='section-title'>Testimonials</h2>
        <p className='p-sub-title'>
          See what others say about the transmative
          benifits of our natural ingredients
        </p>
        <div className='testimonial-container flex-row-center'>

        
          <div className='testimonial-card flex-center'>
            <p className='p-text'>
              Minyas is a product that heighly recomanded, 
              heigh quality raw materials make Minyas products 
              produce results quickly. Really satisfying beauty products
            </p>
            <img src={t_1} alt="testimonial" />
            <p className='p-text'>Khadija Haj</p>
            <p className='p-text'>@khadijahaj</p>
          </div>
          <div className='testimonial-card flex-center'>
            <p className='p-text'>
              Minyas is a product that heighly recomanded, 
              heigh quality raw materials make Minyas products 
              produce results quickly. Really satisfying beauty products
            </p>
            <img src={t_3} alt="testimonial" />
            <p className='p-text'>Khadija Haj</p>
            <p className='p-text'>@khadijahaj</p>
          </div>
          <div className='testimonial-card flex-center'>
            <p className='p-text'>
              Minyas is a product that heighly recomanded, 
              heigh quality raw materials make Minyas products 
              produce results quickly. Really satisfying beauty products
            </p>
            <img src={t_2} alt="testimonial" />
            <p className='p-text'>Khadija Haj</p>
            <p className='p-text'>@khadijahaj</p>
          </div>

        </div>


      </section>

      <section className='app__footer  section-box flex-center'>
        <div className='footer-container flex-center'>
          <div className='left-div'>
            <p className='logo'>Minyas</p>
            <p className='p-sub-title'>Enjoy every natural beauty in the form of beauty products with Moinyas</p>
            <div><input type="text" placeholder='Enter your email here' /> <button>Submit</button></div>
          </div>
          <div>
            <ul className='flex-center p-sub-title'>
              <li>Home</li>
              <li>About us</li>
              <li>Products</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <ul className='flex-center p-text'>
              <li><img src={fa} alt="facebook" /></li>
              <li><img src={insta} alt="instagram" /></li>
              <li><img src={yout} alt="youtube" /></li>
              <li><img src={tick} alt="ticktock" /></li>
              
            </ul>
          </div>
        </div>
        <p className='p-text'>Copyright &#169; 2024 Minyas All Rights Reserved</p>
      </section>
   

    </div>
  );
}

export default App;
