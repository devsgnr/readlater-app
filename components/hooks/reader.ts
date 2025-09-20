import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import { Markdown } from "tiptap-markdown";
import { useState } from "react";

type Props = {
  markdown: string;
  disableList?: boolean;
  disableQuote?: boolean;
  immediatelyRender?: boolean;
};

const useRenderMarkdown = ({
  markdown,
  disableList,
  disableQuote,
  immediatelyRender = false,
}: Props) => {
  const [content, setContent] = useState<string>(markdown || "");

  const editor = useEditor({
    content: content,
    editable: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5],
        },
        hardBreak: { keepMarks: true },
        orderedList: disableList ? false : undefined,
        bulletList: disableList ? false : undefined,
        listItem: disableList ? false : undefined,
        blockquote: disableQuote ? false : undefined,
      }),
      Markdown,
      Underline,
      Link.configure({
        defaultProtocol: "https",
        openOnClick: false,
        HTMLAttributes: {
          rel: "noopener noreferrer",
          target: "_blank",
        },
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-sm max-w-full! prose-p:!mb-3 prose-ul:my-0.5 prose-ol:my-0.5 prose-a:text-slate-700 h-full! prose-h1:text-base prose-p:!break-words prose-a:!break-words prose-hr:m-1.5 p-0! reader-mode prose-p:!leading-1 prose-p:w-fit prose-a:w-fit prose-strong:pr-0.5",
      },
    },
    immediatelyRender: immediatelyRender,
  });

  return { editor };
};

export default useRenderMarkdown;
