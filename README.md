# spin-delay

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

**Smart Spinner Helper for React**

<!-- description -->

## Demo

Sandbox -> https://codesandbox.io/s/spin-delay-jlp2c

## Installation

With npm:

```sh
npm install --save spin-delay
```

With yarn:

```sh
yarn add -D spin-delay
```

## API

The examples below use the following data object:

```jsx
import { useSpinDelay } from 'spin-delay';

function MyComponent() {
  const [{ loading }] = useFetch('http://example.com');

  // options are optional, and default to these values
  const [showSpinner] = useSpinDelay(loading, { delay: 500, minDuration: 200 });

  if (showSpinner) {
    return <Spinner />;
  }

  // ...
}
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/smeijer"><img src="https://avatars1.githubusercontent.com/u/1196524?v=4" width="100px;" alt=""/><br /><sub><b>Stephan Meijer</b></sub></a><br /><a href="#ideas-smeijer" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/smeijer/spin-delay/commits?author=smeijer" title="Code">💻</a> <a href="#infra-smeijer" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-smeijer" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
