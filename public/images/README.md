# Image Assets

This directory contains all image assets used throughout the Career Pulse website.

## Directory Structure

- `/hero` - Hero section images
  - Main banner images
  - Background images for hero sections
  - Overlay images

- `/features` - Feature section images
  - Icons for feature cards
  - Illustrations for features
  - Supporting images

- `/jobs` - Job search related images
  - Job category icons
  - Search interface images
  - Job listing thumbnails

- `/employers` - Employer form related images
  - Form illustrations
  - Employer dashboard images
  - Process flow diagrams

- `/icons` - Custom icons
  - UI icons
  - Navigation icons
  - Action icons
  - Status icons

- `/backgrounds` - Background patterns and textures
  - Pattern SVGs
  - Texture images
  - Gradient backgrounds

## Image Guidelines

1. **File Formats**
   - Use `.webp` for photos and complex images
   - Use `.svg` for icons and logos
   - Use `.png` for images requiring transparency

2. **Naming Convention**
   - Use kebab-case: `feature-name-image.webp`
   - Include size in filename if multiple sizes: `hero-banner-large.webp`
   - Add descriptive names: `team-collaboration.webp`

3. **Optimization**
   - Compress all images before adding
   - Use appropriate image sizes
   - Include responsive versions where needed

4. **Usage in Code**
   ```jsx
   // Example usage in Next.js
   <Image
     src="/images/hero/main-banner.webp"
     alt="Career Pulse Hero Banner"
     width={1200}
     height={600}
     priority
   />
   ``` 