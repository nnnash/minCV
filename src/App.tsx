import {styled} from '@linaria/react'

import {theme} from './constants/theme'
import Heading from './components/Heading'
import History from './components/History'
import TechSearch from './components/TechSearch'
import {AppContextProvider} from './context'

const App = () => (
  <AppContextProvider>
    <Page className={theme}>
      <Container>
        <Heading />
        <TechSearch />
        <History />
      </Container>
    </Page>
  </AppContextProvider>
)

const Page = styled.div`
  background: var(--bg-secondary);
  min-height: 100vh;
  padding: calc(var(--spacing) * 4) calc(var(--spacing) * 2);
`
const Container = styled.main`
  max-width: var(--max-width);
  margin: 0 auto;
  background: var(--bg-primary);
  border: var(--border);
  border-radius: calc(var(--radius) * 1.5);
  box-shadow: 0 1px 3px rgba(22, 32, 44, 0.06);
  padding: calc(var(--spacing) * 3) calc(var(--spacing) * 2);
`

export default App
