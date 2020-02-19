import {Dimensions, PixelRatio} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const {height, width} = Dimensions.get('window');

const DeviceInfo ={
    width,
    height,
    pixel:(size)=>PixelRatio.getPixelSizeForLayoutSize(size),
    wp:(size)=>wp(size),
    hp:(size)=>hp(size),
}

export default DeviceInfo;