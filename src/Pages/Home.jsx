import React, { useState } from 'react';
import '../Css/Home.css';
import Navbar from '../Components/Navbar';
import welcome_logo from '../Img/welcome-logo.png';
import scrolldown from '../Img/sc1.gif';
import ImgPer from '../Img/f.png';
import Footer from '../Components/Footer';

export default function Home() {


 const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Quels types de services proposez-vous ?",
      answer: "Nous sommes spécialisés dans la prestation de services, l’accompagnement personnalisé et la vente d’articles numériques. Nous offrons des solutions sur mesure afin de répondre aux besoins variés de nos clients et de les aider à réussir leurs projets d’études à l’étranger."
    },
    {
      question: "De quelle manière accompagnez-vous les candidats au TCF ?",
      answer: `nous proposons un service de prise de rendez-vous pour le TCF, afin de vous simplifier toutes les démarches administratives. D’autre part, nous mettons à votre disposition des articles numériques de préparation au TCF, conçus pour vous aider à réviser efficacement et à comprendre le format du test. Découvrez notre sélection d'articles de préparation spécialement conçus pour le TCF dans notre boutique en ligne <p><a href="">👉 Accéder à notre boutique</a></p>`
    },
    {
      question: "Quelle est votre politique de retour ?",
      answer: "Nous offrons une politique de retour de 30 jours pour tous les produits. Les articles doivent être dans leur état d'origine, ne pas avoir été utilisés et être accompagnés du reçu ou de la preuve d'achat. Les remboursements sont effectués dans les 5 à 7 jours ouvrables suivant la réception de l'article retourné."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <>
  
    <Navbar/>


  <section id="first_sec">
    <div id="filter_bg" />
    <div id="exposer_sec_one">
      <div className="ep_one_sec">
        <h1>Bienvenue chez Nazya Services !</h1>
        <p id="title_sec_one">
          Découvrez nos services personnalisés pour réussir votre projet
          d’études en France .
        </p>
        <div className="container">
          <a href="#" className="button type--C">
            <div className="button__line" />
            <div className="button__line" />
            <span className="button__text">Contactez-nous des Aujourd'hui</span>
            <div className="button__drow1" />
            <div className="button__drow2" />
          </a>
        </div>
      </div>
      <div className="ep_two_sec">
        <img
          src={welcome_logo}
          alt="img of welcome"
          id="img_welcome"
        />
      </div>
    </div>

    <a href="#bg_sec_two"><img src={scrolldown} id='scroll_gif' alt="Scroll Down" /></a>
  </section>

    <section id="second_sec">


<svg id='bg_sec_two' xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">

  
  <rect width="100%" height="100%" fill="#2c3b4e"/>

  <defs>
    
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#b7a8e6bd" strokeWidth="1"/>
    </pattern>

    
    <linearGradient id="fadeGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="white" stopOpacity="0"/> 
      <stop offset="100%" stopColor="white" stopOpacity="1"/>
    </linearGradient>

    
    <mask id="fadeMask">
      <rect width="100%" height="100%" fill="url(#fadeGradient)" />
    </mask>

    
    <filter id="insetShadow" x="-20%" y="-20%" width="140%" height="140%">
     
      <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur"/>
     
      <feComposite in="blur" in2="SourceAlpha" operator="out" result="insetBlur"/>
      
      <feFlood floodColor="black" floodOpacity="0.5" result="shadowColor"/>
      <feComposite in="shadowColor" in2="insetBlur" operator="in"/>
      
      <feComposite in="SourceGraphic" in2="shadowColor" operator="over"/>
    </filter>
  </defs>


  <rect width="100%" height="100%" fill="url(#grid)" mask="url(#fadeMask)" filter="url(#insetShadow)" />
</svg>



<div id='content_saver_sec_two'>
  <h1>De quoi avez-vous besoin pour obtenir un visa étudiant en France ?</h1>
    <div id="card_organaser_sec_two">


      <div id="progress_line_etaps">
        <span className="one_progressive">1</span>
        <span className="two_progressive">2</span>
        <span className="three_progressive">3</span>
      </div>


      <div id='flexer_organaser_sec_two'>
        <div className="card_sec_two">
          <div className="card_icon_sec_two">
            <i className="fa-solid fa-certificate"></i>
            <h2>Le TCF</h2>
          </div>
          <div className="card_text_sec_two">
            
            <p>
              C'est le test de connaissance du français
            </p>
          </div>
        </div>
        <div className="card_sec_two">
            <div className="card_icon_sec_two">
              <i className="fa-solid fa-clipboard-check"></i>
              <h2>L’admission</h2>
            </div>
          <div className="card_text_sec_two">
            
            <p>
              Vous devez être admis dans un établissement. Il existe deux types d’établissements :
              <li>Les universités connectées à Campus France.</li>
              <li> Les établissements non connectés à l’espace Campus France.</li>
            </p>
          </div>
        </div>
        <div className="card_sec_two">
          <div className="card_icon_sec_two">
            <i className="fa-brands fa-cc-visa"></i>
            <h2>Le visa</h2>
          </div>
          <div className="card_text_sec_two">
            
            <p>
              Après l’admission, vous pourrez déposer votre demande de visa étudiant pour la France afin de finaliser votre inscription et préparer votre séjour.
            </p>
          </div>
        </div>
      </div>

      <h3 id="invite_to_question_para">C'est fait ? Nous vous livrons tout ce que vous avez vu !</h3>

    </div>

</div>

    </section>
      

    <section id="third_sec">
      <div className="tringel_sec_three"></div>

      <h1 id='add_boutique_invite'>Et Numirique Boutique Pour Les TFC</h1>

      <div id="separator_sec_three">

        <div id="first_sec_three">
          <h4>Questions que vous pourriez poser:</h4>

          
           <div id="faq_ques" className="faq-container">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className={`faq-item ${openIndex === index ? "open" : ""}`}
    >
      <div
        className="faq-question"
        onClick={() => toggleFAQ(index)}
      >
        {faq.question}
        <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>
          +
        </span>
      </div>

      <div
        className={`faq-answer ${openIndex === index ? "open" : ""}`}
        dangerouslySetInnerHTML={{ __html: faq.answer }}
      ></div>
    </div>
  ))}
</div>







        </div>


        <div id="second_sec_three">
          <img src={ImgPer} id='personal_photo_sec_three' alt="personal image" />
        </div>
      </div>
    </section>

    <Footer />
</>

  )
}
