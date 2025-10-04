import React from 'react';
import { useAppStore } from '../../store';
import { copyTranscriptToClipboard } from '../../utils/clipboard';
import { useDemoData } from '../../hooks/useDemoData';

const Controls: React.FC = () => {
  const {
    audioState,
    translationState,
    startNewSession,
    clearSession,
    setTranslationState
  } = useAppStore();

  const handleStartStop = () => {
    if (audioState.isRecording) {
      // Stop recording logic will be implemented later
      console.log('Stopping recording...');
    } else {
      startNewSession();
      // Start recording logic will be implemented later
      console.log('Starting recording...');
    }
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTranslationState({ targetLanguage: e.target.value });
  };

  const handleTranslationToggle = () => {
    setTranslationState({ isEnabled: !translationState.isEnabled });
  };

  return (
    <div className="controls">
      <div className="controls-content">
        {/* Start/Stop Button */}
        <button
          onClick={handleStartStop}
          className={`btn ${audioState.isRecording ? 'btn-danger' : 'btn-primary'}`}
        >
          {audioState.isRecording ? 'Stop Session' : 'Start Session'}
        </button>

        {/* Language Selector */}
        <div className="language-selector">
          <label htmlFor="language-select">Target Language:</label>
          <select
            id="language-select"
            value={translationState.targetLanguage}
            onChange={handleLanguageChange}
          >
            {translationState.availableLanguages.map((lang) => (
              <option key={lang} value={lang}>
                {lang.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Translation Toggle */}
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="translation-toggle"
            checked={translationState.isEnabled}
            onChange={handleTranslationToggle}
          />
          <label htmlFor="translation-toggle">Enable Translation</label>
        </div>

        {/* Clear Session Button */}
        <button
          onClick={clearSession}
          className="btn btn-secondary"
        >
          Clear Session
        </button>

        {/* Copy Transcript Button */}
        <button
          onClick={copyTranscriptToClipboard}
          className="btn btn-purple"
        >
          Copy Transcript
        </button>
      </div>
    </div>
  );
};

export default Controls;