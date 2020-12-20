import Image from "next/image";
import { jsx } from "theme-ui";

const BrandLogo = () => {
  return (
    <div>
      <Image src="/public/logo1.png" width={200} height={200} />
    </div>
  );
};

export default BrandLogo;
