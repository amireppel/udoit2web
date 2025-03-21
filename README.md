# Udoit2web Application

A Next.js application with authentication using NextAuth.js and PostgreSQL database.

## Prerequisites

- Node.js 20 or later
- Docker and Docker Compose
- PostgreSQL (if running without Docker)

## Getting Started

### Running with Docker (Recommended)

1. Clone the repository:
```bash
git clone <repository-url>
cd udoit2web
```

2. Start the application using Docker Compose:
```bash
docker compose up --build
```

The application will be available at http://localhost:3000

To stop the application:
```bash
docker compose down
```

To restart only the web application (keeping the database running):
```bash
docker compose restart app
```

### Running Without Docker

1. Install dependencies:
```bash
npm install
```

2. Set up your PostgreSQL database and update the `.env` file with your database connection string:
```env
DATABASE_URL="postgresql://admin123:enter123@localhost:5432/udoit2"
```

3. Run database migrations and seed the database:
```bash
npx prisma migrate dev
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:3000

## Database Access

You can connect to the PostgreSQL database using the following credentials:

- Host: localhost
- Port: 5432
- Database: udoit2
- Username: admin123
- Password: enter123

## Test Users

The application comes with two predefined test users:

1. User 1:
   - Username: test@b.com
   - Password: pass123

2. User 2:
   - Username: pass@c.com
   - Password: enter123

## Project Structure

```
worldinfo/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   ├── context/
│   │   │   └── AuthContext.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── providers.tsx
│   └── types/
│       └── next-auth.d.ts
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── docker-compose.yml
├── Dockerfile
└── package.json
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run db:seed` - Seed the database with test data

## Features

- JWT-based authentication
- Session management
- PostgreSQL database integration
- Docker support
- Responsive UI
- TypeScript support

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="postgresql://admin123:enter123@localhost:5432/udoit2"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## Troubleshooting

1. If the database connection fails:
   - Check if PostgreSQL is running
   - Verify the database credentials
   - Ensure the database exists

2. If the application doesn't start:
   - Check if all required environment variables are set
   - Ensure all dependencies are installed
   - Verify the port 3000 is not in use

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
