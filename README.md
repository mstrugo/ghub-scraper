# GitHub User Search Application

This project is a GitHub user search application built with [Next.js](https://nextjs.org). It allows users to search for GitHub profiles, view user details, and explore repositories.

## Getting Started

To run the project locally, follow these commands:

```bash
nvm use # or set your Node version to match this project (v20.18.1)
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## About This Project

This application was developed as part of a technical challenge. It includes the following features:

- Get GitHub users from their API.
- Search Users by username.
- View detailed information about a user, including their repositories.
- Add users to a favorites list.
- Client Side Rendering (Home Page) + Server Side Rendering (Detail Page)
- Responsive design using Material-UI components.

### Technologies Used

- **Framework**: Next.js
- **Styling**: Material-UI
- **State Management**: React Context API
- **Testing**: Jest and React Testing Library
- **API**: GitHub REST API

## Test Coverage

The following table shows the current test coverage for the project:

| Metric         | Percentage |
| -------------- | ---------- |
| **Statements** | 77.6%      |
| **Branches**   | 85.7%      |
| **Functions**  | 78%        |
| **Lines**      | 77.6%      |

To run tests and view the coverage report, use the following command:

```bash
npm test -- --coverage
```

## Deployment

This application is deployed using [Vercel](https://vercel.com).

You can access [clicking here](https://ghub-scraper.vercel.app/).
