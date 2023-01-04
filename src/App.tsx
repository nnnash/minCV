import {styled} from '@linaria/react'

import {theme} from './constants/theme'
import Heading from './components/Heading'
import History from './components/History'
import TechSearch from './components/TechSearch'
import {AppContextProvider} from './context'

const App = () => (
  <AppContextProvider>
    <Container className={theme}>
      <Heading />
      <TechSearch />
      <History />
    </Container>
  </AppContextProvider>
)

const Container = styled.main`
  max-width: var(--max-width);
  margin: 0 auto;
`

export default App
