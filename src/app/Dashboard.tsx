import { Header } from '../components/Header'
import { BaseContainer } from '../containers/BaseContainer'
import Back from '@assets/icons/chevron-back-outline.svg'

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
      </BaseContainer>
    </>
  )
}
