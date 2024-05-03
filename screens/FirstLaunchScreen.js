import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  KeyboardAvoidingView,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const FirstLaunchScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      {/* Content Avoiding View */}
      <KeyboardAvoidingView
        behavior={'padding'}
        enabled={true}
        keyboardVerticalOffset={60}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgb(39, 48, 88)',
            flexGrow: 1,
            justifyContent: 'space-between',
          },
          dimensions.width
        )}
      >
        {/* Header Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexGrow: 1,
              flexShrink: 0,
              justifyContent: 'center',
              marginLeft: 18,
              marginRight: 18,
              marginTop: 36,
            },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Image'].props}
            source={Images.Elm1}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Image'].style,
                { height: 327, width: 327 }
              ),
              dimensions.width
            )}
          />
          {/* Heading */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: theme.colors['Strong Inverse'],
                fontFamily: 'Inter_700Bold',
                fontSize: 16,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'Your all-in-one app for emergencies'}
          </Text>
          {/* Body */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                color: theme.colors['Strong Inverse'],
                fontFamily: 'Inter_400Regular',
                fontSize: 13.5,
                marginTop: 15,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {"Tap 'Get Started' to set Lifeline up \nand be disaster ready."}
          </Text>
        </View>
        {/* Content Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexGrow: 1,
              flexShrink: 0,
              justifyContent: 'flex-end',
              marginLeft: 18,
              marginRight: 18,
              paddingBottom: 24,
            },
            dimensions.width
          )}
        >
          {/* Get Started */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('PhoneNumberScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgb(247, 137, 122)',
                borderRadius: 24,
                fontFamily: 'Inter_500Medium',
                fontSize: 15,
                height: 48,
              },
              dimensions.width
            )}
            title={'Get Started'}
            type={'solid'}
          >
            {'Sign In'}
          </Button>

          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.light,
                marginTop: 18,
                textAlign: 'center',
                typography: theme.typography.caption,
                width: '100%',
              },
              dimensions.width
            )}
          >
            {
              'By signing in you agree to our Terms of Service, Privacy Policy and Cookie Policy. '
            }
          </Text>
        </View>
        {/* Footer Wrapper */}
        <View />
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default withTheme(FirstLaunchScreen);
