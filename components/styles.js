import { StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    preview: {
        height: win.height,
        width: win.width,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    bottomToolbar: {
        height: win.height,
        position: 'relative',
        height: 100,
        bottom: 0,
    },
    captureBtn: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 60,
        borderColor: "#FFFFFF",
    },
    captureBtnActive: {
        width: 80,
        height: 80,
    },
    captureBtnInternal: {
        width: 76,
        height: 76,
        borderWidth: 2,
        borderRadius: 76,
        backgroundColor: "red",
        borderColor: "transparent",
    },
    albumContainer: { 
        bottom: 100 
    },
    albumImageContainer: { 
        width: 75, 
        height: 75, 
        marginRight: 5 
    },
    albumImage: { 
        width: 75, 
        height: 75 
    }
});