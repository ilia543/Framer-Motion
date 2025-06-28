import { useEffect, useState } from "react"
import "./ImageGallery.css"
import { motion } from "framer-motion"


interface Product {
  id: number;
  title: string;
  image: string;
}


const ImageGallery = () => {
  const [images, setImages] = useState<Product[]>([]);
  
  const imagesdata = async () => {
    try{
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setImages(data);

    } catch (err){
      console.error("error");
    }
  }

  useEffect(() => {
    imagesdata();
  }, []);



  return (
    <>
      <div 
        className="
          grid grid-cols-5 gap-8 
          max-[1024px]:grid-cols-4 
          max-[800px]:grid-cols-3 
          max-[530px]:grid-cols-2
          max-[350px]:grid-cols-1"
      >
        {images.map((image, index) => (
          <motion.img
            key={index} 
            src={`${image.image}`} 
            alt="image" 
            className=" max-w-40 max-h-40 self-center justify-self-center rounded"
            whileHover={{scale:1.4}}
            transition={{type: "spring", stiffness: 100}}
            drag
            dragConstraints={{
              right: 50,
              left: -50,
              bottom: 50,
              top: -50
            }}
          />
        ))}
      </div>
    </>
  )
}

export default ImageGallery