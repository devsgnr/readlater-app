import { cn } from "@/lib/utils";
import ProfileImage from "../../components/ProfileImage";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import React, { ButtonHTMLAttributes } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const CustomerOverview = ({ children }: Props) => {
  return <div className="grid grid-cols-2 gap-[1px]">{children}</div>;
};

const CustomerOverviewItem = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "grid gap-1 shadow-[0_-1px_0_0_var(--sidebar-border),1px_0_0_0_var(--sidebar-border)] py-3 px-5",
        className,
      )}
    >
      {children}
    </div>
  );
};

const CustomerOverviewImage = ({ src, alt, className }: ImageProps) => {
  return <ProfileImage className={cn(className)} src={src} alt={alt} />;
};

const CustomerOverviewButton = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <Button
      size="sm"
      variant="secondary"
      className={cn("gap-2 font-normal text-xs capitalize h-fit py-1", className)}
      {...rest}
    >
      {children}
    </Button>
  );
};

const CustomerOverviewText = ({ children, className }: Props) => {
  return (
    <>
      {!children && <Skeleton className="h-3" />}
      {children && <p className={cn(className)}>{children}</p>}
    </>
  );
};

CustomerOverviewItem.displayName = "CustomerOverview.Item";
CustomerOverviewImage.displayName = "CustomerOverview.Image";
CustomerOverviewText.displayName = "CustomerOverview.Text";
CustomerOverviewButton.displayName = "CustomerOverview.Button";

CustomerOverview.Item = React.memo(CustomerOverviewItem);
CustomerOverview.Image = React.memo(CustomerOverviewImage);
CustomerOverview.Text = React.memo(CustomerOverviewText);
CustomerOverview.Button = React.memo(CustomerOverviewButton);

export default CustomerOverview;
