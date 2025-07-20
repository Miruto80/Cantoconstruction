import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom';
import '../assets/css/home.css';

export default function Home() {
  const heroSlides = [
    {
  img: '/img/living_rooms/1.webp',
  title: 'Expert Home Remodeling',
  subtitle: 'We transform spaces with quality and precision.'
},
{
  img: '/img/bathrooms/1.webp',
  title: 'Reliable Construction',
  subtitle: 'Your project is in professional hands.'
},
{
  img: '/img/stairs/5.webp',
  title: 'Details That Make a Difference',
  subtitle: 'Flawless finishes for a home that inspires.'
}

  ];
  return (
    <div className="container-fluid p-0">
      <section className="hero-section position-relative d-flex align-items-center justify-content-center" style={{minHeight: '60vh', overflow: 'hidden'}}>
        <Splide
          options={{
            type: 'fade',
            rewind: true,
            autoplay: true,
            interval: 3500,
            speed: 1200,
            arrows: false,
            pagination: false,
            pauseOnHover: false,
            pauseOnFocus: false,
          }}
          className="hero-slider w-100 h-100"
          aria-label="Hero Car Slider"
        >
         {heroSlides.map((slide, idx) => (
  <SplideSlide key={idx}>
  <div
    className="hero-slide"
    style={{ backgroundImage: `url(${slide.img})` }}
  >
    <div className="hero-overlay"></div>
    <div className="hero-text-box text-center">
  <h1 className="display-3 fw-bold mb-3">{slide.title}</h1>
  <p className="lead mb-4">{slide.subtitle}</p>
  <div className="d-flex flex-wrap justify-content-center gap-3">
    <Link
      to="/gallery"
      className="btn btn-gold-dark btn-lg px-5 py-3 fw-bold shadow"
    >
      Browse Gallery
    </Link>
    <Link
      to="/contact"
      className="btn btn-outline-light btn-lg px-4 py-3 fw-bold shadow-sm"
    >
      Schedule Your Free Consultation
    </Link>
  </div>
</div>

  </div>
</SplideSlide>

))}

        </Splide>
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      </section>
      <section class="services-section py-5">
  <div class="container">
    <h2 class="text-center mb-4">Our Services</h2>
    <div class="row g-4">
      
      <div class="col-md-4 text-center">
        <i class="fas fa-tools fa-4x text-primary mb-3"></i>
        <h5>Drywall</h5>
        <p>Installation and repair of drywall with clean, professional finishes.</p>
      </div>

      <div class="col-md-4 text-center">
        <i class="fas fa-paint-roller fa-4x text-primary mb-3"></i>
        <h5>Paint</h5>
        <p>Interior and exterior painting for residential and commercial spaces.</p>
      </div>

      <div class="col-md-4 text-center">
        <i class="fas fa-water fa-4x text-primary mb-3"></i>
        <h5>Water Restoration</h5>
        <p>We handle flood, leak, and water damage restorations efficiently.</p>
      </div>

      <div class="col-md-4 text-center">
        <i class="fas fa-ruler-combined fa-4x text-primary mb-3"></i>
        <h5>Trim</h5>
        <p>Expert installation of baseboards, moldings, and decorative trim.</p>
      </div>

      <div class="col-md-4 text-center">
        <i class="fas fa-border-style fa-4x text-primary mb-3"></i>
        <h5>Vinyl Floor</h5>
        <p>Durable and stylish vinyl flooring solutions for every room.</p>
      </div>

      <div class="col-md-4 text-center">
        <i class="fas fa-home fa-4x text-primary mb-3"></i>
        <h5>Home Remodeling</h5>
        <p>Complete home makeovers tailored to your vision and budget.</p>
      </div>

    </div>
  </div>
</section>
      </div>
  );
}
