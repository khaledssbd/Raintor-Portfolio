import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

const SkillsSection = () => {
  const skills = [
    {
      title: 'HTML & CSS',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
    },
    {
      title: 'Javascript',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
    },
    {
      title: 'Webflow',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
    },
  ];

  return (
    <div className="bg-black rounded-3xl p-8 md:p-12 lg:p-20 mx-8">
      {/* Header Section */}

      <div className="flex items-center mb-8">
        <ArrowDown className="w-12 h-12 text-white border-3 border-white/80 rounded-full px-2 py-2" />
        <span className="text-white text-lg border-3 border-white/80 rounded-full px-4 py-2">
          Why Choose me
        </span>
      </div>

      <div className="flex justify-between items-center mb-4 w-full">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          My Extensive
          <br />
          List of Skills
        </h2>

        <div className="flex-1 lg:max-w-md lg:ml-8 mt-8 lg:mt-0">
          <p className="text-white text-lg text-right mb-4">
            Building the world&apos;s best marketing Your <br /> trusted partner
            for strategy, design, and dev.
          </p>

          <hr className="border-white/30 w-5/6 justify-self-end-safe" />

          <div className="justify-self-end-safe mt-4">
            <div className="flex gap-4">
              <button className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <Image
                  src="/left-arrow-white.png"
                  alt="left-arrow-white"
                  width={24}
                  height={24}
                  className="border-2 border-white rounded-full p-2 w-full h-full"
                />
              </button>
              <button className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <Image
                  src="/right-arrow-white.png"
                  alt="right-arrow-white"
                  width={24}
                  height={24}
                  className="border-2 border-white rounded-full p-2 w-full h-full"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-start mt-14">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800/50 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:rotate-10 hover:scale-105 cursor-pointer"
          >
            <div className="mb-6 top-1/2 left-1/2 w-16 h-16">
              <Image
                src="/green-dot.png"
                alt="Skill"
                width={24}
                height={24}
                className="w-full h-full"
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              {skill.title}
            </h3>

            <p className="text-white/70 leading-relaxed">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
