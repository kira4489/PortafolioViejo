import React,{useEffect,useState}from 'react'
import "./ScrollToUp.css"

const  ScrollToup = () => {
 const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    
      useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
          if (window.pageYOffset > 1000) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener("scroll", toggleVisibility);
    
        return () => window.removeEventListener("scroll", toggleVisibility);
      }, []);

    return (
        <div className="scroll-to-top">
        {isVisible && (
          <div className="scroll-to-top-absolute" onClick={scrollToTop}>
            <i className="scroll-fa fas fa-chevron-up"></i>
          </div>
        )}
      </div>
    )
}

export default ScrollToup