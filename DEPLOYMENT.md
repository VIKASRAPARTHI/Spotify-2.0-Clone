# Deployment Guide

## Vercel Deployment

### Prerequisites
- GitHub account
- Vercel account (free)
- Project pushed to GitHub

### Step-by-Step Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure project settings:
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to main branch triggers automatic deployment
   - Preview deployments for pull requests

### Build Information
- **Build Size**: ~297KB (gzipped: ~101KB)
- **Assets**: Images, audio files, and CSS included
- **Build Time**: ~2 seconds

### Environment Variables (if needed)
```
VITE_API_URL=your_api_url
VITE_APP_NAME=Spotify Clone
```

### Custom Domain (Optional)
1. Go to Vercel dashboard
2. Select your project
3. Go to "Settings" → "Domains"
4. Add your custom domain

## Alternative Deployment Options

### Netlify
1. Drag and drop `dist` folder to Netlify
2. Or connect GitHub repository
3. Build settings: `npm run build` → `dist`

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/spotify-clone",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## Performance Optimization

### Already Implemented
- Code splitting with Vite
- Asset optimization
- CSS minification
- Tree shaking

### Recommendations
- Use CDN for audio files in production
- Implement lazy loading for images
- Add service worker for offline functionality

## Troubleshooting

### Common Issues
1. **Routing Issues**: Ensure `vercel.json` is configured for SPA
2. **Audio Files**: Large audio files may cause slow loading
3. **CORS Issues**: Ensure proper headers for audio files

### Solutions
- Use `vercel.json` for client-side routing
- Optimize audio files or use streaming
- Configure proper CORS headers