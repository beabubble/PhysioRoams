export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Condition {
  id: string;
  title: string;
  iconName: string; // Lucide icon name matching neck, shoulder, back, posture
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ToolItem {
  id: string;
  title: string;
  imageUrl: string;
}
