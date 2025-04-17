import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-200 py-8 px-4">
        {/* header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800">
            AI Image Enhancer
          </h1>
          <p className="text-lg text-gray-500 mt-2">
            Upload your image & let AI enhance it!
          </p>
        </div>
        <Home />
        {/* footer */}
        <div className="text-center mt-8 text-lg text-gray-500">
          <p>Image Upload & Preview</p>
          <p>Powered by React.</p>
        </div>
      </div>
    </>
  );
}

export default App;
