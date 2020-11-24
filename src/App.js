import React from "react";
import {
  createNavigator,
  SwitchRouter,
  SceneView
} from "@react-navigation/core";
import { createBrowserApp, Link } from "@react-navigation/web";
import Home from './screens/Home';
import Selector from './screens/GameSelector';
import SinglePlayer from './screens/SinglePlayerBoard';
import Leaderboard from './screens/Leaderboard';
import DataTesting from './screens/DataTesting';
window.__DEV__ = true;



// About.path = "";
// About.navigationOptions = {
//   title: "About",
//   linkName: "About Page"
// };

// Home.path = "";
//   Home.navigationOptions = {
//     title: "Home",
//     linkName: "Home Page"
//   };



// Profile.path = "person/:name";
// Profile.navigationOptions = ({ navigation }) => ({
//   title: navigation.getParam("name"),
//   linkName: "Profile Page"
// });

// var login = require('./screens/login.html');


class SidebarView extends React.Component {
  render() {
    const { descriptors, navigation } = this.props;
    const activeKey = navigation.state.routes[navigation.state.index].key;
    const descriptor = descriptors[activeKey];
    return (
      <div
        style={{ display: "flex", height: "100%", alignItems: 'center', flexDirection: "column" }}
      >

        
          <div style={{
            width: "100%",
            backgroundColor: "gray",
            borderRight: "1px solid #99b",
            justifyContent: 'center',
            alignContent: 'center',
            
          }}>
            <div>
              <h1>Logic Puzzles</h1>
            </div>
            {/* <div style={{ wordSpacing: 100 }}>
              <Link routeName="Home">Home </Link>

              <Link routeName="Selector">GameModeSelector </Link>

              <Link routeName="SinglePlayer" params={{ name: "jamie" }}>Game </Link>

              <Link routeName="Leaderboard" params={{ name: "brent" }}>Leaderboard </Link>

              {/* <Link routeName="DataTesting" params={{ name: "brent" }}>DataTesting </Link> 

            </div> */}
          </div>




        <div>
          <SceneView
            component={descriptor.getComponent()}
            navigation={descriptor.navigation}
          />
        </div>
      </div>
    );
  }
}

const AppNavigator = createNavigator(
  SidebarView,
  SwitchRouter({
    Home,
    Selector,
    SinglePlayer,
    Leaderboard,
    DataTesting,
  }),
  {}
);

const App = createBrowserApp(AppNavigator);


export default App;

