import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScaledSheet, moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { useTheme } from 'react-native-paper';

const Header = ({ title }) => {
    const { colors, typography } = useTheme();
    const styles = makeStyles({ colors, typography });
    return (
        <View style={styles.container}>
            <TouchableOpacity >
                <Image
                    source={require("../../../assets/images/backIcon.png")}
                    style={styles.backIcon} />
            </TouchableOpacity>
            <View>
                <Text style={styles.titleText}>{title}</Text>
            </View>
        </View>
    )
}

const makeStyles = ({ colors, typography }) =>
    ScaledSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        backIcon: {
            width: scale(30),
            height: verticalScale(30)
        },
        titleText: {
            ...typography.header,
            color: colors.headerTitle,
            marginLeft: scale(4)
        }
    })

export default Header