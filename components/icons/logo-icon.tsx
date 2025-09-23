import { SVGProps } from "react";

const LogoIcon = ({ width = 24, height = 24, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M0 0H100V100H0V0Z" fill="#94A3B8" />
      <path d="M20 30H80V70H20V30Z" fill="#E2E8F0" />
      <path
        d="M80 36V30H20V36H26V42H32V48H38V54H44V60H56V54H62V48H68V42H74V36H80Z"
        fill="#334155"
      />
    </svg>
  );
};

export default LogoIcon;
