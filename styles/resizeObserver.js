// https://website-from-scratch-2.netlify.app/lessons/animating-the-navigation/fixing-the-resizing-issue

const resizeObserver = new ResizeObserver((entries) => {
    document.body.classList.add("resizing");
  
    requestAnimationFrame(() => {
      document.body.classList.remove("resizing");
    });
  });

resizeObserver.observe(document.body);