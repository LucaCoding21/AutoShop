import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export enum AdviceType {
  REPAIR = 'REPAIR',
  REPLACE = 'REPLACE',
  CONSULT = 'CONSULT'
}

export interface AiResponse {
  advice: AdviceType;
  explanation: string;
  estimatedCostRange: string;
}