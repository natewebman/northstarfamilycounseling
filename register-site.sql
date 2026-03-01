-- Register North Star Family Counseling in the Website Factory
-- Run this in the Supabase SQL Editor

INSERT INTO sites (site_key, display_name, domain, blueprint, status, config)
VALUES (
  'northstarfamilycounseling',
  'North Star Specialty Counseling & Therapy',
  'northstarfamilycounseling.com',
  'leadgen',
  'active',
  '{
    "tone": "warm, authoritative, clinical but approachable, empathetic",
    "primary_color": "#1a3a52",
    "secondary_color": "#f5f1e8",
    "brand_name": "North Star",
    "founder": "Megan Corrieri",
    "founder_title": "Clinical Therapist & Founder",
    "licensed_states": ["Texas", "Minnesota"],
    "booking_url": "https://northstarfrisco.com/?utm_campaign=nscounselingandtherapy",
    "categories": [
      "Postpartum Mental Health",
      "Stress & Burnout",
      "Family Dynamics",
      "Anxiety & Depression",
      "Therapy in Frisco",
      "Parenting"
    ],
    "service_areas": [
      "Frisco, TX",
      "Prosper, TX",
      "Little Elm, TX",
      "McKinney, TX",
      "Allen, TX",
      "Plano, TX",
      "The Colony, TX",
      "Celina, TX"
    ],
    "email_provider": "none",
    "crm_provider": "supabase",
    "ga4_measurement_id": "",
    "meta_pixel_id": "",
    "google_ads_conversion_id": "",
    "content_engine": {
      "enabled": false,
      "sources": [],
      "max_articles_per_day": 2,
      "schedule_cron": "0 12 * * *"
    }
  }'
);
