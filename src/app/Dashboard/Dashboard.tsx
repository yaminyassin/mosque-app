import { Image, Text, View } from 'react-native'
import { Header } from '../../components/Header'
import { BaseContainer } from '../../containers/BaseContainer'
import Back from '@assets/icons/chevron-back-outline.svg'
import { FlashList } from '@shopify/flash-list'

const data = Array.from({ length: 100 }).map((_, index) => ({
  key: String(index),
  title: `Item ${index}`,
}))

export function Dashboard() {
  return (
    <>
      <BaseContainer>
        <Header
          startContent={{
            content: <Back width={32} height={32} />,
            onPress: () => {
              console.log('back')
            },
          }}
        />
        <View style={{ flex: 1, padding: 16 }}>
          <FlashList
            data={data}
            renderItem={({ item }) => <Card />}
            keyExtractor={item => item.key}
            horizontal={false}
            numColumns={2}
          />
        </View>
      </BaseContainer>
    </>
  )
}

const Card = () => {
  return (
    <View
      style={{
        padding: 8,
        flexDirection: 'column',
        borderWidth: 2,
        borderRadius: 24,
        backgroundColor: 'orange',
        gap: 32,
      }}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'green',
        }}
      >
        <Image
          style={{ width: 50, height: 50, borderRadius: 20 }}
          source={require('src/assets/images/person.png')}
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          paddingBottom: 16,
        }}
      >
        <Text numberOfLines={5} style={{ textAlign: 'center', fontSize: 12 }}>
          DLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </Text>
      </View>
    </View>
  )
}
