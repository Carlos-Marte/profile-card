export const SocialStats = ({ socialStats }) => {
    const { followers, likes, photos } = socialStats;

    return (
        <div className="w-full flex place-content-center py-4 gap-4 text-center text-very-dark-d-blue">
            {[
                [`${followers}`, "Followers"],
                [`${likes}`, "Likes"],
                [`${photos}`, "Photos"],
            ].map(([stat, title]) => (
                <div key={title}>
                    <h2 className="text-l font-bold">{stat}k</h2>
                    <p className="text-xs leading-5 tracking-widest text-dark-gray">
                        {title}
                    </p>
                </div>
            ))}
        </div>
    );
};
