import {styled} from '@linaria/react'

import {theme} from './constants/theme'
import Heading from './components/Heading'
import History from './components/History'

const App = () => (
  <Container className={theme}>
    <Heading />
    <History />
  </Container>
)

const Container = styled.main`
  max-width: var(--max-width);
  margin: 0 auto;
`

export default App
