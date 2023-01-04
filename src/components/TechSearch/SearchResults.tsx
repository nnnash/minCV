import {styled} from '@linaria/react'
import {SectionContainer} from '../shared/Containers'
import {SearchResult} from '../../types/search'
import projectsMap from '../../data/fullProjectMap.json'
import {Company, RawProject} from '../../types/project'

const pMap = projectsMap as unknown as Record<Company, RawProject>

const SearchResults = ({enterpriseExperience, petExperience, unusedTechs}: SearchResult) => (
  <SectionContainer>
    {!!enterpriseExperience.length && (
      <TechList>
        {enterpriseExperience.map((exp) => (
          <TechInfo key={exp.name}>
            <TechName>{exp.name}</TechName>
            <Experience>Overall experience on the projects: {exp.experience} month</Experience>
            <Projects>Projects: {exp.projects.map((p) => pMap[p].name).join(', ')}</Projects>
          </TechInfo>
        ))}
      </TechList>
    )}
    {!!petExperience.length && (
      <>
        <PetProjectsListTitle>Usage in pet projects only:</PetProjectsListTitle>
        <ul>
          {petExperience.map((exp) => (
            <li key={exp.name}>
              <TechName>{exp.name}</TechName>
            </li>
          ))}
        </ul>
      </>
    )}
    {!!unusedTechs.length && (
      <>
        <h2>Unused (or unparsed) technologies:</h2>
        <p>{unusedTechs.join(', ')}</p>
      </>
    )}
  </SectionContainer>
)

const TechList = styled.ul`
  padding-left: 0;
`
const TechInfo = styled.li`
  list-style: none;
`
const TechName = styled.h3`
  margin-bottom: var(--spacing);
`
const Experience = styled.h4`
  color: var(--color-secondary);
  margin: 0;
`
const Projects = styled.p`
  margin-top: var(--spacing);
`
const PetProjectsListTitle = styled.h2`
  margin: 0;
`

export default SearchResults
