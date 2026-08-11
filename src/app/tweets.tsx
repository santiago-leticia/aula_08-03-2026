import { Text,View } from "react-native";
import { Link } from "expo-router";
import { useReactQueryDevTools } from "@dev-plugins/react-query/build/useReactQueryDevTools";
import { QueryClient } from "@tanstack/react-query";

//export default so pode ter um ai
export default function TweetScreen(){

    return <View>
        <Text>Tela do Tweet</Text>
        <Link href={"/"}>Voltar para o Home</Link>
    </View>;
}