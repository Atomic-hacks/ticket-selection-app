//import React from 'react';
import Header from './Header';
import './TicketConfirmation.css';

const TicketConfirmation = () => {
  return (
    <div className="ticket-container">
      <Header/>

      <main className="main-content">
        <h1 className="title">Your Ticket is Booked!</h1>
        <p className="subtitle">Check your email for a copy or you can <a href="#" className="download-link">download</a></p>

        <div className="ticket">
          <div className="ticket-inner">
            <div className="event-header">
              <h2 className="event-title">Techember Fest &apos;25</h2>
              <p className="event-venue">• Architecture Hall, MIT • Live</p>
              <p className="event-date">• March 15, 2025 | 3:00 PM</p>
            </div>

            <div className="ticket-body">
              <div className="profile-section">
                <div className="profile-image"></div>
                <div className="profile-info">
                  <p className="attendee-name">Art Oroboso</p>
                  <p className="attendee-email">ticket@email.com</p>
                </div>
              </div>

              <div className="ticket-details">
                <div className="detail-item">
                  <p className="detail-label">Ticket Type</p>
                  <p className="detail-value">VIP</p>
                </div>
                <div className="detail-item">
                  <p className="detail-label">Ticket No.</p>
                  <p className="detail-value">1</p>
                </div>
              </div>

              <p className="info-text">
                Be in the room and what they want to hear.
                <br />
                With us while space, time of time wait.
              </p>
            </div>

            <div className="ticket-footer">
              <div className="barcode"></div>
            </div>
          </div>
        </div>

        <div className="actions">
          <button className="secondary-btn">Back Home (5 sec)</button>
          <button className="primary-btn">Download Ticket</button>
        </div>
      </main>
    </div>
  );
};

export default TicketConfirmation;