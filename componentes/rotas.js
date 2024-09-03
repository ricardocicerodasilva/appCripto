import { createStackNavigator } from "@react-navigation/stack";
import{React} from "react";
import {createStackNavigator} from "@react-navigation/stack";

import{Home}from "./home";
import{cadastrar}from "./cadastrarCriptoCriptos";
import{Alterar}from "./alterarCriptos";
import{Home}from "home";

const stack = createStackNavigator();

    export default function rotas(){
        return(
            <stackNavigator>
                <stack.Screen name="Home" component={home}/>
                <stack.Screen name="Cadastrar" component={cadastrar}/>
                <stack.Screen name="Alterar" component={alterar}/>
                
            </stackNavigator>
        );
    

}