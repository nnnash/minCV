import {Company} from './project'

export interface RawTech {
  name: string
  projects: Array<Company> | 'pet'
}

export interface Tech extends RawTech {
  experience: number
}
