"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { TextScramble } from "../ui/text-scramble";
import { useState } from "react";

interface Props {
  children: string;
  href: string;
}

const ScrambleTextLinkButton = ({ children, href }: Props) => {
  const [isTrigger, setIsTrigger] = useState(false);

  return (
    <Button
      asChild
      size="lg"
      variant="outline"
      className="rounded-none transition-colors duration-300 hover:bg-blue-700 hover:text-white"
    >
      <Link href={href}>
        <TextScramble
          className="text-sm font-mono uppercase"
          as="span"
          speed={0.01}
          trigger={isTrigger}
          onHoverEnd={() => setIsTrigger(false)}
          onHoverStart={() => setIsTrigger(true)}
          onScrambleComplete={() => setIsTrigger(false)}
        >
          {children}
        </TextScramble>
      </Link>
    </Button>
  );
};

export default ScrambleTextLinkButton;
