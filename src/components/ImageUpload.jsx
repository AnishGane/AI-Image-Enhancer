import React from "react";

const ImageUpload = (props) => {
  const showImageHandler = (event) => {
    // console.log(event.target.files[0]);
    const file = event.target.files[0];
    if (file) {
      props.uploadImageHandler(file); // Pass the file to the parent component
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl max-w-2xl w-full p-6">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-all"
      >
        <input
          type="file"
          className="hidden"
          id="fileInput"
          onChange={showImageHandler}
        />
        <span className="text-gray-600 font-medium text-lg">
          Click and drag to upload the image
        </span>
      </label>
    </div>
  );
};

export default ImageUpload;
