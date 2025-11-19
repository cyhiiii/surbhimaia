# Cloudinary Setup Guide

## 1. Create Cloudinary Account

1. Go to https://cloudinary.com/users/register_free
2. Sign up for a free account (25GB storage, 25GB bandwidth/month)
3. Verify your email

## 2. Get Your Credentials

1. Log in to https://cloudinary.com/console
2. From the Dashboard, copy:
   - **Cloud Name**
   - **API Key**
   - **API Secret**

## 3. Configure Environment Variables

1. Create a `.env.local` file in the project root:

```bash
cp .env.local.example .env.local
```

2. Edit `.env.local` and add your credentials:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

⚠️ **Important:** Never commit `.env.local` to Git!

## 4. Upload Your Assets

### Option A: Upload via Cloudinary Dashboard (Recommended for initial setup)

1. Go to https://cloudinary.com/console/media_library
2. Click "Upload" → "Upload Files"
3. Organize assets in folders:
   ```
   messika/
   ├── hero-background.jpg
   ├── collections-main.jpg
   └── collections-secondary.jpg
   
   labottega/
   ├── step-1-welcome.jpg
   ├── step-2-concept.jpg
   └── step-3-design.jpg
   
   maia/
   └── process-craftsman.jpg
   ```

### Option B: Upload via API (Programmatic)

Create a script to upload assets:

```typescript
// scripts/upload-assets.ts
import { v2 as cloudinary } from 'cloudinary';
import * as fs from 'fs';
import * as path from 'path';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadAssets() {
  const assetsDir = path.join(__dirname, '../public/assets');
  
  const files = [
    { path: 'hero-background.jpg', folder: 'messika' },
    { path: 'collections-main.jpg', folder: 'messika' },
    // Add more files...
  ];

  for (const file of files) {
    const filePath = path.join(assetsDir, file.path);
    
    if (!fs.existsSync(filePath)) {
      console.log(`Skipping ${file.path} (not found)`);
      continue;
    }

    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: file.folder,
        use_filename: true,
        unique_filename: false,
        overwrite: true,
        resource_type: 'auto',
      });
      
      console.log(`✅ Uploaded: ${result.public_id}`);
    } catch (error) {
      console.error(`❌ Failed to upload ${file.path}:`, error);
    }
  }
}

uploadAssets();
```

Run with:
```bash
npx ts-node scripts/upload-assets.ts
```

## 5. Update Component Image URLs

Replace Unsplash URLs with Cloudinary URLs:

### Before:
```tsx
<Image
  src="https://images.unsplash.com/photo-xyz..."
  alt="Hero"
  width={1440}
  height={900}
/>
```

### After:
```tsx
import { getAsset, ASSETS } from '@/lib/cloudinary';

<Image
  src={getAsset(ASSETS.hero.background, {
    width: 1440,
    height: 900,
    quality: 'auto',
    format: 'auto',
  })}
  alt="Hero"
  width={1440}
  height={900}
/>
```

## 6. Configure Vercel (for deployment)

1. Go to Vercel Project Settings
2. Navigate to "Environment Variables"
3. Add the same variables from `.env.local`:
   - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`

## 7. Best Practices

### Image Optimization
```tsx
// Automatic format and quality
getAsset('messika/hero', { format: 'auto', quality: 'auto' })

// Responsive images
getAsset('messika/hero', { width: 1920, crop: 'fill' })

// High-quality for luxury products
getAsset('messika/product', { quality: 90, format: 'jpg' })
```

### Folder Structure in Cloudinary
```
your-cloud/
├── messika/          # Messika jewelry images
├── labottega/        # La Bottega hospitality images
├── maia/             # Maia process images
└── ui/               # Icons, logos, UI elements
```

### Asset Naming Convention
- Use lowercase
- Use hyphens instead of spaces
- Be descriptive: `hero-background-purple.jpg`
- Include version if needed: `logo-v2.svg`

## 8. Troubleshooting

### Images not loading?
1. Check console for CORS errors
2. Verify `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` is set
3. Ensure public IDs match exactly (case-sensitive)

### Poor image quality?
1. Increase quality parameter: `quality: 90`
2. Use original format for luxury products: `format: 'jpg'`
3. Disable auto optimization for critical images

### Slow loading?
1. Ensure `f_auto,q_auto` is being applied
2. Use appropriate widths (don't load 4K for mobile)
3. Enable lazy loading for below-fold images

## 9. Cost Optimization

Free tier limits:
- 25GB storage
- 25GB bandwidth/month
- 25k transformations/month

Tips:
- Delete unused images regularly
- Use auto format/quality
- Implement lazy loading
- Use appropriate image sizes

## 10. Migration Checklist

- [ ] Create Cloudinary account
- [ ] Get API credentials
- [ ] Set up `.env.local`
- [ ] Upload all assets to Cloudinary
- [ ] Update Hero section images
- [ ] Update Premium Collections images
- [ ] Update La Bottega storytelling images
- [ ] Update Process section images
- [ ] Test all images load correctly
- [ ] Configure Vercel environment variables
- [ ] Deploy and verify production

## Support

- Documentation: https://cloudinary.com/documentation
- Next.js Integration: https://cloudinary.com/documentation/next_integration
- Community: https://community.cloudinary.com
