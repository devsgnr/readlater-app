import { cn } from "@/lib/utils";

type Props = {
  keys: string[];
  text: string;
  hidden?: boolean;
  destructive?: boolean;
};

const KeyboardShortcut = ({ keys, text, hidden, destructive }: Props) => {
  return (
    <div
      className={cn("flex items-center gap-1 text-xs! font-medium", {
        hidden: hidden,
      })}
    >
      <div className="flex items-center gap-1">
        {keys.map((key, index) => (
          <div
            key={index}
            className={cn(
              "px-1.5 py-0.5 bg-card border border-border rounded-sm",
              {
                "bg-destructive/20 text-destructive border-destructive":
                  destructive,
              }
            )}
          >
            {key}
          </div>
        ))}
      </div>
      <p className={cn("text-xs", { "text-destructive": destructive })}>
        {text}
      </p>
    </div>
  );
};

export default KeyboardShortcut;
