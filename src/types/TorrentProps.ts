export interface TorrentProps {
  id: string;
  name: string;
  magnetLink: string;
  size: string;
  type?: string | null;
  additionalNote?: string | null;
}
