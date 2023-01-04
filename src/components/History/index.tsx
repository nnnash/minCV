import {styled} from '@linaria/react'
import {SectionContainer} from '../shared/Containers'
import projects from '../../data/fullProjectData.json'
import {Project} from '../../types/project'
import {useAppContext} from '../../context'
import List from './Company'

const History = () => {
  const {showSearchResults} = useAppContext()
  if (showSearchResults) return null
  return (
    <Container>
      <List projects={projects as Array<Project>} />
    </Container>
  )
}

const Container = styled(SectionContainer)`
  margin-top: calc(var(--spacing) * 4);
  margin-left: calc(var(--spacing) * 3);
`

export default History
