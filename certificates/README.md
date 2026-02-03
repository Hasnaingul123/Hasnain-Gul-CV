# Certificates Directory

This directory contains all your certificates and internship documents for your portfolio.

## How to Add Your Certificates

1. Copy your certificate files from `G:\pg\CART` to this directory
2. Rename them to match the filenames referenced in `index.html`:
   - `ai-for-everyone.pdf` - AI For Everyone certificate
   - `ibm-python.pdf` - IBM Python for Data Science certificate
   - `bi-dashboards.pdf` - BI Dashboards with IBM certificate
   - `data-analytics-bi.pdf` - Data Analytics & BI certificate
   - `data-mining.pdf` - Data Mining & Engineering certificate
   - `internship-form.pdf` - Internship form/certificate

## Quick Copy Command

You can use this PowerShell command to copy all files from CART to here:

```powershell
Copy-Item -Path "G:\pg\CART\*" -Destination "G:\pg\pot\certificates\" -Force
```

Then rename the files to match the names above.

## Supported Formats

- PDF files (.pdf) - Recommended
- Image files (.jpg, .png) - Also supported

## Note

Make sure the filenames in `index.html` match exactly with your actual certificate filenames.
