---
'spin-delay': major
---

We now support spinner initialization from the server (SSR). When the `loading` prop is `true` due to server-side rendering, the spinner will be shown immediately. You can opt-out of this behavior by setting the `ssr` option to `false`.

```tsx
import { useSpinDelay } from 'spin-delay';

const spin = useSpinDelay(loading, {
  ssr: false, // defaults to true
});
```
