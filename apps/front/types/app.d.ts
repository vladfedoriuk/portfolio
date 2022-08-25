import { EmotionCache } from "@emotion/react";
import type { AppProps } from "next/app";

declare global {
  interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
  }
}
