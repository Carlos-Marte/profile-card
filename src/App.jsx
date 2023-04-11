import { ProfileCard } from "./components/ProfileCard";
import VictorPhoto from "./assets/image-victor.jpg";

const App = () => {
    return (
        <ProfileCard
            srcImg={VictorPhoto}
            name="Victor Crest"
            age={26}
            location="London"
            socialStats={{
                followers: "80",
                likes: "803",
                photos: "1.4",
            }}
        />
    );
};

export default App;
