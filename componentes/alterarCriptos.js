import React,{useState} from 'react';
import{View,Text,StyleSheet,TextInput,TouchableOpacity,Alert} from 'react-native';
import{firestore} from "../Firebase";
import{collection,dos,updateDoc} from "firebase/firestore";
export default function AlterarCripto({navigation,route}) {
    const id= route.params.id;

    const[nomeCripto,setnomeCripto]= useState(route.params.nomeCripto);
    const[siglaCripto,setsiglaCripto]= useState(route.params.siglaCripto);
    const[valorCripto,setvalorCripto]= useState(route.params.valorCripto);

    async function AlterarCripto(id, nomeCripto, siglaCripto, valorCripto){
        try{
            await updateDoc(doc(collection(firestore,"tbmoeda"),id),{
                nomeCripto: item.nomeCripto,
                siglaCripto:item.siglaCripto,
                valorCripto:item.valorCripto
            })
            Alert.alert("Aviso", "criptomoeda alterada com sucesso.")
            navigation.navigate("Home")
        }
        catch (error) {
            console.error("Erro ao alterar:",error);
            Alert.alert("Erro","Erro ao alterar. Por favor , tente novamente.");
        }

        }
        return(
            <View style={estilo.container}>
                <View>
                    <Text style={estilo.titulo}>Alterar dados da Criptomoeda</Text>
                </View>
                <View>
                    <TextInput autoCapitalize='words' Style={estilo.input} placeholder="Digite a criptomoeda" onChangeText={setNome} value={nome}/>
                    <TextInput style={estilo.input}placeholder="digite a sigla" onChangeText={setSigla} value={sigla}/>
                    <TextInput style= {estilo.input}placeholder="digite o valor" onChangeText={setValor}value={valor}/>
               <TouchableOpacity
               style={estilo.btnenviar}
               onPress={()=>{
                AlterarCripto(id, nomeCripto, siglaCripto, valorCripto);

               }}>
                <Text style={estilo.btnenviar}>Alterar</Text> 
                </TouchableOpacity>
                               
                </View>
            </View>
        );


}

const estilo = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alingItens:'center',
    },
    input: {
        marginVertical:10,
        marginHorizontal:10,
        backgroundColor:'#9ac234',
        paddingHorizontal:20,
        paddingVertical:10,
        fontSize:15,
        borderRadius:10,
    },
    btnenviar:{
        marginTop:20,
    },
    titulo:{}
})