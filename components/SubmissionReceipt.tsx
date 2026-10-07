import { FileCheck2 } from 'lucide-react';
import { type DemoReceipt } from '@/lib/demo-receipts';

export default function SubmissionReceipt({ receipt, context }: { receipt: DemoReceipt; context: string }) {
  const summary = `FICTIONAL DEMO RECEIPT — NOT A VA CONFIRMATION\n\n${receipt.id}\n${context}\nFilename: ${receipt.filename}\nReceived in this demo: ${receipt.receivedAt}\nStatus: Received, awaiting review\nOnly the filename is held by the prototype. No file has been sent to VA.`;
  return <article className="submission-receipt" aria-label="Sample document receipt">
    <FileCheck2 size={23}/><div><h3>Received in demo · Awaiting review</h3><p>{receipt.filename}</p><p>{context}</p><p>Receipt: <strong>{receipt.id}</strong></p><p>Recorded: {new Date(receipt.receivedAt).toLocaleString('en-US')}</p><p>Received means recorded in this demo. Review and acceptance are separate steps.</p><a download={`${receipt.id.toLowerCase()}-receipt.txt`} href={'data:text/plain;charset=utf-8,' + encodeURIComponent(summary)}>Download sample receipt</a></div>
  </article>;
}
