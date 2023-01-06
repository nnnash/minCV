import techs from '../../data/fullTechData.json'
import {Tech} from '../../types/technologies'
import {EnterpriseTech, PetTech, SearchResult} from '../../types/search'

const toKey = (name: string) => name.toLowerCase().replace(/\W/g, '')

const techsMap = (techs as Array<Tech>).reduce<Map<string, Tech>>((acc, item) => {
  acc.set(toKey(item.name), item)
  return acc
}, new Map())

export const searchWithList = (listString: string) => {
  const list = listString.split(/[\t\r\n\v\f,;]+/g)
  return list.reduce<SearchResult>(
    (acc, item) => {
      if (!item) return acc
      const searchWord = toKey(item)
      const tech = techsMap.get(searchWord)
      if (!tech) {
        acc.unusedTechs.push(item)
      } else {
        if (tech.projects === 'pet') acc.petExperience.push(tech as PetTech)
        else acc.enterpriseExperience.push(tech as EnterpriseTech)
      }
      return acc
    },
    {enterpriseExperience: [], petExperience: [], unusedTechs: []},
  )
}
