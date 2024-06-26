import { View, Text, StyleSheet,Platform,ImageBackground,Pressable } from "react-native";



export default function CategoryCard({categoryName,image,navigation}) {
 
    return (
        <Pressable onPress={() => navigation.navigate("Menu",{name:categoryName})}>
            <View style={{paddingVertical:16}}>
            <ImageBackground 
                    style={styles.card} 
                    source={image} 
                    borderRadius={16}
                    >
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{categoryName}</Text>
            </View>

            
            </ImageBackground>
            </View>
            </Pressable>
        );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 1,
      },
      android: {
        elevation: 5,
      },
      web: {
        height: 800,
        justifyContent: "center",
        display: "flex",
      },
    }),
  },
  nameContainer: {
    paddingHorizontal: 16,
    paddingVertical: 70,
    justifyContent: "center",
    alignContent: "center",
    
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign:"center",
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    borderRadius:10,
    paddingHorizontal:15,
    paddingVertical:1,

  },
});