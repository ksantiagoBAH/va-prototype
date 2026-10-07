# My VA — Personal overview prototype

Next.js / React / TypeScript prototype using layout 3, with fictional data. The public homepage, My VA dashboard, and CHAMPVA screens all use the selected layout. A three-view switcher selects Veteran, Dependent, or Representative rather than changing the design.

## Run locally

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3006. Run `npm run build` for a production build and `npm run typecheck` for TypeScript validation.

## Scope

Responsive My VA homepage, service search, detail dialogs, session-only message read state, sample letter download, and simulated document attachment. Files are not uploaded: only the selected filename is held in memory. Refresh resets demo state. No authentication, real veteran records, backend connections, or payments.

Mock data lives in `lib/mock-data.ts`. The selected reference is `design/mockups/c-personal-overview.png`. Earlier layout implementations remain in the source for reference; the preview switches audiences while retaining layout 3.

## Audience views

- **Veteran:** Existing personal overview with Carlos Rivera’s claims, care, records, benefits, and family CHAMPVA demo.
- **Dependent:** Sofia Chen’s independent sample account, with her own CHAMPVA coverage, health claim, member card, insurance update, education application, and letters. This household is separate from the veteran sample.
- **Representative:** Dana Brooks’s fictional accredited claims representative workspace, with an authorized client selector, case status, requested evidence, client documents, and appointment status. A pending client has no claim or document access.

Audience switches reset session interactions. Representative evidence is held separately for each client. The demo stores filenames only; forms, messages, authorizations, and coverage statuses are simulated. Program links lead to VA.gov; sample statuses do not establish eligibility or real access permissions.

## Community-feedback improvements

The audience dashboards retain layout 3 and include clearer claim explanations, document receipts, a separate CHAMPVA school-certification tracker, representative follow-up history, and visible human-support routes. Requests, terms, dates, receipt IDs, and notification history in the interface are fictional demonstrations. Recording receipt does not establish review, coverage approval, or real delivery.

Research sources and the complaint-to-design mapping are in `design/research/community-feedback.json`. The evidence includes Reddit discussions, public VA News comments (including a self-identified VSO), and VA usability research. It is qualitative feedback from a small self-selected sample, not a frequency ranking or a description of every user’s experience. Official VA sources were used to check support details and program links.

## Veteran education section

The veteran dashboard includes a dedicated GI Bill section with fictional remaining entitlement, monthly enrollment verification, separate education-payment details, and an education decision-letter download. School resources link to VA’s GI Bill Comparison Tool, Yellow Ribbon school finder, school-selection guidance, education applications, and VR&E information. Verification changes the sample status only; it does not contact VA or trigger a payment.
