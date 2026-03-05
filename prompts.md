Set up the Appwrite Web SDK in my existing Next.js project for collecting email subscribers. Here's what I need:

Install the appwrite npm package (client-side SDK for form submissions) if needed
Create a lib/appwrite.js file that initializes the Appwrite Client and exports a Databases instance. Use environment variables NEXT_PUBLIC_APPWRITE_ENDPOINT and NEXT_PUBLIC_APPWRITE_PROJECT for the config.
Create or update .env.local with these placeholders:

NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=694472780022e9b0c419
NEXT_PUBLIC_APPWRITE_DATABASE_ID=69a89675000d9e88d5d8
NEXT_PUBLIC_APPWRITE_COLLECTION_ID=subscribers


Create a reusable submitEmail(email) utility function in lib/appwrite.js that writes a document with email, name, and preference (yes or no on checkbox) fields to the subscribers collection.
Don't touch any of my existing components or pages — just set up the SDK plumbing.

My project uses the App Router.