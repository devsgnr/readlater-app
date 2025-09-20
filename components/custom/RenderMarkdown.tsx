"use client";

import { EditorContent } from "@tiptap/react";
import useRenderMarkdown from "../hooks/reader";

type Props = {
  markdown: string;
  disableList?: boolean;
  disableQuote?: boolean;
};

const RenderMarkdown = ({
  markdown,
  disableList = false,
  disableQuote = false,
}: Props) => {
  const { editor } = useRenderMarkdown({ markdown, disableList, disableQuote });

  return (
    <div className="w-full relative">
      <EditorContent editor={editor} />
    </div>
  );
};

export default RenderMarkdown;
