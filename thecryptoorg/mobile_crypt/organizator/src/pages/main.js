import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import api from "../services/api";
import { HeaderTitle } from 'react-navigation-stack';


export default class Main extends Component {

  static navigationOptions = {
    title: 'Organizator',
  };

  state = {
    User: [],
    login: '',
    senha: '',

  };

  styles = StyleSheet.create({
    textTitle: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 25,
      marginLeft: 40,
    },
    viewBlock: {
      backgroundColor: "#f39c12",
      height: "100%"
    },
    Block__Elem_Input_mod: {
      marginBottom: 50,
    },
    textStyle: {
      fontWeight: 'bold',
      marginBottom: 30,
      marginLeft: 40,
      marginTop: 20,
    },
    SectionStyle: {
      flexDirection: 'row',
      borderStyle: "solid",
      alignItems: 'center',
      backgroundColor: "white",
      borderWidth: 0.5,
      borderColor: '#000',
      height: 40,
      borderRadius: 5,
      margin: 10,
    },
    iconStyles:{
      marginLeft: 0,
      color: "#c0392b",
    }
  });


  componentDidMount() {

   // this.loadUsers();

  }


  goToMainPage = (login, senha)=>{

    this.getUserLogin(login, senha);
  }

  getUserLogin = async (email, senha) => {

  
     const url = "/login/" + email;
    const response = await api.get(url).catch(err => {
      console.log("Find an error: =>" + err);
      throw new Error(err);
    });
    if(response.data == null || response.data == undefined){
    console.log("Deu erro");
    }else{
    const User  = response.data;
        if(User.senha == senha){
          this.setState({ User });
          console.log("Usuário Autenticado com Sucesso!");
          this.props.navigation.navigate("Inicio",{user : this.state.User});
        }else{
          console.log("Login ou senha incorretos!");
        }
  
    }
};


  render() {
    return (
      <View style={this.styles.viewBlock}>

        <HeaderTitle style={this.styles.textTitle}>Bem vindo ao Organizator</HeaderTitle>

        <Text style={this.styles.textStyle}>Faça seu login logo abaixo:</Text>
        <View style={this.styles.SectionStyle}>
        <Icon
            raised
            name='user'
            type='font-awesome'
            color='#f50'
            iconStyle={this.styles.iconStyles}
            />
          <TextInput
            placeholder="Insira seu e-mail:"
            onChangeText={(login) => this.setState({ login })}

          />
        </View>
        <View style={this.styles.SectionStyle}>
        <Icon
            raised
            name='key'
            type='font-awesome'
            color='#f50'
            iconStyle={this.styles.iconStyles}
            />
        <TextInput secureTextEntry={true}
          placeholder="Senha:"
          onChangeText={(senha) => this.setState({ senha })}
        />
        </View>
        <Button
          title="Realizar Login"
          color="#c0392b"
          onPress={() => this.goToMainPage(this.state.login, this.state.senha)}
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