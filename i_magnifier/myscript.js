document.getElementById("zoom").addEventListener(
  "mousemove",
  function (e) {
    var original = document.getElementById("main-img"),
      magnified = document.getElementById("large-img"),
      style = magnified.style,
      x = e.pageX - this.offsetLeft,
      y = e.pageY - this.offsetTop,
      imgWidth = original.width,
      imgHeight = original.height,
      xperc = (x / imgWidth) * 100,
      yperc = (y / imgHeight) * 100;

    // Add some margin for right edge
    if (x > 0.01 * imgWidth) {
      xperc += 0.15 * xperc;
    }

    // Add some margin for bottom edge
    if (y >= 0.01 * imgHeight) {
      yperc += 0.15 * yperc;
    }

    // Set the background of the magnified image horizontal
    style.backgroundPositionX = xperc - 9 + "%";
    // Set the background of the magnified image vertical
    style.backgroundPositionY = yperc - 9 + "%";

    // Move the magnifying glass with the mouse movement.
    style.left = x - 50 + "px";
    style.top = y - 50 + "px";
  },
  false
);

// basic code snippets from https://daily-dev-tips.com/posts/vanilla-javascript-image-magnify-%F0%9F%94%8E/
