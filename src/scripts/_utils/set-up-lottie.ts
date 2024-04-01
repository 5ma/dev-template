import { LOTTIE_JSON_PATH } from 'src/consts';

export type AnimationDataKey = keyof typeof LOTTIE_JSON_PATH;

export async function setupLottie({
  container,
  animationData,
  loop = true,
}: {
  container: HTMLElement;
  animationData: AnimationDataKey;
  loop?: boolean;
}) {
  const {
    default: { loadAnimation },
  } = await import('lottie-web/build/player/lottie_light');
  const { default: json } = await LOTTIE_JSON_PATH[animationData];
  return loadAnimation({
    container,
    renderer: 'svg',
    loop,
    autoplay: false,
    animationData: json,
  });
}
