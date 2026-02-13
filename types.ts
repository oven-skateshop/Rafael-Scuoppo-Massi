
export interface DeckImage {
  id: string;
  url: string;
  title: string;
  category: string;
  size: 'small' | 'medium' | 'large';
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}
