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