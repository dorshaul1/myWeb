// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import './style/App.scss';
import { HomePage } from './views/HomePage/HomePage';
// import { Site } from './views/Site/Site';
import { SiteEdit } from './views/SiteEdit/SiteEdit';
import { TemplatesPage } from './views/TemplatesPage';
import { SitePreview } from './views/SitePreview/SitePreview';

function App() {
  // const [state, setstate] = useState(initialState)
 const state = useSelector(state => state.siteReducer)

  return (
    <div className="App ">
      <Router>
      {!state.isPreview && <AppHeader />}
        {/* {JSON.stringify(state)} */}
        <Switch>
          {/* <HomePage /> */}
          <Route component={SiteEdit} path="/site/:siteId/edit" />
          <Route component={SitePreview} path="/site/:siteId" />
          {/* <Route component={Site} path="/site/:siteId" /> */}
          <Route component={TemplatesPage} path="/templates" />
          <Route component={HomePage} path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
