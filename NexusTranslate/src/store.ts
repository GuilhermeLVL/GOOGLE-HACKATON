import { create } from 'zustand';
import type { Session, AudioState, TranslationState, ChatMessage } from './types/transcript';

interface AppState {
  // Session data
  session: Session | null;
  startNewSession: () => void;
  clearSession: () => void;

  // Audio state
  audioState: AudioState;
  setAudioState: (state: Partial<AudioState>) => void;

  // Translation state
  translationState: TranslationState;
  setTranslationState: (state: Partial<TranslationState>) => void;

  // Chat messages
  chatMessages: ChatMessage[];
  addChatMessage: (message: ChatMessage) => void;
  clearChatMessages: () => void;

  // Transcript entries
  addTranscriptEntry: (entry: Session['transcriptEntries'][0]) => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Session management
  session: null,
  startNewSession: () => {
    const sessionId = `session_${Date.now()}`;
    set({
      session: {
        sessionId,
        startTime: new Date().toISOString(),
        transcriptEntries: []
      },
      chatMessages: [],
      audioState: { isRecording: false, hasPermission: false }
    });
  },
  clearSession: () => {
    set({
      session: null,
      chatMessages: [],
      audioState: { isRecording: false, hasPermission: false }
    });
  },

  // Audio state
  audioState: { isRecording: false, hasPermission: false },
  setAudioState: (newState) => {
    set((state) => ({
      audioState: { ...state.audioState, ...newState }
    }));
  },

  // Translation state
  translationState: {
    isEnabled: false,
    targetLanguage: 'en',
    availableLanguages: ['en', 'es', 'fr', 'de', 'pt', 'it', 'ja', 'ko', 'zh']
  },
  setTranslationState: (newState) => {
    set((state) => ({
      translationState: { ...state.translationState, ...newState }
    }));
  },

  // Chat messages
  chatMessages: [],
  addChatMessage: (message) => {
    set((state) => ({
      chatMessages: [...state.chatMessages, message]
    }));
  },
  clearChatMessages: () => {
    set({ chatMessages: [] });
  },

  // Transcript entries
  addTranscriptEntry: (entry) => {
    set((state) => {
      if (!state.session) return state;

      const updatedSession = {
        ...state.session,
        transcriptEntries: [...state.session.transcriptEntries, entry]
      };

      return { session: updatedSession };
    });
  }
}));