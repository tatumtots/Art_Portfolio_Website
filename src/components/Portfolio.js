import React from 'react';
import { images } from "../imagesArray";
import '../App.css';

function Portfolio() {
  return (
    <div className="pictureGrid">
      {images.map((i)=>{
        return(
          <ImgGrid key={i.id} {...i}></ImgGrid>
        )
      })
      }  
    </div>
  );
}

const ImgGrid = (props) => {
  const{img, title, description, cssClass} = props;
  return (
    <div className={cssClass} id="pic">
        <img src={img} alt={title} />
    </div>
      // {/* <div id='hiddenDiv'>
      //   <h4>{title}</h4>
      //   <p>{description}</p>
      // </div> */}
    
  )
}

export default Portfolio;