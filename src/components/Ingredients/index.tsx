import { ScrollView, Alert } from "react-native";
import { Ingredient } from "../Ingredient";
import { style } from "./style";
import { useState } from "react";
import { Selected } from "../selected";
import { router } from "expo-router";
import { useEffect } from "react";
import { services } from "@/services";

export function Ingredients () {

    const [ selected, setSelected ] = useState<string[] >([])
    const [ingredients, setIngredients] = useState<IngredientsResponse[]>([])

    function handleToggleSelected(value: string) {

        if(selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value))
        }

        setSelected((state) => [...state, value])
        console.log(selected)
    }

    function handleClearSelected () {
        Alert.alert("Limpar", "Deseja limpar tudo ?", [
            {text: 'Não', style: 'cancel'},
            {text: 'Sim', onPress: () =>  setSelected([]) },
        ])
       
    }

    function handleSearch() {
        // navegando para outra interface
        router.navigate("/receita/")
    }

    useEffect(() => {
        services.ingredients.findAll().then(setIngredients)
    })
    return (
        // Criando uma lista
        <>
            <ScrollView contentContainerStyle={style.container} showsVerticalScrollIndicator={false}>
                {
                    ingredients.map((item) => (
                        <Ingredient  
                        key={item.id} name={item.name} 
                        image={item.image} 
                        selected={selected.includes(String(item.id))} 
                        onPress={() => handleToggleSelected(item.id)}
                         />
                    ))
                }
            </ScrollView>
            { selected.length > 0 && (
                <Selected 
                quantity={selected.length} 
                onClear={handleClearSelected} 
                onSearch={handleSearch}>

                </Selected>

            )}
        
        </>

    )
}