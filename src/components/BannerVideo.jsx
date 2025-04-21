import videoFile from '../assets/video.mp4';

function BannerVideo() {
  return (
    <div className="w-full overflow-hidden">
      <video
        className="w-full h-auto object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default BannerVideo;




/** With image fallback */

// import { useState } from 'react';
// import videoFile from '../assets/video.mp4';
// import posterImage from '../assets/poster.jpg'; // Fallback Image

// function BannerVideo() {
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);

//   return (
//     <div className="w-full overflow-hidden relative">
//       {/* Poster Image */}
//       {!isVideoLoaded && (
//         <img
//           src={posterImage}
//           alt="Banner Poster"
//           className="w-full h-auto object-cover absolute inset-0 z-0 transition-opacity duration-700"
//         />
//       )}

//       {/* Video */}
//       <video
//         className={`w-full h-auto object-cover relative z-10 transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
//         autoPlay
//         loop
//         muted
//         playsInline
//         onCanPlayThrough={() => setIsVideoLoaded(true)}
//       >
//         <source src={videoFile} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// }

// export default BannerVideo;
