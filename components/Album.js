import React from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native';
import styles from './styles';

export default ({captures=[]}) => (
    <ScrollView 
        horizontal={true}
        style={[styles.bottomToolbar, styles.albumContainer]} 
    >
        {captures.map(({ uri }) => (
            <View style={styles.albumImageContainer} key={uri}>
                <Image source={{ uri }} style={styles.albumImage} />
            </View>
        ))}
    </ScrollView>
);

