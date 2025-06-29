import { ArrowDown } from 'lucide-react';

const AboutSection = () => {
  return (
    <div
      className="relative -my-40"
      style={{
        backgroundImage: 'url(/about-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
      }}
    >
      {/* About Badge */}
      <div className="w-58/100 mx-auto mt-56">
        <div className="flex justify-end mb-1">
          <div className="inline-flex items-center mb-8">
            <ArrowDown className="w-12 h-12 text-black border-3 border-black/80 rounded-full px-2 py-2" />
            <span className="text-black text-lg border-3 border-black/80 rounded-full px-4 py-2">
              About
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div>
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-black leading-tight mb-8 text-center">
          I&apos;ve been{' '}
          <span className="bg-black text-white px-4 rounded-2xl inline-block mb-4">
            Developing
          </span>
          <br />
          Websites since{' '}
          <span className="bg-black text-white px-4 rounded-2xl inline-block">
            2013
          </span>
        </h2>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-lg md:text-xl text-black/80 leading-relaxed">
            We start every new client interaction with an in-depth discovery
            call where we get
            <br />
            to know each other and recommend the best course of action.
          </p>
        </div>

        {/* Companies Section */}
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-10">
          {/* Previously Worked On Label */}
          <h3 className="text-4xl font-bold text-black text-start w-1/4">
            PREVIOUSLY
            <br />
            WORKED ON
          </h3>

          {/* Company Logos - Flowing Layout */}
          <div className="relative h-64 w-full md:h-80">
            <div className="absolute top-10 left-0 md:left-24 transform rotate-12">
              <div className="bg-black text-white font-bold text-2xl px-10 py-7 rounded-full whitespace-nowrap">
                awwwards.
              </div>
            </div>

            <div className="absolute top-32 left-4 transform">
              <div className="bg-white border-2 border-black text-black text-2xl px-10 py-7 rounded-full whitespace-nowrap">
                CSS WINNER
              </div>
            </div>

            <div className="absolute top-26 left-8 md:left-70 transform -rotate-8">
              <div className="bg-white border-2 border-black text-black font-bold text-2xl px-10 py-7 rounded-full whitespace-nowrap">
                /thoughtworks
              </div>
            </div>

            <div className="absolute top-0 left-16 md:left-114 transform">
              <div className="bg-white border-2 border-black text-black font-medium text-3xl px-14 py-7 rounded-full whitespace-nowrap font-sans">
                facebook
              </div>
            </div>

            <div className="absolute top-32 left-32 md:left-131 transform">
              <div className="bg-white border-2 border-black text-black font-bold text-2xl px-14 py-7 rounded-full whitespace-nowrap">
                AUTODESK
              </div>
            </div>

            <div className="absolute top-17 right-0 md:right-5 transform rotate-16">
              <div className="bg-white border-2 border-black text-black text-xl px-14 py-7 rounded-full whitespace-nowrap">
                CSS<span className="font-bold">Design</span>Awards
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
