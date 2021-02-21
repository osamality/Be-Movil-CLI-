import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { productsDiscription } from '../staticData'
import { get, isEmpty } from 'lodash'
import * as TVActions from '../../../store/actions/Tv';
import { useDispatch } from 'react-redux';

import { connect } from 'react-redux';


const renderItems = (ActiveType, ActiveProvider) => {
  const dispatch = useDispatch();

  const [index, setIndex] = useState();

  const handelClick = async (index, data) => {
    console.log("drop", data)
    setIndex(index)
    dispatch(TVActions.setActiveProvider(data))
    dispatch(TVActions.resetInintalValues())


  }

  const data = get(productsDiscription, ActiveType, []);
  return data.map((d, v) => {
    return (
      <View style={styles.outer} key={v}>
        {/* {v==index&& <Text style={{color:'red',width:10,height:2}}>{'\u2B24'}</Text>} */}
        <View style={index == v && !isEmpty(ActiveProvider) && styles.test}>
        </View>
        <TouchableOpacity
          key={v}
          style={(v == index && !isEmpty(ActiveType) && !isEmpty(ActiveProvider)) ? styles.ItemContentActive : styles.ItemContent}
          onPress={() => handelClick(v, d)}
        >


          <Image source={d.icon} style={(v == index && !isEmpty(ActiveType) && !isEmpty(ActiveProvider)) ? styles.imgactive : styles.ima} />
          {/* <View style={(v==index  && !isEmpty(ActiveType)  && !isEmpty(ActiveProvider))?styles.imgactive:styles.ima}>
          </View> */}
        </TouchableOpacity>
        <View style={(v == index && !isEmpty(ActiveType) && !isEmpty(ActiveProvider)) ? { marginTop: 4 } : {}}>

        </View>
        <Text style={styles.nameText}>{d.name}</Text>
      </View>
    )

  })

}

const ProductType = ({ ActiveType, ActiveProvider }) => {


  return (
    <SafeAreaView style={styles.Contentcontainer}>
      <ScrollView
        style={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {renderItems(ActiveType, ActiveProvider)}
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
    width: 68,
    height: 68,
    borderColor: 'rgb(44,209,158)',
    borderWidth: 1,
    borderRadius: 68 / 2,
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
const mapStateToProps = ({ TvReducer }) => ({
  ActiveType: TvReducer.activeType,
  ActiveProvider: TvReducer.activeProvider


})
export default connect(mapStateToProps, null)(ProductType);

