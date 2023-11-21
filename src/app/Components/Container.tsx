import Image from "next/image";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="m-auto px-4 lg:px-10">{children}</div>;
}
