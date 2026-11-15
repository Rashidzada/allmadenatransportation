/**
 * ALL MADENA TRANSPORTATION SERVICES
 * Core Interactive Script
 */

document.addEventListener('DOMContentLoaded', function () {
  // Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside or clicking a link
    document.addEventListener('click', function (e) {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });

    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('active'));
    });
  }

  // Floating WhatsApp Popup Toggle
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

  // FAQ Accordions
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const item = this.parentElement;
      const isActive = item.classList.contains('active');

      // Close all items in this container
      document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Hero Quick Booking Form -> WhatsApp pre-filled redirect
  const quickBookingForm = document.getElementById('quickBookingForm');
  if (quickBookingForm) {
    quickBookingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const vehicle = document.getElementById('quickVehicle')?.value || 'Coaster / Hiace';
      const basis = document.getElementById('quickBasis')?.value || 'Daily Basis';
      const pickup = document.getElementById('quickPickup')?.value || 'Riyadh';
      const destination = document.getElementById('quickDestination')?.value || 'Inside KSA';
      const date = document.getElementById('quickDate')?.value || 'Upcoming';

      const message = `Hello All Madena Transportation! 🚖
I would like to inquire about booking:
• Vehicle: ${vehicle}
• Rental Basis: ${basis}
• Pickup Location: ${pickup}
• Destination: ${destination}
• Date: ${date}
Please provide availability and best rate. Thank you!`;

      const encodedMsg = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/966511024545?text=${encodedMsg}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // Interactive Live Price Estimator
  const calcVehicle = document.getElementById('calcVehicle');
  const calcBasis = document.getElementById('calcBasis');
  const calcCity = document.getElementById('calcCity');
  const calcDuration = document.getElementById('calcDuration');
  const calcPriceDisplay = document.getElementById('calcPriceDisplay');
  const calcWhatsAppBtn = document.getElementById('calcWhatsAppBtn');

  // Base daily rates in SAR estimates
  const baseRates = {
    'coaster': { daily: 750, weekly: 4200, monthly: 14500 },
    'hiace': { daily: 550, weekly: 3200, monthly: 11000 },
    'hafla': { daily: 1200, weekly: 7000, monthly: 24000 },
    'pickup': { daily: 450, weekly: 2600, monthly: 8500 },
    'daina': { daily: 600, weekly: 3500, monthly: 12000 },
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
      unitPrice = vehicleData.daily * 0.85; // Airport / Single transfer approx
      unitLabel = 'Single Trip Transfer';
    }

    const totalEstimate = unitPrice * qty;
    calcPriceDisplay.textContent = `SAR ${totalEstimate.toLocaleString()}`;

    if (calcWhatsAppBtn) {
      const vName = calcVehicle.options[calcVehicle.selectedIndex].text;
      const bName = calcBasis.options[calcBasis.selectedIndex].text;
      const cName = calcCity ? calcCity.options[calcCity.selectedIndex].text : 'Saudi Arabia';

      const msg = `Hello All Madena Transportation,
I used your online calculator for:
• Vehicle: ${vName}
• Rental Type: ${bName} (${unitLabel})
• Location/Route: ${cName}
Estimated Quote: SAR ${totalEstimate.toLocaleString()}
Please confirm driver availability and reservation!`;

      calcWhatsAppBtn.href = `https://wa.me/966511024545?text=${encodeURIComponent(msg)}`;
    }
  }

  if (calcVehicle && calcBasis) {
    calcVehicle.addEventListener('change', updateCalculator);
    calcBasis.addEventListener('change', updateCalculator);
    if (calcCity) calcCity.addEventListener('change', updateCalculator);
    if (calcDuration) calcDuration.addEventListener('input', updateCalculator);
    updateCalculator();
  }

  // General Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('cName')?.value || '';
      const phone = document.getElementById('cPhone')?.value || '';
      const email = document.getElementById('cEmail')?.value || '';
      const vehicle = document.getElementById('cVehicle')?.value || '';
      const message = document.getElementById('cMessage')?.value || '';

      const fullMsg = `Inquiry from All Madena Website:
Name: ${name}
Phone: ${phone}
Email: ${email}
Vehicle Needed: ${vehicle}
Message: ${message}`;

      const alertBox = document.getElementById('formSuccessMessage');
      if (alertBox) {
        alertBox.style.display = 'block';
        alertBox.innerHTML = `<strong>Thank you ${name}!</strong> Your request has been logged. We are also opening WhatsApp for instant confirmation...`;
      }

      setTimeout(() => {
        window.open(`https://wa.me/966511024545?text=${encodeURIComponent(fullMsg)}`, '_blank');
      }, 1200);
    });
  }
});
