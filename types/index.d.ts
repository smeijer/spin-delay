interface SpinDelayOptions {
  delay?: number;
  minDuration?: number;
}
export declare const defaultOptions: {
  delay: number;
  minDuration: number;
};
export declare function useSpinDelay(
  loading: boolean,
  options?: SpinDelayOptions,
): [boolean];
export default useSpinDelay;
