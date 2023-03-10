let elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, span");
  // get all elements that contain text

for (let i = 0; i < elements.length; i++) {
  const words = elements[i].textContent.split(" "); // Split text into words
  for (let j = 0; j < words.length; j++) {
    const halfLength = Math.floor(words[j].length / 2); // Calculate index of middle character
    const firstHalf = words[j].substring(0, halfLength); // Get first half of the word
    const secondHalf = words[j].substring(halfLength); // Get second half of the word
    words[j] = `<b>${firstHalf}</b><span style="font-weight=100">${secondHalf}</span>`; // Wrap first half in span tag and concatenate with second half
  }
  elements[i].innerHTML = words.join(" "); // Join modified words array back into a string and set innerHTML property
}