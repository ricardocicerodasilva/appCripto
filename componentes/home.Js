import React, { useEffect, useState } from "react";
import { view, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestone";
export default function Home({ navigation }) {
    const [criptos, setCriptos] = useState([])

    async function deleteCripto(id) {
        try {
            await deleteDoc(doc(firestone, "tbmoeda", id))
            Alert.alert("a criptomoeda foi deletada.")
        } catch (erro) {
            console.erro("erro ao deletar.", error)
        }
    }

    useEffect(() => {
        const unsubcribe = onSnapshot(colection(firestore, 'tbmoeda'), (QuerySnapshot) => {
                        QuerySnapshot.forEach(() => {
                list.push({ ...doc.data(), id: doc.id });
            })
            setCriptos(lista);
        })
            return () => unsubcribe();

        }, []);
        return (
            <View>
                <View>
                    <Text>lista de Criptomoedas</Text>
                </View>
                <FlatList
                    data={criptos}
                    renderItem={({ item }) => {
                        return (
                            <View>

                                <TouchableOpacity onPress={() => navigation.navigate("alteraCripto", {
                                    id: item.id,
                                    nomeCripto: item.nomeCripto,
                                    siglaCripto: item.siglaCripto,
                                    valorCripto: item.valorCripto

                                })}>
                                    <View>
                                        <Text>Criptomoeda:<Text>{item.nomeCripto}</Text></Text>
                                        <Text>sigla:<Text>{item.siglaCripto}</Text></Text>
                                        <Text>valor:<Text>{item.valorCripto}</Text></Text>
                                    </View>

                                </TouchableOpacity>
                                <View>
                                    <TouchableOpacity onPress={() => { deleteCripto(item.id) }}>
                                        x
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                />


                <TouchableOpacity onPress={() => navigation.navigate("cadastrarCriptos")}>

                </TouchableOpacity>
            </View>

        )
                }
