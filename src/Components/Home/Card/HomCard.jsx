import React from 'react';
import './HomCard.css'

const HomCard = () => {
  return (
<>
<div className="homcard-container" max-auto>

<div className="homcard-aar" data-aos="fade-right">
  <div className="homwrapper">
    <img
      src="./aarhn.jpg"
      className="homcover-image-aarohan"
      alt="Aarohan"
    />
  </div>
  
  <img
    src="https://i.ibb.co/7j61wMw/aarohan.jpg"
    className="homcharacter-aar"
    alt="aar-img"
  />
</div>

<div className="homcard-sdv" data-aos="fade-up">
  <div className="homwrapper">
    <img
      src="./SDV.jpg"
      className="homcover-image-sdv"
      alt="sdv-img"
    />
  </div>
  <img
    src="https://github.com/Suke2004/Birthday-django-/blob/main/bot.png?raw=true"
    className="homcharacter"
    alt="sdv-img"
  />
</div>

<div className="homcard-tedx" data-aos="fade-left">
  <div className="homwrapper">
    <img
      src="./Tedx.png"
      className="homcover-image-tedx"
      alt="tedx-img"
    />
  </div>

  <img
    src="./Tedx1.png"
    className="homcharacter"
    alt="tedx-img"
  />
</div>

</div>
</>
);
};

export default HomCard;
