interface SpinDelayOptions {
  /**
   * The delay in milliseconds before the spinner is displayed.
   * @default 500
   */
  delay?: number;
  /**
   * The minimum duration in milliseconds the spinner is displayed.
   * @default 200
   */
  minDuration?: number;
  /**
   * Whether to enable the spinner on the server side. If true, `delay` will be
   * ignored, and the spinner will be shown immediately if `loading` is true.
   * @default true
   */
  ssr?: boolean;
}
export declare const defaultOptions: {
  delay: number;
  minDuration: number;
  ssr: true;
};
export declare function useSpinDelay(
  loading: boolean,
  options?: SpinDelayOptions,
): boolean;
export {};
