import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import "react-native-gesture-handler";
import { StreamChat } from "stream-chat";
import { useEffect } from "react";

const API_KEY = "cx88643ydm7z";
const client = StreamChat.getInstance(API_KEY);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const connecUser = async () => {
    await client.connectUser(
      {
        id: "jhonned01",
        name: "jhonned01",
      },
      client.devToken("jhonned01")
    );
    // funcion suma de 2 numeros
  };

  useEffect(() => {
    connecUser();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
