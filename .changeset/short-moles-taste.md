---
'spin-delay': major
---

We've to removed the default export. Please update your code to use the named
export instead. This is a breaking change, but it's a minor one. Chances are
that you're already using the named export, and you don't have to do anything.

```diff
- import useSpinDelay from 'spin-delay';
+ import { useSpinDelay } from 'spin-delay';
```
