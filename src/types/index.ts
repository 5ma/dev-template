export type Color =
  | `#${string}`
  | `rgb(${number},${number},${number})`
  | `rgba(${number},${number},${number},${number})`
  | 'transparent';

export type Image = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type LoadingAttributes = 'lazy' | 'eager';
export type FetchpriorityAttributes = 'high' | 'low' | 'auto';
