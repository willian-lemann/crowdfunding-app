"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { logo, sun } from "../../../../public/assets";
import { navlinks } from "@/constants";
import Image from "next/image";

type IconProps = {
  styles?: string;
  name?: string;
  imgUrl?: string;
  isActive?: string;
  disabled?: boolean;
  handleClick?(): void;
};

function Icon({
  styles,
  name,
  imgUrl,
  isActive,
  disabled,
  handleClick,
}: IconProps) {
  return (
    <div
      className={`w-[48px] h-[48px] rounded-[10px] ${
        isActive && isActive === name && "bg-[#2c2f32]"
      } flex justify-center items-center ${
        !disabled && "cursor-pointer"
      } ${styles}`}
      onClick={handleClick}
    >
      {!isActive ? (
        <div className="relative w-1/2 h-1/2">
          <Image src={imgUrl as string} alt="fund_logo" fill />
        </div>
      ) : (
        <div
          className={`relative w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
        >
          <Image src={imgUrl as string} alt="fund_logo" fill />
        </div>
      )}
    </div>
  );
}

export function Sidebar() {
  const router = useRouter();
  const [isActive, setIsActive] = useState("dashboard");

  return (
    <div className="md:flex hidden mr-10 relative">
      <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
        <Link href="/">
          <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
        </Link>

        <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
          <div className="flex flex-col justify-center items-center gap-3">
            {navlinks.map((link) => (
              <Icon
                key={link.name}
                {...link}
                isActive={isActive}
                handleClick={() => {
                  if (!link.disabled) {
                    setIsActive(link.name);
                    router.push(link.link);
                  }
                }}
              />
            ))}
          </div>

          <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} />
        </div>
      </div>
    </div>
  );
}
