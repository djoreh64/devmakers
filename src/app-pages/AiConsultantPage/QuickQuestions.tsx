import { useAIChat } from "./hooks/useAIChat";
import { quickQuestions } from "./AiConsultant.utils";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function QuickQuestions({
  isUnlocked,
}: {
  isUnlocked: boolean;
}) {
  const { sendMessage } = useAIChat();

  const handleQuickQuestion = (question: string) => {
    sendMessage(question);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`mb-8 transition-all duration-500 ${
        !isUnlocked ? "blur-sm pointer-events-none" : ""
      }`}
    >
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
        <h2 className="text-foreground text-sm sm:text-base">
          Популярные вопросы
        </h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {quickQuestions.map((question, index) => (
          <motion.button
            key={question}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
            onClick={() => handleQuickQuestion(question)}
            className="px-4 py-3 sm:px-5 sm:py-3 rounded-xl border border-border bg-secondary/30 text-muted-foreground hover:border-accent/50 hover:text-foreground transition-all duration-300 text-sm touch-manipulation active:bg-accent/10"
          >
            {question}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
