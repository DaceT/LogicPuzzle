import React from "react";
import {
  createNavigator,
  SwitchRouter,
  SceneView
} from "@react-navigation/core";
import './App.css';
import { createBrowserApp, Link } from "@react-navigation/web";
import Home from './screens/Home';
import Selector from './screens/GameSelector';
import SinglePlayer from './screens/SinglePlayerBoard';
import Leaderboard from './screens/Leaderboard';
import DataTesting from './screens/DataTesting';
import Header from './screens/layout/Header';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div className="App">
          <div style={{ display: "flex", height: "100%", alignItems: 'center', flexDirection: "column" }}>
            <div style={{
              width: "100%",
              backgroundColor: "#ff91a4",
              borderRight: "1px solid #99b",
              justifyContent: 'center',
              alignContent: 'center',
              color: "#fff", fontWeight: "100", fontSize: "1.5em", fontFamily: "helvetica neue"
              
            }}>
              <div>
                <Header />
              </div>
            </div>




          <div>
            <SceneView
              component={descriptor.getComponent()}
              navigation={descriptor.navigation}
            />
          </div>
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

