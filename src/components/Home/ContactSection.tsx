import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <div
      className="relative px-6 md:px-12 py-20"
      style={{
        backgroundImage: 'url(/contact-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            {/* Contact Badge */}
            <div className="flex justify-start mb-1">
              <div className="inline-flex items-center mb-8">
                <ArrowDown className="w-12 h-12 text-black border-3 border-black/80 rounded-full px-2 py-2" />
                <span className="text-black text-lg border-3 border-black/80 rounded-full px-4 py-2">
                  Contact
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black leading-tight">
              Interested in
              <br />
              <span className="bg-black text-white px-4 rounded-2xl inline-block mt-2">
                work
              </span>{' '}
              together?
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-black/80 leading-relaxed max-w-md">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other
            </p>

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

          {/* Right Side - Contact Form */}
          <div className="bg-black rounded-3xl p-8 md:p-10">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-transparent border-b border-[#c5ff41] text-white placeholder-white py-4 px-0 focus:outline-none focus:border-white transition-colors text-lg"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/60 py-4 px-0 focus:outline-none focus:border-white transition-colors text-lg"
                />
              </div>

              {/* Description */}
              <div>
                <textarea
                  placeholder="Describe your project"
                  rows={1}
                  className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/60 py-4 px-0 focus:outline-none focus:border-white transition-colors text-lg resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-black hover:bg-white border-white text-white text-xl font-normal pl-0 pr-6 py-3"
                >
                  <div className="w-8 h-8 mr-2 rounded-full border-2 border-white flex items-center justify-center">
                    <Image
                      src="/message.png"
                      alt="Message"
                      width={24}
                      height={24}
                      className="w-3 h-3"
                    />
                  </div>
                  Send
                </Button>

                <span className="text-white/80 text-lg">or</span>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-black hover:bg-white border-white text-white text-xl font-normal pl-0 pr-6 py-3"
                >
                  <div className="w-8 h-8 mr-2 rounded-full border-2 border-white flex items-center justify-center">
                    <Image
                      src="/mail.png"
                      alt="Mail"
                      width={24}
                      height={24}
                      className="w-3 h-3"
                    />
                  </div>
                  Contact me
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center pt-8">
                <span className="text-white/80 text-xl">@williamrey</span>
                <hr className="border-white/20 border-1 w-1/10 mx-6" />
                <div className="flex gap-4">
                  <button>
                    <Image
                      src="/facebook-white.png"
                      alt="Facebook"
                      width={24}
                      height={24}
                      className="w-7 h-7 text-black"
                    />
                  </button>
                  <button>
                    <Image
                      src="/instagram-white.png"
                      alt="Instagram"
                      width={24}
                      height={24}
                      className="w-7 h-7 text-black"
                    />
                  </button>
                  <button>
                    <Image
                      src="/twitter-white.png"
                      alt="Twitter"
                      width={24}
                      height={24}
                      className="w-7 h-7 text-black"
                    />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
