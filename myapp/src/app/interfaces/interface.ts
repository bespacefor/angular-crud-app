export interface Card {
  title: string;
  text: string;
  id?: number;
}

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

export interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  isExpanded?: boolean;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
