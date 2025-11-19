import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, TouchableOpacity, Easing, StyleSheet, Text, Button, View, ImageBackground } from 'react-native';

export default function App(){

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
    <View style = {{ flex:1, backgroundColor: "white" }}>
      <View style = {{ width: "100%", height: 120, backgroundColor: "green" }}>
        <View style = {styles.horizontalTexts}>
          <TouchableOpacity onPress={toggleMenu}>
            <Text style={ styles.hamburger }>☰ </Text>
          </TouchableOpacity>

            <Text style={ styles.headerMainText }> AI檯帳辨識系統 </Text>
            <Text style={ styles.headerText }> 內湖門市 首旱(編號或姓名) </Text>
          </View>

      </View>

          {open && <TouchableOpacity style = {styles.overlay} onPress = {toggleMenu}/>}

          <Animated.View style={[styles.sideMenu, {left: slideAnim}]}>
            <Text style = { styles.headerSidebarText }>内湖門市</Text>
            <Text style = { styles.horizontalLine1 }></Text>
            <Text style = { styles.horizontalLine2 }></Text>
            <Text style = { styles.sidebarTextOption }> 
              <Text style = { styles.greenDot }> {'\u2B24'} </Text> 
              辨識作業
            </Text>
            
            <View>
              <Text style = { styles.horizontalLine3 }></Text>
              <Text style = { styles.menuLogoutItem }>門市登出</Text>
            </View>
          </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  header: {
    height: 60,
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16
  },

  horizontalTexts: {
    marginTop: 65,
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center', 
  },

  hamburger: {
    fontSize: 20,
    color: 'white',
    marginLeft: 15,
  },

  title: { color: 'white', fontSize: 20 },

  sideMenu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 200,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

    overlay: {
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerSidebarText: {
    textAlign: 'center',
    color: 'dimgray',
    fontSize: 25,
    marginVertical: 12,
  },

  headerMainText: {
    color: 'white',
    fontSize: 20,
    marginVertical: 12,
  },

  headerText: {
    color: 'white',
    fontSize: 10,
    marginVertical: 12,
  },

  sidebarTextOption: {
    color: 'gray',
    fontSize: 18,
    marginVertical: 12,
  },

  menuLogoutItem: {
    textAlign: 'center',
    color: 'green',
    fontSize: 18,
    marginVertical: 12,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  horizontalLine1: {
    borderBottomColor: 'green',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  horizontalLine2: {
    borderBottomColor: 'darkorange',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  horizontalLine3: {
    marginTop: 500,
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  greenDot: {
    color: 'green'
  }
});