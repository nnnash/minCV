import {styled} from '@linaria/react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {format, parse} from 'date-fns'
import {Project} from '../../types/project'

const logos = import.meta.glob('../../assets/logos/*.{svg,png}', {eager: true}) as Record<string, {default: string}>

const logoFor = (id: string) =>
  logos[`../../assets/logos/${id}.svg`]?.default ?? logos[`../../assets/logos/${id}.png`]?.default

// App-icon style logos: their own coloured background should fill the circle
// instead of sitting as a square inside it.
const fullBleedLogos = ['tink', 'itchy']

const formatDate = (date: string) => format(parse(date, 'yyyy-MM', new Date()), 'MMM yyyy')

const Company = ({history, id, name, startDate, endDate, subProjects, position, techs}: Project) => {
  const logo = logoFor(id)
  return (
    <Container>
      {logo ? (
        fullBleedLogos.includes(id) ? (
          <LogoBleed img={logo} role="img" aria-label={`${name} logo`} />
        ) : (
          <Logo img={logo} role="img" aria-label={`${name} logo`} />
        )
      ) : (
        <LogoFallback aria-hidden="true">{name.charAt(0)}</LogoFallback>
      )}
      <Name>{name}</Name>
      <Position>{position}</Position>
      <Period>
        {formatDate(startDate)} — {endDate ? formatDate(endDate) : 'current time'}
      </Period>
      <History>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{history}</ReactMarkdown>
      </History>
      {!!techs?.length && (
        <TechsWrapper>
          <TechsLabel>Technologies</TechsLabel>
          <TechTags>
            {techs.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </TechTags>
        </TechsWrapper>
      )}
      {!!subProjects && <List projects={subProjects} />}
    </Container>
  )
}

const Container = styled.li`
  list-style: none;
  position: relative;
  margin-top: calc(var(--spacing) * 4);
`
const Logo = styled.div<{img: string}>`
  position: absolute;
  left: -64px;
  top: -2px;
  box-sizing: border-box;
  height: 48px;
  width: 48px;
  padding: 8px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  background-color: var(--bg-primary);
  background-image: ${(props) => `url(${props.img})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-origin: content-box;
`
const LogoBleed = styled.div<{img: string}>`
  position: absolute;
  left: -64px;
  top: -2px;
  box-sizing: border-box;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const LogoFallback = styled.div`
  position: absolute;
  left: -64px;
  top: -2px;
  box-sizing: border-box;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  background-color: var(--bg-primary);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-secondary);
`
const Name = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.01em;
`
const Position = styled.h3`
  margin: calc(var(--spacing) * 0.25) 0 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-primary);
`
const Period = styled.div`
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-secondary);
`
const History = styled.div`
  color: var(--color-primary);
  p {
    margin: calc(var(--spacing) * 1.5) 0;
  }
  ul {
    list-style-type: disc;
    padding-left: calc(var(--spacing) * 2.5);
    padding-bottom: var(--spacing);
  }
  li {
    margin-bottom: calc(var(--spacing) * 0.5);
  }
  a {
    color: var(--color-accent);
  }
`
const TechsWrapper = styled.div`
  margin-top: calc(var(--spacing) * 1.5);
`
const TechsLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-secondary);
  margin-bottom: var(--spacing);
`
const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--spacing) * 0.75);
`
const TechTag = styled.span`
  font-size: 0.8rem;
  line-height: 1.4;
  color: var(--color-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 100px;
  padding: 2px calc(var(--spacing) * 1.25);
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
  padding-left: calc(var(--spacing) * 5);
  margin: 0;
`

export default List
