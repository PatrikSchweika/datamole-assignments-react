# Todo app

Assignment for Datamole's position fullstack developer.

Author: Patrik Schweika

## Prerequisites

- Node.js `>=18`
- pnpm `10.4.0`

To install pnpm run the following command:

```bash
npm install -g pnpm@10.4.0
```

## Setup

1. Run the command below in the root directory of the project to install dependencies

```bash
pnpm install
```

2. To run the development server, run:

```bash
pnpm run dev
```

3. To lint & format the code in the project run:

```bash
pnpm run lint
pnpm run format
```

4. To build the project run:

```bash
pnpm run build
```

## Libraries

Apart from the libraries that were are already included in the project - I have used [Tanstack Query](https://tanstack.com/query/latest) and [Axios](https://github.com/axios/axios). 
I have chosen those libraries, since I have a good experience with using them for handling asynchronous data in React applications.
They handle the data fetching, state management and caching in a clean way. 
So that the data fetching logic is outside of components and nicely separated into individual hooks.

## Future

As the application would grow, and forms would get more complicated I would also use [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) for validation.
Which are a nice libraries for handling form state and object validations. And for routing I would use the well established [React Router](https://reactrouter.com/).

Also, I would switch from Eslint + Prettier to [Biome](https://biomejs.dev/). 
Which is more performant than the former libraries and handles both linting and formatting. 
