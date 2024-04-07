import styles from '../styles/Projets.module.css';


import { useState } from 'react';
function Projets() {
  const [nbLike, setNbLike] = useState(30);

  
  const handleClick = () => {
    fetch('/send-mail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      to: 'seutinjeff@gmail.com', 
      subject: 'Nouveau like!',
      text: "Quelqu'un a aimé votre publication!"
     
    })
    });

    setNbLike(nbLike + 1);
    };
  
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.textContainer}>
         <span className={styles.text}>Voici quelques projets réalisés en formation.</span>
      </div>
      <div className={styles.imageContainer}>
        <video controls className={styles.video}>
          <source src="/StageFinder.mp4" type="video/mp4" />
        </video>
        <video controls className={styles.video2}>
          <source src="/locapic.mp4" type="video/mp4" />
        </video>
       </div>
       <div className={styles.morningnewsContainer}>
       <a href="https://morningnews-frontend-ruddy.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.morningnewsimage}>
        <img className={styles.morningnewsimage} src="morningnews.png" alt="morningnews" />
        </a>
       </div>
       <div className={styles.resumeContainer}>
        <span className={styles.resume}>Trois projets phares de ma formation à la Capsule :
StageFinder, application mobile que j'ai eu le plaisir de piloter, révolutionne la recherche de stage en connectant étudiants et entreprises.
Locapic, application mobile de géolocalisation, permet d'explorer la France en quelques clics.
Morning News, application web d'actualités tech, vous offre un flux d'informations personnalisé et toujours à jour.
          Ces projets illustrent mes compétences en gestion de projet, développement web et mobile, ainsi que mon sens de l'innovation.</span>
      
       </div>
       <div className={styles.suiteContainer}>
        <span className={styles.suite}>Dans le cadre de ma formation, j'effectue un stage de six mois chez Dignamik. Durant ce stage, j'ai appris à connaître et à utiliser les outils FlutterFlow et Firebase.

En un mois, j'ai créé seul une application mobile fonctionnelle qui sera utilisée dans un milieu associatif pour gérer et organiser des événements.

les fonctionnalités de

l'application permet aux utilisateurs de 

créer des événements (repas, soirées, etc.) avec un date picker, télécharger des photos et des PDF, et ajouter une description.
Consulter un fil d'actualité des événements à venir et s'y inscrire.
Voir les événements auxquels ils se sont inscrits.
Voir le nombre de personnes inscrites à chaque événement.
Conclusion

Maintenant que l'application est fonctionnelle, je vais pouvoir commencer à créer l'application "Vie ma ville".
Vous pouvez clické sur le logo pour télécherger l'APK androïd de l'application "Repas MDB" que j'ai créé.
</span>

      </div>
      <div className={styles.mdbContainer}>
      <a href="https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/build_outputs/repas-m-d-b-9ql8td/web/9vvJLtBE4mVRo49YzUNO/RepasMDB-release.apk">
        <img className={styles.mdbImage} src="mdb.png" alt="mdb"/>
      </a>
      </div>
       <div className={styles.likeContainer}>
        <p>Un like si vous avez apprécier votre visite! </p>
       
     <button className={styles.like} onClick={() => handleClick()}>👍</button>
     <p>{nbLike}</p>
     </div>
    </div>
  );
}

export default Projets;