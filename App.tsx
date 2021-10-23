import React from "react";
import { ThemeProvider } from "styled-components";

//contexts
import AuthProvider from "./src/contexts/AuthContext";

//screens
import Home from "./src/screens/Home";

//theme
import theme from "./src/theme";

//fonts load
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <StatusBar
          style="light"
          translucent={true}
          backgroundColor="transparent"
        />
        <Home />
      </AuthProvider>
    </ThemeProvider>
  );
}
