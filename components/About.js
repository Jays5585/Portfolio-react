import styles from '../styles/About.module.css';
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const defaultBgColor = "transparent";

//function About() {

  const LogoCarousel = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const logos = [
      
        { name: "JavaScript", src: "/javascript-logo.png" },
        { name: "React", src: "/react-logo.png" },
        { name: "React Native", src: "/react-native-logo.png" },
        { name: "Node.js", src: "/nodejs-logo.png" },
        { name: "Express", src: "/express-logo.png" },
        { name: "MongoDB", src: "/mongodb-logo.png" },
        { name: "Github", src: "/logo-github.png" },
      ];
    
  
    const settings = {
     // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      afterChange: () => setIsLoaded(true),
      
    };
   






  return (
    

    <div style={{background: isLoaded ? "none" : defaultBgColor}}>
      
    <Slider {...settings} onLoad={() => setIsLoaded(true)} style={{ height: "150px",}}>
    {logos.map((logo, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
          
        }}
      >
        <img
          src={logo.src}
          alt={logo.name}
          style={{
            width: "100px",
            height: "100px",
            objectFit: "contain",
            marginTop: "90px",
           
          }}
        />
      </div>
    ))}
  </Slider>
  
  <div className={styles.textContainer}>
    <span className={styles.text}>
    <p>Je suis actuellement en stage de 6 mois chez Dignamik à Digne les Bains. Durant ce stage, j'apprends à utiliser FlutterFlow pour créer une application mobile pour le réseau Vie ma Ville. Cette application permettra de mettre en avant les artisans et commerçants locaux et leurs produits, ainsi que les événements culturels locaux. L'objectif est de reconnecter les habitants au territoire.

Je serai à la recherche d'un premier emploi en tant que développeur junior début août. Je suis motivé et capable d'apprendre rapidement. N'hésitez pas à me contacter si vous recherchez un profil comme le mien.

Pour obtenir mon CV et ma lettre de motivation, veuillez me contacter par  <a href="mailto:votre@email.com">email</a> ou par téléphone au 0651615279.</p>
</span>
  </div>
  
  
  </div>

);
  
};//};

export default LogoCarousel ;