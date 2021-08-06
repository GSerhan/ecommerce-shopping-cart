import React from "react";
import store from "./store";
import { Provider } from "react-redux";
// import HomeScreen from "./components/HomeScreenClassComponent";
import HomeScreen from "./components/HomeScreen";


class App extends React.Component {


  render() {
      return (
          <Provider store={store}>
            <HomeScreen></HomeScreen>
          </Provider>
      );
  }

}

export default App;
