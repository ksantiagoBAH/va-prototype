export const veteran = { name: 'Alex Morgan', firstName: 'Alex', initials: 'AM', service: 'U.S. Marine Corps Veteran', serviceYears: '2010 – 2014', disabilityRating: '70%', lastPayment: '$1,933.15', paymentDate: 'October 1, 2026' };
export const claim = { title: 'Disability claim', received: 'April 10, 2026', number: '1234 5678', status: 'Evidence gathering', step: 3, totalSteps: 8, temporaryJurisdiction: 'Denver (sample)' };
export const appointment = { date: 'October 14, 2026', time: '10:30 a.m.', type: 'Primary care', location: 'VA Medical Center — Denver, CO' };
export const messages = [ {from: 'Your primary care team', subject: 'Getting ready for your appointment', body: 'Please bring your current medication list and arrive 15 minutes before your appointment on October 14.'}, {from: 'VA benefits team', subject: 'Your benefit letter is ready', body: 'Your updated benefit summary letter is available in your VA letters.'} ];

// Fictional personas for comparing the three layouts. Amounts are illustrative.
export const veterans = [
 {...veteran, branch: 'U.S. Marine Corps', branchLabel: 'MARINE CORPS', emblem: 'marine-corps-emblem.png', bannerColor: '#7b1423', gender: 'non-specified', ethnicity: 'non-specified'},
 {name:'Maya Thompson', firstName:'Maya', initials:'MT', service:'U.S. Space Force Veteran', branch:'U.S. Space Force', branchLabel:'SPACE FORCE', serviceYears:'2020 – 2025', disabilityRating:'30%', lastPayment:'$550.00', paymentDate:'October 1, 2026', emblem:'space-force-emblem.png', bannerColor:'#172336', gender:'female', ethnicity:'non-specified'},
 {name:'Carlos Rivera', firstName:'Carlos', initials:'CR', service:'U.S. Army Veteran', branch:'U.S. Army', branchLabel:'ARMY', serviceYears:'2006 – 2014', disabilityRating:'50%', lastPayment:'$1,100.00', paymentDate:'October 1, 2026', emblem:'army-emblem.png', bannerColor:'#283d2d', gender:'male', ethnicity:'Hispanic'},
];

// Fictional education account for the selected veteran demo; not a benefit calculation.
export const educationBenefits = {
 program: 'Post-9/11 GI Bill (Chapter 33)', remaining: '18 months, 12 days',
 school: 'Example State University', course: 'Information systems',
 term: 'August 24–December 18, 2026', verificationMonth: 'September 2026',
 verificationDates: 'September 1–30, 2026', credits: '12 credit hours',
 reference: 'DEMO-EDU-CR-401', lastPayment: '$1,250.00', paymentDate: 'September 1, 2026',
};
