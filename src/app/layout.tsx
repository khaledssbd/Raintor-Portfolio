import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const bricolageGrotesque = Bricolage_Grotesque({
  variable: '--font-bricolage-grotesque',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfiolio | Raintor',
  description:
    'A portfolio website for Raintor, showcasing skills and projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bricolageGrotesque.variable} antialiased font-bricolage`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          storageKey="theme"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
