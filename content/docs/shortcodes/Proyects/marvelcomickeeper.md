
# **Marvel comic keeper**

{{< hint info >}}
Marvel Comic Keeper is a application that integrates with the Marvel API. Users can easily create accounts, immerse themselves in the world of Marvel comics, and effortlessly manage their favorite comic selections. Powered by Express.js for the backend, React.js for the frontend, and MySQL for data management. With its responsive design, the application adapts flawlessly to various devices. Deployment is efficiently handled by Netlify for the frontend and Railway for the backend and database, ensuring a smooth and reliable user experience.
 {{< /hint >}}

Experience Marvel Comic Keeper now by visiting <a href="https://marvelcomickeeper.netlify.app/" target="_blank">Marvel Comic Keeper</a>.

## **App view**
If you want to see how responsive it is, you can adjust the window size or open the Marvel Comic Keeper website by clicking on this <a href="https://marvelcomickeeper.netlify.app/" target="_blank">link</a>.
<div id="iframe-container" style="width: 100%; max-width: 100%; height: 926px; margin: 0 auto; background-color: white;">
  <iframe id="iframe" src="https://marvelcomickeeper.netlify.app/" style="width: 100%; height: 100%; border: none;"></iframe>
</div>

<script>
  // Get a reference to the iframe container and the iframe itself
  var iframeContainer = document.getElementById("iframe-container");
  var iframe = document.getElementById("iframe");

  // Set the initial dimensions of the iframe container
  var width = parseInt(iframeContainer.getAttribute("data-max-width"));
  var height = 600;
  iframeContainer.style.maxWidth = width + "px";
  iframeContainer.style.height = height + "px";

  // Add an event listener to the window object to listen for resize events
  window.addEventListener("resize", function() {
    // Get the new dimensions of the iframe container
    var newWidth = window.innerWidth * 0.8;
    var newHeight = newWidth * (height / width);

    // Set the new dimensions of the iframe container and the iframe itself
    iframeContainer.style.maxWidth = newWidth + "px";
    iframeContainer.style.height = newHeight + "px";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
  });
</script>