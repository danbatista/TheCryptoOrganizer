
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/main';


const RootStack = createStackNavigator(
    {Main},
    {
      defaultNavigationOptions: {
          headerStyle:{
              backgroundColor: "#DA552F"
              
          },
          headerTintColor:"#FFFF",
          
      },

    });
const AppContainer = createAppContainer(RootStack);

export default AppContainer;