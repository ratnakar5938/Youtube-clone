// libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import VideoPage from "./VideoPage";
import { AppPage } from "./Styled";

function App() {
    return (
        // BEM class naming convention
        <div className="app">
            <Router>
                <Header />
                <Switch>
                    <Route path="/search/:searchTerm">
                        <AppPage>
                            <Sidebar />
                            <SearchPage />
                        </AppPage>
                    </Route>
                    <Route path="/video/:videoTerm">
                        <AppPage>
                            <VideoPage />
                        </AppPage>
                    </Route>
                    <Route path="/">
                        <AppPage>
                            <Sidebar />
                            <RecommendedVideos />
                        </AppPage>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
