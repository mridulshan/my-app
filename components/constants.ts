import { Dimensions } from "react-native";

export const {width} = Dimensions.get("window");
export const SPACING = 12

const s = width *0.68;
export const listConfig = {
    WIDTH: s,
    HEIGHT: s * 1.5,
    RADIUS: 18,
    SPACING,
    FULL_SIZE: s + SPACING * 2,

};