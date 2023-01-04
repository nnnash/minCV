import {writeFile} from 'fs'
import {differenceInMonths, parse} from 'date-fns'
import {projects} from '../data/projects'
import {technologies} from '../data/technologies'
import {Company, Project, RawProject} from '../types/project'
import {Tech} from '../types/technologies'

const fullTechs = technologies.map((tech) => ({...tech, experience: 0}))

const generateFullData = (companies: Array<RawProject>) =>
  companies.reduce<{fullProjectData: Array<Project>; fullTechData: Array<Tech>; projectMap: Record<Company, Project>}>(
    (acc, company) => {
      const companyTechs = acc.fullTechData.reduce<Array<string>>((techAcc, tech) => {
        if (Array.isArray(tech.projects) && tech.projects.includes(company.id)) {
          tech.experience += differenceInMonths(
            company.endDate ? parse(company.endDate, 'yyyy-MM', new Date()) : new Date(),
            parse(company.startDate, 'yyyy-MM', new Date()),
          )
          techAcc.push(tech.name)
        }
        return techAcc
      }, [])
      const fullProject = {
        ...company,
        techs: companyTechs,
        subProjects: company.subProjects ? generateFullData(company.subProjects).fullProjectData : undefined,
      }
      if (company.subProjects) {
        const {fullProjectData, projectMap} = generateFullData(company.subProjects)
        fullProject.subProjects = fullProjectData
        acc.projectMap = {
          ...acc.projectMap,
          ...projectMap,
        }
      }
      acc.fullProjectData.push(fullProject)
      acc.projectMap[company.id] = fullProject
      return acc
    },
    {fullProjectData: [], fullTechData: fullTechs, projectMap: {} as Record<Company, Project>},
  )

const {fullTechData, fullProjectData, projectMap} = generateFullData(projects)

const PATH = './src/data/'

writeFile(`${PATH}fullTechData.json`, JSON.stringify(fullTechData), (err) => {
  if (err) throw err
  console.log('Successfully created tech data file')
})
writeFile(`${PATH}fullProjectData.json`, JSON.stringify(fullProjectData), (err) => {
  if (err) throw err
  console.log('Successfully created project data file')
})
writeFile(`${PATH}fullProjectMap.json`, JSON.stringify(projectMap), (err) => {
  if (err) throw err
  console.log('Successfully created project map file')
})
