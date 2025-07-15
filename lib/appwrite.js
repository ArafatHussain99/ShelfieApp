import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
    .setProject("6875f0d00031cce79939")
    .setPlatform("app.arafat.shelfie");

export const account = new Account(client);
export const avatars = new Avatars(client);