// dependencies
import type { FC } from "react";
// components
import Typography from "../components/typography";
import Button from "../components/ui/button";
// data
import { AboutData as data } from "../static";

// main
const AboutLayout: FC = () => {
  return (
    <div className="bg-[#E7F6F2] min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={data.overlayImage}
            alt="Bakery Interior Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#E7F6F2] via-[#E7F6F2]/40 to-[#E7F6F2]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Typography variant="head">
            A Legacy of <span className="text-[#395B64]">Sweetness</span>
          </Typography>
          <Typography className="text-md md:text-lg text-[#395B64] font-medium leading-relaxed">
            {data.description}
          </Typography>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-20 bg-white rounded-3xl shadow-sm relative z-20 -mt-10 mx-4 sm:mx-8 lg:mx-auto max-w-7xl border border-[#A5C9CA]/20">
        <div className="px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#E7F6F2]">
                <img
                  src={data.authorImage}
                  alt={`Founder baker portrait - ${data.author}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#A5C9CA] rounded-full blur-2xl opacity-50 z-[-1]"></div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <Typography variant="subHead">Our Humble Beginnings</Typography>
              <Typography className="text-md leading-relaxed">
                {data.beginOne}
              </Typography>
              <Typography className="text-md leading-relaxed">
                {data.beginTwo}
              </Typography>
              <div className="pt-6">
                <Button
                  variant="link"
                  link="shop"
                  className="w-auto py-4 px-6 border border-transparent text-sm font-bold rounded-2xl text-white bg-[#395B64] hover:bg-[#2C3333] hover:text-white transition-colors shadow-lg shadow-[#395B64]/20"
                >
                  Taste the Tradition
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reputation & Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Typography variant="subHead" className="text-3xl">
            Why People Choose Us
          </Typography>
          <Typography className="text-lg">
            Our reputation isn't just about what comes out of the oven. It's
            about the standards we hold ourselves to every single day.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.cards.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl shadow-sm border border-[#A5C9CA]/20 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-[#E7F6F2] rounded-2xl flex items-center justify-center mb-6 text-[#395B64]">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#2C3333] mb-2">
                {item.title}
              </h3>
              <Typography className="text-md font-semibold leading-relaxed">
                {item.para}
              </Typography>
            </div>
          ))}
        </div>
      </section>

      {/* Process / Craftsmanship Section */}
      <section className="py-24 bg-[#395B64] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border-4 border-[#A5C9CA]/30">
                <img
                  src={data.ctaInfo.ctaImage}
                  alt="Baking bread and pastries"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                {data.ctaInfo.title}
              </h2>
              <p className="text-[#A5C9CA] text-lg leading-relaxed">
                {data.ctaInfo.para}
              </p>
              <ul className="space-y-4 pt-4">
                {data.ctaInfo.lists.map((elm, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#E7F6F2] text-[#395B64] flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-[#E7F6F2] mt-1">{elm}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutLayout;
