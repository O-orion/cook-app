import { View, Text } from "react-native";
import { styles } from "./styles";
import { Ingredients } from "@/components/Ingredients";
import { Button } from "@/components/Button";
import { router } from "expo-router";

export default function Index() {
    function handleSearch() {
        // navegando para outra interface
        router.navigate("/recipes/")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha 
                {"\n"}
                <Text style={styles.subTitle}>os produtos</Text>
                </Text>
            <Text style={styles.message}>
                Descubra receitas baseadas nos produtos que você escolheu
            </Text>

            <Ingredients />
        </View>
    )
}