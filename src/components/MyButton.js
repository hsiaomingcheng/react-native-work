import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default function MyButton(props) {
    return (
        <TouchableOpacity style={{ backgroundColor: props.bgColor, margin: 10 }}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
}

MyButton.propTypes = {
    title: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired
}

MyButton.defaultProps = {
    title: 'Instagram',
    bgColor: '#FF0000'
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        lineHeight: 30,
        width: 150,
        height: 30,
        color: '#FFF'
    }
});  