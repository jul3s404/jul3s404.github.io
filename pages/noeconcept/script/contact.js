document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const success = form.querySelector('.form-success');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    // simple validation
    if (!name || !email || !message) {
      alert('Merci de renseigner votre nom, email et message.');
      return;
    }

    // Build formatted message
    const text = `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone || '—'}\nMessage: ${message}`;

    // Hardcoded WhatsApp API number
    const whatsappNumber = '+352621299531';
    const url = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(text)}&type=phone_number`;

    // Open WhatsApp in a new tab (or app on mobile)
    window.open(url, '_blank');

    // Optionally show confirmation and reset
    form.reset();
    success.style.display = 'block';
    setTimeout(() => success.style.display = 'none', 4000);
  });
});

function devis() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });

}