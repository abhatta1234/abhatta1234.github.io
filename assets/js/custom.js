document.addEventListener('DOMContentLoaded', function() {
  const publicationsContainer = document.getElementById('publications-container');

  if (publicationsContainer) {
    fetch('/assets/data/publications.json') // Jekyll often serves _data YAML files as JSON at this path
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data && data.length > 0) {
          publicationsContainer.innerHTML = ''; // Clear loading message
          data.sort((a, b) => b.year - a.year); // Sort by year, descending

          data.forEach(pub => {
            const pubElement = document.createElement('article');
            pubElement.classList.add('archive__item'); // Use same class as before for CSS

            let html = `<h3 class="archive__item-title">
                          <a href="${pub.url || '#'}" target="_blank" rel="noopener noreferrer">${pub.title}</a>
                        </h3>`;
            if (pub.authors) {
              html += `<p class="archive__item-meta"><strong>Authors:</strong> ${pub.authors}</p>`;
            }
            if (pub.venue) {
              html += `<p class="archive__item-meta"><em>Venue:</em> ${pub.venue} (${pub.year || 'N/A'})</p>`;
            }
            if (pub.abstract) {
              html += `<p class="archive__item-excerpt">${pub.abstract}</p>`;
            }
            
            html += '<div class="publication-links">';
            if (pub.url && pub.url !== '#') {
              html += `<a href="${pub.url}" class="btn" target="_blank" rel="noopener noreferrer">Paper</a>`;
            }
            if (pub.preprint_url && pub.preprint_url !== '#') {
              html += `<a href="${pub.preprint_url}" class="btn" target="_blank" rel="noopener noreferrer">Preprint</a>`;
            }
            if (pub.code_url && pub.code_url !== '#') {
              html += `<a href="${pub.code_url}" class="btn" target="_blank" rel="noopener noreferrer">Code</a>`;
            }
            if (pub.slides_url && pub.slides_url !== '#') {
              html += `<a href="${pub.slides_url}" class="btn" target="_blank" rel="noopener noreferrer">Slides</a>`;
            }
            html += '</div>';

            pubElement.innerHTML = html;
            publicationsContainer.appendChild(pubElement);
          });
        } else {
          publicationsContainer.innerHTML = '<p>No publications found or data is empty. Please check <code>_data/publications.yml</code>.</p>';
        }
      })
      .catch(error => {
        console.error('Error fetching or processing publications:', error);
        publicationsContainer.innerHTML = '<p>Error loading publications. See console for details.</p>';
      });
  } else {
    console.log('Publications container not found on this page.');
  }
}); 