/**
 * Cloudinary Media Helper
 * Provides utilities for generating optimized image URLs
 */

const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

/**
 * Generate Cloudinary image URL with transformations
 * @param publicId - The public ID of the image in Cloudinary
 * @param options - Transformation options
 */
export const getCloudinaryUrl = (
  publicId: string,
  options?: {
    width?: number;
    height?: number;
    quality?: number | 'auto';
    format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
    crop?: 'fill' | 'fit' | 'scale' | 'crop' | 'thumb';
    gravity?: 'auto' | 'face' | 'center' | 'north' | 'south' | 'east' | 'west';
  }
) => {
  if (!CLOUDINARY_CLOUD_NAME) {
    console.warn('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not set');
    return publicId; // Fallback to relative path
  }

  const transformations: string[] = [];

  // Add width transformation
  if (options?.width) {
    transformations.push(`w_${options.width}`);
  }

  // Add height transformation
  if (options?.height) {
    transformations.push(`h_${options.height}`);
  }

  // Add crop mode
  if (options?.crop) {
    transformations.push(`c_${options.crop}`);
  }

  // Add gravity
  if (options?.gravity) {
    transformations.push(`g_${options.gravity}`);
  }

  // Add quality
  if (options?.quality) {
    transformations.push(`q_${options.quality}`);
  }

  // Add format
  if (options?.format) {
    transformations.push(`f_${options.format}`);
  }

  // Default optimizations if no options provided
  if (transformations.length === 0) {
    transformations.push('f_auto', 'q_auto');
  }

  const transformationString = transformations.join(',');

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformationString}/${publicId}`;
};

/**
 * Generate responsive image URLs for srcSet
 */
export const getResponsiveUrls = (publicId: string, widths: number[]) => {
  return widths.map((width) => ({
    url: getCloudinaryUrl(publicId, { width, format: 'auto', quality: 'auto' }),
    width,
  }));
};

/**
 * Asset paths mapping
 * Map local asset names to Cloudinary public IDs
 */
export const ASSETS = {
  hero: {
    background: 'messika/hero-background',
  },
  collections: {
    main: 'messika/collections-main',
    secondary: 'messika/collections-secondary',
  },
  storytelling: {
    step1: 'labottega/step-1-welcome',
    step2: 'labottega/step-2-concept',
    step3: 'labottega/step-3-design',
  },
  process: {
    craftsman: 'maia/process-craftsman',
  },
} as const;

/**
 * Helper to get asset URL by key path
 */
export const getAsset = (path: string, options?: Parameters<typeof getCloudinaryUrl>[1]) => {
  return getCloudinaryUrl(path, options);
};
