import React from "react";
import Loading from "./Loading";

const ImagePreview = (props) => {
  return (
    <div className="w-full mt-8 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Original Image */}
      <div className="flex flex-col gap-4">
        <h2 className="bg-gray-800 text-white text-center p-2 rounded-xl">
          Original Image
        </h2>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          {props.uploaded ? (
            <img
              src={props.uploaded}
              className="w-full h-full object-cover"
              alt=""
            />
          ) : (
            <div className="flex items-center justify-center h-80 bg-gray-300">
              No Image Uploaded
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Image */}
      <div className="flex flex-col gap-4">
        <h2 className="bg-blue-800 text-white text-center p-2 rounded-xl">
          Enhanced Image
        </h2>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          {props.enhanced && !props.loading && (
            <img
              src={props.enhanced}
              className="w-full h-full object-cover"
              alt=""
            />
          )}

          {props.loading ? (
            <div className="flex items-center justify-center h-80 bg-gray-300">
              <Loading />
            </div>
          ) : (
            <div className="flex items-center justify-center text-center h-80 bg-gray-300">
              No Enhanced Image
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
