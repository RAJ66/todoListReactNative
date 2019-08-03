/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

//const App = () => {
type Props = {};
class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: [
        { key: "0", desc: "Item 1", done: false },
        { key: "1", desc: "Item 2", done: false }
      ],
    };
  }

  renderItem(obj) {
    return <Text>{obj.item.desc}</Text>;
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.items}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  list: {
    marginTop: 24,
  }
});

export default App;
