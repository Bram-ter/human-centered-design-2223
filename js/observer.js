const sections = document.querySelectorAll('section');
const buttons = document.querySelectorAll('#scrollButtons li');
let currentSectionIndex = 0;
let activeHeading = sections[currentSectionIndex].querySelector('h1'); // store the active heading element

// Create an IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove the active class from all sections
      sections.forEach(section => {
        section.classList.remove('active');
      });

      // Add the active class to the intersecting section
      entry.target.classList.add('active');
      // Update the currentSectionIndex
      currentSectionIndex = Array.from(sections).indexOf(entry.target);

      // Update the active heading element
      activeHeading = entry.target.querySelector('h1');
    }
  });
});

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});

// Add click event listeners to the buttons
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index === 0) {
      // Scroll to the previous section
      currentSectionIndex--;
    } else if (index === 1) {
      // Scroll to the next section
      currentSectionIndex++;
    }
    // Make sure the currentSectionIndex is within the range of sections
    currentSectionIndex = Math.max(0, Math.min(currentSectionIndex, sections.length - 1));
    // Scroll to the current section
    sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });

    // Update the active heading element
    activeHeading = sections[currentSectionIndex].querySelector('h1');
  });
});

// * Copy * //

// select the list items
const firstList = document.querySelectorAll('#copyButtons div:nth-of-type(2) ul li');
const secondList = document.querySelectorAll('#copyButtons div:nth-of-type(3) ul li');

// add click event listeners to each list item
firstList.forEach((item, index) => {
  item.addEventListener('click', () => {
    // select the corresponding heading element based on the index of the clicked li
    const headings = sections[currentSectionIndex].querySelectorAll('h1, h2, h3, h4, h5, h6');
    const clickedHeading = headings[index];

    // copy the heading text to the clipboard
    navigator.clipboard.writeText(clickedHeading.textContent);
  });
});

// add click event listeners to each list item
secondList.forEach((item, index) => {
  item.addEventListener('click', () => {
    // select the corresponding heading element based on the index of the clicked li
    const texts = sections[currentSectionIndex].querySelectorAll('section p');
    const clickedText = texts[index];

    // copy the heading text to the clipboard
    navigator.clipboard.writeText(clickedText.textContent);
  });
});