"use client"
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const VideoPlayer = ({ portfolio }) => {
  const videoRef = useRef(null);
  const [videoVisible, setVideoVisible] = useState(false); // Состояние видимости видео

  // Хук useInView возвращает true, когда видео видимо в окне браузера
  const { ref, inView } = useInView({
    triggerOnce: true, // Позволяет сработать только один раз, когда видео становится видимым
    threshold: 0.5, // Порог видимости (от 0 до 1), определяет, насколько видимость должна быть для срабатывания
  });

  useEffect(() => {
    if (inView) {
      setVideoVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = () => {
      video.play()
        .catch(error => {
          console.error('Video playback error:', error);
        });
    };

    const restartVideo = () => {
      video.currentTime = 0;
      playVideo();
    };

    if (videoVisible) {
      video.addEventListener('loadedmetadata', playVideo);
      video.addEventListener('ended', restartVideo);
    }

    return () => {
      video.removeEventListener('loadedmetadata', playVideo);
      video.removeEventListener('ended', restartVideo);
    };
  }, [videoVisible]);

  return (
    <div ref={ref} className="w-full xyy:mt-16 sd:mt-0 mb-28 flex justify-center">
      <div className='text-center'>
        <h6 className='text-2xl mb-5'>
         Видеообзор ремонта холодильника
        </h6>
        <iframe
          ref={videoRef}
          className='sd:w-[560px] xyy:w-full sd:h-[315px] xyy:h-[300px]'
          src="https://www.youtube.com/embed/Ez8whOIIp0c"
          title="Видео обзор ремонта холодильника"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowFullScreen
          donotallowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;


