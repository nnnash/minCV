import {styled} from '@linaria/react'
import {SectionContainer} from '../shared/Containers'
import {SearchResult} from '../../types/search'
import projectsMap from '../../data/fullProjectMap.json'
import {Company, RawProject} from '../../types/project'

const pMap = projectsMap as unknown as Record<Company, RawProject>

const plural = (value: number, unit: string) => `${value} ${unit}${value === 1 ? '' : 's'}`

const formatExperience = (months: number) => {
  const years = Math.floor(months / 12)
  const restMonths = months % 12
  if (!years) return plural(months, 'month')
  return restMonths ? `${plural(years, 'year')} ${plural(restMonths, 'month')}` : plural(years, 'year')
}

const SearchResults = ({enterpriseExperience, petExperience, unusedTechs}: SearchResult) => (
  <SectionContainer>
    {!!enterpriseExperience.length && (
      <TechList>
        {enterpriseExperience.map((exp) => (
          <TechInfo key={exp.name}>
            <TechName>{exp.name}</TechName>
            <Experience>Overall experience on the projects: {formatExperience(exp.experience)}</Experience>
            <Projects>Projects: {exp.projects.map((p) => pMap[p].name).join(', ')}</Projects>
          </TechInfo>
        ))}
      </TechList>
    )}
    {!!petExperience.length && (
      <Block>
        <SectionTitle>Usage in pet projects only</SectionTitle>
        <TagList>
          {petExperience.map((exp) => (
            <Tag key={exp.name}>{exp.name}</Tag>
          ))}
        </TagList>
      </Block>
    )}
    {!!unusedTechs.length && (
      <Block>
        <SectionTitle>Unused (or unparsed) technologies</SectionTitle>
        <TagList>
          {unusedTechs.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </TagList>
      </Block>
    )}
  </SectionContainer>
)

const TechList = styled.ul`
  padding-left: 0;
  margin: 0;
  display: grid;
  gap: calc(var(--spacing) * 1.5);
`
const TechInfo = styled.li`
  list-style: none;
  background: var(--bg-primary);
  border: var(--border);
  border-radius: var(--radius);
  padding: calc(var(--spacing) * 2);
`
const TechName = styled.h3`
  margin: 0 0 calc(var(--spacing) * 0.5);
  font-size: 1.1rem;
  font-weight: 600;
`
const Experience = styled.div`
  color: var(--color-secondary);
  font-size: 0.9rem;
  margin: 0;
`
const Projects = styled.p`
  margin: var(--spacing) 0 0;
  font-size: 0.95rem;
`
const Block = styled.div`
  margin-top: calc(var(--spacing) * 3);
`
const SectionTitle = styled.h3`
  margin: 0 0 var(--spacing);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-secondary);
`
const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--spacing) * 0.75);
`
const Tag = styled.span`
  font-size: 0.8rem;
  line-height: 1.4;
  color: var(--color-secondary);
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 100px;
  padding: 2px calc(var(--spacing) * 1.25);
`

export default SearchResults
