# 🚀 Edge Suite Pro - Simple Setup Guide

## Step 1: Download These Files

Save each file below to your computer:

### Required Files:
1. **package.json** (from artifact above)
2. **next.config.js** (from artifact above)  
3. **tailwind.config.js** (from artifact above)
4. **postcss.config.js** (from artifact above)
5. **vercel.json** (from artifact above)
6. **EdgeSuitePro-Complete-Component.js** (from artifact above)
7. **.gitignore** (from artifact above)

### Create These Files Manually:

**pages/_app.js:**
```javascript
import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Edge Suite Pro - Knife Sharpening Business Management</title>
        <meta name="description" content="Professional knife sharpening business management application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
```

**pages/index.js:**
```javascript
import EdgeSuitePro from '../components/EdgeSuitePro';

export default function Home() {
  return <EdgeSuitePro />;
}
```

**styles/globals.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

body {
  background: #f9fafb;
}

a {
  color: inherit;
  text-decoration: none;
}
```

## Step 2: Create Folder Structure

Create this folder structure on your computer:

```
edge-suite-pro/
├── components/
│   └── EdgeSuitePro.js     (rename your downloaded file to this)
├── pages/
│   ├── _app.js             (create manually)
│   └── index.js            (create manually)  
├── styles/
│   └── globals.css         (create manually)
├── package.json            (downloaded)
├── next.config.js          (downloaded)
├── tailwind.config.js      (downloaded)
├── postcss.config.js       (downloaded)
├── vercel.json             (downloaded)
└── .gitignore              (downloaded)
```

## Step 3: Install Dependencies

Open terminal/command prompt in your `edge-suite-pro` folder:

```bash
npm install
```

## Step 4: Test Locally

```bash
npm run dev
```

Visit: `http://localhost:3000`

## Step 5: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/edge-suite-pro.git
git push -u origin main
```

## Step 6: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Select your `edge-suite-pro` repository
5. Click "Deploy"

**Done! Your app will be live at: `https://your-project.vercel.app`**

## ❓ Need Help?

**Common Issues:**
- If install fails: Delete `node_modules` and run `npm install` again
- If build fails: Check all file names match exactly
- If styling breaks: Make sure `globals.css` has the Tailwind imports

**File Checklist:**
- [ ] All 12 files created
- [ ] Folder structure matches exactly  
- [ ] Component file is renamed to `EdgeSuitePro.js`
- [ ] Manual files created with correct content
- [ ] No typos in filenames

**Success Indicators:**
- ✅ `npm install` completes without errors
- ✅ `npm run dev` starts successfully
- ✅ App loads at localhost:3000
- ✅ All navigation works
- ✅ Mobile responsive design works
- ✅ No console errors