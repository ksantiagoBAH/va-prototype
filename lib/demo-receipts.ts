export type DemoReceipt = { filename: string; id: string; receivedAt: string };
export function createDemoReceipt(filename: string): DemoReceipt {
  return { filename, id: `DEMO-${Date.now()}`, receivedAt: new Date().toISOString() };
}
export function validateDemoFile(file: File | undefined): string {
  if (!file) return '';
  if (!/\.(pdf|jpe?g|png)$/i.test(file.name)) return 'Choose a PDF, JPG, or PNG. Your file has not been added.';
  return '';
}
