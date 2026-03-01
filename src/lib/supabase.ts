import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL || '';
const supabaseKey = import.meta.env.SUPABASE_KEY || '';
const siteKey = import.meta.env.SITE_KEY || 'northstarfamilycounseling';

export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export const SITE_KEY = siteKey;

/**
 * Fetch published articles for this site
 * Used by blog listing and individual article pages
 */
export async function getArticles(category?: string, limit?: number) {
  if (!supabase) return [];

  let query = supabase
    .from('articles')
    .select('*')
    .eq('site_id', SITE_KEY)
    .eq('content_stage', 'published')
    .order('published_at', { ascending: false });

  if (category) {
    query = query.eq('category', category);
  }
  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;
  if (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
  return data || [];
}

/**
 * Fetch a single article by slug
 */
export async function getArticleBySlug(slug: string) {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('site_id', SITE_KEY)
    .eq('slug', slug)
    .eq('content_stage', 'published')
    .single();

  if (error) {
    console.error('Error fetching article:', error);
    return null;
  }
  return data;
}

/**
 * Fetch published pages (geo pages, additional service pages)
 */
export async function getPages(pageType?: string) {
  if (!supabase) return [];

  let query = supabase
    .from('pages')
    .select('*')
    .eq('site_id', SITE_KEY)
    .eq('status', 'published')
    .order('created_at', { ascending: false });

  if (pageType) {
    query = query.eq('page_type', pageType);
  }

  const { data, error } = await query;
  if (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
  return data || [];
}
