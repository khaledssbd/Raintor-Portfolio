const FooterSection = () => {
  return (
    <footer className="bg-black rounded-3xl p-8 md:p-12 lg:p-20 mx-8">
      <div className="grid grid-cols-5 gap-8 lg:gap-12">
        {/* Left Column - Logo and Besnik */}
        <div className="col-span-2 flex flex-col justify-between items-start h-full">
          <div className="text-4xl font-bold text-[#c5ff41]">DEVLOP.ME</div>
          <div className="text-white font-bold text-2xl mt-auto">BESNIK</div>
        </div>

        {/* Right Column - Other Parts */}
        <div className="col-span-3">
          <div className="flex flex-col items-start gap-16 text-start">
            <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              As you can
            </h2>

            <div className="flex justify-between items-start w-full text-2xl text-white/60">
              {/* Contact Information */}
              <div className="space-y-8">
                {/* Say hello section */}
                <div>
                  <h3 className="text-white/30 text-xl font-medium mb-4">
                    Say hello
                  </h3>
                  <div className="space-y-2">
                    <div className="font-medium">HELLO@DEVLOP.ME.COM</div>
                    <div className="font-medium">MAHBUBUL@ME.COM</div>
                  </div>
                </div>

                {/* Call section */}
                <div>
                  <h3 className="text-white/30 text-xl font-medium mb-4">
                    Call
                  </h3>
                  <div className="space-y-2">
                    <div className="font-medium">+784549 4981 00</div>
                    <div className="font-medium">+8845 0100 211</div>
                  </div>
                </div>
              </div>

              {/* Menu */}
              <div>
                <h3 className="text-white/30 text-xl font-medium mb-6">Menu</h3>
                <nav className="space-y-3">
                  <div className="font-medium hover:text-lime-400 transition-colors cursor-pointer">
                    HOME
                  </div>
                  <div className="font-medium hover:text-lime-400 transition-colors cursor-pointer">
                    ABOUT
                  </div>
                  <div className="font-medium hover:text-lime-400 transition-colors cursor-pointer">
                    PORTFOLIO
                  </div>
                  <div className="font-medium hover:text-lime-400 transition-colors cursor-pointer">
                    BLOG
                  </div>
                </nav>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-white/30 text-xl font-medium mb-6">
                  Social
                </h3>
                <nav className="space-y-3">
                  <div className="font-medium hover:text-lime-400 transition-colors cursor-pointer">
                    TWITTER
                  </div>
                  <div className="font-medium hover:text-lime-400 transition-colors cursor-pointer">
                    INSTAGRAM
                  </div>
                  <div className="font-medium hover:text-lime-400 transition-colors cursor-pointer">
                    FACEBOOK
                  </div>
                  <div className="font-medium hover:text-lime-400 transition-colors cursor-pointer">
                    BEHANCE
                  </div>
                  <div className="font-medium hover:text-lime-400 transition-colors cursor-pointer">
                    DRIBBBLE
                  </div>
                </nav>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-16 pt-8">
            <div className="text-white/50 text-xl">© devlop.me 2022</div>
            <div className="text-white/50 text-xl mt-4 lg:mt-0">
              <span className="hover:text-white transition-colors cursor-pointer">
                PRIVACY
              </span>
              <span className="mx-2">-</span>
              <span className="hover:text-white transition-colors cursor-pointer">
                TERMS
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
