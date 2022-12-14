import {styled} from '@linaria/react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {format, parse} from 'date-fns'
import {Project} from '../../types/project'
import {borderedComponent} from '../../constants/theme'

const PATH = '../../assets/logos/*.png'
const logos = import.meta.glob('../../assets/logos/*.png', {eager: true})

const formatDate = (date: string) => format(parse(date, 'yyyy-MM', new Date()), 'MMM yyyy')

const Company = ({history, id, name, startDate, endDate, subProjects, position}: Project) => {
  const logoImg = logos[PATH.replace('*', id)] as {default: string}
  return (
    <Container>
      <Logo img={logoImg.default} />
      <Name>{name}</Name>
      <Position>{position}</Position>
      <Period>
        {formatDate(startDate)} - {endDate ? formatDate(endDate) : 'current time'}
      </Period>
      <History>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{history}</ReactMarkdown>
      </History>
      {!!subProjects && <List projects={subProjects} />}
    </Container>
  )
}

const Container = styled.li`
  list-style: none;
  position: relative;
`
const Logo = styled.div<{img: string}>`
  position: absolute;
  left: -66px;
  height: 40px;
  width: 40px;
  background-color: var(--color-primary);
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  image-rendering: pixelated;
  ${borderedComponent}
`
const Name = styled.h1`
  margin-bottom: var(--spacing);
  padding-top: calc(var(--spacing) * 2);
`
const Position = styled.h3`
  margin: 0;
`
const Period = styled.h4`
  margin: 0;
  color: var(--color-secondary);
`
const History = styled.p`
  color: var(--color-primary);
  ul {
    list-style-type: square;
  }
`

const List = ({projects}: {projects: Array<Project>}) => (
  <ListContainer>
    {projects?.map((project) => (
      <Company {...project} key={project.name} />
    ))}
  </ListContainer>
)

const ListContainer = styled.ul`
  border-left: var(--border);
`

export default List
