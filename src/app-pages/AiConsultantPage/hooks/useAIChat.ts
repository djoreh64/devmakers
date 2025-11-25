import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { axiosInstance } from "@shared/lib/axiosInstance";

export type Message = {
  id: string | number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
};

export function useAIChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessageMutation = useMutation({
    mutationFn: async (text: string) => {
      const { data } = await axiosInstance.post("/chat", {
        message: text,
        user_id: "test_user_id",
      });
      return data;
    },
  });

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    const userMessage: Message = {
      id: Date.now(),
      text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const data = await sendMessageMutation.mutateAsync(text);
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: data.response || "Не удалось получить ответ 😔",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Ошибка при обращении к серверу",
          sender: "ai",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return { messages, isTyping, sendMessage };
}
