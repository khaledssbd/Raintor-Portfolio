import { ArrowRight, ArrowDown } from 'lucide-react';

const WorkProcessSection = () => {
  const processSteps = [
    {
      title: 'Discovery',
      description:
        'We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.',
    },
    {
      title: 'Strategy',
      description:
        "Every end-to-end project of ours begins with a bEspoke pre-build strategy. From brand ID consultation to in-depth cycle reviews we're here to set the stage for success.",
    },
    {
      title: 'Design',
      description:
        "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
    },
    {
      title: 'Build',
      description:
        "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
    },
  ];

  return (
    <div className="bg-black rounded-3xl p-8 md:p-12 lg:p-20 mx-8 mt-14">
      {/* Header Section */}
      <div className="flex items-center mb-12">
        <div className="flex items-center">
          <ArrowDown className="w-12 h-12 text-white border-3 border-white/80 rounded-full px-2 py-2" />
          <span className="text-white text-lg border-3 border-white/80 rounded-full px-4 py-2">
            Work Process
          </span>
        </div>

        <div className="flex justify-center items-center w-2/3">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            My Work Process
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="group rounded-3xl p-8 relative bg-gray-900 hover:bg-[#c5ff41]  text-white hover:text-black transition-all ease-in-out"
          >
            <div className="flex justify-between items-center">
              {/* title */}
              <div className="mb-6">
                <div className="inline-block px-6 py-3 rounded-full font-medium bg-[#c5ffee] group-hover:bg-black text-black group-hover:text-white">
                  {step.title}
                </div>
              </div>

              {/* Read More Link */}
              <div className="absolute top-8 right-8">
                <button className="flex items-center gap-2 text-sm font-medium group-hover:opacity-80 transition-opacity text-white group-hover:text-black">
                  <ArrowRight className="w-4 h-4" />
                  <span className="underline">Read More</span>
                </button>
              </div>
            </div>

            {/* description */}
            <p className="text-lg leading-relaxed pr-24 text-white/90 group-hover:text-black text-justify">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcessSection;
