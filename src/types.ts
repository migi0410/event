export interface Project {
  id: string;
  category: 'strategic' | 'creative' | 'business' | 'all';
  categoryLabel: string;
  year: string;
  client: string;
  title: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  gallery?: string[];
}

export interface ServiceItem {
  id: string;
  categoryCode: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  image: string;
  features: string[];
}

export interface ConsultationInquiry {
  id: string;
  fullName: string;
  phone: string;
  company: string;
  request: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'resolved';
}

export interface EcosystemBenefit {
  id: string;
  title: string;
  description: string;
}
