import {Dimensions} from "react-native";

const {height, width} = Dimensions.get('window');

const DeviceInfo ={
    width,
    height
}

export default DeviceInfo;