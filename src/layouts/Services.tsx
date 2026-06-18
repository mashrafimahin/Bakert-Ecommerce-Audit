// dependencies
import type { FC } from "react";
// icons
import { ShieldCheck, HeartHandshake } from "lucide-react";
import Typography from "../components/typography";
// data
import { ServiceData } from "../static";

// main
const Services: FC = () => {
  return (
    <section className="py-24 bg-[#E7F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* left boxes */}
          <div>
            <Typography variant="head">
              {ServiceData.headlineOne} <br /> {ServiceData.headlineTwo}
            </Typography>
            <Typography>{ServiceData.paragraph}</Typography>

            {/* features */}
            <div className="space-y-8 mt-6">
              {ServiceData.features.map((item) => (
                <div key={item.id} className="flex gap-5">
                  <div className="shrink-0 w-14 h-14 bg-white shadow-sm text-[#395B64] rounded-2xl flex items-center justify-center border border-[#A5C9CA]/40">
                    {item.icon === "shieldCheck" ? (
                      <ShieldCheck className="w-7 h-7" />
                    ) : (
                      <HeartHandshake className="w-7 h-7" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2C3333] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[#395B64]">{item.para}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right boxes */}
          <div className="grid grid-cols-2 gap-6">
            <img
              src={ServiceData.imageOne}
              alt="Wedding Cake"
              className="rounded-4xl w-full h-80 object-cover mt-12 shadow-xl"
            />
            <img
              src={ServiceData.imageTwo}
              alt="Ingredients"
              className="rounded-4xl w-full h-80 object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
