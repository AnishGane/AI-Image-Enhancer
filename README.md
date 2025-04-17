# AI Image Enhancer

A React application that enhances images using AI technology.

## Features

- Upload images from your device
- Preview original and enhanced images side by side
- Real-time AI enhancement processing with loading indicators

## Technologies Used

- [React.js](https://reactjs.org/) for the UI components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) as the build tool and development server
- [Axios](https://axios-http.com/) for API communication

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   VITE_MY_API_KEY = "your_api_key"
   VITE_BASE_URL = "https://techhk.aoscdn.com/"
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open your browser and navigate to the local server address shown in your terminal

## Project Structure

- `src/components/` - React components including ImageUpload and ImagePreview
- `src/utils/` - Utility functions including the API integration

## How It Works

1. Users upload an image through the interface
2. The application sends the image to an AI enhancement API
3. The application polls the API for the enhanced image
4. Once processing is complete, the enhanced image is displayed alongside the original

## API Integration

The application uses an external AI service for image enhancement. The API communication is handled in `enhancedImageAPI.js`, which:
- Uploads the image to the API
- Retrieves a task ID
- Polls the API until the enhanced image is ready
- Returns the enhanced image URL

## Environment Variables

- `VITE_MY_API_KEY`: Your API key for the enhancement service
- `VITE_BASE_URL`: The base URL for the API endpoints

## Notes

- The API has a maximum retry limit of 20 attempts when polling for results
- Large images may take longer to process


## Screenshots

### Main Interface
![Main Interface](MainUI.png)
*The main application interface showing the upload area and image preview panels*

### Image Processing
![Image Processing](https://i.imgur.com/example2.jpg)
*The application during the image enhancement process with loading indicator*

### Enhanced Result
![Enhanced Result](https://i.imgur.com/example3.jpg)
*Side-by-side comparison of original and enhanced images*

## Links

- [Demo Site](https://ai-image-enhancer-demo.example.com)
- [API Documentation](https://picwish.com/photo-enhancer-api-doc#)

## Author

- AnishGane @ 2025
