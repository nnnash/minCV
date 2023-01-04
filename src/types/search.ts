import {Tech} from './technologies'
import {Company} from './project'

export type PetTech = Tech & {projects: 'pet'}
export type EnterpriseTech = Tech & {projects: Array<Company>}

export interface SearchResult {
  enterpriseExperience: Array<EnterpriseTech>
  petExperience: Array<PetTech>
  unusedTechs: Array<string>
}
