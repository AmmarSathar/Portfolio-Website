function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const lenis = new Lenis({
    smooth: true,
    lerp: 0.1, // Adjusts the smoothness
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
  
    var split = new SplitText("#quote", {type:"words,chars"});
    var words = split.words;
  
    // Create a timeline that is controlled by ScrollTrigger
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#quote",      // Element that triggers the animation
        start: "top 80%",       // Adjust as needed; runs when #quote is near the viewport
        end: "top 20%",
        toggleActions: "play reverse play reverse" 
        // Other options:
        // - end: where animation ends in scroll terms
        // - scrub: true (if you want the animation to be tied to scroll position)
      }
    });
  
    tl.to(words, {
      duration: 3,
      "--weight": "300",
      ease: "power3.out",
      color: "hsl(+=0, +=70%, +=20%)",
      stagger: {
        each: 0.1
      }
    });
  });