export interface TranscriptEntry {
  id: number;
  timestamp: string; // ISO format
  speaker: "User" | "System";
  originalText: string;
  translatedText?: string;
}

export interface Session {
  sessionId: string;
  startTime: string;
  transcriptEntries: TranscriptEntry[];
}

export interface AudioState {
  isRecording: boolean;
  hasPermission: boolean;
  error?: string;
}

export interface TranslationState {
  isEnabled: boolean;
  targetLanguage: string;
  availableLanguages: string[];
}

export interface ChatMessage {
  id: string;
  timestamp: string;
  type: "user" | "assistant";
  content: string;
}