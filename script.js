/* =====================================================
   SMART WEIGHT SCALE
   JavaScript
===================================================== */


/* =====================================================
   FOOD DATABASE

   Nutrition values are PER 100 GRAMS.

   calories = kcal
   protein = g
   carbs = g
   fat = g
   saturatedFat = g
   fiber = g
   sugar = g
   sodium = mg
   calcium = mg
   iron = mg
   water = g
===================================================== */

const foodDatabase = {

    apple: {

        icon: "🍎",
        category: "Fruit",

        calories: 52,
        protein: 0.3,
        carbs: 13.8,
        fat: 0.2,
        saturatedFat: 0.0,
        fiber: 2.4,
        sugar: 10.4,
        sodium: 1,
        calcium: 6,
        iron: 0.1,
        water: 85.6

    },


    banana: {

        icon: "🍌",
        category: "Fruit",

        calories: 89,
        protein: 1.1,
        carbs: 22.8,
        fat: 0.3,
        saturatedFat: 0.1,
        fiber: 2.6,
        sugar: 12.2,
        sodium: 1,
        calcium: 5,
        iron: 0.3,
        water: 74.9

    },


    orange: {

        icon: "🍊",
        category: "Fruit",

        calories: 47,
        protein: 0.9,
        carbs: 11.8,
        fat: 0.1,
        saturatedFat: 0,
        fiber: 2.4,
        sugar: 9.4,
        sodium: 0,
        calcium: 40,
        iron: 0.1,
        water: 86.8

    },


    mango: {

        icon: "🥭",
        category: "Fruit",

        calories: 60,
        protein: 0.8,
        carbs: 15,
        fat: 0.4,
        saturatedFat: 0.1,
        fiber: 1.6,
        sugar: 13.7,
        sodium: 1,
        calcium: 11,
        iron: 0.2,
        water: 83.5

    },


    rice: {

        icon: "🍚",
        category: "Grain",

        calories: 130,
        protein: 2.7,
        carbs: 28.2,
        fat: 0.3,
        saturatedFat: 0.1,
        fiber: 0.4,
        sugar: 0.1,
        sodium: 1,
        calcium: 10,
        iron: 0.2,
        water: 68.4

    },


    egg: {

        icon: "🥚",
        category: "Protein",

        calories: 143,
        protein: 12.6,
        carbs: 0.7,
        fat: 9.5,
        saturatedFat: 3.1,
        fiber: 0,
        sugar: 0.4,
        sodium: 142,
        calcium: 56,
        iron: 1.8,
        water: 76.2

    },


    bread: {

        icon: "🍞",
        category: "Grain",

        calories: 266,
        protein: 8.9,
        carbs: 49.4,
        fat: 3.2,
        saturatedFat: 0.7,
        fiber: 2.7,
        sugar: 5.0,
        sodium: 491,
        calcium: 144,
        iron: 3.6,
        water: 35

    },


    chicken: {

        icon: "🍗",
        category: "Meat",

        calories: 165,
        protein: 31,
        carbs: 0,
        fat: 3.6,
        saturatedFat: 1.0,
        fiber: 0,
        sugar: 0,
        sodium: 74,
        calcium: 15,
        iron: 1.0,
        water: 65.3

    },


    beef: {

        icon: "🥩",
        category: "Meat",

        calories: 250,
        protein: 26,
        carbs: 0,
        fat: 15,
        saturatedFat: 6,
        fiber: 0,
        sugar: 0,
        sodium: 72,
        calcium: 18,
        iron: 2.6,
        water: 57.5

    },


    pork: {

        icon: "🥩",
        category: "Meat",

        calories: 242,
        protein: 27,
        carbs: 0,
        fat: 14,
        saturatedFat: 5,
        fiber: 0,
        sugar: 0,
        sodium: 62,
        calcium: 19,
        iron: 0.9,
        water: 61

    },


    fish: {

        icon: "🐟",
        category: "Seafood",

        calories: 136,
        protein: 20,
        carbs: 0,
        fat: 6,
        saturatedFat: 1.5,
        fiber: 0,
        sugar: 0,
        sodium: 60,
        calcium: 20,
        iron: 0.5,
        water: 72

    },


    tuna: {

        icon: "🐟",
        category: "Seafood",

        calories: 132,
        protein: 28,
        carbs: 0,
        fat: 1.3,
        saturatedFat: 0.4,
        fiber: 0,
        sugar: 0,
        sodium: 47,
        calcium: 10,
        iron: 1.0,
        water: 68

    },


    potato: {

        icon: "🥔",
        category: "Vegetable",

        calories: 77,
        protein: 2,
        carbs: 17.5,
        fat: 0.1,
        saturatedFat: 0,
        fiber: 2.2,
        sugar: 0.8,
        sodium: 6,
        calcium: 12,
        iron: 0.8,
        water: 79.2

    },


    tomato: {

        icon: "🍅",
        category: "Vegetable",

        calories: 18,
        protein: 0.9,
        carbs: 3.9,
        fat: 0.2,
        saturatedFat: 0,
        fiber: 1.2,
        sugar: 2.6,
        sodium: 5,
        calcium: 10,
        iron: 0.3,
        water: 95

    },


    carrot: {

        icon: "🥕",
        category: "Vegetable",

        calories: 41,
        protein: 0.9,
        carbs: 9.6,
        fat: 0.2,
        saturatedFat: 0,
        fiber: 2.8,
        sugar: 4.7,
        sodium: 69,
        calcium: 33,
        iron: 0.3,
        water: 88

    }

};


