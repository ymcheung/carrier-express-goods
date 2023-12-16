import { children } from 'solid-js';
import type { JSX, Component, ParentComponent, ParentProps } from 'solid-js';
import Svg from '@components/Svg';
import '@elements/styles/icons.scss';

export default function HourGlass(): JSX.Element {
  return (
    <Svg class="icon hourGlass" title="沙漏圖示" viewBox="0 0 36 36">
      <path
        fill="currentColor"
        d="M29 32h-3v-7.09a6.67 6.67 0 0 0-2.69-5.33l-1.28-1A6.36 6.36 0 0 0 21 18a6.29 6.29 0 0 0 1-.62l1.28-1a6.64 6.64 0 0 0 1.09-1h-2.14a3.64 3.64 0 0 1-.78-.09l-.62.46a4.66 4.66 0 0 1-1.18.63a1 1 0 0 0-.65.94v1.34a1 1 0 0 0 .65.94a4.67 4.67 0 0 1 1.19.63l1.28 1A4.66 4.66 0 0 1 24 24.91V32H12v-7.09a4.66 4.66 0 0 1 1.88-3.72l1.28-1a4.66 4.66 0 0 1 1.18-.63a1 1 0 0 0 .65-.94v-1.29a1 1 0 0 0-.65-.94a4.67 4.67 0 0 1-1.19-.63l-1.28-1A4.66 4.66 0 0 1 12 11.09V4h10.45l1.15-2H7a1 1 0 0 0 0 2h3v7.09a6.67 6.67 0 0 0 2.69 5.33l1.28 1A6.36 6.36 0 0 0 15 18a6.27 6.27 0 0 0-1 .62l-1.28 1A6.67 6.67 0 0 0 10 24.91V32H7a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2"
        class="clr-i-outline--alerted clr-i-outline-path-1--alerted"
      />
      <path
        fill="currentColor"
        d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0"
        class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert"
      />
    </Svg>
  );
}
