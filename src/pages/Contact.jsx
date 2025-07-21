import React, { useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2';

export default function Contact() {
  const [state, handleSubmit] = useForm("mnnzjoay");
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const [errors, setErrors] = useState({});

  const validateKeyPress = (er, e) => {
    const key = e.keyCode || e.which;
    const tecla = String.fromCharCode(key);
    if (!er.test(tecla)) {
      e.preventDefault();
    }
  };

  const validateKeyUp = (er, value, field, message) => {
    if (er.test(value)) {
      setErrors(prev => ({ ...prev, [field]: '' }));
      return true;
    } else {
      setErrors(prev => ({ ...prev, [field]: message }));
      return false;
    }
  };

  const validateForm = () => {
    const validName = validateKeyUp(/^[A-Za-z\sñÑà-ü]{3,30}$/, nameRef.current.value, 'name', 'Only letters, 3-30 characters');
    const validEmail = validateKeyUp(/^[A-Za-z_0-9ñÑà-ü-]{3,20}@[A-Za-z0-9]{3,8}\.[A-Za-z]{2,6}$/, emailRef.current.value, 'email', 'Invalid email format');
    let validPhone = true;
    if(phoneRef.current.value.trim() !== '') {
      validPhone = validateKeyUp(/^[0-9]{10,11}$/, phoneRef.current.value, 'phone', 'Must be 10-11 digits');
    } else {
      setErrors(prev => ({ ...prev, phone: '' }));
    }

    if (!validName || !validEmail || !validPhone) {
      Swal.fire({
        icon: 'error',
        title: 'Validation error',
        text: 'Please check your inputs and try again',
      });
      return false;
    }

    return true;
  };

  const customSubmit = async e => {
    e.preventDefault();
    if (validateForm()) {
      await handleSubmit(e);
      if (state.succeeded) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent',
          text: 'Thank you! We will contact you soon.',
        });
      } else if(state.errors.length > 0) {
        Swal.fire({
          icon: 'error',
          title: 'Submission error',
          text: 'Something went wrong. Please try again later.',
        });
      }
    }
  };

  return (
    <div className="container py-5">
      {/* Métodos de contacto */}
      <div className="d-flex justify-content-center mb-4 gap-4 flex-wrap">
        <a href="tel:+17327106539" className="btn btn-outline-primary d-flex align-items-center gap-2">
          <i className="fas fa-phone"></i> +1 732 710 6539
        </a>
        <a href="https://wa.me/17327106539" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success d-flex align-items-center gap-2">
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>

      {/* Formulario y Imagen */}
      <div className="row align-items-center">
        <div className="col-md-6 mb-4">
          <h2 className="mb-4">Contact Us</h2>
          {state.succeeded ? (
            <div className="alert alert-success" role="alert">
              Thank you for your message! We will get back to you soon.
            </div>
          ) : (
            <form onSubmit={customSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="Your full name"
                  ref={nameRef}
                  maxLength={30}
                  onKeyPress={e => validateKeyPress(/^[A-Za-z\sñÑà-ü]$/, e)}
                  onKeyUp={e => validateKeyUp(/^[A-Za-z\sñÑà-ü]{3,30}$/, e.target.value, 'name', 'Only letters, 3-30 characters')}
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address (optional)</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="name@example.com"
                  ref={emailRef}
                  onKeyPress={e => validateKeyPress(/^[A-Za-z@_.0-9ñÑà-ü-]$/, e)}
                  onKeyUp={e => validateKeyUp(/^[A-Za-z_0-9ñÑà-ü-]{3,20}@[A-Za-z0-9]{3,8}\.[A-Za-z]{2,6}$/, e.target.value, 'email', 'Invalid email format')}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  placeholder="+1 234 567 890"
                  ref={phoneRef}
                  maxLength={11}
                  onKeyPress={e => validateKeyPress(/^[0-9]$/, e)}
                  onKeyUp={e => {
                    if(e.target.value.trim() !== '') {
                      validateKeyUp(/^[0-9]{10,11}$/, e.target.value, 'phone', 'Must be 10-11 digits');
                    } else {
                      setErrors(prev => ({ ...prev, phone: '' }));
                    }
                  }}
                  required
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Your message here"
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button type="submit" className="btn btn-primary px-5" disabled={state.submitting}>
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        <div className="col-md-6 text-center">
  <iframe
    title="Google Maps - New Jersey Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.8555917435273!2d-74.17265668434263!3d40.73565797932826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fa92d2a14b4d%3A0x1e0f48f622a1f70!2sNewark%2C%20NJ!5e0!3m2!1sen!2sus!4v1689951234567"
    width="100%"
    height="500"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
      </div>
    </div>
  );
}
