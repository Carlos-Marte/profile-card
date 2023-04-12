export const PatternCircle = ({ srcImg, position }) => {
    return (
        <img
            src={srcImg}
            alt="Circle Pattern"
            loading="lazy"
            className={
                position === "top"
                    ? "absolute -top-[15vw] lg:-top-[40%] -left-[50vw] lg:-left-96 z-0"
                    : "absolute -bottom-[15vw] lg:-bottom-[40%] -right-[50vw] lg:-right-96 z-0"
            }
        />
    );
};
