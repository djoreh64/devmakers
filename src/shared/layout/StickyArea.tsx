"use client";

import { useEffect, useState } from "react";
import { CookieModal } from "../ui/blocks/CookieModal";
import { FloatingChatButton } from "../ui/blocks/FloatingChatButton";

export function StickyArea() {
  const [cookieVisible, setCookieVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieAccepted");
    if (!accepted) setCookieVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieAccepted", "true");
    setCookieVisible(false);
  };

  return (
    <>
      <CookieModal visible={cookieVisible} onAccept={acceptCookies} />
      <FloatingChatButton cookieVisible={cookieVisible} />
    </>
  );
}
