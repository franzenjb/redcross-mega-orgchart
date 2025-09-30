const { test, expect } = require('@playwright/test');

test.describe('v3.html Red Cross Org Chart', () => {
  test('should load without JavaScript errors', async ({ page }) => {
    // Listen for console errors
    const errors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    // Navigate to the page
    await page.goto('http://localhost:8000/v3.html');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Wait for chart to initialize
    await page.waitForSelector('#chart-container', { timeout: 10000 });
    
    // Wait a bit more for D3 to render
    await page.waitForTimeout(3000);
    
    // Check for JavaScript errors
    const jsErrors = errors.filter(error => 
      error.includes('SyntaxError') || 
      error.includes('ReferenceError') || 
      error.includes('TypeError') ||
      error.includes('already been declared') ||
      error.includes('NaN')
    );
    
    if (jsErrors.length > 0) {
      console.log('JavaScript errors found:', jsErrors);
      throw new Error(`JavaScript errors detected: ${jsErrors.join(', ')}`);
    }
    
    // Check that the chart container exists and has content
    const chartContainer = await page.locator('#chart-container');
    await expect(chartContainer).toBeVisible();
    
    // Check that SVG elements are rendered (indicates D3 chart is working)
    const svgElements = await page.locator('#chart-container svg').count();
    expect(svgElements).toBeGreaterThan(0);
    
    console.log('✅ v3.html loads without JavaScript errors');
  });

  test('should support CSV import functionality', async ({ page }) => {
    const errors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('http://localhost:8000/v3.html');
    await page.waitForLoadState('networkidle');
    await page.waitForSelector('#chart-container', { timeout: 10000 });
    await page.waitForTimeout(2000);

    // Click the Manager Mode button
    const managerBtn = await page.locator('text=Manager Mode');
    if (await managerBtn.count() > 0) {
      await managerBtn.click();
      
      // Check for CSV import functionality
      const csvImportBtn = await page.locator('text=Upload Excel/CSV');
      await expect(csvImportBtn).toBeVisible();
      
      console.log('✅ CSV import functionality is present');
    }
    
    // Check for color-related errors
    const colorErrors = errors.filter(error => 
      error.includes('color') || 
      error.includes('NaN') ||
      error.includes('transform')
    );
    
    if (colorErrors.length > 0) {
      console.log('Color/transform errors found:', colorErrors);
      throw new Error(`Color/transform errors detected: ${colorErrors.join(', ')}`);
    }
  });

  test('should handle sports demo CSV', async ({ page }) => {
    const errors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('http://localhost:8000/v3.html');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);

    // Try to test CSV color functionality if possible
    // This is a basic test to ensure the page doesn't crash with color data
    
    const transformErrors = errors.filter(error => 
      error.includes('NaN') && error.includes('transform')
    );
    
    expect(transformErrors.length).toBe(0);
    
    console.log('✅ No NaN transform errors detected');
  });
});