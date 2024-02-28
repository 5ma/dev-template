type Color =
  | `#${string}`
  | `rgb(${number},${number},${number})`
  | `rgba(${number},${number},${number},${number})`
  | 'transparent';

interface Image {
  src: string;
  alt: string | '';
  // NOTE: alt属性は空の場合でも必ず''を指定するため必須
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
