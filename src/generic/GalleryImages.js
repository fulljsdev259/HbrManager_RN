import React from 'react';
import { Text, View ,Image, StyleSheet, FlatList} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';

const images =[
    require("../../assets/gallery/img1.png"),
    require("../../assets/gallery/img2.png"),
    require("../../assets/gallery/img3.png"),
    require("../../assets/gallery/img4.png"),
    require("../../assets/gallery/img5.png"),
    require("../../assets/gallery/img6.png"),
    require("../../assets/gallery/img7.png"),
    require("../../assets/gallery/img8.png"),
    require("../../assets/gallery/img9.png"),
    require("../../assets/gallery/img10.png"),
    require("../../assets/gallery/img11.png"),
    require("../../assets/gallery/img12.png"),
    require("../../assets/gallery/img13.png"),
    require("../../assets/gallery/img15.png"),
    require("../../assets/gallery/img16.png")
]

const GalleryImages = ({text1, text2, style})=>{
  const  _renderItem=({item,index})=>{      
        return(
            <View style={[styles.imgView,{marginRight:index+1*3 ? DeviceInfo.wp(".5%") : 0   }]}>
                <Image style={styles.img} source={item} />
            </View>
        )
    }

  const  _keyExtractor = (item, index) => index;
    return(
        <View>
            <FlatList
                data={images}
                renderItem={_renderItem}
                numColumns={3}
                keyExtractor={_keyExtractor}
                ItemSeparatorComponent={()=><View style={{height:2}} />}
            />
        </View>
    )
}

export default GalleryImages;


const styles = StyleSheet.create({
    imgView:{
        width:DeviceInfo.wp("33%"),
        height:DeviceInfo.wp("33%")
    },
    img:{
        width:'100%',
        height:'100%'
    }
})