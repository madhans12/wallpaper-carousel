import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image1 from "./ironman1.jpeg";
import image2 from "./ironman2.jpeg";
import image3 from "./ironman3.jpeg";
import "./Imagepath.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Images = () => {
  const image = [image3, image2, image1];
  console.log(image);

  const [current, setCurrent] = useState(0);
  const [download, setDownload] = useState(0);
  const nextImage = () => {
    setCurrent(current === image.length - 1 ? 0 : current + 1);
    setDownload(download === image.length - 1 ? 0 : download + 1);
  };
  const prevImage = () => {
    setCurrent(current === 0 ? image.length - 1 : current - 1);
    setDownload(download === 0 ? image.length - 1 : download - 1);
  };

  return (
    <div>
      <h1>WALLAPAPER CAROUSEL</h1>

      <div>
        {image.map((images, index) => {
          return (
            download === image,
            current === index && (
              <div className="image-carousel" key={images}>
                <img src={images} alt="ironman" className="image" />
              </div>
            )
          );
        })}
      </div>
      <div className="icon">
        <div className="bkwd-icon" onClick={prevImage}>
          <ArrowBackIosIcon />
        </div>
        <div>
          <a href={download} download={true}>
            <ArrowDownwardIcon className="download-icon" />
          </a>
        </div>
        <div className="frwd-icon" onClick={nextImage}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default Images;
