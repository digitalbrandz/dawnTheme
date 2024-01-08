// Function to handle section load and refresh AOS
function handleSectionLoad2() {
    initRevSliderSections();
}

// Initialize Revolution Sliders in sections
function initRevSliderSections2() {
    document.querySelectorAll('[data-section-id]').forEach(function(container) {
        // Find the nearest ancestor with the class 'shopify-section'
        var shopifySection = container.closest('.shopify-section');

        // Check if the shopifySection has the class 'v1slider'
        if (shopifySection && shopifySection.classList.contains('v1slider')) {
            var slideshow_init = container.getAttribute('data-init');
            if (slideshow_init && typeof window[slideshow_init] === 'function') {
                window[slideshow_init]();
            }
        }
    });
}


// Attach event listeners for Shopify theme editor events
document.addEventListener('DOMContentLoaded', function() {
    // Refresh AOS and initialize sliders when a section is loaded
    document.addEventListener('shopify:section:load', handleSectionLoad2);

    // Optional: Handle other theme editor interactions
    document.addEventListener('shopify:section:unload', handleSectionLoad2);
    document.addEventListener('shopify:section:select', handleSectionLoad2);
    document.addEventListener('shopify:section:deselect', handleSectionLoad2);
    document.addEventListener('shopify:block:select', handleSectionLoad2);
    document.addEventListener('shopify:block:deselect', handleSectionLoad2);

    // Initial setup for sliders on page load
    initRevSliderSections2();
});
