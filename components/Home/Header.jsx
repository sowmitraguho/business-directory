import { View, Text, Image } from 'react-native'
import React from 'react'
import {Colors} from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';


export default function Header() {
    return (
        <View
            style={{
                padding: 20,
                paddingTop: 40,
                backgroundColor: Colors.PRIMARY
            }}
        >
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10
                }}
            >
                <Image source={require('../../assets/images/reactlogo2x.png')}
                    style={{
                        width: 45,
                        height: 45,
                        borderRadius: 99
                    }}
                />
                <View>
                    <Text style={{color:'#fff'}}>Welcome,</Text>
                    <Text style={{fontSize:20, fontFamily:'Outfit-medium', color:'#fff'}}>Mr. Sowmitra</Text>
                </View>
            </View>
            <View 
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 10,
                    backgroundColor: '#fff',
                    padding: 10,
                    marginVertical: 10,
                    marginTop: 16,
                    borderRadius: 10
                }}
            >
            <Ionicons name="search" size={24} color={Colors.PRIMARY} />
            <TextInput placeholder='Search...'
            style={{
                fontFamily: 'Outfit',
                fontSize: 16
            }}
            />
            </View>
        </View>
    )
}