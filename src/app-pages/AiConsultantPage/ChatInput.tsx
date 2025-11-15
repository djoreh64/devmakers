"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

type Props = {
  value?: string;
  onChange?: (v: string) => void;
  onSend: (v: string) => void;
  disabled?: boolean;
};

export function ChatInput({ value = "", onChange, onSend, disabled }: Props) {
  const [local, setLocal] = useState(value);
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => setLocal(value), [value]);

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const v = local.trim();
    if (!v) return;
    onSend(v);
    setLocal("");
    ref.current?.focus();
  };

  return (
    <form onSubmit={submit} className="space-y-2">
      <div className="flex gap-2">
        <input
          ref={ref}
          type="text"
          value={local}
          onChange={(e) => {
            setLocal(e.target.value);
            onChange?.(e.target.value);
          }}
          placeholder="Задайте вопрос..."
          maxLength={300}
          disabled={disabled}
          className="flex-1 px-3 py-2.5 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-muted-foreground text-sm sm:text-base"
        />
        <button
          type="submit"
          disabled={!local.trim() || disabled}
          className="px-4 py-2.5 bg-accent text-accent-foreground rounded-xl transition-opacity disabled:opacity-50 flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span className="hidden xs:inline sm:inline">Отправить</span>
        </button>
      </div>

      {local.length > 0 && (
        <div className="flex justify-end">
          <span
            className={`text-xs ${local.length >= 300 ? "text-red-500" : "text-muted-foreground"}`}
          >
            {local.length}/300
          </span>
        </div>
      )}
    </form>
  );
}
