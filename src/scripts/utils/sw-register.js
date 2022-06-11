const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    // declaring scope manually
    navigator.serviceWorker.register('./sw.js', { scope: './' }).then((registration) => {
      console.log('Service worker registration succeeded:', registration);
    }, /* catch */ (error) => {
      console.log('Service worker registration failed:', error);
    });
  } else {
    console.log('Service workers are not supported.');
  }
};

export default swRegister;
