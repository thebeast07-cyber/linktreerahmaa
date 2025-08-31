export type LinkItem = {
  label: string;
  href: string;
  icon: 'youtube' | 'github' | 'instagram' | 'tiktok' | 'twitch' | 'whatsapp' | 'globe' | 'facebook';
};

export const LINKS: LinkItem[] = [
  {
    label: 'WhatsApp — Order Rahma Seserahan',
    href: 'https://wa.me/6282228132455?text=Halo%20Rahma%20Seserahan%2C%20saya%20mau%20tanya%20paket%20🙏',
    icon: 'whatsapp',
  },
  {
    label: 'Instagram — @rahmaseserahan.demak',
    href: 'https://www.instagram.com/rahmaseserahan.demak/',
    icon: 'instagram',
  },
  {
    label: 'TikTok — (placeholder)',
    href: 'https://www.tiktok.com/', // ganti nanti kalau akun sudah siap
    icon: 'tiktok',
  },
  {
    label: 'Facebook — (placeholder)',
    href: 'https://facebook.com/', // ganti nanti kalau akun sudah siap
    icon: 'facebook',
  },
  {
    label: 'Shopee — (placeholder)',
    href: 'https://shopee.co.id/', // ganti nanti kalau toko sudah siap
    icon: 'globe',
  },
  {
    label: 'Lokasi (Google Maps)',
    href: 'https://maps.google.com/?q=Perampelan%2C%20Gudang%20Sarimulyo%2C%20Sayung%2C%20Demak',
    icon: 'globe',
  },
];
