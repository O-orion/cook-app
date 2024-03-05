import { FlatList, ScrollView } from "react-native";
import { Ingredient } from "../Ingredient";
import { style } from "./style";

export function Ingredients () {
    return (
        // Criando uma lista
        <ScrollView contentContainerStyle={style.container} horizontal>
            <Ingredient></Ingredient>
            <Ingredient></Ingredient>
            <Ingredient></Ingredient>
            <Ingredient></Ingredient>
            <Ingredient></Ingredient>

        </ScrollView>
    )
}