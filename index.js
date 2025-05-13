//To Do
//When user clicks one how many to purhchase---add up the number of items on an icon in the shopping cart icon.
//fix the catagories to show the product cards when user clicks on them.
//Send a receipt to the users email when the have pressed the pre order form and send how many they have ordered to their email.

//Display each section of the menu on click
function displaySection(section) {
    const allSections = document.querySelectorAll('.product-section');
    allSections.forEach(sec => sec.style.display = 'none');

    const sectionMap = {
        deals: '.meal-section',
        cookies: '.cookie-section',
        drinks: '.drink-section',
        preorder: '.preorder-section'
    };

    const selector = sectionMap[section];
    if (selector) {
        document.querySelector(selector).style.display = 'flex';
    }
}

// Default view
document.addEventListener("DOMContentLoaded", () => {
    displaySection('deals');
});


// Track of items functionality
function track_of_items() {
    //keep track of all selected items
    const items = {
        choco_cookie: 0,
        mnm_cookie: 0,
        lemonade: 0,
        water: 0,
        sparkling_water: 0,
        cookie_bundle: 0,
        cookie_water_bundle: 0,
        cookie_lemonade_bundle: 0,
        cookie_sparklingwater_bundle: 0
    };

    // Function to update quantities
    function updateQuantities() {
        items.choco_cookie = parseInt(document.getElementById('choco_cookie_qty')?.value) || 0;
        items.mnm_cookie = parseInt(document.getElementById('mnm_cookie_qty')?.value) || 0;
        
        console.log('Current items:', items);
        return items;
    }

    // Function to get the total count of all items
    function getTotalItems() {
        const quantities = updateQuantities();
        return Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
    }

    // Function to get the items for submission
    function getItemsForSubmission() {
        const selectedItems = [];
        const quantities = updateQuantities();
        
        for (const [item, qty] of Object.entries(quantities)) {
            if (qty > 0) {
                selectedItems.push({ item, quantity: qty });
            }
        }
        
        return selectedItems;
    }

    // Add event listeners to all quantity inputs
    document.querySelectorAll('.quantity').forEach(input => {
        input.addEventListener('change', updateQuantities);
    });

    return {
        updateQuantities,
        getTotalItems,
        getItemsForSubmission
    };
}

// Initialize the tracker when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    displaySection('deals');
    
    // Initialize item tracker
    const itemTracker = track_of_items();
    
 
});