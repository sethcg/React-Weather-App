import type { Metadata } from 'next';
import './index.css';

export const metadata: Metadata = {
  title: 'React Weather App',
  description: 'Uses a public weather API to display data relevant to the provided address.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark font-roboto bg-neutral-100 text-neutral-950 antialiased dark:bg-neutral-800 dark:text-neutral-50`}
      >
        {children}
      </body>
    </html>
  );
}
