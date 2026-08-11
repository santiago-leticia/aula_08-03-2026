import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";

export default function Index() {
  const queryKey = ["listaTweets"];

  const queryFn = async () => {
    const response = await fetch(
      "https://6a73bde815e0453fe1b42add.mockapi.io/tweets",
    );

    //ele vai atualizar

    //passa por varias promise e so tinha um por isso que dav erro
    await new Promise(resolve => setTimeout(resolve,30_0000));

    if (!response.ok) {
      throw new Error("Deu ruim!");
    }

    const body = await response.json();

    return body;
  };

  const { isLoading, isError, data } = useQuery({
    queryKey: queryKey,
    queryFn: queryFn,
    //ele vai atuateliza
    staleTime: 30_000,
    gcTime:10_000,
  });

  if (isLoading) {
    // early return ou saída antecipada
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>Tem erro</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>{data.length}</Text>
      <Link replace href={"/tweets"}>Ir ate o Tweet</Link>

    </View>
  );
}
//o link deixar colocar um texto nele