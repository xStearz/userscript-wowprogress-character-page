import { Metrics, Regions } from '@Constants'

export interface IOptionalFilters {
    metric?: Metrics,
    specName?: string,
    difficulty?: number,
}

export default interface IDataSource {
    fetchInfo(region: Regions, realm: string, name: string, optionalFilters?: IOptionalFilters): Promise<unknown>
}
