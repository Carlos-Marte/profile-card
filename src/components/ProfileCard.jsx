import { SocialStats } from "./SocialStats";
import bgImage from "../assets/bg-pattern-card.svg";

export const ProfileCard = ({ srcImg, name, age, location, socialStats }) => {
    return (
        <section className="w-full max-w-[350px] min-w-[250px] bg-white rounded-xl flex flex-col gap-4 items-center text-center overflow-hidden">
            <div>
                <img src={bgImage} alt="Background pattern" loading="lazy" />
            </div>
            <div className="relative">
                <img
                    className="border-4 border-white rounded-full absolute -top-3/4 left-1/2 -translate-x-1/2 z-10"
                    src={srcImg}
                    alt={`Photo of ${name}`}
                />
                <div className="flex flex-col justify-end gap-1 pt-9">
                    <div className="flex gap-2">
                        <h1 className="font-bold">{name}</h1>
                        <span className="text-dark-grayish-blue">{age}</span>
                    </div>
                    <p className="text-dark-grayish-blue">{location}</p>
                </div>
            </div>

            <div className="w-full h-px bg-dark-grayish-blue opacity-30"></div>

            <SocialStats socialStats={socialStats} />
        </section>
    );
};
