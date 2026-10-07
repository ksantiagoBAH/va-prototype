export type Audience = 'veteran' | 'dependent' | 'representative';
export const audiences: { id: Audience; label: string }[] = [
  { id: 'veteran', label: 'Veteran' },
  { id: 'dependent', label: 'Dependent' },
  { id: 'representative', label: 'Representative' },
];

// Independent fictional accounts. These relationships are not tied to the veteran demo.
export const dependent = {
  name: 'Sofia Chen', firstName: 'Sofia', initials: 'SC',
  description: 'Adult dependent child', sponsor: 'Jordan Chen',
  memberId: 'DEMO-SC-001', education: 'Education application',
  educationStatus: 'Awaiting school information',
};
export const representative = {
  name: 'Dana Brooks', firstName: 'Dana', initials: 'DB',
  description: 'Accredited claims representative · Sample organization',
};
export const clients = [
  { id: 'DEMO-201', name: 'James Wilson', initials: 'JW', authorization: 'Active', claim: 'Disability compensation', status: 'Evidence gathering', request: 'Supporting statement', due: 'October 20, 2026' },
  { id: 'DEMO-202', name: 'Patricia Lewis', initials: 'PL', authorization: 'Active', claim: 'Supplemental claim', status: 'Evidence review', request: '', due: '' },
  { id: 'DEMO-203', name: 'Sam Taylor', initials: 'ST', authorization: 'Pending', claim: '', status: '', request: '', due: '' },
];
