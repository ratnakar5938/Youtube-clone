// libraries
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

// components
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import VideoPage from './VideoPage';
import { AppPage } from './Styled';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const dark = { background: 'black', text: 'white' };
  const light = { background: 'white', text: 'black' };

  return (
    // BEM class naming convention
    <ThemeProvider theme={darkTheme ? dark : light}>
      <div className='app'>
        <Router>
          <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
          <Switch>
            <Route path='/search/:searchTerm'>
              <AppPage>
                <Sidebar />
                <SearchPage />
              </AppPage>
            </Route>
            <Route path='/video/:videoTerm'>
              <AppPage>
                <VideoPage />
              </AppPage>
            </Route>
            <Route path='/'>
              <AppPage>
                <Sidebar />
                <RecommendedVideos />
              </AppPage>
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
