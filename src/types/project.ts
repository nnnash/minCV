import {RawTech} from './technologies'

export enum Company {
  '0x' = '0x',
  volvo = 'volvo',
  tink = 'tink',
  nasdaq = 'nasdaq',
  itchy = 'itchy',
  netinsight = 'netinsight',
  yandex = 'yandex',
  sb = 'sb',
  ursip = 'ursip',
  mvs = 'mvs',
  eastline = 'eastline',
}

export interface RawProject {
  id: Company
  name: string
  position: string
  startDate: string
  endDate?: string
  history: string
  subProjects?: Array<RawProject>
}
export interface Project extends RawProject {
  techs?: Array<RawTech>
  subProjects?: Array<Project>
}
