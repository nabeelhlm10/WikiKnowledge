# WikiKnowledge

This workspace is now split into separate `backend` and `frontend` folders.

## Backend

The Spring Boot API lives in `backend`.

Run it with:

```sh
cd backend
mvn spring-boot:run
```

The backend exposes APIs under `/api/articles` and `/api/quizzes`.

## Frontend

The React UI lives in `frontend`.

Run it with:

```sh
cd frontend
npm install
npm run dev
```

The frontend proxies API requests to `http://localhost:8080`.

## Notes

- Backend package built successfully with `mvn -DskipTests package`.
- Frontend build passed with Vite.
