import { Account, Avatars, Client } from 'react-native-appwrite';

export const client = new Client()
    .setProject("6875e5000010ab774840")
    .setPlatform("dev.arafat.shelfie")
    .setEndpoint("https://fra.cloud.appwrite.io/v1");

export const account = new Account(client);
export const avatars = new Avatars(client);