/* =====================================================
   NON-FOOD ITEMS
===================================================== */

const itemDatabase = {

    phone: {

        icon: "📱",
        category: "Electronics"

    },

    smartphone: {

        icon: "📱",
        category: "Electronics"

    },

    laptop: {

        icon: "💻",
        category: "Electronics"

    },

    tablet: {

        icon: "📱",
        category: "Electronics"

    },

    book: {

        icon: "📚",
        category: "School Supplies"

    },

    notebook: {

        icon: "📓",
        category: "School Supplies"

    },

    pencil: {

        icon: "✏️",
        category: "School Supplies"

    },

    pen: {

        icon: "🖊️",
        category: "School Supplies"

    },

    bottle: {

        icon: "🥤",
        category: "Container"

    },

    water: {

        icon: "💧",
        category: "Drink"

    },

    bag: {

        icon: "🎒",
        category: "Household"

    },

    box: {

        icon: "📦",
        category: "Household"

    }

};


/* =====================================================
   DAILY VALUES

   General reference values.
===================================================== */

const dailyValues = {

    calories: 2000,

    protein: 50,

    carbs: 275,

    fat: 78,

    fiber: 28,

    sodium: 2300

};


/* =====================================================
   ELEMENTS
===================================================== */

const itemInput =
    document.getElementById("itemInput");

const weightInput =
    document.getElementById("weightInput");

const unitSelect =
    document.getElementById("unitSelect");

const weightDisplay =
    document.getElementById("weightDisplay");

const displayUnit =
    document.getElementById("displayUnit");

const itemIdentification =
    document.getElementById(
        "itemIdentification"
    );


/* =====================================================
   FIND ITEM
===================================================== */

function findItem(name) {

    name = name
        .toLowerCase()
        .trim();


    if (foodDatabase[name]) {

        return foodDatabase[name];

    }


    if (itemDatabase[name]) {

        return itemDatabase[name];

    }


    /* Search partial names */

    for (let food in foodDatabase) {

        if (name.includes(food)) {

            return foodDatabase[food];

        }

    }


    for (let item in itemDatabase) {

        if (name.includes(item)) {

            return itemDatabase[item];

        }

    }


    return {

        icon: "📦",

        category: "Other"

    };

}


/* =====================================================
   FIND FOOD
===================================================== */

function findFood(name) {

    name = name
        .toLowerCase()
        .trim();


    if (foodDatabase[name]) {

        return foodDatabase[name];

    }


    for (let food in foodDatabase) {

        if (name.includes(food)) {

            return foodDatabase[food];

        }

    }


    return null;

}


/* =====================================================
   CONVERT WEIGHT TO GRAMS
===================================================== */

function convertToGrams(
    weight,
    unit
) {

    if (unit === "kg") {

        return weight * 1000;

    }


    if (unit === "lb") {

        return weight * 453.592;

    }


    return weight;

}


/* =====================================================
   FORMAT NUMBER
===================================================== */

function formatNumber(
    number,
    decimals = 1
) {

    if (!Number.isFinite(number)) {

        return "0";

    }


    return number.toFixed(
        decimals
    );

}


/* =====================================================
   UPDATE SCALE
===================================================== */

function updateScale() {

    const weight =
        parseFloat(
            weightInput.value
        ) || 0;


    const unit =
        unitSelect.value;


    weightDisplay.textContent =
        formatNumber(
            weight,
            1
        );


    displayUnit.textContent =
        unit;


    document.getElementById(
        "infoWeight"
    ).textContent =
        `${formatNumber(weight, 1)} ${unit}`;


    updateItemIdentification();

    updateNutrition();

}


