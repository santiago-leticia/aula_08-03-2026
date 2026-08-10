import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, Text, View } from "react-native";

export default function Index() {
  const queryKey = ["listaTweets"];

  const queryFn = async () => {
    const response = await fetch(
      "https://6a73bde815e0453fe1b42add.mockapi.io/tweetsa",
    );

    if (!response.ok) {
      throw new Error("Deu ruim!");
    }

    const body = await response.json();

    return body;
  };

  const { isLoading, isError, data } = useQuery({
    queryKey: queryKey,
    queryFn: queryFn,
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
    </View>
  );
}