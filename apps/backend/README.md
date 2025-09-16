# Backend

## Setup

1. Copy `.env.example` to `.env` and fill in your database credentials and JWT secret.
2. Run migrations:
   ```
   npm run prisma:migrate
   ```
3. Start the backend:
   ```
   npm run dev
   ```

The API will be available at `http://localhost:5000/api/`.
