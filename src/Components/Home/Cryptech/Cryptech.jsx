import React, { Suspense, lazy } from 'react';
import './Cryptech.css';

const ReactPlayer = lazy(() => import('react-player'));

const Cryptech = () => {
  return (
    <>
      <section className="homytr">
        <div className="homyt-sae">
          <h1 className="pt-16">Cryptech</h1>
        </div>
      </section>

      <Suspense fallback={<></>}>
        <section className="homvid">
          <div className="homvideo-container1">
            <ReactPlayer
              className="homreact-player"
              controls
              url="https://youtu.be/XhYBorFI3Tg?si=aueHXYsFgZ3YdMn9"
              width="100%"
              height="100%"
            />
          </div>
        </section>
      </Suspense>


      <section>
        <div className="homslider-container">
          <div className="homslider">
            <div className="homslide-track">
              <div className="homslide">
                <iframe
                  width="240"
                  height="200"
                  src="https://www.youtube.com/embed/j_6sNtASHgU?si=IbQz4KJwbiowu9wI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="homslide">
                <iframe
                  width="240"
                  height="200"
                  src="https://www.youtube.com/embed/o7fcf5chrTo?si=-o2btWUyjNVbmeHo"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="homslide">
                <iframe
                  width="240"
                  height="200"
                  src="https://www.youtube.com/embed/JrXKyNwJAvQ?si=hUynYrzmMYso9Vkm"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="homslide">
                <iframe
                  width="240"
                  height="200"
                  src="https://www.youtube.com/embed/-C2yRvTJ7Ss?si=94ToXJICUr0Gzd18"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className="homslide">
                <iframe
                  width="240"
                  height="200"
                  src="https://www.youtube.com/embed/wjw50oAJZao?si=PSfbh5MKMTMmwg53"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="homslide">
                <iframe
                  width="240"
                  height="200"
                  src="https://www.youtube.com/embed/h_Qjiqtd3Vw?si=ffcTkgdxLCigK4mM"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="homslide">
                <iframe
                  width="240"
                  height="200"
                  src="https://www.youtube.com/embed/P1XK8_ZumVI?si=PjX1PZu-sqwigzPv"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="homslide">
                <iframe
                  width="240"
                  height="200"
                  src="https://www.youtube.com/embed/1W2jI4JDNtE?si=71nlATzes1F1m8EW"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="homslide">
                <iframe
                  width="240"
                  height="200"
                  src="https://www.youtube.com/embed/aTdqZOGJPDw?si=Ph8zi2VgDnVJd9GO"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cryptech;
