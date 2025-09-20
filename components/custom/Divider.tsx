type Props = {
  children: React.ReactNode;
};

const Divider = ({ children }: Props) => {
  return (
    <div className="relative flex items-center justify-center w-full">
      <div className="h-[0.5px] absolute w-full top-1/2 left-0 translate-y-1/2 bg-input" />
      <div className="w-fit flex items-center justify-center z-10 bg-card dark:bg-background px-2 py-1 text-xs text-muted-foreground">
        {children}
      </div>
    </div>
  );
};

export default Divider;
