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
    <div className="row justify-content-center mb-4">
      <div className="col-lg-10 styled-about-text">
        <p className="lead mb-4">
          At <strong>Canto Construction LLC</strong>, we take pride in being a family-owned and operated construction company
          serving our community with honesty, quality, and care. With years of hands-on experience, we specialize in:
        </p>

       <div className="row g-4 justify-content-center">
  <div className="col-md-4 text-center">
    <i className="fas fa-tools fa-3x text-primary mb-2"></i>
    <h5 className="mb-1">Interior Remodeling</h5>
    <p className="mb-0">Comprehensive interior transformations and renovations.</p>
  </div>

  <div className="col-md-4 text-center">
    <i className="fas fa-home fa-3x text-primary mb-2"></i>
    <h5 className="mb-1">Home Renovations</h5>
    <p className="mb-0">Complete home makeovers tailored to your vision and budget.</p>
  </div>

  <div className="col-md-4 text-center">
    <i className="fas fa-water fa-3x text-primary mb-2"></i>
    <h5 className="mb-1">Water Damage Restoration</h5>
    <p className="mb-0">We handle flood, leak, and water damage restorations efficiently.</p>
  </div>

  <div className="col-md-4 text-center">
    <i className="fas fa-hammer fa-3x text-primary mb-2"></i>
    <h5 className="mb-1">General Repairs</h5>
    <p className="mb-0">Reliable and quality general repair services.</p>
  </div>

  <div className="col-md-4 text-center">
    <i className="fas fa-paint-roller fa-3x text-primary mb-2"></i>
    <h5 className="mb-1">Painting Services</h5>
    <p className="mb-0">Interior and exterior painting for all spaces.</p>
  </div>


  <div className="col-md-4 text-center">
    <i className="fas fa-fan fa-3x text-primary mb-2"></i>
    <h5 className="mb-1">Structural Drying</h5>
    <p className="mb-0">Professional drying to prevent further damage.</p>
  </div>

  <div className="col-md-4 text-center">
    <i className="fas fa-radiation fa-3x text-primary mb-2"></i>
    <h5 className="mb-1">Mold Mediation</h5>
    <p className="mb-0">Expert mold treatment and remediation.</p>
  </div>

  <div className="col-md-4 text-center">
    <i className="fas fa-border-style fa-3x text-primary mb-2"></i>
    <h5 className="mb-1">Vinyl Flooring Installation</h5>
    <p className="mb-0">Durable and stylish vinyl flooring solutions.</p>
  </div>

  <div className="col-md-4 text-center">
    <i className="fas fa-ruler-combined fa-3x text-primary mb-2"></i>
    <h5 className="mb-1">Trim and Molding Work</h5>
    <p className="mb-0">Expert installation of trim and decorative moldings.</p>
  </div>
</div>


        <p className="mb-4 mt-4">
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
      </div>
  );
}
