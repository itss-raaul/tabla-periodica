(function () {
  const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 7000,
  timerProgressBar: true,
})

window.addEventListener('load', () =>  {
  registerSW();
  Toast.fire({
    icon: 'warning',
    title: 'Estás en la versión beta'
});
});

 async function registerSW() {
   if ('serviceWorker' in navigator) {
     try {
       await navigator.serviceWorker.register('./sw.js');
     } catch (e) {
       console.log('SW registration failed');
     }
   }
 };
})
