// src/camera.page.js file
import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import Controls from './Controls';
import Album from './Album';

export default class CameraAccess extends React.Component {
    camera = null;

    state = {
        captures: [],
        capturing: null,
        flashMode: Camera.Constants.FlashMode.off,
        cameraType: Camera.Constants.Type.back,
        cameraPermission: null,
    };

    setFlashMode = (flashMode) => this.setState({ flashMode });
    setCameraType = (cameraType) => this.setState({ cameraType });
    handleCaptureIn = () => this.setState({ capturing: true });

    handleCaptureOut = () => {
        if (this.state.capturing)
            this.camera.stopRecording();
    };

    handleShortCapture = async () => {
        const photoData = await this.camera.takePictureAsync();
        this.setState({ capturing: false, captures: [photoData, ...this.state.captures] })
    };

    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const cameraPermission = (camera.status === 'granted');

        this.setState({ cameraPermission });
    };

    render() {
        const { cameraPermission, flashMode, cameraType } = this.state;

        if (cameraPermission === null) {
            return <View />;
        } else if (cameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }

        return (
            <React.Fragment>
                <View>
                    <Camera
                        style={styles.preview}
                        type={cameraType}
                        flashMode={flashMode}
                        ref={camera => this.camera = camera}
                    />
                </View>
{/*                 
                {captures.length > 0 && <Album captures={captures}/>}
                <Controls
                    capturing={capturing}
                    flashMode={flashMode}
                    cameraType={cameraType}
                    setFlashMode={this.setFlashMode}
                    setCameraType={this.setCameraType}
                    onCaptureIn={this.handleCaptureIn}
                    onCaptureOut={this.handleCaptureOut}
                    onShortCapture={this.handleShortCapture}
                /> */}
            </React.Fragment>
        );
    };
};

const { width: winWidth, height: winHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    preview: {
        height: winHeight,
        width: winWidth,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    }
});