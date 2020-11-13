import React from 'react';

const Video = () => (
  <section className="video">
    <video autoPlay loop muted>
      <source src="/video.mp4" type="video/mp4" />
    </video>

    <style jsx>{`
      .video {
        position: relative;
        width: 100%;
        height: 35rem;
        overflow: hidden;
      }
      .video video {
        position: absolute;
        bottom: -40%;
        width: 100%;
      }

      @media screen and (max-width: 1200px) {
        .video video {
          bottom: -20%;
        }
      }

      @media screen and (max-width: 880px) {
        .video {
          height: auto;
        }
        .video video {
          position: relative;
          bottom: 0;
        }
      }
    `}</style>
  </section>
);

export default Video;
