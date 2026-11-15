/**
 * ALL MADENA TRANSPORTATION SERVICES
 * Core Interactive Script & WhatsApp Trilingual Dispatch Engine
 */

document.addEventListener('DOMContentLoaded', function () {
  
  // ==========================================
  // 1. BEST-FIT MOBILE DRAWER MENU & BACKDROP
  // ==========================================
  const mobileToggleBtns = document.querySelectorAll('.mobile-toggle');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const navDrawer = document.getElementById('mobileNavDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');

  function openDrawer() {
    if (navDrawer && drawerBackdrop) {
      navDrawer.classList.add('active');
      drawerBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (navDrawer && drawerBackdrop) {
      navDrawer.classList.remove('active');
      drawerBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  mobileToggleBtns.forEach(btn => btn.addEventListener('click', openDrawer));
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  const drawerLinks = document.querySelectorAll('.drawer-menu-links a');
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

  // ==========================================
  // 2. FLOATING WHATSAPP POPUP
  // ==========================================
  const whatsappFloatingBtn = document.getElementById('whatsappFloatingBtn');
  const whatsappPopup = document.getElementById('whatsappPopup');
  const whatsappPopupClose = document.getElementById('whatsappPopupClose');

  if (whatsappFloatingBtn && whatsappPopup) {
    whatsappFloatingBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      whatsappPopup.classList.toggle('show');
    });

    if (whatsappPopupClose) {
      whatsappPopupClose.addEventListener('click', function (e) {
        e.stopPropagation();
        whatsappPopup.classList.remove('show');
      });
    }

    document.addEventListener('click', function (e) {
      if (!whatsappPopup.contains(e.target) && !whatsappFloatingBtn.contains(e.target)) {
        whatsappPopup.classList.remove('show');
      }
    });
  }

  // ==========================================
  // 3. FAQ ACCORDION
  // ==========================================
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const item = this.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  // ==========================================
  // 4. TRILINGUAL WHATSAPP MESSAGE BUILDER
  // (Arabic, Urdu, English + Website Source Verification)
  // ==========================================
  function createTrilingualWhatsAppUrl(vehicle, basis, route, date) {
    const text = `السلام عليكم ورحمة الله وبركاته
السلام علیکم ورحمة اللہ وبرکاتہ
Assalamu Alaikum & Greetings,

🌐 Inquiry via Website: allmadenatransportation.com
I am contacting you directly from your official website to book:
• 🚐 Vehicle: ${vehicle || 'Toyota Coaster / Hiace / Bus Hafla / Daina'}
• 📅 Rental Basis: ${basis || 'Daily / Weekly / Monthly'}
• 📍 Location / Route: ${route || 'Inside Kingdom of Saudi Arabia'}
• 🗓️ Preferred Date: ${date || 'Immediate / Flexible'}

برائے مہربانی کرایہ اور گاڑی کی دستیابی بتائیے۔
Please confirm vehicle availability and best quotation.
شكراً جزيلاً / شکریہ`;

    return `https://wa.me/966511024545?text=${encodeURIComponent(text)}`;
  }

  // Quick Hero Booking Form
  const quickBookingForm = document.getElementById('quickBookingForm');
  if (quickBookingForm) {
    quickBookingForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const vehicle = document.getElementById('quickVehicle')?.value || 'Toyota Coaster';
      const basis = document.getElementById('quickBasis')?.value || 'Daily Basis';
      const pickup = document.getElementById('quickPickup')?.value || 'Riyadh';
      const destination = document.getElementById('quickDestination')?.value || 'Inside KSA';
      const date = document.getElementById('quickDate')?.value || 'As soon as possible';

      const url = createTrilingualWhatsAppUrl(vehicle, basis, `${pickup} ➔ ${destination}`, date);
      window.open(url, '_blank');
    });
  }

  // Interactive Live Price Estimator
  const calcVehicle = document.getElementById('calcVehicle');
  const calcBasis = document.getElementById('calcBasis');
  const calcCity = document.getElementById('calcCity');
  const calcDuration = document.getElementById('calcDuration');
  const calcPriceDisplay = document.getElementById('calcPriceDisplay');
  const calcWhatsAppBtn = document.getElementById('calcWhatsAppBtn');

  const baseRates = {
    'coaster': { daily: 750, weekly: 4200, monthly: 14500 },
    'hiace': { daily: 550, weekly: 3200, monthly: 11000 },
    'hafla': { daily: 1200, weekly: 7000, monthly: 24000 },
    'heavybus': { daily: 950, weekly: 5500, monthly: 18000 },
    'pickup': { daily: 450, weekly: 2600, monthly: 8500 },
    'daina': { daily: 600, weekly: 3500, monthly: 12000 },
    'crane': { daily: 1100, weekly: 6500, monthly: 22000 },
    'sedan': { daily: 380, weekly: 2200, monthly: 7000 }
  };

  function updateCalculator() {
    if (!calcVehicle || !calcBasis || !calcPriceDisplay) return;

    const v = calcVehicle.value;
    const b = calcBasis.value;
    const qty = parseInt(calcDuration?.value || '1', 10);
    const vehicleData = baseRates[v] || baseRates['coaster'];

    let unitPrice = 0;
    let unitLabel = '';

    if (b === 'daily') {
      unitPrice = vehicleData.daily;
      unitLabel = `${qty} Day(s)`;
    } else if (b === 'weekly') {
      unitPrice = vehicleData.weekly;
      unitLabel = `${qty} Week(s)`;
    } else if (b === 'monthly') {
      unitPrice = vehicleData.monthly;
      unitLabel = `${qty} Month(s)`;
    } else {
      unitPrice = Math.round(vehicleData.daily * 0.85);
      unitLabel = 'Single Trip Transfer';
    }

    const totalEstimate = unitPrice * qty;
    calcPriceDisplay.textContent = `SAR ${totalEstimate.toLocaleString()}`;

    if (calcWhatsAppBtn) {
      const vName = calcVehicle.options[calcVehicle.selectedIndex].text;
      const bName = calcBasis.options[calcBasis.selectedIndex].text;
      const cName = calcCity ? calcCity.options[calcCity.selectedIndex].text : 'Saudi Arabia';

      const text = `السلام عليكم ورحمة الله وبركاته
السلام علیکم ورحمة اللہ وبرکاتہ
Assalamu Alaikum,

🌐 Inquiry via Website Calculator: allmadenatransportation.com
I used your online calculator and want to book:
• 🚐 Vehicle: ${vName}
• 📅 Package: ${bName} (${unitLabel})
• 📍 Area: ${cName}
• 💰 Estimated Quote: SAR ${totalEstimate.toLocaleString()}

برائے مہربانی ریزرویشن کنفرم کریں۔
Please confirm this reservation and driver dispatch.
شكراً جزيلاً / شکریہ`;

      calcWhatsAppBtn.href = `https://wa.me/966511024545?text=${encodeURIComponent(text)}`;
    }
  }

  if (calcVehicle && calcBasis) {
    calcVehicle.addEventListener('change', updateCalculator);
    calcBasis.addEventListener('change', updateCalculator);
    if (calcCity) calcCity.addEventListener('change', updateCalculator);
    if (calcDuration) calcDuration.addEventListener('input', updateCalculator);
    updateCalculator();
  }

  // General Contact Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('cName')?.value || '';
      const phone = document.getElementById('cPhone')?.value || '';
      const email = document.getElementById('cEmail')?.value || '';
      const vehicle = document.getElementById('cVehicle')?.value || '';
      const message = document.getElementById('cMessage')?.value || '';

      const fullMsg = `السلام عليكم ورحمة الله وبركاته
السلام علیکم ورحمة اللہ وبرکاتہ
Assalamu Alaikum,

🌐 New Inquiry from Website: allmadenatransportation.com
• Name: ${name}
• Client Phone: ${phone}
• Email: ${email}
• Requested Fleet: ${vehicle}
• Details: ${message}

برائے مہربانی فوری رابطہ فرمائیں۔
Please contact me with quotation. شکریہ / شكراً`;

      const alertBox = document.getElementById('formSuccessMessage');
      if (alertBox) {
        alertBox.style.display = 'block';
        alertBox.innerHTML = `<strong>Thank you ${name}!</strong> Opening WhatsApp for instant reservation...`;
      }

      setTimeout(() => {
        window.open(`https://wa.me/966511024545?text=${encodeURIComponent(fullMsg)}`, '_blank');
      }, 800);
    });
  }

  // Automatically enhance fleet card WhatsApp links with Trilingual text
  document.querySelectorAll('.fleet-card').forEach(card => {
    const title = card.querySelector('.fleet-title')?.textContent?.trim() || 'Vehicle';
    const waLink = card.querySelector('a.btn-whatsapp');
    if (waLink) {
      const text = `السلام عليكم ورحمة الله وبركاته
السلام علیکم ورحمة اللہ وبرکاتہ
Assalamu Alaikum,

🌐 Inquiry via Website: allmadenatransportation.com
I am on your website and would like to reserve:
• 🚐 Vehicle: ${title}
• 🇸🇦 Location: Inside Kingdom of Saudi Arabia

برائے مہربانی کرایہ اور دستیابی کی تفصیلات بتائیے۔
Please provide availability and best price.
شكراً جزيلاً / شکریہ`;

      waLink.href = `https://wa.me/966511024545?text=${encodeURIComponent(text)}`;
    }
  });

});
