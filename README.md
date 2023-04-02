# nextjs-testing
NextJS testing tutorial


## Install

- Install NextJS with TypeScript :

└─ $ ▶ pnpm create next-app --typescript

answer yes to every question you are asked.

```
you also have Beta version of NextJS :

BETA └─ $ ▶ pnpm install next@latest react@latest react-dom@latest eslint-config-next@latest
```

---

└─ $ ▶ cd my-app

- Install all testing lib :

└─ $ ▶ pnpm install -D vitest @vitejs/plugin-react vite @testing-library/react @testing-library/dom @testing-library/jest-dom @testing-library/user-event jsdom @types/testing-library__jest-dom

---

## Configuration

- Create a vitest.config.ts file into "my-app" :

└─ $ ▶ touch vitest.config.ts

(vitest.config.ts)

```
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [path.resolve(__dirname, 'test/vitest.setup.ts')],
    env: {
      IS_REACT_ACT_ENVIRONMENT: 'true',
    },
    include: ['__tests__/**/*.[jt]s?(x)'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
```

- Create folder test into "my-app" :

└─ $ ▶ cd test

└─ $ ▶ touch vitest.setup.ts

(test/vitest.setup.ts)

```
import matchers from '@testing-library/jest-dom/matchers';
import { afterAll, afterEach, beforeAll, beforeEach, expect, vi } from 'vitest';

expect.extend(matchers);

// mock des éléments (localStorage)

// mock des requêtes

// mock des timers

```

---

- Create folder __tests__ into "my-app" :

└─ $ ▶ mkdir __tests__

└─ $ ▶ cd __tests__

└─ $ ▶ touch file_of_test.tsx

(You can copy the content of this file.
You can also copy index.tsx)

---

(package.json)

```
  ...
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",

    "test": "vitest", // <-- here
    "coverage": "vitest run --coverage", // <-- here
    
    "lint": "next lint"
  },
  ...
```

---

Now let's run the test !!!

└─ $ ▶ pnpm run test

└─ $ ▶ pnpm run coverage

It will ask you if you wants to install `coverage-c8`. Choose `y` for yes.

```
 MISSING DEP  Can not find dependency '@vitest/coverage-c8'

✔ Do you want to install @vitest/coverage-c8? … yes
```
---

```
      Coverage enabled with c8

stdout | __tests__/file_of_test.test.tsx > testing if function lightEqualNum work properly
Gertrude  ---> name
string  ---> typeof name

stdout | __tests__/file_of_test.test.tsx > testing if function deepEqual work properly
Gertrude  ---> name
string  ---> typeof name

 ✓ __tests__/file_of_test.test.tsx (5)

 Test Files  1 passed (1)
      Tests  5 passed (5)
   Start at  13:11:37
   Duration  1.22s (transform 135ms, setup 187ms, collect 115ms, tests 10ms)

 % Coverage report from c8
-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------|---------|----------|---------|---------|-------------------
All files  |     100 |      100 |     100 |     100 |                   
 index.tsx |     100 |      100 |     100 |     100 |                   
-----------|---------|----------|---------|---------|-------------------
```

---

And that's all !

Enjoy ! :koala: