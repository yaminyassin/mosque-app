import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'

export function BaseContainer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LinearGradient
        colors={['#184E68', '#57CA85']}
        style={{ height: '100%', width: '100%', position: 'absolute' }}
      />
      <SafeAreaView
        style={{
          flex: 1,
        }}
        edges={['top', 'bottom']}
      >
        {children}
      </SafeAreaView>
    </>
  )
}
