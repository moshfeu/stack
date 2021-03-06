import * as React from 'react';
import {
  StackRouter,
  createNavigator,
  NavigationRouteConfigMap,
  NavigationStackRouterConfig,
  CreateNavigatorConfig,
} from 'react-navigation';
import StackView from '../views/StackView';
import {
  StackNavigationConfig,
  StackNavigationOptions,
  StackNavigationProp,
} from '../vendor/types';

function createStackNavigator(
  routeConfigMap: NavigationRouteConfigMap<
    StackNavigationOptions,
    StackNavigationProp
  >,
  stackConfig: CreateNavigatorConfig<
    StackNavigationConfig,
    NavigationStackRouterConfig,
    StackNavigationOptions,
    StackNavigationProp
  > = {}
) {
  const router = StackRouter(routeConfigMap, stackConfig);

  return createNavigator(
    navigatorProps => <StackView {...navigatorProps} />,
    router,
    stackConfig
  );
}

export default createStackNavigator;
