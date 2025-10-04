# NexusTranslate

Real-time audio transcription and translation web app for the **Google Chrome Built-in AI Challenge 2025**.

## 🎯 Overview

NexusTranslate is an innovative web application that captures microphone and system audio in real-time, providing live transcription and translation capabilities. The app features an AI-powered chat assistant that uses conversation context to answer questions about ongoing discussions.

### Key Features
- **Real-time Audio Capture**: Captures both microphone input and system audio simultaneously
- **Live Transcription**: Uses Chrome's built-in AI to transcribe audio to text in real-time
- **Instant Translation**: Translates transcriptions to selected languages using Chrome's Translator API
- **AI Chat Assistant**: Context-aware chatbot that answers questions about the conversation
- **Privacy-First**: All processing happens locally in the browser - no data leaves your device

## 🏗️ Architecture

### Tech Stack
- **Frontend**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules or Tailwind CSS
- **State Management**: Zustand or Context API
- **Deployment**: Vercel/Netlify (static hosting)

### Chrome AI APIs Used
- **Prompt API**: Real-time audio transcription and contextual chat responses
- **Translator API**: Live translation of transcribed text
- **Optional: Summarizer API**: Enhanced chat functionality for conversation summaries

## 🚀 Quick Start

### Prerequisites
- **Google Chrome** (latest version with AI features enabled)
- **Chrome AI Features**: Enable experimental AI features in `chrome://flags/#enable-experimental-ai-features`
- Node.js 18+ and npm

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/GuilhermeLVL/GOOGLE-HACKATON.git
   cd GOOGLE-HACKATON
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in Chrome**
   - Navigate to `http://localhost:5173` (or your dev server URL)
   - Ensure Chrome AI features are enabled

## 🎮 Usage Guide

### For Judges: Testing Instructions

1. **Browser Setup**
   - Use Google Chrome with AI features enabled
   - Grant microphone permissions when prompted
   - For system audio: Allow tab/screen capture when requested

2. **Basic Testing Flow**
   - Click "Start Session" to begin audio capture
   - Speak into your microphone - text should appear in real-time
   - Select a target language from the dropdown
   - Toggle translation on/off to see translated text
   - Ask questions in the chat window about the conversation

3. **Key Features to Test**
   - **Microphone Transcription**: Speak clearly and verify accurate transcription
   - **System Audio Capture**: Play audio from another tab and test capture
   - **Translation**: Switch languages and verify real-time translation
   - **AI Chat**: Ask questions like "Summarize the conversation" or "What were the main points?"
   - **Session Management**: Test "Copy Transcript" and "Clear Session" buttons

4. **Performance Expectations**
   - Transcription latency: <2 seconds
   - Chat response time: <3 seconds
   - Smooth real-time updates without blocking

### User Interface Layout
- **Header**: App title and status indicators
- **Controls**: Start/Stop button, language selector, translation toggle
- **Transcript View**: Real-time transcription display with speaker differentiation
- **Chat Window**: AI assistant interface for contextual questions

## 📋 Project Structure

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

## 🔧 Development Phases

1. **Setup**: Vite React+TS project, GitHub repo with MIT license, Vercel deployment
2. **UI Shell**: Static components (Header, Controls, TranscriptView, ChatWindow)
3. **Audio Capture**: Microphone integration with permission handling
4. **Transcription**: Chrome Prompt API integration for real-time text
5. **Translation**: Chrome Translator API with language selection
6. **AI Chat**: Context-aware assistant using transcript history
7. **Polish**: Copy transcript, clear session, responsive design

## 🎯 Hackathon Requirements Met

- ✅ **Original Code**: All code developed specifically for this hackathon
- ✅ **Chrome AI APIs**: Uses Prompt API, Translator API (optional: Summarizer)
- ✅ **Client-Side Processing**: All AI processing happens in-browser
- ✅ **Privacy-Focused**: No external data transmission
- ✅ **Open Source**: MIT license
- ✅ **Working Demo**: Functional web application
- ✅ **Documentation**: Comprehensive README and project documentation

## 🤝 Contributing

This is a hackathon submission project. For the evaluation period, please focus on testing the core functionality as described in the Usage Guide above.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Chrome Built-in AI Challenge 2025
- Chrome AI APIs (Gemini Nano)
- React, TypeScript, and Vite communities