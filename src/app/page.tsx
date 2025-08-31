'use client';

import Image from 'next/image';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faGithub,
  faInstagram,
  faTiktok,
  faTwitch,
  faWhatsapp,
  // faFacebook, // aktifkan kalau dipakai di LINKS
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { AnimatedBackground } from './components/AnimatedBackground';
import { LINKS } from '../data/links';

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [lottieReady, setLottieReady] = useState(false);

  useEffect(() => {
    setIsClient(true); // pastikan render hanya di client untuk elemen custom
  }, []);

  const iconMap: Record<string, any> = {
    youtube: faYoutube,
    github: faGithub,
    instagram: faInstagram,
    tiktok: faTiktok,
    twitch: faTwitch,
    whatsapp: faWhatsapp,
    // facebook: faFacebook,
    globe: faGlobe,
  };

  return (
    <div className="min-h-screen flex flex-col relative" role="document">
      {/* dotLottie web component */}
      <Script
        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.js"
        strategy="afterInteractive"
        onLoad={() => setLottieReady(true)}
      />

      {/* 1) LOTTIE — FULLSCREEN, PALING BAWAH (client-only + script-ready) */}
      {isClient && lottieReady && (
        <div className="fixed inset-0 z-0 pointer-events-none" suppressHydrationWarning>
          <dotlottie-player
            src="https://lottie.host/ea7a0c64-cdda-4ab5-a0fc-0fbea79254e2/p9CwaW5otw.lottie"
            autoplay
            loop
            style={{ width: '100%', height: '100%', opacity: 1 }}
          ></dotlottie-player>
        </div>
      )}

      {/* 2) ANIMATED BACKGROUND — FULLSCREEN, DI ATAS LOTTIE */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <AnimatedBackground />
      </div>

      {/* 3) KONTEN — PALING ATAS */}
      <header className="relative z-20 overflow-hidden">
        <div className="w-full max-w-xl mx-auto px-4 pt-16 pb-8 text-center">
          <div className="w-28 h-28 mx-auto rounded-full overflow-hidden ring-2 ring-white/10 shadow">
            <Image
              src="/logo.webp"
              alt="Rahma Seserahan"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight">Rahma Seserahan</h1>
          <p className="text-gray-300">@rahmaseserahan.demak</p>
          <p className="mt-2 text-gray-400 text-sm">Hantaran • Seserahan • Mahar</p>
        </div>
      </header>

      <main className="relative z-20 flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 sm:p-8">
              <p className="text-gray-200 text-lg text-center">
                Klik untuk order cepat / lihat portofolio 👇
              </p>
              <div className="mt-6 space-y-3">
                {LINKS.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                  >
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-black/40 group-hover:bg-black/50 transition">
                      <FontAwesomeIcon icon={iconMap[item.icon]} className="text-xl" />
                    </span>
                    <span className="font-medium">{item.label}</span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 text-sm text-gray-400 transition">
                      buka
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-20 py-6 text-center text-gray-400 text-sm">
        Made with <span className="text-red-500">♥</span> by Rahma Seserahan
      </footer>
    </div>
  );
}
