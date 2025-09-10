// DOM elements
const catImage = document.getElementById('catImage');
const newCatBtn = document.getElementById('newCatBtn');
const errorMessage = document.getElementById('errorMessage');

// The Cat API endpoint
const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search';

// Function to hide error message
function hideError() {
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';
}

// Function to show error message
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Function to set loading state
function setLoadingState(isLoading) {
    if (isLoading) {
        newCatBtn.disabled = true;
        newCatBtn.textContent = 'Loading...';
        newCatBtn.classList.add('loading');
    } else {
        newCatBtn.disabled = false;
        newCatBtn.textContent = 'Get New Cat Photo';
        newCatBtn.classList.remove('loading');
    }
}

// Function to fetch a new cat image
async function fetchNewCat() {
    try {
        // Hide any previous error messages
        hideError();
        
        // Set loading state
        setLoadingState(true);
        
        // Make API request to The Cat API
        const response = await fetch(CAT_API_URL);
        
        // Check if the response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse the JSON response
        const data = await response.json();
        
        // Check if we have data and at least one image
        if (!data || data.length === 0) {
            throw new Error('No cat images found in the response');
        }
        
        // Extract the URL of the first cat image
        const catImageUrl = data[0].url;
        
        // Check if the URL is valid
        if (!catImageUrl) {
            throw new Error('No valid image URL found');
        }
        
        // Update the image source
        catImage.src = catImageUrl;
        catImage.alt = 'Random cat photo';
        
        // Add a small delay to show the loading state
        await new Promise(resolve => setTimeout(resolve, 500));
        
    } catch (error) {
        console.error('Error fetching cat image:', error);
        
        // Show user-friendly error message
        let errorMsg = 'Sorry, we couldn\'t fetch a cat photo right now. ';
        
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            errorMsg += 'Please check your internet connection and try again.';
        } else if (error.message.includes('HTTP error')) {
            errorMsg += 'The cat service is temporarily unavailable. Please try again later.';
        } else {
            errorMsg += 'Please try again in a moment.';
        }
        
        showError(errorMsg);
        
        // Reset the image to show placeholder
        catImage.src = '';
        catImage.alt = 'Click the button to see a cute cat! 🐱';
        
    } finally {
        // Always remove loading state
        setLoadingState(false);
    }
}

// Function to handle image load errors
function handleImageError() {
    console.error('Failed to load cat image');
    showError('The cat photo failed to load. Please try getting a new one!');
    catImage.src = '';
    catImage.alt = 'Click the button to see a cute cat! 🐱';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to the button
    newCatBtn.addEventListener('click', fetchNewCat);
    
    // Add error handler for image loading
    catImage.addEventListener('error', handleImageError);
    
    // Load a cat image when the page first loads
    fetchNewCat();
    
    console.log('Cat Gallery App initialized! 🐱');
});

// Optional: Add keyboard support (Enter key to get new cat)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !newCatBtn.disabled) {
        fetchNewCat();
    }
});
