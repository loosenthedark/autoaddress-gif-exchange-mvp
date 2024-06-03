import { IMetaData } from '../../../../shared/types/meta-data.interface';
import { IGifData } from '../../../../shared/types/gif-data.interface';
import { IPaginationData } from '../../../../shared/types/pagination-data.interface';

export interface IGetGifsResponse {
  data: IGifData[];
  meta: IMetaData;
  pagination: IPaginationData;
}
