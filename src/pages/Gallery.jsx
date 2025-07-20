import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Gallery.css'

const categories = [
  { name: 'Bathrooms', folder: 'bathrooms' },
  { name: 'Kitchens', folder: 'kitchens' },
  { name: 'Floors', folder: 'floors' },
  { name: 'Living_Rooms', folder: 'living_rooms' },
  { name: 'Stairs', folder: 'stairs' },
  { name: 'Remodeling', folder: 'remodeling' },
]

export default function Gallery() {
  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center text-dark"><b>Our Works</b></h2>
      <div className="row">
        {categories.map((cat) => (
         <div className="col-md-4 mb-4" key={cat.folder}>
  <Link to={`/gallery/${cat.folder}`} className="text-decoration-none text-dark">
    <div className="card shadow-sm h-100 position-relative gallery-card">
      <img
        src={`/img/${cat.folder}/thumb.webp`}
        className="card-img-top gallery-img"
        alt={cat.name}
      />
      <div className="overlay-text">
        <h4 className="card-title">{cat.name.replace('_', ' ')}</h4>
      </div>
    </div>
  </Link>
</div>

        ))}
      </div>
    </div>
  )
}

