front:
  cd frontend && npm install && npm run dev

back:
  cd backend && npm install && npm run dev

start:
  npx concurrently "cd frontend && npm run dev" "cd backend && npm run dev"
 