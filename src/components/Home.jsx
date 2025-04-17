import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { enhancedImageAPI } from "../utils/enhancedImageAPI";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImageHandler = async (file) => {
    // Convert the file into the link (url) --> URL.createObjectURL(file)
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setLoading(false);
    } catch (error) {
      console.error("Error enhancing image:", error);
      setLoading(false);
    }
  };

  console.log(enhancedImage);

  return (
    <>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage?.image}
      />
    </>
  );
};

export default Home;
