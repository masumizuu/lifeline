import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import is11 from '../global-functions/is11';
import validatePhoneNumber from '../global-functions/validatePhoneNumber';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Circle,
  Icon,
  ScreenContainer,
  SimpleStyleKeyboardAwareScrollView,
  Spacer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const PhoneNumberScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [placeHolder, setPlaceHolder] = React.useState('09XXXXXXXXX');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [textInputValue3, setTextInputValue3] = React.useState(placeHolder);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors.studilyWhite4 },
        dimensions.width
      )}
    >
      <SimpleStyleKeyboardAwareScrollView
        enableAutomaticScroll={false}
        enableOnAndroid={false}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Background'],
            flex: 1,
            justifyContent: 'center',
            paddingBottom: 36,
            paddingLeft: 36,
            paddingRight: 36,
            paddingTop: 36,
          },
          dimensions.width
        )}
      >
        <View>
          {/* Heading */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center' },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Strong Inverse'],
                  fontFamily: 'Inter_700Bold',
                  fontSize: 32,
                },
                dimensions.width
              )}
            >
              {'First things first'}
            </Text>

            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.studilyLightGray2,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 15,
                  marginTop: 8,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'Verify your mobile number\nby entering it below'}
            </Text>
          </View>
          <Spacer left={8} right={8} bottom={16} top={16} />
          {/* Form */}
          <View>
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.studilyWhite3,
                  borderBottomWidth: 1,
                  borderColor: theme.colors.studilyGray4,
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  overflow: 'hidden',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    paddingBottom: 16,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 16,
                  },
                  dimensions.width
                )}
              >
                <TextInput
                  autoCapitalize={'none'}
                  changeTextDelay={500}
                  onChangeText={newTextInputValue => {
                    try {
                      setGlobalVariableValue({
                        key: 'phoneNum',
                        value: newTextInputValue,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  webShowOutline={true}
                  autoCorrect={false}
                  keyboardType={'phone-pad'}
                  maxLength={11}
                  placeholder={'09XXXXXXXXX'}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.studilyMediumUI,
                      fontFamily: 'Inter_400Regular',
                      fontSize: 16,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                  value={Constants['phoneNum']}
                />
              </View>
            </View>
            <Spacer left={8} right={8} bottom={16} top={16} />
            {/* Login */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center' },
                dimensions.width
              )}
            >
              {/* Text  */}
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.studilyLightGray2,
                    fontFamily: 'Inter_400Regular',
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {
                  "We'll send you a text message with a 4-digit verification code. Carrier rates may apply."
                }
              </Text>
            </View>
          </View>
          <Spacer left={8} right={8} bottom={24} top={24} />
          {/* Button */}
          <View>
            {/* Touchable Frame */}
            <View
              style={StyleSheet.applyWidth({ zIndex: 10 }, dimensions.width)}
            >
              <Touchable
                onPress={() => {
                  try {
                    /* hidden 'Set Variable' action */
                    /* hidden 'Run a Custom Function' action */
                    if (is11(Constants['phoneNum'])) {
                      navigation.navigate('VerificationCodeScreen');
                    }
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* CTA Frame */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['Secondary'],
                      borderRadius: 12,
                      flexDirection: 'row',
                      paddingBottom: 12,
                      paddingLeft: 18,
                      paddingRight: 18,
                      paddingTop: 12,
                      zIndex: 10,
                    },
                    dimensions.width
                  )}
                >
                  {/* Label Frame */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexGrow: 1,
                        flexShrink: 0,
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    {/* Label */}
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.studilyWhite3,
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 15,
                          lineHeight: 21,
                          marginLeft: 42,
                          textTransform: 'uppercase',
                        },
                        dimensions.width
                      )}
                    >
                      {'Continue'}
                    </Text>
                  </View>
                  {/* Icon Group Frame */}
                  <View>
                    <Circle bgColor={theme.colors.studily25Percent} size={42}>
                      {/* Icon Flex Frame */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flexGrow: 0,
                            flexShrink: 0,
                            paddingBottom: 12,
                            paddingLeft: 12,
                            paddingRight: 12,
                            paddingTop: 12,
                          },
                          dimensions.width
                        )}
                      >
                        {/* Icon  */}
                        <Icon
                          color={theme.colors.studilyWhite3}
                          name={'AntDesign/arrowright'}
                          size={18}
                        />
                      </View>
                    </Circle>
                  </View>
                </View>
              </Touchable>
            </View>
          </View>
        </View>
      </SimpleStyleKeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(PhoneNumberScreen);
