import { useState } from 'react';
import PropTypes from 'prop-types';
import  Header  from '../components/Header';
import './AttendeeDetails.css';

const AttendeeDetails = ({ ticketData, updateTicketData, onBack, onNext }) => {
  const { name, email, avatarUrl, specialRequest } = ticketData;
  const [errors, setErrors] = useState({});
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateTicketData({ [name]: value });
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

 

  const validateForm = () => {
    const newErrors = {};
    
    if (!name?.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!avatarUrl?.trim()) {
      newErrors.avatarUrl = 'Profile photo URL is required';
    } else if (!isValidUrl(avatarUrl)) {
      newErrors.avatarUrl = 'Please enter a valid image URL';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (urlString) => {
    try {
      const url = new URL(urlString);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (e) {
      return false;
    }
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    
    alert('please enter a Cloudinary URL or any valid image URL manually.');
  };

  return (
    <div className="attendee-details-container">
      <Header />

      <div className="attendee-details-wrapper">
        <div className="attendee-details-card">
          <div className="card-header">
            <h1 className="card-title">Attendee Details</h1>
            <span className="step-indicator">Step 2/3</span>
          </div>

          <div className="form-content">
            <div className="profile-upload-section">
              <p className="upload-title">Upload Profile Photo</p>
              
              <div 
                className={`upload-box ${errors.avatarUrl ? 'error' : ''}`}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {avatarUrl ? (
                  <img src={avatarUrl} alt="Profile" className="uploaded-image" />
                ) : (
                  <div className="upload-placeholder">
                    <div className="upload-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="#8F9BAA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 8L12 3L7 8" stroke="#8F9BAA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 3V15" stroke="#8F9BAA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="upload-text">Drag & drop or click to upload</p>
                  </div>
                )}
              </div>
              {errors.avatarUrl && (
                <span className="error-message" role="alert">{errors.avatarUrl}</span>
              )}
              <div className="url-input-container">
                <label htmlFor="avatarUrl">Or enter image URL:</label>
                <input
                  type="text"
                  id="avatarUrl"
                  name="avatarUrl"
                  value={avatarUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                  aria-invalid={errors.avatarUrl ? "true" : "false"}
                  aria-describedby={errors.avatarUrl ? "avatarUrl-error" : undefined}
                />
              </div>
            </div>

            <div className="form-fields">
              <div className="form-group">
                <label htmlFor="name">Enter your name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={name}
                  onChange={handleInputChange}
                  required
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span className="error-message" id="name-error" role="alert">{errors.name}</span>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Enter your email</label>
                <div className="email-input-container">
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email}
                    onChange={handleInputChange}
                    required
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  <div className="email-icon">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="#8F9BAA"/>
                    </svg>
                  </div>
                </div>
                {errors.email && (
                  <span className="error-message" id="email-error" role="alert">{errors.email}</span>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="specialRequest">Special request?</label>
                <textarea 
                  id="specialRequest" 
                  name="specialRequest" 
                  rows="2"
                  value={specialRequest}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>

            <div className="action-buttons attendee-action-buttons">
              <button className="back-button" onClick={onBack}>Back</button>
              <button className="pay-button" onClick={handleNext}>Pay for your Ticket</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


AttendeeDetails.propTypes = {
  ticketData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    avatarUrl: PropTypes.string,
    specialRequest: PropTypes.string
  }).isRequired,
  updateTicketData: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired
};


AttendeeDetails.defaultProps = {
  ticketData: {
    name: '',
    email: '',
    avatarUrl: '',
    specialRequest: ''
  }
};

export default AttendeeDetails;