import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import ArticleListScreen from "./screens/ArticleListScreen/ArticleListScreen";
import ArticleDetailsScreen from "./screens/ArticleDetailsScreen/ArticleDetailsScreen";
import SearchScreen from "./screens/SearchScreen/SearchScreen";
import SimpleListScreen from "./screens/SimpleListScreen/SimpleListScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ArticleStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ArticleList"
        component={ArticleListScreen}
        options={{ title: "Bejegyzések" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="ArticlesTab"
          component={ArticleStack}
          options={{
            tabBarLabel: "Bejegyzések",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="article" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
