import React, { useRef, useState } from 'react';
import { Animated, TouchableOpacity, Easing, Text, View, TextInput, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './assets/globalStyles';

function TableAccountDetails({ navigation }) {
  const [open, setOpen] = useState(false);
  const [selectedHeader, setSelectedHeader] = useState('檯帳');
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
      <View style={{ height: 175, backgroundColor: 'green' }}>
        <View style={[styles.horizontalTexts, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }]}>
          <TouchableOpacity onPress={toggleMenu}>
            <Text style={styles.hamburger}>☰</Text>
          </TouchableOpacity>

          <Text style={[styles.headerMainText, {flex: 1, textAlign: 'center'}]}>AI檯帳辨識系統</Text>
          <Text style={styles.headerTextRight}>內湖門市</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 5 }}>
  
            <TouchableOpacity 
            onPress={() => {
            if (selectedHeader !== '檯帳'){
                toggleMenu();
                navigation.navigate('TableAccountDetails'); 
                setSelectedHeader('檯帳');
            }
            //It does not do anything if 檯帳 header was pressed
          }}>
                <Text style={[styles.headerSwitch, selectedHeader === '檯帳' && styles.headerSwitchActive]}>
                檯帳
                </Text>
            </TouchableOpacity>

           <TouchableOpacity onPress={() => {
            toggleMenu();
            navigation.navigate('IdentificationRecord'); 
            setSelectedHeader('辨識記錄');
          }}>
                <Text style={[styles.headerSwitch, selectedHeader === '辨識記錄' && styles.headerSwitchActive
                ]}>
                辨識記錄
                </Text>
            </TouchableOpacity>
          </View>
      </View>

      <ScrollView horizontal style = {styles.productRow}>
        <View style = {styles.leftPanel}>
          <Text style = {styles.leftPanelText}> 第1届 </Text>
          <Text style = {styles.leftPanelText}> 佳层垫高0 </Text>
          <Text style = {styles.leftPanelText}> 隔板垫高0 </Text>
          <Text style = {styles.leftPanelText}> 商品垫高54.25 </Text>
          <Text style = {styles.leftPanelText}> 唇高0 </Text>
        </View>

        <View style = {styles.productPanel}>
          <Text style = {styles.productTitle}>2-1</Text>
          <Image source= {require('./assets/icon.png')} style = {styles.productImage}></Image>
          <Text style = {styles.productCode}>839347</Text>
          <Text style = {styles.productName}>鲜橙100%柳橙汁 CAN350</Text>
          <Text style = {styles.productPrice}>$42</Text>
        </View>
      </ScrollView>
      
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

export default TableAccountDetails;
