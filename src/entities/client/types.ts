export type Client = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  notes?: string;
  createdAt: string;
};

export type ClientsFilters = {
  search?: string
}