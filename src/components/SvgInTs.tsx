// import { children } from 'solid-js';
import type { JSX, Component } from 'solid-js';

type SvgProps = {
  class?: string;
  viewBox: string;
  title: string;
  children: JSX.Element;
};

const Svg: Component<SvgProps> = (props) => {
  return (
    <svg
      {...(props.class ? { class: props.class } : {})}
      viewBox={props.viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{props.title}</title>
      {props.children}
    </svg>
  );
};

export default Svg;
