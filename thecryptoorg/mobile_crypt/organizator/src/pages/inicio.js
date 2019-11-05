import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { Icon } from 'react-native-elements';
import api from "../services/api";
import { Drawer } from 'react-native-paper';

export default class Inicio extends Component {

  static navigationOptions = ({navigation}) =>({
    title: 'Bem vindo '+ navigation.state.params.user.nome,
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
        <Icon
        raised
        name='user'
        type='font-awesome'
        color='#f50'
        iconStyle={this.styles.iconStyles}
        />
      ),
  });

  state = {
    visible: false,
    active: 'first',
  };
  styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
  });


  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });


  render() {
    return (
  <View>
        <Button
        title="Realizar Login"
        color="#c0392b"
        
      />

    </View>
    
    );
  }
}




/* *

Olá Mundo:</Text>
                   {this.state.docs.map(user => {
                    return <Text>{user.nome}</Text>
                  } )}

*/