# NexusTranslate - AI Coding Instructions

## Project Overview
NexusTranslate is a real-time audio transcription and translation web app for the **Google Chrome Built-in AI Challenge 2025**. It captures microphone and system audio, provides live transcription/translation, and offers an AI chat assistant using conversation context.

## Core Architecture Principles

### Client-Side First (CRITICAL)
- **ALL AI processing** must use Chrome's built-in APIs (Gemini Nano) - NO external API calls
- Use `window.ai.promptAPI` for transcription and chat assistance  
- Use `window.ai.translator` for real-time translation
- Optional: `window.ai.summarizer` for chat enhancement
- No backend servers for AI processing - everything runs in the browser

### Privacy-First Design
- Audio and transcription data **NEVER** leaves the browser
- No authentication, user accounts, or persistent storage
- Session data exists only in browser memory during the session
- Use `navigator.mediaDevices.getUserMedia()` for microphone access
- Use `navigator.mediaDevices.getDisplayMedia()` for system audio capture

## Tech Stack Requirements

### Mandatory Stack
- **Frontend**: React 18+ with TypeScript (functional components + hooks only)
- **Build Tool**: Vite (`npm create vite`)
- **Styling**: CSS Modules or Tailwind CSS
- **State**: Zustand or Context API (avoid Redux complexity)
- **Deployment**: Vercel/Netlify (static hosting)

### File Structure Pattern
```
src/
├── components/
│   ├── Header/           # App title and status indicators
│   ├── Controls/         # Start/Stop, language selector, translate toggle
│   ├── TranscriptView/   # Real-time transcription display
│   └── ChatWindow/       # AI assistant interface
├── hooks/
│   ├── useAudioCapture.ts    # Microphone + system audio logic
│   ├── useTranscription.ts   # Chrome Prompt API integration
│   └── useTranslation.ts     # Chrome Translator API integration
├── types/
│   └── transcript.ts     # TypeScript interfaces for session data
└── utils/
    └── audioProcessing.ts
```

## Critical Implementation Patterns

### Session Data Structure
Always use this exact format for transcript entries:
```typescript
interface TranscriptEntry {
  id: number;
  timestamp: string; // ISO format
  speaker: "User" | "System";
  originalText: string;
  translatedText?: string;
}

interface Session {
  sessionId: string;
  startTime: string;
  transcriptEntries: TranscriptEntry[];
}
```

### Audio Capture Workflow
1. Request microphone permission first: `getUserMedia({ audio: true })`
2. For system audio: use `getDisplayMedia({ audio: true })` with tab selection
3. Process both streams separately with Chrome's Prompt API
4. Distinguish visually between "User" and "System" speakers in UI

### Chrome AI API Integration Examples
```typescript
// Transcription
const transcriber = await window.ai.promptAPI.create({
  systemPrompt: "Transcribe audio to text accurately"
});

// Translation
const translator = await window.ai.translator.create({
  sourceLanguage: 'en', 
  targetLanguage: userSelectedLanguage
});

// Chat Assistant
const chatContext = formatTranscriptAsContext(sessionData);
const response = await window.ai.promptAPI.prompt(
  `Context: ${chatContext}\n\nUser question: ${userInput}`
);
```

## Development Phases (Follow This Order)

1. **Setup**: Vite React+TS project, GitHub repo with MIT license, Vercel deployment
2. **UI Shell**: Static components (Header, Controls, TranscriptView, ChatWindow)  
3. **Audio Capture**: Microphone integration with permission handling
4. **Transcription**: Chrome Prompt API integration for real-time text
5. **Translation**: Chrome Translator API with language selection
6. **AI Chat**: Context-aware assistant using transcript history
7. **Polish**: Copy transcript, clear session, responsive design

## Hackathon Constraints
- **Submission Requirements**: Working app link, public GitHub repo, 3-min demo video, text description
- **APIs Required**: Must use Chrome's built-in AI APIs (Prompt, Translator, optionally Summarizer)
- **Original Code**: All code must be new for this hackathon
- **Open Source**: MIT license required

## Component Communication Patterns
- Use Zustand store for: session state, audio status, translation preferences
- Lift state up for: transcript entries, AI responses, language selection
- Keep audio stream handling in custom hooks, not components

## Performance Guidelines
- Target <2s latency for transcription display
- Target <3s response time for AI chat
- Use React.memo() for TranscriptView items to prevent unnecessary re-renders
- Implement efficient audio chunk processing to maintain real-time feel

## Testing Approach
- Manual testing in Chrome Canary with AI flags enabled
- Test microphone permissions and system audio capture separately
- Verify Chrome AI APIs are available before using (`window.ai` existence)
- Test with different languages for translation accuracy

## Common Pitfalls to Avoid
- Don't use external AI APIs (violates hackathon rules)
- Don't implement user authentication (outside MVP scope)
- Don't use class components (project uses functional only)
- Don't store data persistently (privacy violation)
- Don't use complex state management for this scope