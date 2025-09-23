import Avvvatar from "avvvatars-react";
import { DayterNextImage } from "@/components/custom/Image";
import { cn } from "@/lib/utils";

type ProfileImageProps = {
  className?: string;
  src?: string | null;
  alt?: string | null;
  size?: number;
  border?: boolean;
  radius?: number;
};

const ProfileImage = ({ className, src, alt, size, border, radius = 6 }: ProfileImageProps) => {
  if (src && alt)
    return (
      <DayterNextImage
        className={cn("w-8 h-8 rounded-[6px] object-cover", className)}
        src={src}
        alt={alt}
      />
    );
  else
    return (
      <Avvvatar style="shape" radius={radius} border={border} size={size} value={alt || "U"} />
    );
};

export default ProfileImage;
