import { DefaultTheme } from 'react-native-paper';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const lightTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: "#714FFF",
        headerTitle: '#0F0B28',
        horizontalLine: '#F0F3F6',
        infoIcon: '#3F8CFF',
        infoText: '#585969',
        heading: '#0F0B28',
        text1: '#A5A6BB',
        capInner: '#3A2CA0',
        capOuter: '#f4f4f4',
        progressBackground: "#EBEAF5CF"

        
    },
    typography: {
        header: {
            fontFamily: 'Inter-SemiBold',
            fontWeight: '600',
            fontSize: moderateScale(16),
            lineHeight: moderateScale(24)
        },
        info:{
            fontFamily: 'Inter-Medium',
            fontWeight: '500',
            fontSize: moderateScale(10),
            lineHeight: moderateScale(14)
        },
        heading: {
            fontFamily: 'Montserrat-SemiBold',
            fontWeight: '600',
            fontSize: moderateScale(16),
            lineHeight: moderateScale(24)
        },
        subHeading: {
            fontFamily: 'Montserrat-SemiBold',
            fontWeight: '600',
            fontSize: moderateScale(12),
            lineHeight: moderateScale(18)
        },
        body1:{
            fontFamily: 'Montserrat-SemiBold',
            fontWeight: '600',
            fontSize: moderateScale(10),
            lineHeight: moderateScale(15)
        },
        inputLoanAmount: {
            fontFamily: 'Inter-Bold',
            fontWeight: '700',
            fontSize: moderateScale(24),
            lineHeight: moderateScale(26)
        },
        buttonTitle:{
            fontFamily: 'Montserrat-SemiBold',
            fontWeight: '600',
            fontSize: moderateScale(12),
            lineHeight: moderateScale(16)
        }
    }
};