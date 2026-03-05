import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT);

export const databases = new Databases(client);

/**
 * Submit a subscriber document to the Appwrite collection.
 * @param {{ name: string, email: string, optIn: boolean }} data
 * @returns {Promise} The created document
 */
export async function submitEmail({ name, email, optIn }) {
    return databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID,
        ID.unique(),
        {
            name,
            email,
            preferences: optIn ? "yes" : "no",
        }
    );
}
