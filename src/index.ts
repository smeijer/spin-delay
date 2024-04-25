import { useState, useEffect, useRef } from 'react';

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

type State = 'IDLE' | 'DELAY' | 'DISPLAY' | 'EXPIRE';

export const defaultOptions = {
  delay: 500,
  minDuration: 200,
  ssr: true,
};

function useIsSSR() {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return isSSR;
}

export function useSpinDelay(
  loading: boolean,
  options?: SpinDelayOptions,
): boolean {
  options = Object.assign({}, defaultOptions, options);

  const isSSR = useIsSSR() && options.ssr;
  const initialState = isSSR && loading ? 'DISPLAY' : 'IDLE';
  const [state, setState] = useState<State>(initialState);
  const timeout = useRef(null);

  useEffect(() => {
    if (loading && (state === 'IDLE' || isSSR)) {
      clearTimeout(timeout.current);

      const delay = isSSR ? 0 : options.delay;
      timeout.current = setTimeout(() => {
        if (!loading) {
          return setState('IDLE');
        }

        timeout.current = setTimeout(() => {
          setState('EXPIRE');
        }, options.minDuration);

        setState('DISPLAY');
      }, delay);

      if (!isSSR) {
        setState('DELAY');
      }
    }

    if (!loading && state !== 'DISPLAY') {
      clearTimeout(timeout.current);
      setState('IDLE');
    }
  }, [loading, state, options.delay, options.minDuration, isSSR]);

  useEffect(() => {
    return () => clearTimeout(timeout.current);
  }, []);

  return state === 'DISPLAY' || state === 'EXPIRE';
}
