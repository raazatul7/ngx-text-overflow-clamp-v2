# ngx-text-overflow-clamp-v2 Demo

This demo project helps you test the `ngx-text-overflow-clamp-v2` library before publishing.

## Setup

1. **Build the library first** (from the parent directory):
   ```sh
   cd ..
   npm run build
   ```

2. **Navigate to the demo test app**:
   ```sh
   cd demo/test-app
   ```

3. **Install dependencies** (already done):
   ```sh
   npm install
   ```

4. **Run the demo**:
   ```sh
   npm start
   ```

5. **Open your browser** to `http://localhost:4200`

## What to Test

The demo includes various test cases:

### ✅ **Basic Functionality**
- 2-line clamp
- 3-line clamp  
- 1-line clamp
- 4-line clamp

### ✅ **Dynamic Usage**
- Changing clamp lines dynamically
- Button interaction

### ✅ **Edge Cases**
- Short text (should not clamp)
- Empty text
- Different container widths

### ✅ **Import Methods**
- Standalone directive usage
- NgModule usage (legacy)

## Expected Behavior

- Text should be clamped to the specified number of lines
- Ellipsis (`...`) should appear at the end of clamped text
- Short text should display normally without ellipsis
- Dynamic changes should work when button is clicked

## Troubleshooting

If you encounter issues:

1. **Module not found error**: Make sure the library is built and installed correctly
2. **No clamping effect**: Check that the container has a defined width
3. **TypeScript errors**: Ensure Angular 20+ and TypeScript 5.8+ are being used

## Files Modified

- `src/app/app.ts` - Main demo component with test cases
- `package.json` - Added ngx-text-overflow-clamp-v2 dependency 