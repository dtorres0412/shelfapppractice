import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1 },

  header: {
    height: 160,
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16
  },

  itemText: {
    fontSize: 20,
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

  title: { 
    color: 'white', 
    fontSize: 20 
  },

  sideMenu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 200,
    backgroundColor: '#fff',
    paddingTop: 60,
    borderRadius: 20,
    zIndex: 100,
    elevation: 12,
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
    zIndex: 99, 
    elevation: 11,
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

  headerTextRight:{
    color: 'white',
    fontSize: 10,
    marginVertical: 12,
    textAlign: 'right',
  },

  sidebarTextOption: {
    paddingHorizontal: 20,
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
    height: 1, 
    backgroundColor: 'green', 
    marginVertical: 4, 
    width: '100%',
  },

  horizontalLine2: {
    height: 1, 
    backgroundColor: 'darkorange', 
    marginVertical: 4, 
    width: '100%',
  },

  horizontalLine3: {
    marginTop: 500,
    height: 1, 
    backgroundColor: 'gray', 
    marginVertical: 4, 
    width: '100%',
  },

  greenDot: {
    color: 'green'
  },

  textInputContainer: {
    position: 'relative',
    marginTop: 10,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 40,
    marginHorizontal: 16,
  },

  textInput: {
    flexDirection: 'row',

  },

  iconWrapper: {
    position: 'absolute',
    right: 10,
    top: '30%',
    transform: [{ translateY: -30 }],
  },

  cardGreen: {
    backgroundColor: 'white',
    marginTop: 10,
    marginLeft: 10,
    width: 200,
    height: 50,
    padding: 10,
    justifyContent: 'center',
    borderWidth: 0.2,
    borderRadius: 10,
    borderLeftColor: 'green',
    borderLeftWidth: 5,
    elevation: 10,
  },

  cardOrange: {
    backgroundColor: 'white',
    marginTop: 10,
    marginLeft: 10,
    width: 200,
    height: 50,
    padding: 10,
    justifyContent: 'center',
    borderWidth: 0.2,
    borderRadius: 10,
    borderLeftColor: 'orange',
    borderLeftWidth: 5,
    elevation: 10,
  },

  cardRed: {
    backgroundColor: 'white',
    marginTop: 10,
    marginLeft: 10,
    width: 200,
    height: 50,
    padding: 10,
    justifyContent: 'center',
    borderWidth: 0.2,
    borderRadius: 10,
    borderLeftColor: 'red',
    borderLeftWidth: 5,
    elevation: 10,
  },

  headerSwitch: {
  fontSize: 18,
  paddingHorizontal: 12,
  paddingVertical: 4,
  marginHorizontal: 10,
  color: '#ccc',
},

headerSwitchActive: {
  color: 'white',
  borderBottomWidth: 2,
  borderBottomColor: 'white',
  fontWeight: 'bold'
},

wrapper: {
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
},

leftPanel: {
  width: 125,
  height: 200,
  backgroundColor: 'darkorange',
  padding: 10,
  justifyContent: 'center',
  alignItems: 'flex-start',
  borderColor: 'gray',
  borderWidth: 1,
},

leftPanelText: {
    color: 'white',
},

productRow: {
  marginTop: 10,
  flexDirection: 'row',
},

productPanel: {
  width: 125,
  height: 200,
  borderWidth: 1,
  padding: 10,
  alignItems: 'center',
  backgroundColor: 'white',
  borderColor: 'gray',
},

productTitle: {
  fontWeight: 'bold',
  marginBottom: 5,
},

productImage: {
  width: 70,
  height: 70,
  resizeMode: 'contain',
  marginVertical: 5,
},

productCode:{
  marginTop: 5,
  fontSize: 13,
},

productName: {
  fontSize: 12,
  textAlign: 'center',
  marginVertical: 3,
},

cameraCapturePanel1:{
  width: 250,
  height: 300,
  borderWidth: 1,
  borderColor: 'gray',
},
cameraCapturePanel2:{
  width: 250,
  height: 300,
  borderWidth: 1,
  borderColor: 'gray',
},

cameraPanelLayers:{
  flex: 1,
  marginLeft: 300,
  padding: 20,
  width: '100%',
  height: 600,
  backgroundColor: 'gray',
  borderWidth: 1,
  borderRadius: 5,
},

panel: {
  position: 'absolute',
  right: 0,
  height: 600,
  top: 135,
  width: 120,
  padding: 16,
  borderRadius: 10,
},

rightPanel: {
  position: 'absolute',
  right: 0,
  height: 525,
  width: 120,
  backgroundColor: '#e6e6e6ff',
  padding: 16,
  borderRadius: 10,
},

panelSection: {
  marginBottom: 16,
},

panelTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 8,
},

buttonGrid:{
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
},

panelButton: {
  width: '100%',
  padding: 10,
  backgroundColor: 'white',
  borderRdius: 5,
  alignItems: 'center',
  marginBottom: 8,
},

sendButton: {
  top: 525,
  padding: 12,
  backgroundColor: 'white',
  borderWidth: 1,
  borderColor: 'green',
  borderRadius: 5, 
  alignItems: 'center',
},
panel1x1:{
  height: 20,
  width: 50,
  backgroundColor: '#e9e9e9ff',
  textAlign: 'center',
},
panelWhite:{
  height: 5,
  width: 5,
  backgroundColor: 'white',
  textAlign: 'center',
}

});

export default styles;