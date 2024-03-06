import { View, Text, FlatList } from "react-native";
import { style } from "../recipes/style";
import { MaterialIcons } from "@expo/vector-icons";
import { Recipe } from "@/components/Recipe";

export function Recipes() {
    return (
        <View style={style.container}>
            <View style={style.header}> 
                <MaterialIcons name="arrow-back" size={32} onPress={() => {}} ></MaterialIcons>
                <Text style={style.title}>Ingredientes</Text>     

                <FlatList data={['1']} 
                keyExtractor={item => item} 
                renderItem={() => <Recipe recipe={{name: "Omelete", image: "", minutes:10}} />}>
                    </FlatList>       
            </View>
        </View>
    )
}