import videoFile from '../assets/video.mp4';

function BannerVideo() {
  return (
    <>
      <video autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
      </video>
    </>
  )
}

export default BannerVideo