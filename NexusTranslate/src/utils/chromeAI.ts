// Chrome AI API availability check
export const checkChromeAIAvailability = () => {
  const checks = {
    promptAPI: !!(window as any).ai?.promptAPI,
    translator: !!(window as any).ai?.translator,
    summarizer: !!(window as any).ai?.summarizer,
  };

  const allAvailable = checks.promptAPI && checks.translator;

  return {
    ...checks,
    allAvailable,
    message: allAvailable
      ? 'All required Chrome AI APIs are available!'
      : `Missing APIs: ${Object.entries(checks)
          .filter(([_, available]) => !available)
          .map(([api]) => api)
          .join(', ')}`
  };
};

// Type declarations for Chrome AI APIs
declare global {
  interface Window {
    ai: {
      promptAPI?: {
        create: (options: any) => Promise<any>;
        prompt: (text: string) => Promise<string>;
      };
      translator?: {
        create: (options: any) => Promise<any>;
        translate: (text: string) => Promise<string>;
      };
      summarizer?: {
        create: (options: any) => Promise<any>;
        summarize: (text: string) => Promise<string>;
      };
    };
  }
}