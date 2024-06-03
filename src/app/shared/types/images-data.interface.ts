export interface IImagesData {
  '480w_still': IImageDataDefault;
  downsized: IImageDataDefault;
  downsized_large: IImageDataDefault;
  downsized_medium: IImageDataDefault;
  downsized_small: IImageDataAlt;
  downsized_still: IImageDataDefault;
  fixed_height: IImageDataVerbose;
  fixed_height_downsampled: IImageDataVerboseAlt;
  fixed_height_small: IImageDataVerbose;
  fixed_height_small_still: IImageDataDefault;
  fixed_height_still: IImageDataDefault;
  fixed_width: IImageDataVerbose;
  fixed_width_downsampled: IImageDataVerboseAlt;
  fixed_width_small: IImageDataVerbose;
  fixed_width_small_still: IImageDataDefault;
  fixed_width_still: IImageDataDefault;
  hd: IImageDataAlt;
  looping: {
    mp4: string;
    mp4_size: string;
  };
  original: {
    frames: string;
    hash: string;
    height: string;
    mp4: string;
    mp4_size: string;
    size: string;
    url: string;
    webp: string;
    webp_size: string;
    width: string;
  };
  original_mp4: IImageDataAlt;
  original_still: IImageDataDefault;
  preview: IImageDataAlt;
  preview_gif: IImageDataDefault;
  preview_webp: IImageDataDefault;
}

export interface IImageDataDefault {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface IImageDataAlt {
  height: string;
  mp4: string;
  mp4_size: string;
  width: string;
}

export interface IImageDataVerbose {
  height: string;
  mp4: string;
  mp4_size: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
}

export interface IImageDataVerboseAlt {
  height: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
}