/* =====================================================
   UPDATE ITEM IDENTIFICATION
===================================================== */

function updateItemIdentification() {

    const name =
        itemInput.value
            .trim();


    if (!name) {

        itemIdentification.textContent =
            "Enter an item to identify it.";


        document.getElementById(
            "itemIcon"
        ).textContent =
            "📦";


        document.getElementById(
            "itemName"
        ).textContent =
            "No Item Detected";


        document.getElementById(
            "itemCategory"
        ).textContent =
            "Category: —";


        document.getElementById(
            "servingSize"
        ).textContent =
            "—";


        document.getElementById(
            "calories100"
        ).textContent =
            "—";


        document.getElementById(
            "foodType"
        ).textContent =
            "—";


        return;

    }


    const item =
        findItem(name);


    const food =
        findFood(name);


    itemIdentification.textContent =
        `${item.icon} ${name} identified as ${item.category}.`;


    document.getElementById(
        "itemIcon"
    ).textContent =
        item.icon;


    document.getElementById(
        "itemName"
    ).textContent =
        name;


    document.getElementById(
        "itemCategory"
    ).textContent =
        `Category: ${item.category}`;


    if (food) {

        document.getElementById(
            "servingSize"
        ).textContent =
            "Per 100 g";


        document.getElementById(
            "calories100"
        ).textContent =
            `${food.calories} kcal`;


        document.getElementById(
            "foodType"
        ).textContent =
            "Food";

    } else {

        document.getElementById(
            "servingSize"
        ).textContent =
            "N/A";


        document.getElementById(
            "calories100"
        ).textContent =
            "N/A";


        document.getElementById(
            "foodType"
        ).textContent =
            "Non-food";

    }

}


/* =====================================================
   UPDATE NUTRITION
===================================================== */

function updateNutrition() {

    const name =
        itemInput.value
            .toLowerCase()
            .trim();


    const food =
        findFood(name);


    const weight =
        parseFloat(
            weightInput.value
        ) || 0;


    const unit =
        unitSelect.value;


    const grams =
        convertToGrams(
            weight,
            unit
        );


    if (
        !food ||
        grams <= 0
    ) {

        resetNutrition();

        return;

    }


    /*

       Food database values are per 100 g.

       Example:

       200 g = 2 × nutrition values

    */

    const multiplier =
        grams / 100;


    const calories =
        food.calories *
        multiplier;


    const protein =
        food.protein *
        multiplier;


    const carbs =
        food.carbs *
        multiplier;


    const fat =
        food.fat *
        multiplier;


    const saturatedFat =
        food.saturatedFat *
        multiplier;


    const fiber =
        food.fiber *
        multiplier;


    const sugar =
        food.sugar *
        multiplier;


    const sodium =
        food.sodium *
        multiplier;


    const calcium =
        food.calcium *
        multiplier;


    const iron =
        food.iron *
        multiplier;


    const water =
        food.water *
        multiplier;


    /* Main nutrition */

    document.getElementById(
        "calories"
    ).textContent =
        formatNumber(
            calories,
            0
        );


    document.getElementById(
        "protein"
    ).textContent =
        formatNumber(
            protein,
            1
        );


    /* Other nutrition */

    document.getElementById(
        "carbs"
    ).textContent =
        `${formatNumber(carbs)} g`;


    document.getElementById(
        "fat"
    ).textContent =
        `${formatNumber(fat)} g`;


    document.getElementById(
        "saturatedFat"
    ).textContent =
        `${formatNumber(saturatedFat)} g`;


    document.getElementById(
        "fiber"
    ).textContent =
        `${formatNumber(fiber)} g`;


    document.getElementById(
        "sugar"
    ).textContent =
        `${formatNumber(sugar)} g`;


    document.getElementById(
        "sodium"
    ).textContent =
        `${formatNumber(sodium, 0)} mg`;


    document.getElementById(
        "calcium"
    ).textContent =
        `${formatNumber(calcium, 0)} mg`;


    document.getElementById(
        "iron"
    ).textContent =
        `${formatNumber(iron)} mg`;


    document.getElementById(
        "water"
    ).textContent =
        `${formatNumber(water)} g`;


    /* Daily values */

    document.getElementById(
        "caloriesDV"
    ).textContent =
        `${formatNumber(
            calories / dailyValues.calories * 100,
            1
        )}%`;


    document.getElementById(
        "proteinDV"
    ).textContent =
        `${formatNumber(
            protein / dailyValues.protein * 100,
            1
        )}%`;


    document.getElementById(
        "carbsDV"
    ).textContent =
        `${formatNumber(
            carbs / dailyValues.carbs * 100,
            1
        )}%`;


    document.getElementById(
        "fatDV"
    ).textContent =
        `${formatNumber(
            fat / dailyValues.fat * 100,
            1
        )}%`;


    document.getElementById(
        "fiberDV"
    ).textContent =
        `${formatNumber(
            fiber / dailyValues.fiber * 100,
            1
        )}%`;


    document.getElementById(
        "sodiumDV"
    ).textContent =
        `${formatNumber(
            sodium / dailyValues.sodium * 100,
            1
        )}%`;

}


