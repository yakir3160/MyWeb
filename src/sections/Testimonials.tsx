
import Image from "next/image";
import {SectionHeader} from "@/components/SectionHeader";
import {Card} from "@/components/Card";
import {Fragment} from "react";
import {testimonials} from "@/constants/testimonials";



export const TestimonialsSection = () => {
  return(
      <div className={`py-12 lg:py-22 lg:px-28`}>
        <div>
          <SectionHeader
              eyebrow={"Workplace Endorsements"}
              title={"What Colleagues Say About My Work"}
              description={"Don't just take my word for it. See what my Colleagues have to say about my work."}
          />
        </div>
        <div className={`mt-16 lg:mt-24 px-2 md:px-8 flex overflow-x-clip
         [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4`}>
          <div className={`flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s]
          hover:[animation-play-state:paused]
          `}>
            {[...new Array(2)].fill(0).map((_, index) => (
                <Fragment key={index}>
                  {testimonials.map((testimonial) => (
                      <Card key={testimonial.name} className={`max-w-xs md:max-w-md p-6 md:p-8
                        hover:-rotate-3 transition duration-300 `}>
                        <div className={`flex gap-4 items-center`}>
                          <div className={`flex-shrink-0 size-14 bg-background items-center justify-center inline-flex rounded-full`}>
                            <Image src={testimonial.avatar} alt={testimonial.name}/>
                          </div>
                          <div>
                            <div className={`font-semibold`}>{testimonial.name}</div>
                            <div className={`text-sm text-text/60`}>{testimonial.position}</div>
                          </div>
                        </div>
                        <p className={`mt-4  text-sm md:mt-6 md:text-base`}>{testimonial.text}</p>
                      </Card>
                  ))}
                </Fragment>
            ))}

          </div>
        </div>
      </div>
  );
};
