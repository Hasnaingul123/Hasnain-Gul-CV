# Custom Domain Setup Guide for hasnaingul.me

Complete step-by-step instructions to connect your custom domain `hasnaingul.me` to your GitHub Pages CV website.

---

## 📋 Overview

You'll configure your domain `hasnaingul.me` to point to your GitHub Pages site at `https://hasnaingul123.github.io/Hasnain-Gul-CV/`

---

## Part 1: Configure DNS Settings (At Your Domain Registrar)

### Step 1: Access Your Domain's DNS Settings

1. Log in to your domain registrar where you purchased `hasnaingul.me` (e.g., Namecheap, GoDaddy, Google Domains, Cloudflare, etc.)
2. Navigate to **DNS Management** or **DNS Settings** for `hasnaingul.me`

### Step 2: Add DNS Records

You need to add **4 A records** and **1 CNAME record**:

#### A Records (for apex domain: hasnaingul.me)

Add these 4 A records pointing to GitHub's IP addresses:

| Type | Name/Host | Value/Points to | TTL |
|------|-----------|-----------------|-----|
| A    | @         | 185.199.108.153 | 3600 (or Auto) |
| A    | @         | 185.199.109.153 | 3600 (or Auto) |
| A    | @         | 185.199.110.153 | 3600 (or Auto) |
| A    | @         | 185.199.111.153 | 3600 (or Auto) |

**Note:** `@` represents your root domain (hasnaingul.me)

#### CNAME Record (for www subdomain)

Add this CNAME record:

| Type  | Name/Host | Value/Points to | TTL |
|-------|-----------|-----------------|-----|
| CNAME | www       | hasnaingul123.github.io | 3600 (or Auto) |

### Step 3: Save DNS Changes

- Click **Save** or **Apply Changes**
- DNS propagation can take **24-48 hours** (usually much faster, often 15-30 minutes)

---

## Part 2: Configure GitHub Repository

### Step 1: Add CNAME File to Repository

Create a file named `CNAME` (no extension) in the root of your repository with your domain:

**File:** `CNAME`
**Content:** 
```
hasnaingul.me
```

I'll create this file for you in the next step.

### Step 2: Push CNAME File to GitHub

After I create the file, you'll need to:

```powershell
cd e:\CV\Hasnain-Gul-CV
git add CNAME
git commit -m "Add custom domain CNAME"
git push
```

### Step 3: Configure Custom Domain in GitHub Settings

1. Go to your repository: `https://github.com/Hasnaingul123/Hasnain-Gul-CV`
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under **Custom domain**, enter: `hasnaingul.me`
5. Click **Save**
6. Wait a few moments for DNS check
7. ✅ Check the box **Enforce HTTPS** (important for security!)

---

## Part 3: Verification

### Check DNS Propagation

Use online tools to verify DNS propagation:
- Visit: `https://dnschecker.org/`
- Enter: `hasnaingul.me`
- Check that A records point to GitHub's IPs

### Test Your Domain

After DNS propagates (15 minutes to 48 hours):

1. Visit: `http://hasnaingul.me` - Should redirect to your CV
2. Visit: `https://hasnaingul.me` - Should work with HTTPS (after enabling)
3. Visit: `http://www.hasnaingul.me` - Should redirect to your CV

---

## 🎯 Expected Results

Once everything is configured:

- ✅ `hasnaingul.me` → Your CV website
- ✅ `www.hasnaingul.me` → Your CV website
- ✅ HTTPS enabled (secure connection with padlock 🔒)
- ✅ Old URL still works: `https://hasnaingul123.github.io/Hasnain-Gul-CV/`

---

## 📝 DNS Configuration Examples by Registrar

### Namecheap

1. Dashboard → Domain List → Manage
2. Advanced DNS tab
3. Add the A and CNAME records as shown above

### GoDaddy

1. My Products → DNS
2. Add the A and CNAME records as shown above

### Cloudflare

1. DNS → Records
2. Add the A and CNAME records
3. **Important:** Set Proxy status to "DNS only" (gray cloud) for initial setup

### Google Domains

1. DNS → Custom records
2. Add the A and CNAME records as shown above

---

## 🛠️ Troubleshooting

### Issue: Domain not resolving after 48 hours

**Solution:**
- Verify DNS records are correct (check for typos)
- Ensure you saved the DNS changes
- Use `nslookup hasnaingul.me` in terminal to check DNS

### Issue: "Domain is improperly configured" in GitHub

**Solution:**
- Wait for DNS propagation (can take up to 48 hours)
- Verify A records point to all 4 GitHub IPs
- Ensure CNAME file contains only `hasnaingul.me` (no http://, no trailing slash)

### Issue: HTTPS not available

**Solution:**
- Wait 24 hours after adding custom domain
- Ensure "Enforce HTTPS" is checked in GitHub Pages settings
- GitHub automatically provisions SSL certificate (can take time)

### Issue: www subdomain not working

**Solution:**
- Verify CNAME record: `www` → `hasnaingul123.github.io`
- Wait for DNS propagation

---

## 🔐 Security Best Practices

1. ✅ Always enable **Enforce HTTPS** in GitHub Pages settings
2. ✅ Use HTTPS URLs when sharing your CV
3. ✅ Keep your domain registrar account secure (2FA enabled)

---

## 📞 Additional Resources

- GitHub Pages Custom Domain Docs: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- DNS Checker: https://dnschecker.org/
- GitHub's IP Addresses: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

---

## ✅ Quick Checklist

- [ ] Add 4 A records to DNS (pointing to GitHub IPs)
- [ ] Add CNAME record for www subdomain
- [ ] Create CNAME file in repository
- [ ] Push CNAME file to GitHub
- [ ] Add custom domain in GitHub Pages settings
- [ ] Enable HTTPS enforcement
- [ ] Wait for DNS propagation
- [ ] Test domain access
- [ ] Verify HTTPS works

---

**Estimated Total Time:** 15 minutes setup + up to 48 hours DNS propagation
