import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      paddingHorizontal: 20,
      paddingVertical: 0.5,
      fontSize: 14,
      height: 30,
    },
    title: {
      paddingHorizontal: 20,
      fontSize: 18,
      height: 30,
      fontWeight: 'bold'
    },
    name: {
      paddingTop: 0,
      fontSize: 25,
      height: 30,
      fontWeight: 'bold'
    },  
    imgcontainer: {
      paddingTop: 50,
      paddingBottom: 50,
      alignItems: 'center',
    },
    imageStyle: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      overflow: "hidden",
      borderWidth: 3
    }
})