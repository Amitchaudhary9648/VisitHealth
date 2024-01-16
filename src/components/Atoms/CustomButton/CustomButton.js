import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import {useTheme } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const CustomButton = ({
    title,
    onPress,
    buttonColor,
    titleColor,
    buttonStyle,
    textStyle,
    disabled,
    ...props
}) => {
    const {colors, typography} = useTheme();
    const styles = makeStyles({colors, typography}); 
    return (
        <TouchableOpacity
            style={{
                ...styles.container,
                ...buttonStyle,
                backgroundColor: disabled ? "grey": buttonColor || '#714FFF',
            }}
            onPress={onPress}
            disabled={disabled}
            {...props}
            >
            <Text
                style={{ ...styles.title, ...textStyle, color: titleColor || '#fff' }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;

const makeStyles = ({ colors, typography }) =>
    ScaledSheet.create({
    container: {
        backgroundColor: '#512DA8',
        padding: moderateScale(6),
        paddingVertical: moderateScale(14),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(8),
        width: '90%',
        alignSelf: 'center'
    },
    title: {
        color: '#fff',
        fontSize: moderateScale(16),
        textAlign: 'center',
        ...typography.buttonTitle
    },
});