import { z } from 'zod';

const geoSchema = z.object({
  lat: z.string(),
  lng: z.string(),
});

const addressSchema = z.object({
  street: z.string(),
  suite: z.string(),
  city: z.string(),
  zipcode: z.string(),
  geo: geoSchema,
});

const companySchema = z.object({
  name: z.string(),
  catchPhrase: z.string(),
  bs: z.string(),
});

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
  address: addressSchema,
  phone: z.string(),
  website: z.string(),
  company: companySchema,
});

export type UserType = z.infer<typeof userSchema>;

export type UsersStateType = {
  users: UserType[];
  isLoading: boolean;
  error: string | null;
};
