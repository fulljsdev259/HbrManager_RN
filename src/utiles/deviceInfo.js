import {Dimensions, PixelRatio} from "react-native";

const {height, width} = Dimensions.get('window');

const DeviceInfo ={
    width,
    height,
    pixel:(size)=>PixelRatio.getPixelSizeForLayoutSize(size)
}

export default DeviceInfo;