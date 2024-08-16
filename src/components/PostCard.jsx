import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  // Define a default image URL or placeholder
  const defaultImage = "path/to/placeholder/image.jpg"; // Replace with an actual path

  // Function to get file preview URL
  const getFilePreview = () => {
    try {
      // Ensure featuredImage is defined
      if (!featuredImage) {
        console.warn("No featuredImage provided");
        return defaultImage;
      }

      // Fetch and return the file preview URL
      return appwriteService.getFilePreview(featuredImage);
    } catch (error) {
      console.error("Error fetching file preview:", error);
      return defaultImage; // Return a placeholder image on error
    }
  };

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img src={getFilePreview()} alt={title} className="rounded-xl" />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
