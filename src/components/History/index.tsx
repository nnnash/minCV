import {styled} from '@linaria/react'
import {SectionContainer} from '../shared/Containers'
import {projects} from '../../data/projects'
import List from './Company'

const History = () => (
  <Container>
    <List projects={projects} />
  </Container>
)

const Container = styled(SectionContainer)`
  margin-top: calc(var(--spacing) * 4);
`

export default History
