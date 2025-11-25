import React, { useRef, useState } from 'react';
import { Animated, TouchableOpacity, Easing, Text, View, ScrollView } from 'react-native';
import styles from './assets/globalStyles';

function IdentificationRecord({ navigation }) {
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
          <Text style={styles.headerTextRight}>內湖門市 {'\n'} 首旱(編號或姓名)</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View style = {styles.cameraCapturePanel1}>
            <Text>Camera View1</Text>
        </View>

        <View style = {styles.cameraCapturePanel2}>
            <Text>Camera View2</Text>
        </View>

      </ScrollView>

      <View style = {styles.panel}>
        <View style = {styles.rightPanel}>
            <View style = {styles.panelSection}>
             <View style = {styles.buttonGrid}>
                <TouchableOpacity style = {styles.panelButton}>
                    <View style = { styles.panel1x1 }><Text>1</Text></View>
                    <Text>1x1</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.panelButton}>
                    <View style = { styles.panel1x1 }><Text>1</Text></View>
                    <View style = { styles.panelWhite }></View>
                    <View style = { styles.panel1x1 }><Text>2</Text></View>
                    <Text>2x1</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.panelButton}>
                    <View style = { styles.panel1x1 }><Text>1</Text></View>
                    <View style = { styles.panelWhite }></View>
                    <View style = { styles.panel1x1 }><Text>2</Text></View>
                    <View style = { styles.panelWhite }></View>
                    <View style = { styles.panel1x1 }><Text>3</Text></View>
                    <Text>3x1</Text>
                </TouchableOpacity>
             </View>
            </View>
        </View>
  
        <TouchableOpacity style={styles.sendButton}><Text>送出</Text></TouchableOpacity>
      </View>

      {open && <TouchableOpacity style={styles.overlay} onPress={toggleMenu} />}

      <Animated.View style={[styles.sideMenu, { left: slideAnim }]}>
        <Text style={styles.headerSidebarText}>内湖門市</Text>
        <Text style={styles.horizontalLine1} />
        <Text style={styles.horizontalLine2} />

        <TouchableOpacity
          onPress={() => {
            toggleMenu();
            navigation.navigate('Main'); 
          }}
        >
          <Text style={styles.sidebarTextOption}>
            <Text style={styles.greenDot}>{'\u2B24'}</Text> 主页
          </Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.horizontalLine3}></Text>
          <Text style={styles.menuLogoutItem}>門市登出</Text>
        </View>
      </Animated.View>
    </View>
  );
}

export default IdentificationRecord;
