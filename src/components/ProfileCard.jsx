import { SocialStats } from "./SocialStats";

export const ProfileCard = ({ srcImg, name, age, location, socialStats }) => {
    return (
        <section>
            <div>IMG BG</div>
            <div>
                <img src={srcImg} alt={`Photo of ${name}`} />

                <div>
                    <div>
                        <h1>{name}</h1>
                        <span>{age}</span>
                    </div>
                    <p>{location}</p>
                </div>
            </div>

            <div>SEPARATOR</div>
        </section>
    );
};
