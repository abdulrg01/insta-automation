interface Integration {
  _id: string;
  name: string;
  token: string;
  plan: string
  username: string
  instagramId: string
  expiresAt: string;
}

interface Subscription {
  _id: string;
  plan: string
}
interface Automation {
  _id: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  password?: string;
  createdAt?: string;
  integrations: Integration[];
  automation: Automation[] | null;
  subscription: Subscription;
}

export interface AuthState {
  user: User | null;
  token: string | null;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface RefreshInstagramStatus {
  success: boolean;
  message: string;
  refreshed: number;
  failed: number;
  user: User;
  errors: { integrationId: string; error: string }[];
}
