import sannityClient from '@sanity/client';
import imageURLBuilder from '@sanity/image-url';


export const client = sannityClient({
    projectId: 'bempa5db',
    dataset: 'production',
    apiVersion: '2022-06-11',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageURLBuilder(client);

export const urlFor = (source) => builder.image (source);
