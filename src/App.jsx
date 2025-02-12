import { useState } from 'react';
import './App.css';

const TicketSelection = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [numberOfTickets, setNumberOfTickets] = useState(1);

  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleNumberOfTicketsChange = (event) => {
    setNumberOfTickets(event.target.value);
  };

  return (
    <div className="ticket-selection">
      <h1>Ticket Selection</h1>
      <p>Step 1/3</p>
      <div className="event-info">
        <h2>Techember Fast &apos;25</h2>
        <p>Join us for an unforgettable experience at [Event Name] Secure your spot now.</p>
        <p><strong>[Event Location]</strong> 11 March 15, 2025 | 7:00 PM</p>
      </div>
      <div className="ticket-types">
        <div
          className={`ticket-type ${selectedTicket === 'free' ? 'selected' : ''}`}
          onClick={() => handleTicketSelect('free')}
        >
          <h3>Free</h3>
          <p>REGULAR ACCESS 20/52</p>
        </div>
        <div
          className={`ticket-type ${selectedTicket === 'vip1' ? 'selected' : ''}`}
          onClick={() => handleTicketSelect('vip1')}
        >
          <h3>$150</h3>
          <p>VIP ACCESS 20/52</p>
        </div>
        <div
          className={`ticket-type ${selectedTicket === 'vip2' ? 'selected' : ''}`}
          onClick={() => handleTicketSelect('vip2')}
        >
          <h3>$150</h3>
          <p>VIP ACCESS 20/52</p>
        </div>
      </div>
      <div className="ticket-quantity">
        <label htmlFor="numberOfTickets">Number of Tickets</label>
        <input
          type="number"
          id="numberOfTickets"
          value={numberOfTickets}
          onChange={handleNumberOfTicketsChange}
          min="1"
        />
      </div>
      <div className="actions">
        <button>Cancel</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default TicketSelection;