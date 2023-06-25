# Next Auth - Modern Authentication Template

![preview for the live project](https://github.com/void-main1812/next-auth/assets/128049873/c53de73e-bf51-47a2-a0b8-c67afac06ceb)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/void-main1812/next-auth/blob/main/LICENSE)

Next Auth is a modern authentication template built using Next.js, Prisma, Next-Auth, MongoDB, Tailwind CSS, and TypeScript. It provides a minimal and responsive UI, along with configurable OAuth authentication options from GitHub and Google. This template aims to simplify the implementation of authentication in your Next.js applications while leveraging popular technologies.

## Features

- User authentication using Next-Auth
- OAuth authentication options from GitHub and Google
- MongoDB integration for data storage
- Modern and minimal UI design
- Responsive layout using Tailwind CSS
- TypeScript support for improved development experience

## Prerequisites

Before running the Next Auth template, ensure that you have the following installed:

- Node.js (v14 or above)
- MongoDB (local instance or connection string)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/next-auth.git
```

2. Change into the project directory:

```bash
cd next-auth
```

3. Install the dependencies:

```bash
npm install
```

4. Create a `.env.local` file in the project root and add the following configuration variables:

```plaintext
DATABASE_URL=mongodb://localhost:27017/next-auth
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret
```

Replace `your_github_client_id`, `your_github_client_secret`, `your_google_client_id`, and `your_google_client_secret` with your actual OAuth application credentials obtained from GitHub and Google.

## Usage

To start the development server, run the following command:

```bash
npm run dev
```

Visit `http://localhost:3000` in your web browser to see the application.

## Configuration

### Authentication Providers

The Next Auth template supports authentication via GitHub and Google. To configure the authentication providers, edit the `next-auth.config.js` file located in the project root. Modify the `providers` array according to your requirements.

```javascript
// next-auth.config.js

import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // ...
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  // ...
})
```

### Styling and UI Customization

The Next Auth template utilizes Tailwind CSS for styling. You can customize the UI by editing the existing components or adding new ones. Refer to the Tailwind CSS documentation for more information on styling and customization options.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the [GitHub repository]([https://github.com/void-main1812/next-auth/issues]) or submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/void-main/next-auth/blob/main/LICENSE) file for more information.

## Acknowledgements

Next Auth makes use of the following open-source projects:

- [Next.js](https://nextjs.org)
- [Prisma](https://prisma.io)
- [Next-Auth](https://next-auth.js.org)
- [MongoDB](https://www.mongodb.com)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

## Contact

For any inquiries or questions, please contact [voidmain.1812@gmail.com](mailto:voidmain.1812@gmail.com).

---

Thank you for using Next Auth! We hope it simplifies your authentication implementation and provides a great starting point for your Next.js applications.
