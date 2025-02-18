import { useState, useEffect } from 'react';
import TicketSelection from '../components/TicketSelection';
import AttendeeDetails from '../components/AttendeeDetails';
import TicketConfirmation from '../components/TicketConfirmation';
import './App.css';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [ticketData, setTicketData] = useState({
    ticketType: '',
    ticketCount: 1,
    name: '',
    email: '',
    avatarUrl: '',
    specialRequest: ''
  });

  useEffect(() => {
    const savedData = localStorage.getItem('conferenceTicketData');
    if (savedData) {
      setTicketData(JSON.parse(savedData));
      
      const savedStep = localStorage.getItem('conferenceTicketStep');
      if (savedStep) {
        setCurrentStep(parseInt(savedStep));
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('conferenceTicketData', JSON.stringify(ticketData));
    localStorage.setItem('conferenceTicketStep', currentStep.toString());
  }, [ticketData, currentStep]);

  const updateTicketData = (newData) => {
    setTicketData(prevData => ({
      ...prevData,
      ...newData
    }));
  };

  const handleNext = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <TicketSelection 
            ticketData={ticketData} 
            updateTicketData={updateTicketData} 
            onNext={handleNext} 
          />
        );
      case 2:
        return (
          <AttendeeDetails 
            ticketData={ticketData} 
            updateTicketData={updateTicketData} 
            onBack={handleBack} 
            onNext={handleNext} 
          />
        );
      case 3:
        return (
          <TicketConfirmation 
            ticketData={ticketData} 
            onBack={handleBack} 
          />
        );
      default:
        return (
          <TicketSelection 
            ticketData={ticketData} 
            updateTicketData={updateTicketData} 
            onNext={handleNext} 
          />
        );
    }
  };

  return (
    <div className="app">
      {renderStep()}
    </div>
  );
};

export default App;
