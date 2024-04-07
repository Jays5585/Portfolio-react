import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
       <div className={styles.logocontainer}>
            <img className={styles.logo} src="logo.png" alt="logo" />
          </div>
          <div className={styles.textcontainer}> 
          <div>
          <span className={styles.text}> Bienvenue sur ma page! Je suis Jeffrey Seutin Developpeur junior
            fullstack web et mobile Je sors d’une formation intensive en
            bootcamp de Concepteur Développeur Web et Mobile où j’ai appris
            différents langages de développeur tels que HTML, CSS, JavaScript,
            Réact, RéactNative, express, node.js et MongoDB. J’ai également
            créer, avec 3 autres personnes, une application mobile. Mon parcours
            professionnel précédent en tant qu’aide-soignant m’a permis de
            développer des compétences interpersonnelles solides telles que le
            travail en équipe, la communication empathique et la gestion du
            temps. Ma reconversion professionnelle démontre ma capacité à
            relever des défis et à m’adapter rapidement à de nouveaux
            environnements. Motivé, curieux et ponctuel, je suis convaincu que
            mon profil diversifié pourrait apporter une valeur ajoutée à votre
            équipe. De plus je suis bilingue français et anglais.
            </span>
            </div>
            
            <div className={styles.imagecontainer}>
          <img className={styles.imagedev} src="imagedev.jpg" alt="me" />
          </div>
          </div>
      <div className={styles.background}></div>
      </div>



  );
}

export default Home;
