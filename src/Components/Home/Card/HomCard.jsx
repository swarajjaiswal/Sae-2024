import React from 'react';
import './HomCard.css'

const HomCard = () => {
  return (
<>
<div className="homcard-container" max-auto>

<div className="homcard-aar" data-aos="fade-right">
  <div className="homwrapper">
    <img
      src="https://github.com/Suke2004/Birthday-django-/blob/main/aarohan_2.jpg?raw=true"
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
      src="https://github.com/Suke2004/Birthday-django-/blob/main/IMG-20240907-WA0000.jpg?raw=true"
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
      src="https://i.ibb.co/DYqwXcc/Whats-App-Image-2024-08-21-at-23-51-44-c685cd62.jpg"
      className="homcover-image-tedx"
      alt="tedx-img"
    />
  </div>

  <img
    src="https://i.ibb.co/XsGRTC5/Screenshot-2024-09-16-173234.png"
    className="homcharacter"
    alt="tedx-img"
  />
</div>

</div>
</>
);
};

export default HomCard;
