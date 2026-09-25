const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

const ROUTES = [
  { path: '/', priority: 1.0 },
  { path: '/about', priority: 0.8 },
  { path: '/history', priority: 0.8 },
  { path: '/docs', priority: 0.8 },
  { path: '/visit', priority: 0.7 },
  { path: '/faq', priority: 0.7 },
];

export default function sitemap() {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    changeFrequency: 'monthly',
    priority: route.priority,
  }));
}
