import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import {SectionHeader} from "@/components/SectionHeader";
import {Card} from "@/components/Card";
import grainImage from "@/assets/images/grain.jpg";
import {Fragment} from "react";


const testimonials = [
  {
    name: "Coming Soon",
    position: "Coming Soon",
    text: "Testimonial details coming soon. Stay tuned for professional endorsements.",
    avatar: memojiAvatar1,
  },
  {
    name: "Coming Soon",
    position: "Coming Soon",
    text: "Testimonial details coming soon. Stay tuned for professional endorsements.",
    avatar: memojiAvatar2,
  },
  {
    name: "Coming Soon",
    position: "Coming Soon",
    text: "Testimonial details coming soon. Stay tuned for professional endorsements.",
    avatar: memojiAvatar3,
  },
  {
    name: "Coming Soon",
    position: "Coming Soon",
    text: "Testimonial details coming soon. Stay tuned for professional endorsements.",
    avatar: memojiAvatar4,
  },
  {
    name: "Coming Soon",
    position: "Coming Soon",
    text: "Testimonial details coming soon. Stay tuned for professional endorsements.",
    avatar: memojiAvatar5,
  },
];

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
