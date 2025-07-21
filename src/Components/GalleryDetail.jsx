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

  const openCarousel = (index) => {
    setStartIndex(index)
    setShowCarousel(true)
  }

  const closeCarousel = () => {
    setShowCarousel(false)
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-capitalize text-center"><b>{category.replace('_', ' ')} Gallery</b></h2>
      <div className="row">
        {images.map((img, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="card h-100 shadow-sm gallery-card" onClick={() => openCarousel(idx)} style={{ cursor: 'pointer' }}>
              <img src={img} alt={`work ${idx}`} className="card-img-top" />
            </div>
          </div>
        ))}
      </div>

      {showCarousel && (
        <div className="carousel-modal">
          <div className="carousel-backdrop" onClick={closeCarousel}></div>
          <div className="carousel-content">
            <button className="close-btn" onClick={closeCarousel}>✖</button>
            <Splide
              options={{
                start: startIndex,
                type: 'loop',
                heightRatio: 0.6,
                cover: true,
                arrows: true,
              }}
            >
              {images.map((img, idx) => (
                <SplideSlide key={idx}>
                  <img src={img} alt={`slide ${idx}`} className="img-fluid" />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      )}
    </div>
  )
}
