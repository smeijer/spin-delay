# spin-delay

## 2.0.1

### Patch Changes

- [`f380792`](https://github.com/smeijer/spin-delay/commit/f380792a23c4331c4e389ebeeca03945a49c4848) Thanks [@smeijer](https://github.com/smeijer)! - Fixes the initial delay used when `options.ssr` is `false`.

## 2.0.0

### Major Changes

- [#8](https://github.com/smeijer/spin-delay/pull/8) [`1b81585`](https://github.com/smeijer/spin-delay/commit/1b815854e454e2d10357f2dd586370ef9de44b4d) Thanks [@smeijer](https://github.com/smeijer)! - We now support spinner initialization from the server (SSR). When the `loading` prop is `true` due to server-side rendering, the spinner will be shown immediately. You can opt-out of this behavior by setting the `ssr` option to `false`.

  ```tsx
  import { useSpinDelay } from 'spin-delay';

  const spin = useSpinDelay(loading, {
    ssr: false, // defaults to true
  });
  ```

- [#6](https://github.com/smeijer/spin-delay/pull/6) [`3d4f4d5`](https://github.com/smeijer/spin-delay/commit/3d4f4d51db5c3e0b9a301ff5ada5e9efbe5fd35a) Thanks [@smeijer](https://github.com/smeijer)! - We've to removed the default export. Please update your code to use the named
  export instead. This is a breaking change, but it's a minor one. Chances are
  that you're already using the named export, and you don't have to do anything.

  ```diff
  - import useSpinDelay from 'spin-delay';
  + import { useSpinDelay } from 'spin-delay';
  ```
