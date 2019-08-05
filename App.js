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
  Button,
  Platform,
  Animated,
  ScrollView
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//create constant
const Header_Maximum_Height = 200;
const Header_Minimum_Height = 50;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: [
        { key: '0', desc: 'Item 1', done: false },
        { key: '1', desc: 'Item 2', done: false }
      ]
    };

    this.inserirItem = this.inserirItem.bind(this);
    this.AnimatedHeaderValue = new Animated.Value(0);
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
    //
    if (newItem.desc.length === 0) {
      return;
    }
    let items = this.state.items;
    items.push(newItem);
    this.setState(items);

    let text = '';
    this.setState({ text });
  }



  render() {

    //change color
    const AnimateHeaderBackgroundColor = this.AnimatedHeaderValue.interpolate(
      {
        inputRange: [0, (Header_Maximum_Height - Header_Minimum_Height)],

        outputRange: ['#ff3300', '#ff6600'],

        extrapolate: 'clamp'
      });
    //insert animation
    const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate(
      {
        inputRange: [0, (Header_Maximum_Height - Header_Minimum_Height)],

        outputRange: [Header_Maximum_Height, Header_Minimum_Height],

        extrapolate: 'clamp'
      });

    return (
      <View style={styles.container}>
        <ScrollView

          scrollEventThrottle={16}

          contentContainerStyle={{ paddingTop: Header_Maximum_Height }}

          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue } } }]
          )}>
          <FlatList
            style={styles.lista}
            data={this.state.items}
            renderItem={this.renderItem}
            extraData={this.state}
          />
          
          
        </ScrollView>
        <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              onChangeText={text => {
                this.setState({ text });
              }}
              value={this.state.text}
            />
            <Button onPress={this.inserirItem} title='Inserir' />
          </View>

        <Animated.View style={[styles.HeaderStyle, { height: AnimateHeaderHeight, backgroundColor: AnimateHeaderBackgroundColor }]}>

          <Text style={styles.HeaderInsideTextStyle}> To do list header animation </Text>

        </Animated.View>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: (Platform.OS == 'ios') ? 20 : 0
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
  HeaderStyle:
    {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: (Platform.OS == 'ios') ? 20 : 0,
    },
    HeaderInsideTextStyle:
    {
        color: "#fff",
        fontSize: 18,
        textAlign: 'center'
    },
});

export default App;
