import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
  Storage,
} from 'react-native-appwrite';

export const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.jsm.sora',
  projectId: '678d64bd000210193890',
  storageId: '678d715c0037dfd137ba',
  databaseId: '678d66a0001aee1a5399',
  userCollectionId: '678d66df0017f07f1494',
  videoCollectionId: '678d6715002748062412',
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export async function createUser({
  email,
  password,
  userName,
}: {
  email: string;
  password: string;
  userName?: string;
}) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      userName,
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(userName);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        userName,
        avatar: avatarUrl,
      },
    );

    return newUser;
  } catch (error) {
    throw new Error(error as string);
  }
}

export async function signIn(email: string, password: string) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    console.log(session);
    return session;
  } catch (error) {
    throw new Error(error as string);
  }
}
