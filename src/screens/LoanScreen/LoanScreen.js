import { View, SafeAreaView, Text } from 'react-native'
import React from 'react'
import { s, vs, ms, mvs, ScaledSheet, scale, moderateScale } from 'react-native-size-matters';
import Header from '../../components/Atoms/Header/Header';
import { useTheme } from 'react-native-paper';
import Icon from '../../components/Atoms/Icon/Icon';
import CircularProgress from '../../components/Atoms/CircularProgress/CircularProgress';


const LoanScreen = () => {
    const { colors, typography } = useTheme();
    const styles = makeStyles({ colors, typography });
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.paddingContainer}>
                <Header title={"Loan Amount"} />
            </View>
            <View style={styles.horizontalLine}/>
            <View style={styles.paddingContainer}>
                <View style={styles.infoContainer}>
                    <Icon 
                        type={"foundation"}
                        name={"info"}
                        color={colors.infoIcon}
                        size={moderateScale(12)}/>
                    <Text style={styles.infoText}>Your loan amount may be split and transferred to your bank account and the hospital’s bank account. </Text>
                </View>
                <Text style={styles.selectLoanText}>Select the required loan amount</Text>
                <Text style={styles.eligibilityText}>You’re Eligible for a loan of up to <Text style={{color: colors.primary}}>₹2,00,000</Text></Text>
                <View style={styles.progressContainer}>
                <CircularProgress progress={50} size={moderateScale(200)}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const makeStyles = ({ colors, typography }) =>
    ScaledSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff'
        },
        paddingContainer: {
            paddingHorizontal: scale(16),
            marginTop: moderateScale(10)
        },
        horizontalLine:{
            width: '100%',
            height: moderateScale(1),
            backgroundColor: colors.horizontalLine,
            marginTop: moderateScale(18)
        },
        infoContainer:{
            backgroundColor: '#EFF5FF',
            paddingHorizontal: moderateScale(15),
            paddingVertical: moderateScale(8),
            borderRadius: moderateScale(8),
            flexDirection: 'row'
        },
        infoText:{
            ...typography.info,
            color: colors.infoText,
            marginLeft: moderateScale(5)
        },
        selectLoanText:{
            marginTop: moderateScale(28),
            ...typography.heading,
            color: colors.heading
        },
        eligibilityText:{
            marginTop: moderateScale(4),
            ...typography.subHeading,
            color: colors.infoText
        },
        progressContainer:{
            marginTop: moderateScale(40),
            alignItems: 'center'
        }
    })

export default LoanScreen