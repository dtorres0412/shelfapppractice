import React, { useRef, useState } from 'react';
import { Animated, TouchableOpacity, Easing, Text, View, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './assets/globalStyles';

function IdentificationOperation({ navigation }) {
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

      <View style={styles.textInputContainer}>
        <TextInput placeholder="請輸入貨架代號或名稱" style={styles.textInput} />
        <TouchableOpacity>
          <Icon name="search" size={20} color="#888" style={styles.iconWrapper} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
           <TouchableOpacity
                  onPress={() => {
                    toggleMenu();
                    navigation.navigate('TableAccountDetails'); 
                  }}
                >
                <View style={styles.cardGreen}>
                    <Text style={styles.itemText}>四氏触檔方方冷凍子箱氷子箱籍</Text>
                </View>
            </TouchableOpacity>
        
        <View style={styles.cardOrange}>
          <Text style={styles.itemText}>時尚專區-織品混合櫃帳</Text>
        </View>
        <View style={styles.cardRed}>
          <Text style={styles.itemText}>均一價-衛浴用品2</Text>
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

export default IdentificationOperation;
