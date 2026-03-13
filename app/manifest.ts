import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yardie - Premium Exterior Design',
    short_name: 'Yardie',
    description: 'Transform your outdoor space with expert exterior design and landscaping services',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#5a7f57',
    icons: [
      {
        src: '/yardie-favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
