"use client";

import { motion } from "motion/react";
import { Bot, MessageCircle, ExternalLink } from "lucide-react";
import {
  parseTextWithLinks,
  getDomainFromUrl,
  TextPart,
} from "@shared/lib/linkParser";

interface ChatMessageProps {
  message: {
    id: number | string;
    text: string;
    sender: "user" | "ai";
  };
}

export function ChatMessage({ message }: ChatMessageProps) {
  const parts = parseTextWithLinks(message.text);

  return (
    <motion.div
      key={message.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-2 sm:gap-3 ${
        message.sender === "user" ? "flex-row-reverse" : ""
      }`}
    >
      {/* Avatar */}
      <div
        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 ${
          message.sender === "ai" ? "bg-accent/10" : "bg-secondary/50"
        }`}
      >
        {message.sender === "ai" ? (
          <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
        ) : (
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
        )}
      </div>

      {/* Message Content */}
      <div
        className={`flex-1 max-w-[85%] sm:max-w-[80%] ${
          message.sender === "user" ? "flex justify-end" : ""
        }`}
      >
        <div
          className={`px-3 py-2 sm:px-4 sm:py-3 rounded-xl text-sm sm:text-base ${
            message.sender === "ai"
              ? "bg-background/50 border border-border"
              : "bg-accent text-accent-foreground"
          }`}
        >
          <div className="space-y-2">
            {/* Render text with links */}
            <p className="whitespace-pre-wrap wrap-break-word">
              {parts.map((part: TextPart, index: number) => {
                if (part.type === "link" && part.url) {
                  return (
                    <a
                      key={index}
                      href={part.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 underline decoration-1 underline-offset-2 hover:decoration-2 transition-all ${
                        message.sender === "ai"
                          ? "text-accent hover:text-accent/80"
                          : "text-accent-foreground hover:opacity-80"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {getDomainFromUrl(part.url)}
                      <ExternalLink className="w-3 h-3 inline-block" />
                    </a>
                  );
                }
                return <span key={index}>{part.content}</span>;
              })}
            </p>

            {/* Link cards for AI messages */}
            {message.sender === "ai" &&
              parts.some((p) => p.type === "link") && (
                <div className="flex flex-col gap-2 mt-3">
                  {parts
                    .filter((p) => p.type === "link")
                    .map((part: TextPart, index: number) => (
                      <motion.a
                        key={index}
                        href={part.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-accent/50 transition-all duration-300 group"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Link icon */}
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                          <ExternalLink className="w-4 h-4 text-accent" />
                        </div>

                        {/* Link info */}
                        <div className="flex-1 min-w-0">
                          <div className="text-foreground text-sm group-hover:text-accent transition-colors truncate">
                            {getDomainFromUrl(part.url || "")}
                          </div>
                          <div className="text-muted-foreground text-xs truncate">
                            {part.url}
                          </div>
                        </div>

                        {/* Arrow indicator */}
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                      </motion.a>
                    ))}
                </div>
              )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
