import { useAppStore } from '../store';

export const useDemoData = () => {
  const { addTranscriptEntry, session } = useAppStore();

  const addDemoEntries = () => {
    if (session?.transcriptEntries.length === 0) {
      const demoEntries = [
        {
          id: 1,
          timestamp: new Date(Date.now() - 30000).toISOString(),
          speaker: "User" as const,
          originalText: "Hello, can you help me with this presentation?",
          translatedText: "Olá, você pode me ajudar com esta apresentação?"
        },
        {
          id: 2,
          timestamp: new Date(Date.now() - 25000).toISOString(),
          speaker: "System" as const,
          originalText: "Of course! I'd be happy to assist you with your presentation.",
          translatedText: "Claro! Eu ficaria feliz em ajudá-lo com sua apresentação."
        },
        {
          id: 3,
          timestamp: new Date(Date.now() - 20000).toISOString(),
          speaker: "User" as const,
          originalText: "I need to explain the new AI features we're implementing.",
          translatedText: "Preciso explicar os novos recursos de IA que estamos implementando."
        },
        {
          id: 4,
          timestamp: new Date(Date.now() - 15000).toISOString(),
          speaker: "System" as const,
          originalText: "That sounds fascinating! What specific AI features are you working on?",
          translatedText: "Isso parece fascinante! Em quais recursos específicos de IA você está trabalhando?"
        }
      ];

      demoEntries.forEach(entry => addTranscriptEntry(entry));
    }
  };

  return { addDemoEntries };
};