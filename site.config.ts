// Site configuration for Website Factory
// This file connects this site to the multi-tenant Supabase backend

export const siteConfig = {
  // Website Factory identifiers
  siteKey: 'northstarfamilycounseling',
  displayName: 'North Star Specialty Counseling & Therapy',
  domain: 'northstarfamilycounseling.com',
  blueprint: 'leadgen',

  // Brand
  brand: {
    name: 'North Star',
    tagline: 'Specialty Counseling & Therapy',
    founder: 'Megan Corrieri',
    founderTitle: 'Clinical Therapist & Founder',
    location: 'Frisco, Texas',
    licensedStates: ['Texas', 'Minnesota'],
  },

  // Colors (matching original design)
  colors: {
    navy: '#1a3a52',
    cream: '#f5f1e8',
    slate: '#6b7280',
    white: '#ffffff',
  },

  // External booking link (all CTAs point here)
  bookingUrl: 'https://northstarfrisco.com/?utm_campaign=nscounselingandtherapy',

  // SEO defaults
  seo: {
    titleTemplate: '%s | North Star Specialty Counseling & Therapy',
    defaultDescription: 'Award-winning specialty counseling in Frisco, Texas. Expert therapy for postpartum depression, stress management, and family communication. Serving Frisco, Prosper, and Little Elm.',
  },

  // Service areas (for geo pages and footer)
  serviceAreas: [
    'Frisco, TX',
    'Prosper, TX',
    'Little Elm, TX',
    'McKinney, TX',
    'Allen, TX',
    'Plano, TX',
    'The Colony, TX',
    'Celina, TX',
  ],

  // Service categories (for service pages and navigation)
  services: [
    {
      title: 'Postpartum Support',
      shortTitle: 'Postpartum Therapy',
      slug: 'postpartum-depression-therapy-texas-minnesota',
      description: 'Moving from surviving to bonding. Specialized support for the emotional minefield of early motherhood.',
    },
    {
      title: 'Stress Management',
      shortTitle: 'Stress Management',
      slug: 'stress-management-therapy-frisco-texas',
      description: 'Burnout recovery and nervous system regulation for high-achieving professionals and overwhelmed parents.',
    },
    {
      title: 'Family Communication',
      shortTitle: 'Family Therapy',
      slug: 'family-communication-therapy-texas-minnesota',
      description: 'Restoring emotional safety and breaking unhealthy cycles in family relationships.',
    },
  ],

  // Content engine config (for future automated content)
  contentEngine: {
    enabled: false, // Enable when ready to generate blog content
    categories: [
      'Postpartum Mental Health',
      'Stress & Burnout',
      'Family Dynamics',
      'Anxiety & Depression',
      'Therapy in Frisco',
      'Parenting',
    ],
    tone: 'warm, authoritative, clinical but approachable, empathetic',
    maxArticlesPerDay: 2,
  },
};
