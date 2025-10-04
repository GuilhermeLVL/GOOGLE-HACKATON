import React, { useEffect, useState } from 'react';
import { checkChromeAIAvailability } from '../../utils/chromeAI';

const Header: React.FC = () => {
  const [apiStatus, setApiStatus] = useState<{
    allAvailable: boolean;
    message: string;
  } | null>(null);

  useEffect(() => {
    const status = checkChromeAIAvailability();
    setApiStatus(status);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h1>NexusTranslate</h1>
          <p>Real-time audio transcription and translation</p>
        </div>

        {apiStatus && (
          <div className={`status-indicator ${apiStatus.allAvailable ? 'status-ready' : 'status-unavailable'}`}>
            {apiStatus.allAvailable ? 'AI Ready' : 'AI Unavailable'}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;