import { FlatList, ScrollView } from "react-native";
import { Ingredient } from "../Ingredient";
import { style } from "./style";
import { useState } from "react";

export function Ingredients () {

    const [ selected, setSelected ] = useState<string[]>([])

    function handleToggleSelected(value: string) {

        if(selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value))
        }

        setSelected((state) => [...state, value])
        console.log(selected)
    }

    return (
        // Criando uma lista
        <ScrollView contentContainerStyle={style.container} showsVerticalScrollIndicator={false}>
            {
                Array.from({ length: 100}).map((item, index) => (
                    <Ingredient  key={index} name="tomate" image="" selected onPress={() => handleToggleSelected(""+index)} />
                ))
            }
        </ScrollView>
    )
}