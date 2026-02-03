# 🚀 GitHub Pages Deployment Guide

Complete step-by-step instructions to publish your CV website to GitHub Pages.

---

## 📋 Prerequisites

- Git installed on your computer
- GitHub account (username: **Hasnaingul123**)
- Repository already exists: **Hasnain-Gul-CV**

> [!IMPORTANT]
> A `.nojekyll` file has been added to your repository to disable Jekyll processing. This is necessary because your CV is a simple HTML/CSS/JS website and doesn't need Jekyll's static site generation.

---

## 🔧 Step 1: Verify Your Local Repository

Your code is already in a Git repository. Let's make sure everything is committed:

```powershell
# Navigate to your project directory
cd e:\CV\Hasnain-Gul-CV

# Check the status of your repository
git status

# Add all changes
git add .

# Commit the changes
git commit -m "Prepare CV website for GitHub Pages deployment"
```

---

## 📤 Step 2: Push to GitHub

If you haven't already connected your local repository to GitHub:

```powershell
# Add the remote repository (if not already added)
git remote add origin https://github.com/Hasnaingul123/Hasnain-Gul-CV.git

# Push your code to GitHub
git push -u origin main
```

**Note:** If your default branch is named `master` instead of `main`, use:
```powershell
git push -u origin master
```

If you get an authentication error, you may need to use a Personal Access Token (PAT) instead of your password.

---

## ⚙️ Step 3: Enable GitHub Pages

1. **Go to your repository on GitHub:**
   - Navigate to: `https://github.com/Hasnaingul123/Hasnain-Gul-CV`

2. **Access Settings:**
   - Click on the **Settings** tab (top right of the repository page)

3. **Navigate to Pages:**
   - In the left sidebar, scroll down and click on **Pages**

4. **Configure Source:**
   - Under **Source**, select the branch you want to deploy (usually `main` or `master`)
   - Keep the folder as **/ (root)**
   - Click **Save**

5. **Wait for Deployment:**
   - GitHub will start building your site
   - This usually takes 1-2 minutes
   - You'll see a message: "Your site is ready to be published at..."

---

## 🌐 Step 4: Access Your Published Website

Your CV will be available at:

```
https://hasnaingul123.github.io/Hasnain-Gul-CV/
```

**Note:** The URL is case-sensitive in the repository name but GitHub Pages typically converts it to lowercase.

---

## ✅ Step 5: Verify Everything Works

Visit your published site and check:

- ✅ All sections load correctly (Home, About, Certificates, Projects, Skills, Contact)
- ✅ Navigation menu works
- ✅ Profile image displays
- ✅ Certificate download links work
- ✅ Contact links (email, LinkedIn, GitHub, phone) are functional
- ✅ Responsive design works on mobile devices

---

## 🔄 Updating Your Website

Whenever you make changes to your CV:

```powershell
# Navigate to your project directory
cd e:\CV\Hasnain-Gul-CV

# Add changes
git add .

# Commit with a descriptive message
git commit -m "Update projects section"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild and deploy your site within 1-2 minutes.

---

## 🛠️ Troubleshooting

### Issue: Site not loading

**Solution:**
- Wait 2-3 minutes after enabling GitHub Pages
- Clear your browser cache
- Try accessing in an incognito/private window

### Issue: Images not showing

**Solution:**
- Ensure all image paths are relative (not absolute)
- Check that image files are committed to the repository
- Verify file names match exactly (case-sensitive)

### Issue: Certificate downloads not working

**Solution:**
- Ensure the `certificates/` folder and PDF files are in your repository
- Check that the file paths in `index.html` match the actual file locations

### Issue: Authentication error when pushing

**Solution:**
- Use a Personal Access Token (PAT) instead of password
- Generate a PAT at: `https://github.com/settings/tokens`
- Use the token as your password when prompted

### Issue: CSS/JS not loading

**Solution:**
- Verify `styles.css` and `script.js` are in the root directory
- Check that the file references in `index.html` are correct
- Clear browser cache and hard refresh (Ctrl + F5)

---

## 📱 Custom Domain (Optional)

If you want to use a custom domain (e.g., `hasnaingul.com`):

1. Purchase a domain from a domain registrar
2. In GitHub Pages settings, add your custom domain
3. Configure DNS settings with your domain registrar
4. Add a `CNAME` file to your repository with your domain name

---

## 🎉 Success!

Your CV is now live on the internet! Share your link:

```
https://hasnaingul123.github.io/Hasnain-Gul-CV/
```

You can add this link to:
- Your LinkedIn profile
- Your email signature
- Your resume
- Job applications

---

## 📞 Need Help?

If you encounter any issues:
- Check GitHub's official documentation: https://docs.github.com/en/pages
- Review the troubleshooting section above
- Ensure all files are properly committed and pushed to GitHub
