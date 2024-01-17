import { View, SafeAreaView, Text, TextInput, KeyboardAvoidingView, Platform, Pressable, PanResponder } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { ScaledSheet, scale, moderateScale } from 'react-native-size-matters';
import Header from '../../components/Atoms/Header/Header';
import { useTheme } from 'react-native-paper';
import Icon from '../../components/Atoms/Icon/Icon';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Toast from 'react-native-toast-message';
import CustomButton from '../../components/Atoms/CustomButton/CustomButton';
import { Circle } from 'react-native-svg';
import { loanScreenConstants } from '../../constants/string';


const LoanScreen = () => {
    const { colors, typography } = useTheme();
    const styles = makeStyles({ colors, typography });
    const [progress, setProgress] = useState(0)
    const [loanAmount, setLoanAmount] = useState('20000')
    const [inputFocused, setInputFocussed] = useState(false)
    const maxLoanAmount = 200000
    const minLoanAmount = 50000
    const inputRef = useRef(null);

    useEffect(() => {
        let percentage = (loanAmount / maxLoanAmount) * 100
        setProgress(percentage)
    }, [loanAmount])

    const formatAmount = (amount) => {
        return new Intl.NumberFormat('en-IN').format(amount)
    };

    const focusInput = () => {
        setInputFocussed(true)
        setTimeout(() => {
            inputRef?.current?.focus();
        }, 100)
    }

    const unfocusInput = () => {
        setInputFocussed(false)
        setTimeout(() => {
            inputRef?.current?.focus();
        }, 100)
    }

    const handleTextChange = (amount) => {
        if (amount <= maxLoanAmount) {
            setLoanAmount(amount)
        }
        else {
            Toast.show({
                type: 'info',
                text1: `${loanScreenConstants.toastMessage}`,
            });
        }
    }

    const panResponderCap = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gestureState) => {
            const { dx, dy } = gestureState;
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);
            const normalizedAngle = angle < 0 ? 360 + angle : angle;

            const newProgress = (normalizedAngle / 360) * 100; // Map angle to progress value (0 to 100)

            // Update progress value and trigger re-render
            let value = maxLoanAmount * (newProgress/100)
            setLoanAmount(value.toFixed())
            setProgress(newProgress);
        },
    });


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1, justifyContent: 'space-between' }}
            >
                <View>
                    <View style={styles.paddingContainer}>
                        <Header title={loanScreenConstants.screenTitle} />
                    </View>
                    <View style={styles.horizontalLine} />
                    <View style={styles.paddingContainer}>
                        <View style={styles.infoContainer}>
                            <Icon
                                type={"foundation"}
                                name={"info"}
                                color={colors.infoIcon}
                                size={moderateScale(12)} />
                            <Text style={styles.infoText}>{loanScreenConstants.loanInfo}</Text>
                        </View>
                        <Text style={styles.selectLoanText}>{loanScreenConstants.heading1}</Text>
                        <Text style={styles.eligibilityText}>{loanScreenConstants.heading2}<Text style={{ color: colors.primary }}>₹{formatAmount(maxLoanAmount)}</Text></Text>
                        <View style={styles.progressContainer} >
                            <AnimatedCircularProgress
                                size={moderateScale(220)}
                                width={10}
                                fill={progress}
                                tintColor={colors.primary}
                                onAnimationComplete={() => console.log('onAnimationComplete')}
                                backgroundColor={colors.progressBackground}
                                lineCap={'round'}
                                rotation={0}
                                padding={moderateScale(15)}
                                renderCap={({ center }) => (
                                    <React.Fragment>
                                        {/* Outer circle */}
                                        <Circle
                                            cx={center.x}
                                            cy={center.y}
                                            r="20"
                                            fill={colors.capOuter}
                                            {...panResponderCap.panHandlers}
                                        />
                                        {/* Inner circle */}
                                        <Circle {...panResponderCap.panHandlers} cx={center.x} cy={center.y} r="10" fill={colors.capInner} />
                                    </React.Fragment>
                                )}
                            />
                            <View style={styles.loanInputContainer}>
                                <Text style={styles.loanAmountText}>Loan Amount</Text>
                                <View style={styles.inputContainer}>
                                    {inputFocused ? (
                                        <TextInput
                                            ref={inputRef}
                                            style={[styles.input, { paddingVertical: moderateScale(6) }]}
                                            keyboardType='numeric'
                                            cursorColor={colors.infoIcon}
                                            textAlign={'center'}
                                            value={(loanAmount)}
                                            onFocus={() => { }}
                                            onChangeText={(amount) => {
                                                handleTextChange(amount)
                                            }}
                                            returnKeyType='done'
                                            onSubmitEditing={unfocusInput}
                                        />
                                    ) : (
                                        <Pressable
                                            onPress={focusInput}
                                            style={[styles.input, { paddingVertical: moderateScale(6), paddingHorizontal: moderateScale(10) }]}>
                                            <Text style={styles.currencyText}>{"₹ " + formatAmount(loanAmount)}</Text>
                                        </Pressable>
                                    )}

                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={[styles.horizontalLine, { marginTop: 0 }]} />
                    <CustomButton
                        title={"Submit"}
                        buttonStyle={{ marginVertical: moderateScale(30) }}
                        onPress={() => { }}
                        disabled={loanAmount >= minLoanAmount ? false : true}
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const makeStyles = ({ colors, typography }) =>
    ScaledSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
        },
        paddingContainer: {
            paddingHorizontal: scale(16),
            marginTop: moderateScale(10)
        },
        horizontalLine: {
            width: '100%',
            height: moderateScale(1),
            backgroundColor: colors.horizontalLine,
            marginTop: moderateScale(18)
        },
        infoContainer: {
            backgroundColor: '#EFF5FF',
            paddingHorizontal: moderateScale(15),
            paddingVertical: moderateScale(8),
            borderRadius: moderateScale(8),
            flexDirection: 'row'
        },
        infoText: {
            ...typography.info,
            color: colors.infoText,
            marginLeft: moderateScale(5)
        },
        selectLoanText: {
            marginTop: moderateScale(28),
            ...typography.heading,
            color: colors.heading
        },
        eligibilityText: {
            marginTop: moderateScale(4),
            ...typography.subHeading,
            color: colors.infoText
        },
        progressContainer: {
            marginTop: moderateScale(80),
            alignItems: 'center',
        },
        loanInputContainer: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center'
        },
        inputContainer: {
            backgroundColor: '#F8F8F8',
            borderRadius: moderateScale(12),
            minWidth: moderateScale(130),
            paddingTop: Platform.OS === "ios" ? moderateScale(6) : moderateScale(0),
            paddingBottom: Platform.OS === 'ios' ? moderateScale(6) : moderateScale(0),
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: moderateScale(0)
        },
        currencyText: {
            ...typography.inputLoanAmount,
            color: "#000"
        },
        loanAmountText: {
            ...typography.body1,
            color: colors.text1,
            marginBottom: moderateScale(4)
        },
        input: {
            color: '#0F0B28',
            ...typography.inputLoanAmount,
        },
        bottomContainer: {
            backgroundColor: '#FEFEFE',
            elevation: 5, // For Android
            ...Platform.select({
                ios: {
                    shadowColor: 'rgba(0, 0, 0, 0.05)',
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 1,
                    shadowRadius: 10,
                },
            }),
        }
    })

export default LoanScreen