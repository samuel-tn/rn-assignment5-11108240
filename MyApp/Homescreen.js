import { View, Text, SafeAreaView, Image, ScrollView , StyleSheet} from "react-native";
import { ThemeContext } from "./components/ThemeContext";
import { useContext } from "react";

<image source={require('./assets/card.png')}/>
const buttons = [
  { id: '1', icon: require('./assets/send.png'), label: 'Send'},
  { id: '2', icon: require('./assets/receive.png'), label: 'Receive'},
  { id: '3', icon: require('./assets/loan.png'), label: 'Loan'},
  { id: '4', icon: require('./assets/topUp.png'), label: 'TopUp'},
];

const activitiesData = [
  { id: '1', icon: require('./assets/apple.png'), title: 'Apple Store', label: 'Entertainment', amount:'-$5,99'},
  { id: '2', icon: require('./assets/spotify.png'), title: 'Spotify', label: 'Music', amount:'-$12,99'},
  { id: '1', icon: require('./assets/moneyTransferring.png'), title: 'Money Transfer', label: 'Transaction', amount:'$300'},
  { id: '1', icon: require('./assets/grocery.png'), title: 'Grocery', label: 'Shopping', amount:'-$88'},
];

 
const Homescreen = ({ navigation }) => {
    const { isDarkTheme } = useContext(ThemeContext);
    const styles = isDarkTheme ? darkStyles : lightStyles;
  return (
      <SafeAreaView style={styles.container}>
       <ScrollView>
        <View style={styles.header}>
        <View>
        <Image source={require('./assets/profile.png')} />
        </View>
        <View>
        <Text style={styles.title}>{'Welcome Back,'}</Text>
        <Text style={styles.name}>{'Samuel Tandoh'}</Text>
        <View>
        <Image source={require('./assets/search.png')} />
        </View>
        </View>
            <Text style={styles.subtitle}>Transaction</Text>
        </View>
        </ScrollView>
        </SafeAreaView>

    );
};

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "dark",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});

export default Homescreen;