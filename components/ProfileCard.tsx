import { veterans } from '@/lib/mock-data';

type Props = { veteran: (typeof veterans)[number] };

export default function ProfileCard({ veteran }: Props) {
  return <section className="shared-profile-card" aria-label={`${veteran.name} profile`}>
    <div className="shared-profile-banner" style={{ background: veteran.bannerColor }}>
      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${veteran.emblem}`} alt={`${veteran.branch} emblem`} width={56} height={56}/>
      <span>UNITED STATES<br/><strong>{veteran.branchLabel}</strong></span>
    </div>
    <div className="shared-profile-body">
      <span className="shared-profile-avatar" aria-hidden="true">{veteran.initials}</span>
      <div><h2>{veteran.name}</h2><p>{veteran.service}</p><p>{veteran.serviceYears}</p></div>
    </div>
  </section>;
}
