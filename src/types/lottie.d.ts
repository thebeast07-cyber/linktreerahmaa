// src/types/lottie.d.ts
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dotlottie-player': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        autoplay?: boolean;
        loop?: boolean;
        background?: string;
        speed?: number;
        mode?: string;
        controls?: boolean;
        // Tambahkan atribut lain jika perlu
        style?: React.CSSProperties;
      };
    }
  }
}

// penting: supaya file ini dianggap modul dan augment global berlaku
export {};
