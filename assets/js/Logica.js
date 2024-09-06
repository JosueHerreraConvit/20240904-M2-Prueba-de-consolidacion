function typewriterEffect() {
    const h1Elements = document.querySelectorAll('h1');
  
    h1Elements.forEach(h1 => {
      const text = h1.textContent;
      h1.textContent = '';
  
      let i = 0;
      const typingInterval = setInterval(() => {
        h1.textContent += text[i];
        i++;
        if (i === text.length) {
          clearInterval(typingInterval);
        }
      }, 50); // ...Adjust the speed here (lower value = faster typing)
    });
  }
  
  window.onload = typewriterEffect;
