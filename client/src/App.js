import React from "react";
import { Container } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import StoryDetails from "./components/StoryDetails/StoryDetails";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Router>
      <Container maxWidth="xl" style={{ padding: 0 }}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/stories" />} />
          <Route path="/stories" exact component={Home} />
          <Route path="/stories/search" exact component={Home} />
          <Route path="/stories/:id" component={StoryDetails} />
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/stories" />)}
          />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
