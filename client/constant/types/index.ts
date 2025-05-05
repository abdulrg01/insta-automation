export type FieldProps = {
  label: string;
  id: string;
};

export type SidebarProps = {
  icon: string;
} & FieldProps;

export type PageIcons = {
  [page in string]: React.ReactNode;
};

export type IntegrationProps = {
  title: string;
  icon: React.ReactNode;
  description: string;
  strategy: 'INSTAGRAM' | 'CRM'
}

export interface Product {
  id: number;
  name: string;
  // description: string;
  price: number | string;
  category: string;
  image: string;
}
