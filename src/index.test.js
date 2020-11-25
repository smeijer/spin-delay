import 'regenerator-runtime';
import React, { useState, useEffect } from 'react';
import { render } from '@testing-library/react';
import { useSpinDelay } from './index';

async function setup({ networkTime, delay, minDuration }) {
  function TestComponent({ networkTime, delay, minDuration }) {
    const [loading, setLoading] = useState(true);
    const [showSpinner] = useSpinDelay(loading, { delay, minDuration });

    useEffect(() => {
      setTimeout(() => setLoading(false), networkTime);
    }, [networkTime]);

    return showSpinner.toString();
  }

  render(
    <TestComponent
      networkTime={networkTime}
      delay={delay}
      minDuration={minDuration}
    />,
  );
}

// TODO: needs to be implemented
test('does not show spinner when returning before delay', async () => {
  setup({ networkTime: 100, delay: 200 });
});

// TODO: needs to be implemented
test('does show spinner when returning after delay', () => {
  setup({ networkTime: 600, delay: 200 });
});
