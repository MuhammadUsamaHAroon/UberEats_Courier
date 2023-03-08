import {GestureHandlerRootView} from"react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/rootNavigator";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
import AuthContextProvider from "./src/Context/AuthContext";
import '@azure/core-asynciterator-polyfill'

Amplify.configure({
  ...awsconfig, 
  Analytics:{
    disabled:true
  }
});

const App = () => {
  return (
    
    <NavigationContainer>
    <GestureHandlerRootView style={{flex:1}}>
    <AuthContextProvider>
    <Navigation />
    </AuthContextProvider>
      </GestureHandlerRootView>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
export default withAuthenticator(App);