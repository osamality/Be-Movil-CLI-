import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, Dimensions, SafeAreaView } from 'react-native';

import { productsDiscription } from '../staticData'
import { get } from 'lodash'
import * as productActions from '../../../store/actions/product';
import { useDispatch } from 'react-redux';



const renderItems = () => {
  const dispatch = useDispatch();

  const [index, setIndex] = useState();

  const handelClick = async (index, data) => {
    setIndex(index)

    const action = productActions.setActiveProvider(data);

    try {
      await dispatch(action);
    }
    catch (err) {
      console.log(err)
    }
  }

  const data = get(productsDiscription, 'Recargas', []);
  return data.map((d, v) => {
    return (
      <View style={styles.outer} key={v}>
        {/* {v==index&& <Text style={{color:'red',width:10,height:2}}>{'\u2B24'}</Text>} */}
        <View style={index == v && styles.test}>
        </View>
        <TouchableOpacity
          key={v}
          style={v == index ? styles.ItemContentActive : styles.ItemContent}
          // style={styles.ItemContent}
          onPress={() => handelClick(v, d)}
        >


          <Image source={d.icon} style={v == index ? styles.imgactive : styles.ima} />
        </TouchableOpacity>
        <View style={v == index ? { marginTop: 4 } : {}}>

        </View>
        <Text style={styles.nameText}>{d.name}</Text>
      </View>
    )

  })

}

const ProductType = ({ }) => {

  return (
    <SafeAreaView style={styles.Contentcontainer}>
      <ScrollView
        style={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {renderItems()}
      </ScrollView>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  Contentcontainer: {
    flex: 1,
    marginBottom: 20
  },
  outer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  ItemContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  ItemContentActive: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    width: 50,
    height: 50,
    borderColor: 'rgb(44,209,158)',
    borderWidth: 1,
    borderRadius: 50 / 2,
    backgroundColor: '#ffff',
    overflow: "hidden"

  },
  imgactive: {
    height: 60,
    width: 60,
    borderRadius: 66 / 2,
  },
  test: {
    borderWidth: 2,
    borderColor: 'rgb(44,209,158)',
    marginBottom: 2,
    width: 5,
    height: 5,
    borderRadius: 5 / 2

  },
  ima: {
    height: 60,
    width: 60

  },


  scrollView: {
    marginHorizontal: 5,
    width: 385
  },

  nameText: {
    color: 'rgb(15,15,15)',
    fontSize: 13,
    marginTop: 5
  },


})

export default ProductType
