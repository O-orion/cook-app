import { ScrollView, Alert } from "react-native";
import { Ingredient } from "../Ingredient";
import { style } from "./style";
import { useState } from "react";
import { Selected } from "../selected";
import { router } from "expo-router";

export function Ingredients () {

    const [ selected, setSelected ] = useState<string[]>([])

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

    return (
        // Criando uma lista
        <>
            <ScrollView contentContainerStyle={style.container} showsVerticalScrollIndicator={false}>
                {
                    Array.from({ length: 100}).map((item, index) => (
                        <Ingredient  
                        key={index} name="tomate" 
                        image="" 
                        selected={selected.includes(String(index))} 
                        onPress={() => handleToggleSelected(""+index)}
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