import React, { useEffect, useState } from "react";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import logoImg from '../../assets/logo.png';
import style from "./style";
import api from '../../services/api';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToIncident(incident) {
        navigation.navigate('Detail', { incident });
    }

    async function loadIncidents() {
        if(loading) {
            return;
        }

        if(total > 0 && incidents.length == total) {
            return;
        }

        setLoading(true);

        const response = await api.get(`incidents?page=${page}`);

        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['X-total-count']);
        setPage(page +1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return(
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg}/>
                <Text style={style.headerText}>
                    Total de <Text style={style.headerTextBold}>{total} casos.</Text>
                </Text>
            </View>
            <Text style={style.title}>Bem-vindo!</Text>
            <Text style={style.description}>Escolha um dos casos e salve o dia!</Text>

            <FlatList 
                data={incidents}
                style={style.incidentList}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (               
                    <View style={style.incident}>
                       <Text style={style.incidentProperty}>ONG: </Text>
                        <Text style={style.incidentValue}>{incident.name}</Text>

                        <Text style={style.incidentProperty}>Caso: </Text>
                        <Text style={style.incidentValue}>{incident.title}</Text>

                        <Text style={style.incidentProperty}>Valor: </Text>
                        <Text style={style.incidentValue}>{Intl.NumberFormat('PT-BR',{ 
                                style: 'currency', 
                                currency: 'BRL'
                            }).format(incident.value)}
                        </Text>

                        <TouchableOpacity
                            style={style.detailsButton}
                            onPress={() => navigateToIncident(incident)}
                        >
                            <Text style={style.detailsButtonText}>Mais detalhes</Text>
                            <Feather name='arrow-right' size={16} color='#E02041' />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}