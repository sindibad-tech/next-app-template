# Template Code for Next App (Front-End and FEaaBE)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). Some dependencies and files are added to the project in order to start the development rapidly. 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Differences with Basic Next App

In the current repository, the following changes are made to have a better base project for your Next applications:
* ESLint and Prettier for linting with a base configuration
* Tailwind for CSS
* pg package for Postgres database access
* A sample API route

## Front End as Back End (FEaaBE)

"Front End as Back End" (FEaaBE) refers to a design pattern where the frontend of an application, typically responsible for the user interface and user experience, is also used as a service that provides backend-like functionality, often through APIs or other mechanisms. Essentially, the frontend handles both user interaction and part of the backend logic.

Key aspects:
Client-Side Processing: The frontend, usually built with JavaScript frameworks like React, Vue, or Angular, can handle some business logic that traditionally would be handled on the server side. This might include data manipulation, API integration, or real-time updates.

Serverless Architecture: In some FEaaBE setups, the backend is minimal, or even non-existent, and instead, the frontend directly communicates with cloud services (like Firebase or AWS Lambda) to retrieve data or execute functions.

GraphQL/Apollo Integration: Often in FEaaBE architectures, APIs like GraphQL are used to allow the frontend to query data flexibly, reducing the need for complex backend logic.

Micro Frontend Architectures: It might also be part of a micro frontend approach, where frontend modules act independently and can serve both UI and backend-like capabilities, distributing responsibilities across different frontend components.

In essence, FEaaBE blurs the line between frontend and backend, allowing the frontend to perform tasks traditionally assigned to backend services, thus creating more flexible and dynamic applications.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

You can simply connect your Github repository to Vercel and the deployment will be automatically done. Afterwards, when you push on main, the app get deployed automatically and when you push to another branch, an staging environment will be deployed automatically. You can manage this continuoes integration behavior through the Vercel panel.
