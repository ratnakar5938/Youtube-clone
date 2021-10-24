// components
import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar";
import { AppPage } from "./Styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

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
