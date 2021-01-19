
import React, { useEffect, useState } from 'react'


export default function Imagens() {

    const [images, setImages] = useState({}); 
    const [imagesReadyCnt, setImagesReadyCnt] = useState(0);  // counter of preloaded images
    
    useEffect(() => {
      const importedImages = {};
      let i = 0;
      const r = require.context(
                  "../images/", // relative path to folder with images, that we want to be imported and preloaded
                  false, // with subfolders or not
                  /\.(png|jpe?g|svg)$/ // extensions of files
                );
      r.keys().forEach(item => {
        const importedImg = r(item); // import image
        importedImages[item.replace("../", "")] = importedImg; // name of file will be a key, path to file will be a value
        const img = new Image();
        img.onload = () => {
          i++;
          setImagesReadyCnt(i); // increase counter when image is loaded
        };
        img.src = importedImg;
      });
      setImages(importedImages); 
    }, []);
    
    // if images are not loaded yet( means that counter != number of files in imported folder))
    if (Object.keys(images).length !== imagesReadyCnt || imagesReadyCnt < 1) {  
      return  "Loading ...";
    }


       return (
           <>
                <img src={images["sardinha.jpg"]} />  
           </>
       )
}



