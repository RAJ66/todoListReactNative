/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  TextInput,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//const App = () => {
type Props = {};
class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      items: [
        { key: "0", desc: "Item 1", done: false },
        { key: "1", desc: "Item 2", done: false }
      ]
    };

    this.inserirItem = this.inserirItem.bind(this);
  }

  renderItem(obj) {
    return <Text style={styles.cell}>{obj.item.desc}</Text>;
  }

  inserirItem() {
    let newItem = {
      key: this.state.items.length.toString(),
      desc: this.state.text,
      done: false,
    };

    let items = this.state.items;
    items.push(newItem);
    this.setState(items);

    let text = '';
    this.setState({ text });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.lista}
          data={this.state.items}
          renderItem={this.renderItem}
          extraData={this.state}
        />
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            onChangeText={text => {
              this.setState({ text });
            }}
            value={this.state.text}
          />
          <Button onPress={this.inserirItem} title="Inserir" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  lista: {
    marginTop: 24
  },
  cell: {
    padding: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    backgroundColor: '#E4EBEE',
    fontSize: 18,
    marginBottom: 2
  },
  input: {
    backgroundColor: 'white',
    borderColor: '#CCC',
    borderWidth: 3,
    padding: 10,
    margin: 20,
    flex: 1
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10
  },
});

export default App;
