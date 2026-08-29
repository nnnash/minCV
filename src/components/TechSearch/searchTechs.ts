import techs from '../../data/fullTechData.json'
import {Tech} from '../../types/technologies'
import {EnterpriseTech, PetTech, SearchResult} from '../../types/search'

const toKey = (name: string) => name.toLowerCase().replace(/\W/g, '')

const allTechs = techs as Array<Tech>

const techsMap = allTechs.reduce<Map<string, Tech>>((acc, item) => {
  acc.set(toKey(item.name), item)
  return acc
}, new Map())

// An exact name wins on its own, so precise queries stay precise. Only when
// nothing matches exactly do we widen to substrings, so that a partial term
// like "tanstack" still finds every TanStack library instead of no match.
const findMatches = (searchWord: string) => {
  const exact = techsMap.get(searchWord)
  if (exact) return [exact]
  return allTechs.filter((tech) => toKey(tech.name).includes(searchWord))
}

export const searchWithList = (listString: string) => {
  const list = listString.split(/[\t\r\n\v\f,;]+/g)
  const alreadyAdded = new Set<string>()
  return list.reduce<SearchResult>(
    (acc, item) => {
      if (!item) return acc
      const searchWord = toKey(item)
      // An empty key would be a substring of every technology name
      if (!searchWord) return acc
      const matches = findMatches(searchWord)
      if (!matches.length) {
        acc.unusedTechs.push(item)
        return acc
      }
      matches.forEach((tech) => {
        if (alreadyAdded.has(tech.name)) return
        alreadyAdded.add(tech.name)
        if (tech.projects === 'pet') acc.petExperience.push(tech as PetTech)
        else acc.enterpriseExperience.push(tech as EnterpriseTech)
      })
      return acc
    },
    {enterpriseExperience: [], petExperience: [], unusedTechs: []},
  )
}
