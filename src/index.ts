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

function useIsServer() {
  const [isServer, setIsServer] = useState(true);
  
  useEffect(() => {
    setIsServer(false);
  }, []);

  return isServer;
}

export function useSpinDelay(
  loading: boolean,
  options?: SpinDelayOptions,
): boolean {
  options = Object.assign({}, defaultOptions, options);

  const isServer = useIsServer();
  const [state, setState] = useState<State>('IDLE');
  const timeout = useRef(null);

  useEffect(() => {
    if (loading && state === 'IDLE') {
      clearTimeout(timeout.current);

      timeout.current = setTimeout(() => {
        if (!loading) {
          return setState('IDLE');
        }

        timeout.current = setTimeout(() => {
          setState('EXPIRE');
        }, options.minDuration);

        setState('DISPLAY');
      }, options.delay);

      setState('DELAY');
    }

    if (!loading && state !== 'DISPLAY') {
      clearTimeout(timeout.current);
      setState('IDLE');
    }
  }, [loading, state, options.delay, options.minDuration]);

  useEffect(() => {
    return () => clearTimeout(timeout.current);
  }, []);

  if (isServer) {
    return loading;
  }

  return state === 'DISPLAY' || state === 'EXPIRE';
}
