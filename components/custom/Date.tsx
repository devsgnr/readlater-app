type Props = {
  date: string;
};

const DateView = ({ date }: Props) => {
  const d = new Date(date);
  const Formatted = new Intl.DateTimeFormat("en-NG", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(d);

  return <>{date ? Formatted : "N/A"}</>;
};

export default DateView;
