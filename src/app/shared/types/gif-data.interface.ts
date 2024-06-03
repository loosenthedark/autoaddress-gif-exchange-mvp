import { IAnalyticsData } from './analytics-data.interface';
import { IImagesData } from './images-data.interface';
import { IUserData } from './user-data.interface';

export interface IGifData {
  alt_text: string;
  analytics: IAnalyticsData;
  analytics_response_payload: string;
  bitly_gif_url: string;
  bitly_url: string;
  content_url: string;
  embed_url: string;
  id: string;
  images: IImagesData;
  import_datetime: string;
  is_sticker: number;
  rating: string;
  slug: string;
  source: string;
  source_post_url: string;
  source_tld: string;
  title: string;
  trending_datetime: string;
  type: string;
  url: string;
  user: IUserData;
  username: string;
}
