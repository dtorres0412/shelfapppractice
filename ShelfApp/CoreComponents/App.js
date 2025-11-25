import React, { useRef, useState } from 'react';
import { Animated, TouchableOpacity, Easing, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './assets/globalStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IdentificationOperation from './IdentificationOperation';
import TableAccountDetails from './TableAccountDetails';
import IdentificationRecord from './IdentificationRecord';

const Stack = createNativeStackNavigator();

function MainScreen({ navigation }) {
  const [open, setOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-250)).current;

  const toggleMenu = () => {
    Animated.timing(slideAnim, {
      toValue: open ? -250 : 0,
      duration: 250,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
    setOpen(!open);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <View style={{ height: 120, backgroundColor: 'green' }}>
        <View style={styles.horizontalTexts}>
          <TouchableOpacity onPress={toggleMenu}>
            <Text style={styles.hamburger}>☰</Text>
          </TouchableOpacity>
          <Text style={styles.headerMainText}>AI檯帳辨識系統</Text>
              <Text style={styles.headerText}>主页</Text>
        </View>
      </View>
      

      {open && <TouchableOpacity style={styles.overlay} onPress={toggleMenu} />}

      <Animated.View style={[styles.sideMenu, { left: slideAnim }]}>
        <Text style={styles.headerSidebarText}>内湖門市</Text>
        <View style={styles.horizontalLine1} />
        <View style={styles.horizontalLine2} />

        <TouchableOpacity
          onPress={() => {
            toggleMenu();
            navigation.navigate('IdentificationOperation'); 
          }}
        >
          <Text style={styles.sidebarTextOption}>
            <Text style={styles.greenDot}>{'\u2B24'}</Text> 辨識作業
          </Text>
        </TouchableOpacity>

        <View>
          <View style={styles.horizontalLine3} />
          <Text style={styles.menuLogoutItem}>門市登出</Text>
        </View>
      </Animated.View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="IdentificationOperation" component={IdentificationOperation} />
         <Stack.Screen name="TableAccountDetails" component={TableAccountDetails} />
         <Stack.Screen name="IdentificationRecord" component={IdentificationRecord} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
