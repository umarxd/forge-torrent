export interface TorrentProps {
  id: string;
  name: string;
  type?: string;
  additionalNote?: string | null | undefined;
  magnetLink: string;
  size: string;
}
