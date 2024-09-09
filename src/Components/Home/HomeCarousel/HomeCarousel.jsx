import React, { useEffect, useState, useRef } from 'react';
import '../HomePage.css'

const HomeCarousel = () => {
    // const [postIndex, setPostIndex] = useState(0);
    // const [progress, setProgress] = useState(0);
    // const progressBarRef = useRef(null);

    // const posts = [
    //   {
    //     title: "AAROHAN",
    //     description: "SAE-NITD and Team Aavishkar host Aarohan, Eastern India's second-largest techno-management festival, featuring innovation, technology, and creativity through competitions and expert talks, including SAE-organised events like Flying the UAV and Roboliga",
    //     imageSrc: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019-Races/Monaco2019/McLarenMonaco19.jpg.transform/9col/image.jpg",
    //   },
    //   {

    //     title: "SDV",
    //     description_1: "The Self-Driving Workshop provides hands-on experience in autonomous robotics, focusing on navigation and intelligent algorithms, and teaches participants to build obstacle-sensing robots and apply theoretical knowledge in real-world scenarios.",
    //     imageSrc: "https://www.formula1.com/content/dam/fom-website/sutton/2019/Hungary/Saturday/1017645792-LAT-20190803-_2ST5188.jpg.transform/9col-retina/image.jpg",

    //   },
    //   {
    //     title: "TEDx",
    //     description_2: "TEDx NIT Durgapur, hosted by SAE and LC, is a renowned platform where motivational speakers share transformative experiences, inspiring students with new insights and perspectives.",
    //     imageSrc: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019-Races/Austria-2019/Top3Austria2019.jpg.transform/9col-retina/image.jpg",

    //   },
    // ];

    // const totalPosts = posts.length;

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setProgress((prev) => {
    //       if (prev === 100) {
    //         setPostIndex((prevIndex) => (prevIndex + 1) % totalPosts);
    //         return 0;
    //       }
    //       return prev + 1;
    //     });
    //   }, 100);

    //   return () => clearInterval(interval);
    // }, [totalPosts]);

    // useEffect(() => {
    //   if (progressBarRef.current) {
    //     progressBarRef.current.style.width = `${progress}%`;
    //   }
    // }, [progress]);


    // const handleClick = (index) => {
    //   setPostIndex(index);
    //   setProgress(0); // Reset progress when clicking on a post
    // };

    return (
        <>
     <div className="homvideo-container">
  <video
    className="homvideo"
    autoPlay
    muted
    loop
    playsInline
    src="/Carvideo.mp4"
  ></video>
</div>



             
        </>
        // <div className="homcarousel">
        // <div className="homprogress-bar homprogress-bar--primary homhide-on-desktop">
        //   <div ref={progressBarRef} className="homprogress-bar__fill"></div>
        // </div>

        // <header className="hommain-post-wrapper">
        //   <div className="homslides">
        //     {posts.map((post, index) => (
        //       <article
        //         key={index}
        //         className={`hommain-post ${
        //           index === postIndex ? "hommain-post--active" : "hommain-post--not-active"
        //         }`}
        //       >
        //         <div className="hommain-post__image">
        //           <img src={post.imageSrc} alt={post.title} loading="lazy" className="hom"/>
        //         </div>
        //         <div className="hommain-post__content">
        //           <div className="hommain-post__tag-wrapper">
        //             <span className="hommain-post__tag">{post.tag}</span>
        //           </div>

        //           <a className="hommain-post__link" href={post.url || "#"} aria-label={post.type}>
        //             <span className="hommain-post__link-text">{post.type}</span>
        //             <svg
        //               className={`hommain-post__link-icon ${
        //                 post.type === "play video"
        //                   ? "hommain-post__link-icon--play-btn"
        //                   : "hommain-post__link-icon--arrow"
        //               }`}
        //               width={post.type === "play video" ? "30" : "37"}
        //               height={post.type === "play video" ? "30" : "12"}
        //               viewBox="0 0 37 12"
        //               fill="none"
        //               xmlns="http://www.w3.org/2000/svg"
        //               role="img"
        //               aria-label={post.type === "play video" ? "Play Video Icon" : "Arrow Icon"}
        //             >
        //               {/* Include your SVG <path> data here */}
        //             </svg>
        //           </a>

        //         </div>
        //       </article>
        //     ))}
        //   </div>
        // </header>

        // <div className="homposts-wrapper hide-on-mobile">
        //   {posts.map((post, index) => (
        //     <article
        //       key={index}
        //       className={`hompost ${index === postIndex ? "hompost--active" : ""}`}
        //       onClick={() => handleClick(index)}
        //     >


        //        <h3 className="hompost__title">{post.title}</h3>
        //        <p className="hompost__description">{post.description}</p>
        //        <p className="hompost__description_1">{post.description_1}</p>
        //        <p className="hompost__description_2">{post.description_2}</p>
        //     </article>
        //   ))}
        // </div>

        // </div>
    )
}

export default HomeCarousel
