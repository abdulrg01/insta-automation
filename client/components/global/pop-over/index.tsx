"use client";
import { JSX, useEffect, useRef, useState } from "react";

type Props = {
  trigger: JSX.Element;
  children: React.ReactNode;
  className?: string;
};

const PopOver = ({ trigger, children, className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block my-2" ref={popoverRef}>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer"
      >
        {trigger}
      </div>
      {isOpen && (
        <div
          className={`absolute transform px-2 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 w-48 mt-52 rounded-md bg-[#1D1D1D] shadow-lg border border-gray-700 z-50 ${className}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default PopOver;
