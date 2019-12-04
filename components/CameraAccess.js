import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import Controls from './Controls';
import Album from './Album';
import styles from './styles';
import { withNavigation } from 'react-navigation';

class CameraPage extends React.Component {
    camera = null;

    state = {
        captures: [],
        capturing: null,
        cameraPermission: null,
        cameraType: Camera.Constants.Type.back,
        flashMode: Camera.Constants.FlashMode.off,
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
        const { cameraPermission, flashMode, cameraType, capturing, captures } = this.state;

        if (cameraPermission === null) {
            return <View />;
        } else if (cameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }

        return (
            <React.Fragment>
                <View>
                    <Camera
                        type={cameraType}
                        flashMode={flashMode}
                        style={styles.deviceSize}
                        ref={camera => this.camera = camera}
                    />
                </View>

                {captures.length > 0 && <Album captures={captures} navigation={this.props.navigation}/>}

                <Controls
                    capturing={capturing}
                    flashMode={flashMode}
                    cameraType={cameraType}
                    setFlashMode={this.setFlashMode}
                    setCameraType={this.setCameraType}
                    onCaptureIn={this.handleCaptureIn}
                    onCaptureOut={this.handleCaptureOut}
                    onShortCapture={this.handleShortCapture}
                />
            </React.Fragment>
        );
    };
};

export default withNavigation(CameraPage);