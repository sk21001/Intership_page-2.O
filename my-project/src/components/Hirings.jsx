import aicte from "../assets/images/aicte.png";
import bookmyshow from "../assets/images/bookmyshow.png";
import dpiit from "../assets/images/dpiit.png";
import iso from "../assets/images/iso.png";
import msme from "../assets/images/msme.png";
import naps from "../assets/images/naps.png";
import skillindia from "../assets/images/skillindia.png";
import topmate from "../assets/images/topmate.png";
import udemy from "../assets/images/udemy.png";
import unstop from "../assets/images/unstop.png";

import ThreeBG from "./ThreeBG";

const logos = [
  aicte,
  bookmyshow,
  dpiit,
  iso,
  msme,
  naps,
  skillindia,
  topmate,
  udemy,
  unstop,
];

const Hirings = () => {
  return (
    <div className="partners-section relative overflow-hidden">
      <ThreeBG className="absolute inset-0 z-0" />
      <h2 className="title relative z-10">Our Internship Hiring Partners</h2>
      <div className="carousel relative z-10">
        <div className="track">
          {logos.concat(logos).map((logo, i) => (
            <div className="card" key={i}>
              <div className="logo-box">
                <img src={logo} alt="logo" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .partners-section {
          padding: 5rem 0;
          background: linear-gradient(
            135deg,
            #162e6d 0%,
            #1e40af 40%,
            #2563eb 100%
          );
          background-size: 200% 200%;
          animation: bgMove 18s ease-in-out infinite;
          overflow: hidden;
        }

        @keyframes bgMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .title {
          text-align: center;
          color: white;
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 2.5rem;
        }

        .carousel {
          width: 100%;
          overflow: hidden;
          scrollbar-width: none;
        }
        .carousel::-webkit-scrollbar {
          display: none;
        }

        .track {
          display: flex;
          width: max-content;
          animation: scrollRight 25s linear infinite;
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .card {
          width: 220px;
          height: 120px;
          margin: 0 24px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(12px);
          border-radius: 18px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: scale(1.1) rotateY(8deg);
        }

        .logo-box {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-box img {
          max-width: 120px;
          max-height: 80px;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 10px;
        }

        @media (max-width: 640px) {
          .card {
            width: 140px;
            height: 80px;
            margin: 0 12px;
          }

          .logo-box img {
            max-width: 90px;
            max-height: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default Hirings;
