import { ProfileCard } from "./components/ProfileCard";
import VictorPhoto from "./assets/image-victor.jpg";

const App = () => {
    return (
        <main className="bg-dark-cyan min-h-screen grid place-content-center place-items-center grid-cols-1 grid-flow-row lg:grid-flow-col gap-4 p-6 mx-auto overflow-hidden">
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
        </main>
    );
};

export default App;
