import { Phone, ExternalLink } from 'lucide-react';
import { type Audience } from '@/lib/audiences';

export default function SupportOptions({ audience = 'veteran' }: { audience?: Audience }) {
  const dependent = audience === 'dependent';
  return <section className="support-options" aria-label="Get help from a person">
    <div><p className="eyebrow">GET HELP FROM A PERSON</p><h2>Can’t find an answer?</h2><p>Choose help for your question. You can call without signing in to this prototype.</p></div>
    <div className="support-options-grid">
      <a href={dependent ? 'tel:8007338387' : 'tel:8008271000'}><Phone size={21}/><span><strong>{dependent ? 'CHAMPVA coverage and claims' : 'Benefits and claim questions'}</strong><span>{dependent ? '800-733-8387' : '800-827-1000'}</span></span></a>
      <a href="tel:8662793677"><Phone size={21}/><span><strong>VA.gov sign-in or website help</strong><span>866-279-3677</span></span></a>
      <a href="https://www.va.gov/contact-us/ask-va/introduction" target="_blank" rel="noreferrer"><ExternalLink size={21}/><span><strong>Ask VA a question</strong><span>Opens VA.gov · For non-urgent questions</span></span></a>
    </div>
    <p className="support-options-note">For an inquiry about a submission, have the claim or application reference and your document receipt ready. Calls and questions use official VA services.</p>
  </section>;
}