/* =====================================================
   RESET NUTRITION
===================================================== */

function resetNutrition() {

    document.getElementById(
        "calories"
    ).textContent =
        "0";


    document.getElementById(
        "protein"
    ).textContent =
        "0";


    document.getElementById(
        "carbs"
    ).textContent =
        "0 g";


    document.getElementById(
        "fat"
    ).textContent =
        "0 g";


    document.getElementById(
        "saturatedFat"
    ).textContent =
        "0 g";


    document.getElementById(
        "fiber"
    ).textContent =
        "0 g";


    document.getElementById(
        "sugar"
    ).textContent =
        "0 g";


    document.getElementById(
        "sodium"
    ).textContent =
        "0 mg";


    document.getElementById(
        "calcium"
    ).textContent =
        "0 mg";


    document.getElementById(
        "iron"
    ).textContent =
        "0 mg";


    document.getElementById(
        "water"
    ).textContent =
        "0 g";


    document.getElementById(
        "caloriesDV"
    ).textContent =
        "0%";


    document.getElementById(
        "proteinDV"
    ).textContent =
        "0%";


    document.getElementById(
        "carbsDV"
    ).textContent =
        "0%";


    document.getElementById(
        "fatDV"
    ).textContent =
        "0%";


    document.getElementById(
        "fiberDV"
    ).textContent =
        "0%";


    document.getElementById(
        "sodiumDV"
    ).textContent =
        "0%";

}


/* =====================================================
   GET CURRENT NUTRITION
===================================================== */

function getCurrentNutrition() {

    const name =
        itemInput.value
            .trim();


    const food =
        findFood(name);


    const weight =
        parseFloat(
            weightInput.value
        ) || 0;


    const unit =
        unitSelect.value;


    const grams =
        convertToGrams(
            weight,
            unit
        );


    if (!food) {

        return {

            calories: 0,
            protein: 0,
            carbs: 0,
            fat: 0,
            saturatedFat: 0,
            fiber: 0,
            sugar: 0,
            sodium: 0,
            calcium: 0,
            iron: 0,
            water: 0

        };

    }


    const multiplier =
        grams / 100;


    return {

        calories:
            food.calories *
            multiplier,

        protein:
            food.protein *
            multiplier,

        carbs:
            food.carbs *
            multiplier,

        fat:
            food.fat *
            multiplier,

        saturatedFat:
            food.saturatedFat *
            multiplier,

        fiber:
            food.fiber *
            multiplier,

        sugar:
            food.sugar *
            multiplier,

        sodium:
            food.sodium *
            multiplier,

        calcium:
            food.calcium *
            multiplier,

        iron:
            food.iron *
            multiplier,

        water:
            food.water *
            multiplier

    };

}


/* =====================================================
   HISTORY
===================================================== */

let history =
    JSON.parse(
        localStorage.getItem(
            "weightScaleHistory"
        )
    ) || [];


/* =====================================================
   RECORD MEASUREMENT
===================================================== */

function recordMeasurement() {

    const itemName =
        itemInput.value
            .trim();


    const weight =
        parseFloat(
            weightInput.value
        );


    const unit =
        unitSelect.value;


    if (!itemName) {

        alert(
            "Please enter an item name."
        );

        return;

    }


    if (
        isNaN(weight) ||
        weight <= 0
    ) {

        alert(
            "Please enter a valid weight."
        );

        return;

    }


    const item =
        findItem(itemName);


    const nutrition =
        getCurrentNutrition();


    const record = {

        id:
            Date.now(),

        item:
            itemName,

        icon:
            item.icon,

        category:
            item.category,

        weight:
            weight,

        unit:
            unit,

        calories:
            nutrition.calories,

        protein:
            nutrition.protein,

        carbs:
            nutrition.carbs,

        fat:
            nutrition.fat,

        saturatedFat:
            nutrition.saturatedFat,

        fiber:
            nutrition.fiber,

        sugar:
            nutrition.sugar,

        sodium:
            nutrition.sodium,

        calcium:
            nutrition.calcium,

        iron:
            nutrition.iron,

        water:
            nutrition.water,

        date:
            new Date().toLocaleString()

    };


    history.unshift(
        record
    );


    saveHistory();

    renderHistory();


    alert(
        `${item.icon} ${itemName} recorded successfully!\n\n` +

        `Weight: ${weight} ${unit}\n` +

        `Calories: ${formatNumber(
            nutrition.calories,
            0
        )} kcal\n` +

        `Protein: ${formatNumber(
            nutrition.protein
        )} g`
    );

}


