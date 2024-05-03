import * as React from 'react';
import * as Notifications from 'expo-notifications';
import * as SplashScreen from 'expo-splash-screen';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  AppState,
} from 'react-native';
import { Provider as ThemeProvider, Icon } from '@draftbit/ui';
import { QueryClient, QueryClientProvider } from 'react-query';

import AppNavigator from './AppNavigator';
import Draftbit from './themes/Draftbit.js';
import cacheAssetsAsync from './config/cacheAssetsAsync';
import { GlobalVariableProvider } from './config/GlobalVariableContext';
import useIsOnline from './utils/useIsOnline';
import { useFonts } from 'expo-font';
import Fonts from './config/Fonts.js';
SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const queryClient = new QueryClient();

const App = () => {
  const [areAssetsCached, setAreAssetsCached] = React.useState(false);

  const [fontsLoaded] = useFonts({
    Inter_400Regular: Fonts.Inter_400Regular,
    Inter_500Medium: Fonts.Inter_500Medium,
    Inter_700Bold: Fonts.Inter_700Bold,
    Inter_600SemiBold: Fonts.Inter_600SemiBold,
    Nunito_700Bold: Fonts.Nunito_700Bold,
  });

  React.useEffect(() => {
    async function prepare() {
      try {
        await cacheAssetsAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setAreAssetsCached(true);
      }
    }

    prepare();
  }, []);

  const isOnline = useIsOnline();

  const isReady = areAssetsCached && fontsLoaded;
  const onLayoutRootView = React.useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      onLayout={onLayoutRootView}
    >
      <GlobalVariableProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={Draftbit}>
            {!isOnline ? (
              <View
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  display: 'flex',
                  backgroundColor: 'grey',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  paddingHorizontal: 12,
                }}
              >
                <Icon
                  name="MaterialCommunityIcons/cloud-off-outline"
                  size={80}
                  color="white"
                />
                <Text style={{ fontSize: 20, marginTop: 20, color: 'white' }}>
                  Your device has lost connection to the internet. This app may
                  not function as expected until you reconnect.
                </Text>
              </View>
            ) : null}

            <AppNavigator />
          </ThemeProvider>
        </QueryClientProvider>
      </GlobalVariableProvider>
    </SafeAreaProvider>
  );
};

export default App;
