import {GestureHandlerRootView} from"react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/rootNavigator";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";

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
    {/* <BottomSheetModalProvider> */}
    <Navigation />
    {/* </BottomSheetModalProvider> */}
      </GestureHandlerRootView>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
export default withAuthenticator(App);