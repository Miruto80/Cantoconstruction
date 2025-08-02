import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../assets/css/GalleryDetail.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import defotos from '../assets/data/defotos'

export default function GalleryDetail() {
  const { category } = useParams()
  const [images, setImages] = useState([])
  const [showCarousel, setShowCarousel] = useState(false)
  const [startIndex, setStartIndex] = useState(0)

  useEffect(() => {
    if (defotos[category]) {
      setImages(defotos[category])
    } else {
      setImages([])
    }
  }, [category])

  // Helper para saber si es video
  const isVideo = (src) => {
    return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg')
  }

  const openCarousel = (index) => {
    setStartIndex(index)
    setShowCarousel(true)
  }

  const closeCarousel = () => {
    setShowCarousel(false)
  }

  // Separa imágenes y videos
  const imageList = images.filter((media) => !isVideo(media))
  const videoList = images.filter((media) => isVideo(media))

  // Estado para controlar qué videos han sido activados
  const [activeVideos, setActiveVideos] = useState([])

  const handleActivateVideo = (idx) => {
    setActiveVideos((prev) => [...prev, idx])
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-capitalize text-center">
        <b>{category.replace('_', ' ')} Gallery</b>
      </h2>

      {/* Sección de imágenes */}
      <div className="row">
        {imageList.map((media, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="card h-100 shadow-sm gallery-card" onClick={() => openCarousel(images.indexOf(media))} style={{ cursor: 'pointer' }}>
              <img src={media} alt={`work ${idx}`} className="card-img-top" loading="lazy" />
            </div>
          </div>
        ))}
      </div>

      {/* Sección de videos */}
      {videoList.length > 0 && (
        <div className="mt-5">
         <h2 className="mb-4 text-capitalize text-center">
        Videos
      </h2>
          <div className="row">
            {videoList.map((media, idx) => {
              const globalIdx = images.indexOf(media)
              const isActive = activeVideos.includes(globalIdx)
              return (
                <div className="col-md-6 mb-4" key={idx}>
                  <div className="card h-100 shadow-sm gallery-card" style={{ padding: '10px', background: '#222', cursor: isActive ? 'default' : 'pointer' }}>
                    {isActive ? (
                      <video
                        src={media}
                        className="card-img-top"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', background: '#000' }}
                        controls
                        playsInline
                        poster="/img/remodeling/15.webp"
                        autoPlay
                      />
                    ) : (
                      <img
                        src="/img/remodeling/15.webp"
                        alt="Video preview"
                        className="card-img-top"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', background: '#000' }}
                        onClick={() => handleActivateVideo(globalIdx)}
                      />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {showCarousel && (
        <div className="carousel-modal" onClick={closeCarousel}>
          <div className="carousel-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeCarousel}>✖</button>
            <Splide
              options={{
                start: startIndex,
                type: 'loop',
                heightRatio: 0.6,
                cover: true,
                arrows: true,
                pagination: false,
              }}
              aria-label="Gallery slides"
            >
              {imageList.map((media, idx) => (
                <SplideSlide key={idx}>
                  <img src={media} alt={`slide ${idx}`} className="carousel-image" loading="lazy" />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      )}
    </div>
  )
}
