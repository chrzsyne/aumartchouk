# Open Graph Image Setup

To use your website screenshot as the Open Graph preview image:

1. **Save your screenshot** as `og-image.jpg` in this `public` folder
2. **Resize it** to exactly **1200 × 627 pixels**

## Quick Resize Options:

### Using Online Tools:
- [Squoosh](https://squoosh.app/) - Upload, resize, and download
- [ResizeImage.net](https://resizeimage.net/) - Simple resize tool

### Using Command Line (if you have ImageMagick):
```bash
convert your-screenshot.jpg -resize 1200x627! og-image.jpg
```

### Using Python (if you have Pillow):
```python
from PIL import Image
img = Image.open('your-screenshot.jpg')
img = img.resize((1200, 627), Image.Resampling.LANCZOS)
img.save('og-image.jpg', 'JPEG', quality=95)
```

Once the file is saved as `public/og-image.jpg` at 1200×627, it will automatically be used as the preview image when sharing your website on LinkedIn and other social platforms.
