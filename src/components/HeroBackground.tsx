
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import grainImage from "@/assets/images/grain.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";

const BASE_DURATION = '35s';
const STAR_DURATION = '8s';
const SPARKLE_DURATION = '5s';

export const HeroBackground = () => {
    return (
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
            <div
                className="absolute inset-0 -z-30 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
            />

            <div className="size-[640px] hero-ring"></div>
            <div className="size-[820px] hero-ring"></div>
            <div className="size-[1020px] hero-ring"></div>
            <div className="size-[1220px] hero-ring"></div>

            <HeroOrbit
                size={430}
                rotation={-14}
                shouldOrbitSpin
                spinOrbitDuration={BASE_DURATION}
                shouldStarSpin
                spinStarDuration={SPARKLE_DURATION}
            >
                <SparkleIcon className="size-8 text-emerald-500/20" />
            </HeroOrbit>

            <HeroOrbit
                size={440}
                rotation={79}
                shouldOrbitSpin
                spinOrbitDuration={`calc(${BASE_DURATION} + 2s)`}
                shouldStarSpin
                spinStarDuration={SPARKLE_DURATION}
            >
                <SparkleIcon className="size-5 text-emerald-500/20" />
            </HeroOrbit>

            <HeroOrbit
                size={520}
                rotation={-41}
                shouldOrbitSpin
                spinOrbitDuration={`calc(${BASE_DURATION} + 4s)`}
            >
                <div className="size-2 rounded-full bg-emerald-500/20"></div>
            </HeroOrbit>

            <HeroOrbit
                size={530}
                rotation={178}
                shouldOrbitSpin
                spinOrbitDuration={`calc(${BASE_DURATION} + 6s)`}
                shouldStarSpin
                spinStarDuration={SPARKLE_DURATION}
            >
                <SparkleIcon className="size-10 text-emerald-500/20" />
            </HeroOrbit>

            <HeroOrbit
                size={550}
                rotation={20}
                shouldOrbitSpin
                spinOrbitDuration={`calc(${BASE_DURATION} + 8s)`}
                shouldStarSpin
                spinStarDuration={STAR_DURATION}
            >
                <StarIcon className="size-12 text-emerald-500" />
            </HeroOrbit>

            <HeroOrbit
                size={590}
                rotation={98}
                shouldOrbitSpin
                spinOrbitDuration={`calc(${BASE_DURATION} + 10s)`}
                shouldStarSpin
                spinStarDuration={STAR_DURATION}
            >
                <StarIcon className="size-8 text-emerald-500" />
            </HeroOrbit>

            <HeroOrbit
                size={650}
                rotation={-5}
                shouldOrbitSpin
                spinOrbitDuration={`calc(${BASE_DURATION} + 12s)`}
            >
                <div className="size-2 rounded-full bg-emerald-500/20"></div>
            </HeroOrbit>

            <HeroOrbit
                size={710}
                rotation={144}
                shouldOrbitSpin
                spinOrbitDuration={`calc(${BASE_DURATION} + 14s)`}
                shouldStarSpin
                spinStarDuration={SPARKLE_DURATION}
            >
                <SparkleIcon className="size-14 text-emerald-500/20" />
            </HeroOrbit>

            <HeroOrbit
                size={720}
                rotation={85}
                shouldOrbitSpin
                spinOrbitDuration={`calc(${BASE_DURATION} + 16s)`}
            >
                <div className="size-3 rounded-full bg-emerald-500/20"></div>
            </HeroOrbit>

            <HeroOrbit
                size={800}
                rotation={-72}
                shouldOrbitSpin
                spinOrbitDuration={`calc(${BASE_DURATION} + 18s)`}
                shouldStarSpin
                spinStarDuration={STAR_DURATION}
            >
                <StarIcon className="size-28 text-emerald-500"/>
            </HeroOrbit>
        </div>
    );
};