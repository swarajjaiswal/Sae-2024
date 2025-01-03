import React, { useState, useEffect, useRef } from 'react';
import bidwit from './bidwit.jpg';
import carauc from './carauc.jpg';
import crossword from './crossword.jpg';
import DN from './DN.jpg';
import electra from './electra.jpg';
import fluav from './fluav.jpg';
import rasp from './rasp.jpg';
import roboliga from './roboliga.jpg';
import './Aar.css';

const cardData = [
  { id: 1, image: bidwit },
  { id: 2, image: carauc },
  { id: 3, image: crossword },
  { id: 4, image: DN },
  { id: 5, image: electra },
  { id: 6, image: fluav },
  { id: 7, image: rasp },
  { id: 8, image: roboliga },
];

const Aar = () => {
  const [headingInView, setHeadingInView] = useState(false);
  const [paragraphInView, setParagraphInView] = useState(false);
  const [cardsInView, setCardsInView] = useState(false);

  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === headingRef.current) {
          setHeadingInView(entry.isIntersecting);
        }
        if (entry.target === paragraphRef.current) {
          setParagraphInView(entry.isIntersecting);
        }
        if (entry.target === cardsRef.current) {
          setCardsInView(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
      if (cardsRef.current) observer.unobserve(cardsRef.current);
    };
  }, []);

  return (
    <div className="aar-container">
      <h1
        className={`aar-heading ${headingInView ? 'in-view' : ''}`}
        ref={headingRef}
      >
        AAROHAN
      </h1>
      <p
        className={`aar-paragraph ${paragraphInView ? 'in-view' : ''}`}
        ref={paragraphRef}
      >
        SAE in Aarohan: SAE contributes to Team Aavishkar in organizing Aarohan, NIT Durgapur's annual techno-management fest, blending technical rigor with festive excitement. SAE's role ensures a dynamic platform for innovation and technical skill development.
      </p>
      <div
        className={`aar-cards ${cardsInView ? 'in-view' : ''}`}
        ref={cardsRef}
      >
        {cardData.map((card) => (
          <div key={card.id} className="aar-card">
            <img src={card.image} alt={`Card ${card.id}`} className="aar-card-image" />
          </div>
        ))}
      </div>
      <div className="aar-animated-line"></div>
    </div>
  );
};

export default Aar;
