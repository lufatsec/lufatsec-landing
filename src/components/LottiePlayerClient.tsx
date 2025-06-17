"use client";
import { Player } from "@lottiefiles/react-lottie-player";

type Props = {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
};

export default function LottiePlayerClient({
  src,
  className = "w-64 h-64",
  loop = true,
  autoplay = true,
}: Props) {
  return (
    <Player
      autoplay={autoplay}
      loop={loop}
      src={src}
      className={className}
    />
  );
}
