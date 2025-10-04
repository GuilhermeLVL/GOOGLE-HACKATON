import React from 'react';
import { useAppStore } from '../../store';
import type { TranscriptEntry } from '../../types/transcript';

const TranscriptEntryItem: React.FC<{ entry: TranscriptEntry }> = ({ entry }) => {
  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className={`transcript-entry transcript-entry-${entry.speaker.toLowerCase()}`}>
      <div className="entry-header">
        <span className={`speaker-badge speaker-badge-${entry.speaker.toLowerCase()}`}>
          {entry.speaker}
        </span>
        <span className="timestamp">
          {formatTime(entry.timestamp)}
        </span>
      </div>

      <div className="original-text">
        {entry.originalText}
      </div>

      {entry.translatedText && (
        <div className="translated-text">
          {entry.translatedText}
        </div>
      )}
    </div>
  );
};

const TranscriptView: React.FC = () => {
  const { session } = useAppStore();

  if (!session || session.transcriptEntries.length === 0) {
    return (
      <div className="transcript-view">
        <div className="transcript-empty">
          <p>No transcript entries yet. Start a session to begin transcription.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="transcript-view">
      <div className="transcript-container">
        <h2 className="transcript-title">Live Transcript</h2>

        <div>
          {session.transcriptEntries.map((entry) => (
            <TranscriptEntryItem key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TranscriptView;