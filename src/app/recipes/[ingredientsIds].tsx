import { View, Text, FlatList } from "react-native";
import { style } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { Recipe } from "@/components/Recipe";
import { router, useLocalSearchParams } from "expo-router";

export function Recipes() {
    const params = useLocalSearchParams<{ ingredientsIds: string }>();
    const ingredientesIds = params.ingredientsIds.split(',')
    return (
        <View style={style.container}>
            <View style={style.header}> 
                <MaterialIcons name="arrow-back" size={32} onPress={() => router.back} ></MaterialIcons>
                <Text style={style.title}>Ingredientes</Text>     

                <FlatList data={['1']} 
                keyExtractor={item => item} 
                renderItem={() => <Recipe recipe={{name: "Omelete", image: "", minutes:10}} />}>
                    </FlatList>       
            </View>
        </View>
    )
}