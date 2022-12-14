import { StyleSheet } from "react-native";

export const colors = {
  primary: '#FF6701',
};

export const styles = StyleSheet.create({
    globalMargin: {
      marginHorizontal: 20,
    },
    title: {
      fontSize: 30,
      marginBottom: 10,
    },
    btnBig: {
      width: 100,
      height: 100,
      backgroundColor: 'red',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10
    },
    btnBigText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold'
    },
    menuCont: {
      marginVertical: 30,
      marginHorizontal: 30,
      alignItems: 'flex-start'
    },
    avatarCont: {
      alignItems: 'center',
      // backgroundColor: 'green',
      marginTop: 20,
    },
    avatar: {
      width: 150,
      height: 150,
      borderRadius: 100
    },
    menuBtn: {
      marginVertical: 10
    },
    menuText: {
      fontSize: 18
    }
});