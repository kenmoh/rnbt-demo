### Issue: Press Events Not Working on Screens with Interactive Components

#### Description

I am experiencing an issue where press events do not trigger on screens that contain interactive components when using react-native-bottom-tabs. The issue occurs consistently across different screens within the tab navigator.

Steps to Reproduce

##### 1. Clone the Repository:

```
git clone https://github.com/yourusername/rnbtdemo.git
cd rnbtdemo
```

##### 2. Install Dependencies:

```
npm install
```

##### 3. start:

```
npm install
```

##### 4. Navigate to the Application:

- Open the app on your device or emulator.
- Navigate to any screen that contains interactive components (e.g., Buttons, TextInput).

##### 5. Attempt to Interact:

- Try pressing the interactive components. Observe that the press events do not trigger as expected.

##### Expected Behavior

Press events should work correctly on all screens, allowing users to interact with buttons and other interactive components.

##### Actual Behavior

Press events do not work on screens with interactive components. The components do not respond to touch events.

##### Code Example

Here is a minimal reproducible example of the issue:

```tsx
import { withLayoutContext } from "expo-router";
import React from "react";
import {
  createNativeBottomTabNavigator,
  NativeBottomTabNavigationOptions,
  NativeBottomTabNavigationEventMap,
} from "@bottom-tabs/react-navigation";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

const BottomTabNavigator = createNativeBottomTabNavigator().Navigator;

const Tabs = withLayoutContext<
  NativeBottomTabNavigationOptions,
  typeof BottomTabNavigator,
  TabNavigationState<ParamListBase>,
  NativeBottomTabNavigationEventMap
>(BottomTabNavigator);

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      tabBarStyle={{
        backgroundColor: "red",
      }}
      labeled
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => require("@/assets/images/utensils.svg"),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: () => require("@/assets/images/user-round.svg"),
        }}
      />
    </Tabs>
  );
}
```

##### Environment

- React Native Version: 0.76.6
- React Native Navigation Version: 7.0.14
- React Native Bottom Tabs Version: 0.8.3
- Platform: [Android]
