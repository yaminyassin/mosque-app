import { LinearGradient } from 'expo-linear-gradient'
import { View } from 'react-native'

export function Dashboard() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LinearGradient
        colors={['#184E68', '#57CA85']}
        style={{ height: '100%', width: '100%', position: 'absolute' }}
      />
    </View>
  )
}
