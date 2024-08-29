import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../Config/FirebaseConfig'
import { collection,  getDocs, query } from 'firebase/firestore';


export default function Slider() {
    const [sliderList, setSliderList]=useState([]);
    useEffect(()=>{
        GetSliderList();
    },[]);
    const GetSliderList = async () => {
        setSliderList([]);
        const q = query(collection(db, 'Slider'));
        const querySnapShots = await getDocs(q);
        querySnapShots.forEach((doc)=>{
            console.log(doc.data());
            setSliderList(prev=>[...prev,doc.data()])
        })
    }

  return (
    <View>
      <Text 
      style={{
                fontFamily: 'Outfit-medium',
                fontSize: 16,
                paddingLeft:20,
                paddingTop:20,
                marginBottom: 5
            }}
            >#Special For You</Text>

            <FlatList
            style={{
                paddingLeft: 20
            }}
            data={sliderList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>(
                <Image source={{uri:item.imageUrl}}
                style={{
                    width:300,
                    height: 150,
                    borderRadius: 15,
                    marginRight: 15
                }} />)
            }
            />
    </View>
  )
}