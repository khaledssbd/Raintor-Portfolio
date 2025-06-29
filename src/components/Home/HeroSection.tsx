import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: 'url(/background-gradient.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
        <div className="text-4xl font-bold text-black">DEVLOP.ME</div>

        <nav className="hidden md:flex items-center space-x-16">
          <Link
            href="#"
            className="text-black text-xl hover:text-gray-700 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-black text-xl hover:text-gray-700 transition-colors"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-black text-xl hover:text-gray-700 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="#"
            className="text-black text-xl hover:text-gray-700 transition-colors"
          >
            Blog
          </Link>
          <Button className="bg-white border-2 border-black/80 text-black text-xl hover:bg-white/20 rounded-full pl-0 pr-4 py-6">
            <Image
              src="/right-arrow-black.png"
              alt="right-arrow"
              width={24}
              height={24}
              className="border-2 border-black rounded-full p-1 w-8 h-8 mr-2"
            />
            Start Project
          </Button>
        </nav>
      </header>

      {/* Username and social icons - Left Side */}
      <div className="fixed left-4 top-3/4 -translate-y-1/2 flex flex-col items-center z-10">
        {/* Username */}
        <div className="flex items-center space-y-1">
          <div className="text-xs text-black/70 -rotate-90 origin-center whitespace-nowrap mb-1">
            @william.ney
          </div>
          {/*  social icons */}
          <div className="fixed left-12 flex flex-col space-y-1">
            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <Image
                src="/twitter.png"
                alt="Twitter"
                width={24}
                height={24}
                className="w-5 h-5 text-black"
              />
            </button>
            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
                className="w-5 h-5 text-black"
              />
            </button>
            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
                className="w-5 h-5 text-black"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-6 md:px-12 pt-12 md:pt-20 pb-20">
        <div className="">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-black leading-tight mb-8 text-left">
            Trusted{' '}
            <span className="bg-black text-white px-4 rounded-2xl inline-block mb-4">
              Partner
            </span>{' '}
            for
            <br />
            Your Website{' '}
            <span className="bg-black text-white px-4 rounded-2xl inline-block">
              Develop.
            </span>
          </h1>

          {/* Subheading */}
          <div className="flex justify-center items-center mb-12">
            <p className="text-lg md:text-xl text-black/80 leading-relaxed  text-start">
              Building the world&apos;s best marketing websites for over a
              decade .
              <br />
              Your trusted partner for strategy, design, and dev.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center items-center w-5/7">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full bg-white/80 border-black/80 text-black pl-0 py-10 text-xl"
            >
              <div className="w-12 h-12 border border-white/20 rounded-full">
                <Image
                  src="/call.png"
                  alt="call"
                  width={24}
                  height={24}
                  className="border-2 border-black rounded-full p-2 w-full h-full"
                />
              </div>
              Schedule a Call
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
