import { createContext, useCallback, useState } from 'react';

const DEFAULT_USER = {
    username: 'Demo',
    avatar: ''
};



export const ChatContext = createContext( {
  conversations: DEFAULT_USER,
  updateConversations: () => {},
});

export function useChatContext() {
  const [conversations, setConversations] = useState(DEFAULT_USER);
  const updateConversations = useCallback((data) => {
    setConversations(data);
  }, []);


  return {
    conversations,
    updateConversations
  };
}
