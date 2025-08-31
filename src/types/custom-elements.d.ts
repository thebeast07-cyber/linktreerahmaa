// types/custom-elements.d.ts
import type React from "react";

export {}; // penting: bikin file ini jadi "module"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        autoplay?: boolean;
        loop?: boolean;
        background?: string;
        mode?: "normal" | "bounce";
        speed?: number;
      };
    }
  }
}
