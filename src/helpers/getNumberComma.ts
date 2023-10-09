// import { z } from "astro:content";

export default function getNumberComma(value: number) {
  return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
