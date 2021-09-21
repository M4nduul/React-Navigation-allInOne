import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import { Text, View, FlatList, Image, Pressable } from 'react-native';

type Data = {
  id: number,
  title: string,
  imgUrl: string
}

type Props = {
  route: {
    params: string
  }
  navigation: {
    navigate: any
  },
}

type RenderDataProps = {
  item: Data,
  index: number
}

const data = [
  {
      id: 1,
      title: 'Office',
      imgUrl: 'https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
  },
  {
      id: 2,
      title: 'Dog',
      imgUrl: 'https://images.unsplash.com/photo-1632060627931-d04513e49e8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
  },
  {
    id: 3,
      title: 'Skate', 
    imgUrl: 'https://images.unsplash.com/photo-1632060129703-809847a2bc1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
  },
  {
    id: 4,
      title: 'Girls vacation', 
    imgUrl: 'https://images.unsplash.com/photo-1632012643832-54e324e06352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=936&q=80'
  },
  {
    id: 5,
      title: 'Morning bed', 
    imgUrl: 'https://images.unsplash.com/photo-1631970840760-61f9f630684f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80'
  },
  {
    id: 6,
      title: 'Picnic van', 
    imgUrl: 'https://images.unsplash.com/photo-1632052875697-f5907cdf5b18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80'
  },
  {
    id: 7,
      title: 'Porsche 911', 
    imgUrl: 'https://images.unsplash.com/photo-1632077622353-daeef65ef114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80'
  },
  {
    id: 8,
      title: 'Living her best life', 
    imgUrl: 'https://images.unsplash.com/photo-1631997663439-f42f789c56f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
  },
]

const Stack = createStackNavigator()

const ListScreen = ({ navigation }: Props) => {

  const renderData = ({ item: { title, imgUrl }, index }: RenderDataProps) => {
      return (
          <Pressable onPress={() => { navigation.navigate('Detail', imgUrl)}}>
              <SharedElement id={ imgUrl }>
                    <Image source={{ uri: imgUrl }} style={{width: 200, height: 200}} />
              </SharedElement>
                    <Text style={{fontWeight: 'bold', fontSize: 20, paddingBottom: 20}}>{ title }</Text>
          </Pressable>
      )
  }
  
  return (
    <View style={{flexDirection: 'row', }}>
      <FlatList 
          data={data}
          renderItem={renderData}
          keyExtractor={item=>  item.id}
      />
    </View>
  )
}

const DetailScreen = ({route: {params: imgUrl}}: Props) => (
  <SharedElement id = { imgUrl }>
    <Image source={{ uri: imgUrl }}  style={{width: 400, height: 500}} />
  </SharedElement>
)


const SelectElement = () => (
  <Stack.Navigator>
    <Stack.Screen name='List' component={ListScreen} />
    <Stack.Screen name='Detail' component={DetailScreen} />
  </Stack.Navigator>
);
export default SelectElement