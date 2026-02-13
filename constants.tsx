
import { DeckImage, ProcessStep } from './types';

// Agora as imagens apontam para uma pasta local chamada 'images'
// Você deve criar essa pasta na raiz do projeto e colocar seus arquivos lá.
export const DECK_IMAGES: DeckImage[] = [
  { id: '1', url: './images/deck_1.png', title: 'Bob Marley Legacy', category: 'Music', size: 'large' },
  { id: '2', url: './images/deck_2.png', title: 'Oven Skate Shop Collateral', category: 'Retail', size: 'medium' },
  { id: '3', url: './images/deck_3.png', title: 'Street Legend Grid', category: 'Culture', size: 'medium' },
  { id: '4', url: './images/deck_4.png', title: 'Bat Pattern Concept', category: 'Art', size: 'small' },
  { id: '5', url: './images/deck_5.png', title: 'Aura Series Blue', category: 'Abstract', size: 'small' },
  { id: '6', url: './images/deck_6.png', title: 'Psychedelic Flow', category: 'Abstract', size: 'large' },
  { id: '7', url: './images/deck_7.png', title: 'Spectrum Edge', category: 'Graphic', size: 'medium' },
  { id: '8', url: './images/deck_8.png', title: 'One Love Edition', category: 'Music', size: 'medium' },
  { id: '9', url: './images/deck_9.png', title: 'Legend Monochrome', category: 'Portrait', size: 'small' },
  { id: '10', url: './images/deck_10.png', title: 'Jordan 23 Classic', category: 'Sports', size: 'large' },
  { id: '11', url: './images/deck_11.png', title: 'Flight Series Red', category: 'Sports', size: 'medium' },
  { id: '12', url: './images/deck_12.png', title: 'Championship Detail', category: 'Detail', size: 'small' },
  { id: '13', url: './images/deck_13.png', title: 'Oven Typography', category: 'Typography', size: 'small' },
  { id: '14', url: './images/deck_14.png', title: 'Electric Flow', category: 'Abstract', size: 'medium' },
  { id: '15', url: './images/deck_15.png', title: 'James 6 Edition', category: 'Sports', size: 'large' },
  { id: '16', url: './images/deck_16.png', title: 'Heat White Finish', category: 'Sports', size: 'medium' },
  { id: '17', url: './images/deck_17.png', title: 'Miami Texture', category: 'Detail', size: 'small' },
  { id: '18', url: './images/deck_18.png', title: 'Iverson 3 Black', category: 'Sports', size: 'medium' },
  { id: '19', url: './images/deck_19.png', title: 'Answer Series Detail', category: 'Detail', size: 'small' },
  { id: '20', url: './images/deck_20.png', title: 'Crossover Flow', category: 'Graphic', size: 'medium' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'CONCEPT',
    description: 'Deep dive into urban subcultures and historical visual icons to find the narrative for the deck.',
    icon: 'Lightbulb',
  },
  {
    title: 'ILLUSTRATION',
    description: 'Manual sketching followed by precise digital vector work to ensure high-fidelity print quality.',
    icon: 'PenTool',
  },
  {
    title: 'WOOD APPLICATION',
    description: 'Specialized thermal transfer techniques to bond art with premium Canadian maple decks.',
    icon: 'Layers',
  },
];
