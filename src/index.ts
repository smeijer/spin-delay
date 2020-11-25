import { useState, useEffect, useRef } from 'react';

interface SpinDelayOptions {
  delay?: number;
  minDuration?: number;
}

type State = 'IDLE' | 'DELAY' | 'DISPLAY' | 'EXPIRE';

export const defaultOptions = {
  delay: 500,
  minDuration: 200,
};

export function useSpinDelay(
  loading: boolean,
  options?: SpinDelayOptions,
): boolean {
  options = Object.assign({}, defaultOptions, options);

  const [state, setState] = useState<State>('IDLE');
  const timeout = useRef(null);

  useEffect(() => {
    if (loading && state === 'IDLE') {
      clearTimeout(timeout.current);

      timeout.current = setTimeout(() => {
        if (loading) {
          timeout.current = setTimeout(
            () => setState('EXPIRE'),
            options.minDuration,
          );

          setState('DISPLAY');
        } else {
          setState('IDLE');
        }
      }, options.delay);

      setState('DELAY');
    }

    if (!loading && state !== 'DISPLAY') {
      clearTimeout(timeout.current);
      setState('IDLE');
    }
  }, [loading, state, options.delay, options.minDuration]);

  return state === 'DISPLAY' || state === 'EXPIRE';
}

export default useSpinDelay;
