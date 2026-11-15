# All Madena Transportation Services (allmadenatransportation.com)

Official high-performance static website for **All Madena Transportation Services (شركة نقل المدينة)**, operating across the Kingdom of Saudi Arabia (Riyadh, Jeddah, Makkah, Madinah, Dammam, and all provinces).

---

## 🚀 Website Highlights & Features

- **Fleet Coverage**:
  - **Toyota Coaster (Cosater)**: 22 - 30 seats luxury passenger bus
  - **Toyota Hiace**: 12 - 15 seats high-roof passenger van
  - **Bus Hafla**: 30 - 50 seats party & event coach with sound and mood lighting
  - **Pick Up**: Double-cab 4x4 commercial site & inspection truck
  - **Car Daina (Dyna Truck)**: 3.5 - 5 ton commercial freight & furniture shifting
  - **Executive Sedan**: Toyota Camry / VIP Chauffeur airport transfers
- **Direct WhatsApp Integration**:
  - Official WhatsApp Catalog link: [`https://wa.me/p/9263387833737993/966511024545`](https://wa.me/p/9263387833737993/966511024545)
  - Direct WhatsApp chat link: [`https://wa.me/966511024545`](https://wa.me/966511024545)
  - Floating WhatsApp multi-action popup and quick chat trigger
  - Auto-formatted pre-filled WhatsApp booking messages
- **Interactive Tools**:
  - Real-time Price & Trip Quote Estimator (Daily, Weekly, Monthly rates in SAR)
  - Interactive booking & inquiry forms
  - Interactive FAQ accordion
  - Responsive mobile navigation drawer
- **Complete 10-Page Architecture**:
  1. `index.html` - Master Landing Portal & Single-Page Showcase
  2. `about.html` - Company Profile, Values, Safety & Vision 2030
  3. `services.html` - Full Services (Corporate, Airport, Umrah, Hafla, Logistics)
  4. `fleet.html` - Complete Vehicle Fleet Directory
  5. `coaster-hiace.html` - Dedicated Coaster & Hiace Shuttles
  6. `hafla-bus.html` - Dedicated Bus Hafla Party & Event Coach
  7. `daina-pickup.html` - Dedicated Daina Truck & Pick Up Commercial Freight
  8. `corporate-contracts.html` - Corporate Staff Shuttles & Monthly/Annual Contracts
  9. `pricing.html` - Transparent Rate Matrix & Live Cost Estimator
  10. `contact.html` - Contact Details, Interactive Form, Location & WhatsApp Catalog Link
  - Supporting files: `404.html`, `privacy.html`, `terms.html`, `robots.txt`, `sitemap.xml`, and `CNAME`.

---

## 🛠️ Deployment Instructions

### 1. Initialize Git & Push to GitHub

In your project terminal (`c:\Users\RashidZada\Desktop\allmadenatransportation`), run:

```bash
git init
git add .
git commit -m "Initial commit: All Madena Transportation website complete 10-page suite"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/allmadenatransportation.git
git push -u origin main
```

*(Replace `YOUR_USERNAME` with your actual GitHub username).*

---

### 2. Connect to Cloudflare Pages (Free, Fast, Automatic HTTPS)

1. Log into your **Cloudflare Dashboard** ([dash.cloudflare.com](https://dash.cloudflare.com/)).
2. Go to **Workers & Pages** > **Create application** > **Pages** tab > **Connect to Git**.
3. Select your GitHub repository (`allmadenatransportation`).
4. Set Build Settings:
   - **Framework preset**: `None`
   - **Build command**: *(leave empty)*
   - **Build output directory**: `/` *(root)*
5. Click **Save and Deploy**. Cloudflare Pages will build and deploy your site in less than 30 seconds!

---

### 3. Connect Domain `allmadenatransportation.com` from Namecheap

1. In Cloudflare Pages, go to **Custom domains** > **Set up a custom domain**.
2. Enter `allmadenatransportation.com` (and `www.allmadenatransportation.com`).
3. In **Namecheap**:
   - Go to **Domain List** > click **Manage** next to `allmadenatransportation.com`.
   - In **Nameservers**, change from Namecheap BasicDNS to **Custom DNS** and paste the Cloudflare Nameservers provided by Cloudflare.
   - Alternatively, add a `CNAME` record in Namecheap Advanced DNS pointing `@` and `www` to your `*.pages.dev` project address.
4. SSL/TLS is issued automatically by Cloudflare with free 100% automated renewals!
