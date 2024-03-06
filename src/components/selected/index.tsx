import  Animated, { SlideInDown, BounceOutDown } from "react-native-reanimated";
import { View, Text } from "react-native";
import { style } from "./style";
import {  MaterialIcons } from '@expo/vector-icons'
import { theme } from "@/theme";
import { Button } from "../Button";

type Props = {
    quantity: number,
    onClear: () =>  void,
    onSearch: () => void
}

export function Selected({ quantity, onClear, onSearch }: Props) {
    console.log('oi')
    console.log(quantity)
    return (
        <Animated.View style={style.container} entering={SlideInDown.duration(500)} exiting={BounceOutDown}>
            <View style={style.header}>
                <Text style={style.label} >
                    {quantity} ingredientes selecionados
                </Text>
                <MaterialIcons name="close" size={24} onPress={onClear} color={theme.colors.gray_400}></MaterialIcons>
            </View>
            <Button title="Encontrar" onPress={onSearch}></Button>
        </Animated.View>
    )
}