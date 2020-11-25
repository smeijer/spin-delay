import 'regenerator-runtime';
import React, { useState, useEffect } from 'react';
import { render, screen, act } from '@testing-library/react';
import { useSpinDelay } from './index';

it('does not show spinner when faster than delay', () => {
  setup({ networkTime: 100, delay: 200 });
  assertLoadingAndSpinnerAtTime(true, false, 0);
  assertLoadingAndSpinnerAtTime(false, false, 100);
});

it('shows spinner when slower than delay', () => {
  setup({ networkTime: 300, delay: 200 });
  assertLoadingAndSpinnerAtTime(true, false, 0);

  assertLoadingAndSpinnerAtTime(true, false, 199);
  assertLoadingAndSpinnerAtTime(true, true, 200);

  assertLoadingAndSpinnerAtTime(true, true, 299);
  assertLoadingAndSpinnerAtTime(false, false, 300);
});

it('shows spinner for minDuration', () => {
  setup({ networkTime: 300, delay: 200, minDuration: 200 });
  assertLoadingAndSpinnerAtTime(true, false, 0);

  assertLoadingAndSpinnerAtTime(true, false, 199);
  assertLoadingAndSpinnerAtTime(true, true, 200);

  assertLoadingAndSpinnerAtTime(true, true, 299);
  assertLoadingAndSpinnerAtTime(false, true, 300);

  assertLoadingAndSpinnerAtTime(false, true, 399);
  assertLoadingAndSpinnerAtTime(false, false, 401);
});

// utility functions:

function setup({ networkTime, delay, minDuration }) {
  function TestComponent({ networkTime, delay, minDuration }) {
    const [loading, setLoading] = useState(true);
    const [showSpinner] = useSpinDelay(loading, { delay, minDuration });

    useEffect(() => {
      setTimeout(() => setLoading(false), networkTime);
    }, [networkTime]);

    return JSON.stringify({ loading, showSpinner });
  }

  render(
    <TestComponent
      networkTime={networkTime}
      delay={delay}
      minDuration={minDuration}
    />,
  );
}

let currentTime;
function advanceTimersTo(time) {
  act(() => jest.advanceTimersByTime(time - currentTime));
  currentTime = time;
}

function assertLoadingAndSpinnerAtTime(loading, showSpinner, time) {
  advanceTimersTo(time);
  screen.getByText(JSON.stringify({ loading, showSpinner }));
}

beforeEach(() => {
  jest.useFakeTimers();
  currentTime = 0;
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});
