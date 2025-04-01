const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary");
const streamifier = require("streamifier");

require("dotenv").config();

const router = express.Router();

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer setup using memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// router.post("/", upload.single("image"), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No file uploaded!" });
//     }

//     // Function to handle the stream upload to Cloudinary
//     const streamUpload = (fileBuffer) => {
//       return new Promise((resolve, reject) => {
//         const stream = cloudinary.uploader.upload_stream((error, result) => {
//           if (result) {
//             resolve(result);
//           } else {
//             reject(error);
//           }
//         });

//         // Use streamifier to convert file buffer to a stream
//         streamifier.createReadStream(fileBuffer).pipe(stream);
//       });
//     };

//     // Call the streamUpload function
//     const result = await streamUpload(req.file.buffer);

//     // Respond with the uploaded image URL
//     res.json({ imageUrl: result.secure_url });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// module.exports = router;

router.post("/", upload.single("image"), async (req, res) => {
  try {
    // console.log("Request received!"); //  Check if the request is reaching the server
    if (!req.file) {
      console.log("No file received!"); // Debugging
      return res.status(400).json({ message: "No file uploaded!" });
    }

    console.log("Uploading file to Cloudinary...");

    const streamUpload = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.v2.uploader.upload_stream(
          { folder: "uploads" }, // Store in "uploads" folder
          (error, result) => {
            if (result) {
              // console.log("Upload successful:", result); // Debugging
              resolve(result);
            } else {
              console.error("Cloudinary Upload Error:", error);
              reject(error);
            }
          }
        );

        // Use streamifier to convert buffer to stream
        streamifier.createReadStream(fileBuffer).pipe(stream);
      });
    };

    const result = await streamUpload(req.file.buffer);

    console.log("File uploaded successfully:", result.secure_url);
    res.json({ imageUrl: result.secure_url });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;
