import React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';
import { 
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from '@expo-google-fonts/josefin-sans'
import { 
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import AppLoading from 'expo-app-loading';

export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
  });

  if(! fontsLoaded) {
    <AppLoading />;
  }

 return (
 <NavigationContainer>
   <Stack.Navigator initialRouteName='Home'>

     {/* home screen */}
     <Stack.Screen 
     name = "Home"
     options={{
       headerShown: false,
     }}>
       {(props) => <Home {...props} channelName=
       {"Education Application"} />}
     </Stack.Screen>

      {/* Course screen */}
      <Stack.Screen name='Course' 
      component={Course}
      options={{
        headerTitleStyle:{
          fontSize: 25,
          fontFamily: "Nunito_600SemiBold",
        },
        headerTitle: "Courses",
        headerTitleAlign: "center",
      }} 
      />

       {/* UserData screen */}
       <Stack.Screen name='Student' 
      component={UserData} 
      options={{
        headerTitleStyle:{
          fontSize: 25,
          fontFamily: "Nunito_600SemiBold",
        },
        headerTitle: "Students Data",
        headerTitleAlign: "center",
      }} 
      />

       {/* About screen */}
       <Stack.Screen name='About' 
      component={About}
      options={{
        headerTitleStyle:{
          fontSize: 25,
          fontFamily: "Nunito_600SemiBold",
        },
        headerTitleAlign: "center",
      }}       
      />

       {/* Contact screen */}
       <Stack.Screen name='Contact' 
      component={Contact} 
      options={{
        headerTitleStyle:{
          fontSize: 25,
          fontFamily: "Nunito_600SemiBold",
        },
        headerTitleAlign: "center",
      }} 
      />

   </Stack.Navigator>
 </NavigationContainer>
 );
}