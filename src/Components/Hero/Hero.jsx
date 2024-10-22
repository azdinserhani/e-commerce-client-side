import "./Hero.scss";
import hero1 from "../../../public/hero1.webp";
import hero2 from "../../../public/hero2.webp";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";
import { motion } from "framer-motion";
const slide = [
  {
    id: 1,
    img: hero1,
    tittle: "Color Solar Watch Home Mini",
    desc: "More powerful than eve",
  },
  {
    id: 2,
    img: hero2,
    tittle: "Feel The Sound Home Mini ",
    desc: "Put the world on mute",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="hero">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slide.map((item) => {
          return (
            <div className="slide">
              <motion.div
                className="left"
                initial={{ opacity: 0, x: -100 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    duration: 1,
                  },
                }}
              >
                <h1>{item.tittle}</h1>
                <p>{item.desc}</p>
                <button>shop now</button>
              </motion.div>
              <motion.div
                className="right"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    duration: 1,
                  },
                }}
              >
                <img src={item.img} alt="" />
              </motion.div>
            </div>
          );
        })}
      </div>
      <div className="icons">
        <div
          className="arrowLeft"
          onClick={() => setCurrentSlide(currentSlide === 1 ? 0 : 1)}
        >
          <ArrowBackIosNewOutlinedIcon />
        </div>
        <div
          className="arrowRight"
          onClick={() => setCurrentSlide(currentSlide === 0 ? 1 : 0)}
        >
          <ArrowForwardIosOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Hero;
