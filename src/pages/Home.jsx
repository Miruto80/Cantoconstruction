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
      <section className="about-section bg-light py-5">
  <div className="container">
    <h2 className="text-center mb-4">Welcome to Canto Construction LLC</h2>
    <h5 className="text-center text-muted mb-4">
      Family-Owned Construction & Restoration Experts
    </h5>
    <div className="row justify-content-center">
  <div className="col-lg-10 styled-about-text">
    <p className="lead mb-4">
      At <strong>Canto Construction LLC</strong>, we take pride in being a family-owned and operated construction company
      serving our community with honesty, quality, and care. With years of hands-on experience, we specialize in:
    </p>
    <ul className="custom-list mb-4">
      <li>Interior Remodeling</li>
      <li>Home Renovations</li>
      <li>General Repairs</li>
      <li>Painting Services</li>
      <li>Water Damage Restoration</li>
      <li>Structural Drying</li>
      <li>Mold Mediation</li>
      <li>Vinyl Flooring Installation</li>
      <li>Trim and Molding Work</li>
    </ul>
    <p className="mb-4">
      We’re passionate about transforming houses into homes. Whether you’re remodeling your kitchen, restoring water
      damage, or giving your space a new look, we treat every project as if it were our own.
    </p>
    <h5 className="mt-5 mb-3">Why Choose Canto Construction LLC?</h5>
    <ul className="custom-list checkmark-list mb-4">
      <li>Family-Owned & Trusted</li>
      <li>Licensed & Insured</li>
      <li>Reliable, Honest Service</li>
      <li>High-Quality Workmanship</li>
      <li>Free Estimates</li>
    </ul>
    <p className="mt-4 fw-bold mb-4">
      Let’s build something great together. Contact us today for a free consultation!
    </p>
    <p className="contact-info">
      📞 <a href="tel:7327106539">732-710-6539</a><br />
      📧 <a href="mailto:cantoconstructionllc27@gmail.com">cantoconstructionllc27@gmail.com</a><br />
      📍 Proudly serving New Jersey
    </p>
  </div>
</div>
  </div>
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
