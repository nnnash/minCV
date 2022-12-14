import {differenceInMonths, parse} from 'date-fns'
import {projects} from '../data/projects.js'
import {technologies} from '../data/technologies.js'
import {Project, RawProject} from '../types/project.js'
import {Tech} from '../types/technologies.js'

const fullTechs = technologies.map((tech) => ({...tech, experience: 0}))

const generateFullData = (companies: Array<RawProject>) =>
  companies.reduce<{fullProjectData: Array<Project>; fullTechData: Array<Tech>}>(
    (acc, company) => {
      const companyTechs = acc.fullTechData.filter((tech) => {
        if (Array.isArray(tech.projects) && tech.projects.includes(company.id)) {
          tech.experience += differenceInMonths(
            company.endDate ? parse(company.endDate, 'yyyy-MM', new Date()) : new Date(),
            parse(company.startDate, 'yyyy-MM', new Date()),
          )
          return true
        }
      })
      acc.fullProjectData.push({
        ...company,
        techs: companyTechs,
        subProjects: company.subProjects ? generateFullData(company.subProjects).fullProjectData : undefined,
      })
      return acc
    },
    {fullProjectData: [], fullTechData: fullTechs},
  )

const {fullTechData, fullProjectData} = generateFullData(projects)

console.log('fullTechData', JSON.stringify(fullTechData))
console.log('fullProjectData', JSON.stringify(fullProjectData))

export default fullTechData
