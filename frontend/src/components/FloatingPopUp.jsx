import { useState } from "react";
import { X, Sprout } from "lucide-react";

function FloatingPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end z-50">
      {isOpen && (
        <div className="bg-white shadow-xl rounded-2xl p-4 w-64 mb-2 border border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Know Plant Health!</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Upload your plant's image and its done!
          </p>
          <a
            href="https://web-production-eb442.up.railway.app/"
            className="block text-center mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Check Health!
          </a>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full p-3 bg-green-600 hover:bg-green-700 shadow-lg animate-pulse motion-safe:animate-[wiggle_1.5s_ease-in-out_infinite]"
      >
        <Sprout size={24} color="white" />
      </button>
      <style>
        {`
          @keyframes wiggle {
            0%, 100% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(-5deg) scale(1.1); }
            50% { transform: rotate(5deg) scale(1); }
            75% { transform: rotate(-3deg) scale(1.05); }
          }
        `}
      </style>
    </div>
  );
}

export default FloatingPopup;
