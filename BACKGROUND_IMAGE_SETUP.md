# Background Image Setup

## Adding the Futuristic Cityscape Background

The home page has been configured to use a futuristic cityscape background image. To complete the setup:

### 1. Add Your Image
The high-tech background image has been added at `src/assets/Flux_Dev_generate_a_hightech_background_image_for_a_web_develo_2.png`.

### 2. Image Features
The current high-tech background image includes:
- **High resolution** futuristic design
- **Digital circuit patterns** and neon light trails
- **Vibrant color palette** with blues, purples, and neon accents
- **Modern tech aesthetic** perfect for web development portfolio
- **Reflective surfaces** and glowing elements

### 3. Image Format
- Use **JPG** or **PNG** format
- Optimize for web (file size under 2MB recommended)
- Ensure good contrast for text readability

### 4. Features Added
The background implementation includes:
- ✅ **Parallax effect** with `background-attachment: fixed`
- ✅ **Dark overlay** for better text readability
- ✅ **Enhanced text shadows** for improved visibility
- ✅ **Responsive design** that works on all devices
- ✅ **Smooth animations** that complement the background
- ✅ **Glass morphism effects** on UI elements

### 5. Customization
You can adjust the overlay opacity by modifying the `rgba` values in the `backgroundImage` style in `Home.jsx`:

```jsx
backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${futuristicCityscape})`
```

### 6. Testing
After adding your image:
1. Run `npm run dev` to start the development server
2. Navigate to the home page
3. Verify the background displays correctly
4. Test on different screen sizes for responsiveness

The background will create a stunning, immersive experience that perfectly complements the modern portfolio design! 