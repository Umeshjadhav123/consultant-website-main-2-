import { useState, createContext, useContext, useCallback } from "react";

// Context to hold the chat bot visibility state and toggle function
const ChatBotContext = createContext();

export const useChatBot = () => useContext(ChatBotContext);

export const ChatBotProvider = ({ children }) => {
  const [isChatBotVisible, setIsChatBotVisible] = useState(false);

  const toggleChatBot = useCallback(() => {
    setIsChatBotVisible((v) => !v);
  }, []);

  return (
    <ChatBotContext.Provider value={{ isChatBotVisible, toggleChatBot }}>
      {children}
    </ChatBotContext.Provider>
  );
};
