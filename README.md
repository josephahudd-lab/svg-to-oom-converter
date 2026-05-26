# SVG & PDF to OOM Converter

An interactive web-based wizard to convert SVG and PDF maps to OpenOrienteering Mapper format (`.omap`) with centimeter-perfect geometry, styling inheritance, and area hole support.

## Project Structure
- `index.html`: The main web application. A single-file, serverless dashboard that you can open locally or deploy directly to platforms like Vercel, Netlify, or GitHub Pages.
- `test_conversion.js`: CLI node simulation script for validating conversions.
- `ISSprOM 2019_4000.omap`: Sample template map file containing ISSprOM 2019 symbol palettes.
- `Polaris.svg`: Sample SVG map for testing.

## Getting Started

### Web Dashboard
Simply open `index.html` in any web browser, or deploy the folder to Vercel/Netlify.
1. Upload your template `.omap` file (to extract the target symbol palette).
2. Upload your vector `.svg` or `.pdf` map.
3. Align styles to target symbols using the interactive mapping table, live split-screen preview, and hover-highlighting.
4. Export the resulting `.omap` file.

### CLI Simulation Test
To test the parser programmatically on your machine:
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the test script:
   ```bash
   npm test
   ```
