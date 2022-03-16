import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Profile } from "./pages/profileclient/profile";
import injectContext from "./store/appContext";

import { Feed } from "./pages/feedclient/feed.js";
import { Publication_uploader } from "./pages/create_publication/publication_uploader.js";

import { Config } from "./pages/config";
import { RecommendedHotels } from "./pages/recommendedHotels";
import { Menu } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Switch>
          <Route exact path="/config">
            <Config />
          </Route>
          <Route exact path="/recommendedhotels">
            <RecommendedHotels />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route exact path="/feed">
            <Feed />
          </Route>
          <Route exact path="/publication_uploader">
            <Publication_uploader />
          </Route>
          <Route>
            <h1>Not found!</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default injectContext(Layout);
