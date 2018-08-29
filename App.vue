<template>
  <app-navigation></app-navigation>
</template>

<script>
import { StackNavigator } from "vue-native-router";
import HomeScreen from "./src/screens/home.vue";
const AppNavigation = StackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions:{
        headerTitleStyle: {
            textAlign: 'center',
            flex:1
        },
        title:'Pergunte!'
    }
  }
);
export default {
    components: { AppNavigation }
}
</script>
