function calculateTotalPrice(peopleCount, typeOfGroup, weekDay) {
    const prices = {
        Students: { 
            Friday: 8.45, 
            Saturday: 9.80, 
            Sunday: 10.46, },
        Business: { 
            Friday: 10.90, 
            Saturday: 15.60, 
            Sunday: 16, },
        Regular: { 
            Friday: 15, 
            Saturday: 20, 
            Sunday: 22.50, },
    };

    let pricePerPerson = prices[typeOfGroup]?.[weekDay]; //
    if (!pricePerPerson) {
        console.log("Invalid group type or day.");
        return;
    }

    let totalPrice = peopleCount * pricePerPerson;

    // Apply discounts
    if (typeOfGroup === "Students" && peopleCount >= 30) {
        totalPrice *= 0.85; // 15% discount
    } else if (typeOfGroup === "Business" && peopleCount >= 100) {
        peopleCount -= 10; // Free for 10 people
        totalPrice = peopleCount * pricePerPerson;
    } else if (typeOfGroup === "Regular" && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice *= 0.95; // 5% discount
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

calculateTotalPrice(35, "Students", "Sunday"); // Output: Total price: 311.91
calculateTotalPrice(120, "Business", "Saturday"); // Output: Total price: 1872.00
calculateTotalPrice(15, "Regular", "Monday"); // Output: Total price: 213.75
calculateTotalPrice(15, "Regular", "Friday");// Output: Invalid group type or day.
