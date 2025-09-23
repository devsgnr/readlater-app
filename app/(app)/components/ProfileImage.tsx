import Avvvatar from "avvvatars-react";
import { DayterNextImage } from "@/components/custom/Image";

type ProfileImageProps = {
  src?: string | null;
  alt?: string | null;
  size?: number;
  border?: boolean;
  radius?: number;
};

const ProfileImage = ({ src, alt, size, border, radius = 6 }: ProfileImageProps) => {
  if (src && alt)
    return <DayterNextImage className="w-8 h-8 rounded-[6px] object-cover" src={src} alt={alt} />;
  else
    return (
      <Avvvatar style="shape" radius={radius} border={border} size={size} value={alt || "U"} />
    );
};

export default ProfileImage;
