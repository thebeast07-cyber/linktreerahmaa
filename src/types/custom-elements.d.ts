// src/types/custom-elements.d.ts
import type React from "react";

export {}; // biar ini dianggap modul

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
        // opsional tambahan yang sering ada:
        background?: string;
        mode?: "normal" | "bounce";
        speed?: number;
        // dll kalau perlu
      };
    }
  }
}
