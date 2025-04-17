import axios from "axios";

// Validate env variables
if (!import.meta.env.VITE_MY_API_KEY) {
  throw new Error("VITE_MY_API_KEY is not set in environment variables");
}
if (!import.meta.env.VITE_BASE_URL) {
  throw new Error("VITE_BASE_URL is not set in environment variables");
}

const API_KEY = import.meta.env.VITE_MY_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const MAXIMUM_RETRIES = 20;

// Main function to upload image & get enhanced URL
export const enhancedImageAPI = async (file) => {
  if (!file) {
    throw new Error("No file provided");
  }

  if (!(file instanceof File)) {
    throw new Error("Invalid file type. Please provide a File object");
  }

  try {
    const taskId = await uploadImage(file);
    console.log("Task ID:", taskId);

    const enhancedImageData = await PollForEnhancedImage(taskId);
    console.log("Enhanced Image Data:", enhancedImageData);

    return enhancedImageData;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error(
        "API endpoint not found. Please check the BASE_URL configuration."
      );
    }
    console.error("Error in enhancedImageAPI:", error.message);
    throw error;
  }
};

const uploadImage = async (file) => {
  // /api/tasks/visual/scale - POST method

  const formData = new FormData();
  formData.append("image_file", file);

  const endpoint = `${BASE_URL}api/tasks/visual/scale`;

  try {
    const { data } = await axios.post(endpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    });

    console.log("Response from uploadImage:", data);

    if (!data?.data?.task_id) {
      throw new Error("Invalid response format: task_id not found");
    }

    return data.data.task_id;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error(`API endpoint not found: ${endpoint}`);
    }
  }
};

const fetchEnhancedImage = async (taskId) => {
  if (!taskId) {
    throw new Error("No task ID provided");
  }

  const endpoint = `${BASE_URL}api/tasks/visual/scale/${taskId}`;
  console.log("Fetching from:", endpoint);

  try {
    const { data } = await axios.get(endpoint, {
      headers: {
        "X-API-KEY": API_KEY,
      },
    });

    console.log("Response from fetchEnhancedImage:", data);

    if (!data?.data) {
      throw new Error("Invalid response format: image data not found");
    }

    return data.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error(`API endpoint not found: ${endpoint}`);
    }
  }
};

const PollForEnhancedImage = async (taskId, retries = 0) => {
  const result = await fetchEnhancedImage(taskId);

  if (result.state === 4) {
    console.log(`Processing... (${retries} / ${MAXIMUM_RETRIES})`);

    if (retries >= MAXIMUM_RETRIES) {
      throw new Error("Maximum retires reached");
    }

    // wait for 2 seconds before polling again
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return PollForEnhancedImage(taskId, retries + 1);
  }

  console.log("Enhanced Image URL:", result);
  return result;
};
