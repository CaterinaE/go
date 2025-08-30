import type { Metadata } from "next";
import { GoGame } from "./components/gogame/GoGame";

export default function IndexPage() {
  return <GoGame />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