/* =====================================================
   SAVE HISTORY
===================================================== */

function saveHistory() {

    localStorage.setItem(
        "weightScaleHistory",
        JSON.stringify(history)
    );

}


/* =====================================================
   RENDER HISTORY
===================================================== */

function renderHistory(
    filteredHistory = history
) {

    const table =
        document.getElementById(
            "historyTable"
        );


    const empty =
        document.getElementById(
            "emptyHistory"
        );


    table.innerHTML = "";


    if (
        filteredHistory.length === 0
    ) {

        empty.style.display =
            "block";

        return;

    }


    empty.style.display =
        "none";


    filteredHistory.forEach(
        record => {

            const row =
                document.createElement(
                    "tr"
                );


            row.innerHTML = `

                <td>
                    ${record.icon}
                    ${record.item}
                </td>

                <td>
                    ${record.category}
                </td>

                <td>
                    ${formatNumber(
                        record.weight
                    )}
                    ${record.unit}
                </td>

                <td>
                    ${formatNumber(
                        record.calories,
                        0
                    )} kcal
                </td>

                <td>
                    ${formatNumber(
                        record.protein
                    )} g
                </td>

                <td>
                    ${formatNumber(
                        record.carbs
                    )} g
                </td>

                <td>
                    ${formatNumber(
                        record.fat
                    )} g
                </td>

                <td>
                    ${record.date}
                </td>

                <td>

                    <button
                        class="delete-btn"
                        onclick="deleteHistory(${record.id})">

                        Delete

                    </button>

                </td>

            `;


            table.appendChild(
                row
            );

        }
    );

}


/* =====================================================
   DELETE HISTORY
===================================================== */

function deleteHistory(
    id
) {

    const confirmDelete =
        confirm(
            "Delete this measurement?"
        );


    if (!confirmDelete) {

        return;

    }


    history =
        history.filter(
            record =>
                record.id !== id
        );


    saveHistory();

    renderHistory();

}


/* =====================================================
   CLEAR HISTORY
===================================================== */

function clearHistory() {

    if (
        history.length === 0
    ) {

        alert(
            "There is no history to clear."
        );

        return;

    }


    const confirmClear =
        confirm(
            "Are you sure you want to delete all measurement history?"
        );


    if (!confirmClear) {

        return;

    }


    history = [];


    saveHistory();

    renderHistory();

}


/* =====================================================
   SEARCH HISTORY
===================================================== */

function searchHistory() {

    const search =
        document.getElementById(
            "historySearch"
        ).value
        .toLowerCase()
        .trim();


    if (!search) {

        renderHistory();

        return;

    }


    const filtered =
        history.filter(
            record =>

                record.item
                    .toLowerCase()
                    .includes(search)

                ||

                record.category
                    .toLowerCase()
                    .includes(search)

        );


    renderHistory(
        filtered
    );

}


/* =====================================================
   RESET FORM
===================================================== */

function resetForm() {

    itemInput.value =
        "";

    weightInput.value =
        "";

    unitSelect.value =
        "g";


    updateScale();

}


/* =====================================================
   EVENT LISTENERS
===================================================== */

itemInput.addEventListener(
    "input",
    updateScale
);


weightInput.addEventListener(
    "input",
    updateScale
);


unitSelect.addEventListener(
    "change",
    updateScale
);


document.getElementById(
    "recordBtn"
).addEventListener(
    "click",
    recordMeasurement
);


document.getElementById(
    "resetBtn"
).addEventListener(
    "click",
    resetForm
);


document.getElementById(
    "clearHistoryBtn"
).addEventListener(
    "click",
    clearHistory
);


document.getElementById(
    "historySearch"
).addEventListener(
    "input",
    searchHistory
);


/* =====================================================
   INITIALIZE
===================================================== */

renderHistory();

updateScale();
