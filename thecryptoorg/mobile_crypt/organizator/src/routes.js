
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/main';
import Inicio from './pages/inicio';

const RootStack = createStackNavigator(
    {Main, Inicio}, 
    {
      defaultNavigationOptions: {
          headerStyle:{
              backgroundColor: "#c0392b",
             
              
          },
          headerTintColor:"white",
      },

    });
    
const AppContainer = createAppContainer(RootStack);

export default AppContainer;