export interface TorrentProps {
  id: string;
  name: string;
  type: string | null;
  additionalNote: string | null;
  magnetLink: string;
  size: string;
}
