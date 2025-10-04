import { useAppStore } from '../store';

export const copyTranscriptToClipboard = () => {
  const { session } = useAppStore.getState();

  if (!session || session.transcriptEntries.length === 0) {
    alert('No transcript to copy. Start a session first.');
    return;
  }

  const transcriptText = session.transcriptEntries
    .map(entry => {
      const time = new Date(entry.timestamp).toLocaleTimeString();
      const speaker = entry.speaker;
      const original = entry.originalText;
      const translated = entry.translatedText ? `\nTranslation: ${entry.translatedText}` : '';

      return `[${time}] ${speaker}: ${original}${translated}`;
    })
    .join('\n\n');

  const fullTranscript = `NexusTranslate Session - ${new Date(session.startTime).toLocaleString()}\n\n${transcriptText}`;

  navigator.clipboard.writeText(fullTranscript)
    .then(() => {
      alert('Transcript copied to clipboard!');
    })
    .catch(err => {
      console.error('Failed to copy transcript:', err);
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = fullTranscript;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Transcript copied to clipboard!');
    });
};