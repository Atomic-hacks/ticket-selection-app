//import React from 'react';
import PropTypes from 'prop-types';
import  Header  from '../components/Header';
import './TicketSelection.css';

const TicketSelection = ({ ticketData, updateTicketData, onNext }) => {
  const { ticketType, ticketCount } = ticketData;

  const handleTicketSelect = (type) => {
    updateTicketData({ ticketType: type });
  };

  const handleTicketCountChange = (e) => {
    updateTicketData({ ticketCount: parseInt(e.target.value) });
  };

  const handleNext = () => {
    if (!ticketType) {
      alert('Please select a ticket type before proceeding.');
      return;
    }
    onNext();
  };

  return (
    <div className="ticket-selection-container">
      <Header />

      <div className="ticket-selection-wrapper">
        <div className="ticket-selection-card">
          <div className="card-header">
            <h1 className="card-title">Ticket Selection</h1>
            <span className="step-indicator">Step 1/3</span>
          </div>

          <div className="event-banner">
            <h2 className="event-title">Techember Fest &apos;25</h2>
            <p className="event-description">
              Join us for an unforgettable experience at<br />
              HNG whatever. Secure your spot now.
            </p>
            <div className="event-details">
              <span className="event-location">📍 somewhere in the world </span>
              <span className="event-separator">|</span>
              <span className="event-date">March 13, 2025 | 7:00 PM</span>
            </div>
          </div>

          <div className="ticket-selection-section">
            <h3 className="section-title">Select Ticket Type:</h3>
            <div className="ticket-types">
              <div 
                className={`ticket-option ${ticketType === 'regular' ? 'selected' : ''}`}
                onClick={() => handleTicketSelect('regular')}
                role="radio"
                aria-checked={ticketType === 'regular'}
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleTicketSelect('regular');
                  }
                }}
              >
                <h4 className="ticket-price">Free</h4>
                <p className="ticket-type">REGULAR ACCESS</p>
                <p className="ticket-availability">20/52</p>
              </div>
              <div 
                className={`ticket-option ${ticketType === 'vip' ? 'selected' : ''}`}
                onClick={() => handleTicketSelect('vip')}
                role="radio"
                aria-checked={ticketType === 'vip'}
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleTicketSelect('vip');
                  }
                }}
              >
                <h4 className="ticket-price">$150</h4>
                <p className="ticket-type">VIP ACCESS</p>
                <p className="ticket-availability">20/52</p>
              </div>
              <div 
                className={`ticket-option ${ticketType === 'vvip' ? 'selected' : ''}`}
                onClick={() => handleTicketSelect('vvip')}
                role="radio"
                aria-checked={ticketType === 'vvip'}
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleTicketSelect('vvip');
                  }
                }}
              >
                <h4 className="ticket-price">$150</h4>
                <p className="ticket-type">VVIP ACCESS</p>
                <p className="ticket-availability">20/52</p>
              </div>
            </div>
          </div>

          <div className="ticket-quantity-section">
            <h3 className="quantity-title">Number of Tickets</h3>
            <div className="quantity-selector">
              <select 
                value={ticketCount} 
                onChange={handleTicketCountChange}
                className="quantity-dropdown"
                aria-label="Select number of tickets"
              >
                {[...Array(10).keys()].map(num => (
                  <option key={num + 1} value={num + 1}>{num + 1}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="action-buttons">
            <button className="cancel-button">Cancel</button>
            <button className="next-button" onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};


TicketSelection.propTypes = {
  ticketData: PropTypes.shape({
    ticketType: PropTypes.string,
    ticketCount: PropTypes.number.isRequired
  }).isRequired,
  updateTicketData: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired
};


TicketSelection.defaultProps = {
  ticketData: {
    ticketType: '',
    ticketCount: 1
  }
};

export default TicketSelection;