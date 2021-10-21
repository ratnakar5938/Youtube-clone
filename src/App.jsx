// components
import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar";
import { AppPage } from "./Styled";

function App() {
    return (
        // BEM class naming convention
        <div className="app">
            <Header />
            <AppPage>
                <Sidebar />
                <RecommendedVideos />
            </AppPage>
        </div>
    );
}

export default App;
