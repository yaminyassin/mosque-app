import {
  Pressable,
  type PressableStateCallbackType,
  type StyleProp,
  Text,
  View,
  type ViewStyle,
} from 'react-native'

interface HeaderProps {
  startContent?: {
    onPress?: () => void
    content: JSX.Element
  }
  middleContent?: {
    onPress?: () => void
    content: JSX.Element
  }
  endContent?: {
    onPress?: () => void
    content: JSX.Element
  }
}

export function Header(props: HeaderProps) {
  const pressStyle: (
    state: PressableStateCallbackType,
  ) => StyleProp<ViewStyle> = ({ pressed }) => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ scale: pressed ? 0.85 : 1 }],
  })

  return (
    <View
      style={{
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
      }}
    >
      {/* create startContent, middleContent and endContent views */}
      <Pressable style={pressStyle} onPress={props?.startContent?.onPress}>
        {props?.startContent?.content}
      </Pressable>
      <Pressable
        style={{
          flex: 6,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={props?.middleContent?.onPress}
      >
        {props?.middleContent?.content}
        <Text>Middle</Text>
      </Pressable>
      <Pressable style={pressStyle} onPress={props?.endContent?.onPress}>
        {props?.endContent?.content}
      </Pressable>
    </View>
  )
}
