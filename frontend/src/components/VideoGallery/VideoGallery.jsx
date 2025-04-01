import React from "react";
import "./VideoGallery.css";

const videos = [
  {
    id: 1,
    title: "The Beauty of Plant Life",
    url: "https://www.youtube.com/embed/fyr8o-w8ECk",
  },
  {
    id: 2,
    title: "Houseplants for Beginners",
    url: "https://www.youtube.com/embed/O_mdg1NMkgA",
  },
  {
    id: 3,
    title: "Gardening Tips for Newbies",
    url: "https://www.youtube.com/embed/ekFy7q49RqM",
  },
  {
    id: 4,
    title: "Indoor Plants Care",
    url: "https://www.youtube.com/embed/GO2f1cNOtco",
  },
  {
    id: 5,
    title: "Planting Succulents",
    url: "https://www.youtube.com/embed/qYmy51GrtRk",
  },
  {
    id: 6,
    title: "Caring for Orchids",
    url: "https://www.youtube.com/embed/t-wnQMAcd6w",
  },
  {
    id: 7,
    title: "Creating a Zen Garden",
    url: "https://www.youtube.com/embed/pqyk556UIvg",
  },
  {
    id: 8,
    title: "Growing Herbs Indoors",
    url: "https://www.youtube.com/embed/S2nBOsv4Fwg",
  },
  {
    id: 9,
    title: "Top 10 Air Purifying Plants",
    url: "https://www.youtube.com/embed/5bfsTAfr7xc",
  },
];

const VideoGallery = () => {
  return (
    <div className="bg-plant-pattern min-h-screen bg-cover bg-center">
      <div className="containers mx-auto p-5 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-12">
          Explore Plant Videos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="border rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105"
            >
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 bg-green-50">
                <h2 className="text-lg font-semibold text-green-700">
                  {video.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
