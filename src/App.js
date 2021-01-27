import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import Buttons from "./Buttons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chats/:person">
            <Header goBack="/chats"/>
            <ChatScreen />
          </Route>
          <Route path="/chats">
            <Header goBack="/"/>
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <Buttons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
