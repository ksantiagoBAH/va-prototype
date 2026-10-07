import { audiences, type Audience } from '@/lib/audiences';

export default function AudienceSwitcher({ audience, onChange }: { audience: Audience; onChange: (audience: Audience) => void }) {
  return <div className="audience-switcher" role="group" aria-label="Choose audience view">
    {audiences.map(({ id, label }, index) => <button key={id} aria-pressed={audience === id} onClick={() => onChange(id)}><span aria-hidden="true">{index + 1}</span>{label}</button>)}
  </div>;
}
