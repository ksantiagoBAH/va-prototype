# My VA — Refined VA prototype

Fresh Next.js / React / TypeScript implementation of design A, using fictional data.

## Run locally

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3006. Run `npm run build` for a production build and `npm run typecheck` for TypeScript validation.

## Scope

Responsive My VA homepage, service search, detail dialogs, session-only message read state, sample letter download, and simulated document attachment. Files are not uploaded: only the selected filename is held in memory. Refresh resets demo state. No authentication, real veteran records, backend connections, or payments.

Mock data lives in `lib/mock-data.ts`. The selected reference is `design/mockups/a-refined-va.png`.
