import React from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';


export default ({ captures = [], navigation }) => (
    <ScrollView
        horizontal={true}
        style={[styles.bottomToolbar, styles.albumContainer]}
    >
        {captures.map(({ uri }) => (
            <View style={styles.albumImageContainer} key={uri}>
                <TouchableOpacity onPress={() => {navigation.state.params.onGoBack(uri)
                    navigation.goBack()}}>
                    <Image source={{ uri }} style={styles.albumImage} />
                </TouchableOpacity>
            </View>
        ))}
    </ScrollView>
);

