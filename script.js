/* =====================================================
   FOOD DATABASE
===================================================== */

const foodDatabase = {

    apple: {
        icon: "🍎",
        category: "Fruit",
        servingSize: "100 g",
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
        servingSize: "100 g",
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
        servingSize: "100 g",
        calories: 47,
        protein: 0.9,
        carbs: 11.8,
        fat: 0.1,
        saturatedFat: 0.0,
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
        servingSize: "100 g",
        calories: 60,
        protein: 0.8,
        carbs: 15.0,
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
        servingSize: "100 g",
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
        servingSize: "100 g",
        calories: 155,
        protein: 13.0,
        carbs: 1.1,
        fat: 11.0,
        saturatedFat: 3.3,
        fiber: 0,
        sugar: 1.1,
        sodium: 124,
        calcium: 50,
        iron: 1.2,
        water: 76.2
    },

    bread: {
        icon: "🍞",
        category: "Grain",
        servingSize: "100 g",
        calories: 265,
        protein: 9.0,
        carbs: 49.0,
        fat: 3.2,
        saturatedFat: 0.7,
        fiber: 2.7,
        sugar: 5.0,
        sodium: 491,
        calcium: 144,
        iron: 3.6,
        water: 35.0
    },

    chicken: {
        icon: "🍗",
        category: "Meat",
        servingSize: "100 g",
        calories: 239,
        protein: 27.3,
        carbs: 0,
        fat: 13.6,
        saturatedFat: 3.8,
        fiber: 0,
        sugar: 0,
        sodium: 82,
        calcium: 15,
        iron: 1.3,
        water: 65.3
    },

    beef: {
        icon: "🥩",
        category: "Meat",
        servingSize: "100 g",
        calories: 250,
        protein: 26.0,
        carbs: 0,
        fat: 15.0,
        saturatedFat: 6.0,
        fiber: 0,
        sugar: 0,
        sodium: 72,
        calcium: 18,
        iron: 2.6,
        water: 61.9
    },

    pork: {
        icon: "🥩",
        category: "Meat",
        servingSize: "100 g",
        calories: 242,
        protein: 27.3,
        carbs: 0,
        fat: 14.0,
        saturatedFat: 5.0,
        fiber: 0,
        sugar: 0,
        sodium: 62,
        calcium: 19,
        iron: 0.9,
        water: 61.1
    },

    fish: {
        icon: "🐟",
        category: "Seafood",
        servingSize: "100 g",
        calories: 206,
        protein: 22.0,
        carbs: 0,
        fat: 12.4,
        saturatedFat: 2.0,
        fiber: 0,
        sugar: 0,
        sodium: 59,
        calcium: 15,
        iron: 0.3,
        water: 64.4
    },

    tuna: {
        icon: "🐟",
        category: "Seafood",
        servingSize: "100 g",
        calories: 132,
        protein: 28.0,
        carbs: 0,
        fat: 1.3,
        saturatedFat: 0.4,
        fiber: 0,
        sugar: 0,
        sodium: 47,
        calcium: 10,
        iron: 1.0,
        water: 68.0
    },

    potato: {
        icon: "🥔",
        category: "Vegetable",
        servingSize: "100 g",
        calories: 77,
        protein: 2.0,
        carbs: 17.5,
        fat: 0.1,
        saturatedFat: 0.0,
        fiber: 2.2,
        sugar: 0.8,
        sodium: 6,
        calcium: 12,
        iron: 0.8,
        water: 79.3
    },

    tomato: {
        icon: "🍅",
        category: "Vegetable",
        servingSize: "100 g",
        calories: 18,
        protein: 0.9,
        carbs: 3.9,
        fat: 0.2,
        saturatedFat: 0.0,
        fiber: 1.2,
        sugar: 2.6,
        sodium: 5,
        calcium: 10,
        iron: 0.3,
        water: 95.0
    },

    carrot: {
        icon: "🥕",
        category: "Vegetable",
        servingSize: "100 g",
        calories: 41,
        protein: 0.9,
        carbs: 9.6,
        fat: 0.2,
        saturatedFat: 0.0,
        fiber: 2.8,
        sugar: 4.7,
        sodium: 69,
        calcium: 33,
        iron: 0.3,
        water: 88.3
    }
};


/* =====================================================
   NON-FOOD DATABASE
===================================================== */

const itemDatabase = {

    phone: {
        icon: "📱",
        category: "Electronic Device"
    },

    smartphone: {
        icon: "📱",
        category: "Electronic Device"
    },

    laptop: {
        icon: "💻",
        category: "Electronic Device"
    },

    tablet: {
        icon: "📱",
        category: "Electronic Device"
    },

    book: {
        icon: "📚",
        category: "School Supply"
    },

    notebook: {
        icon: "📓",
        category: "School Supply"
    },

    pencil: {
        icon: "✏️",
        category: "School Supply"
    },

    pen: {
        icon: "🖊️",
        category: "School Supply"
    },

    bottle: {
        icon: "🍼",
        category: "Container"
    },

    water: {
        icon: "💧",
        category: "Liquid"
    },

    bag: {
        icon: "👜",
        category: "Personal Item"
    },

    box: {
        icon: "📦",
        category: "Container"
    }
};


/* =====================================================
   DAILY VALUES
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

const itemInput = document.getElementById("itemInput");

const weightInput = document.getElementById("weightInput");

const unitSelect = document.getElementById("unitSelect");

const weightDisplay = document.getElementById("weightDisplay");

const displayUnit = document.getElementById("displayUnit");

const itemIdentification =
    document.getElementById("itemIdentification");


const itemIcon =
    document.getElementById("itemIcon");

const itemName =
    document.getElementById("itemName");

const itemCategory =
    document.getElementById("itemCategory");

const infoWeight =
    document.getElementById("infoWeight");

const servingSize =
    document.getElementById("servingSize");

const calories100 =
    document.getElementById("calories100");

const foodType =
    document.getElementById("foodType");


const recordBtn =
    document.getElementById("recordBtn");

const resetBtn =
    document.getElementById("resetBtn");

const clearHistoryBtn =
    document.getElementById("clearHistoryBtn");

const historySearch =
    document.getElementById("historySearch");

const historyTableBody =
    document.getElementById("historyTableBody");


/* =====================================================
   HELPER FUNCTIONS
===================================================== */

function findItem(name) {

    const key = name
        .trim()
        .toLowerCase();

    return itemDatabase[key] || null;
}


function findFood(name) {

    const key = name
        .trim()
        .toLowerCase();

    return foodDatabase[key] || null;
}


function convertToGrams(weight, unit) {

    if (!Number.isFinite(weight)) {
        return 0;
    }

    if (unit === "kg") {
        return weight * 1000;
    }

    if (unit === "lb") {
        return weight * 453.592;
    }

    return weight;
}


function formatNumber(value, decimals = 2) {

    if (!Number.isFinite(value)) {
        return "0";
    }

    return Number(value.toFixed(decimals))
        .toLocaleString();
}


function animateElement(element, className) {

    if (!element) {
        return;
    }

    element.classList.remove(className);

    void element.offsetWidth;

    element.classList.add(className);

    setTimeout(() => {
        element.classList.remove(className);
    }, 600);
}


/* =====================================================
   UPDATE WEIGHT DISPLAY
===================================================== */

function updateScale() {

    let weight =
        parseFloat(weightInput.value);

    const unit =
        unitSelect.value;


    if (!Number.isFinite(weight) || weight < 0) {
        weight = 0;
    }


    weightDisplay.textContent =
        formatNumber(weight, 2);


    displayUnit.textContent = unit;


    animateElement(
        weightDisplay,
        "weight-changed"
    );


    updateItemIdentification();

    updateNutrition();

}


/* =====================================================
   ITEM IDENTIFICATION
===================================================== */

function updateItemIdentification() {

    const name =
        itemInput.value.trim();


    const weight =
        parseFloat(weightInput.value);


    const unit =
        unitSelect.value;


    const grams =
        convertToGrams(
            weight,
            unit
        );


    if (!name) {

        itemIcon.textContent = "❓";

        itemName.textContent =
            "No item detected";

        itemCategory.textContent = "—";

        infoWeight.textContent = "—";

        servingSize.textContent = "—";

        calories100.textContent = "—";

        foodType.textContent = "—";

        return;
    }


    const food =
        findFood(name);


    const item =
        findItem(name);


    if (food) {

        itemIcon.textContent =
            food.icon;

        itemName.textContent =
            capitalize(name);

        itemCategory.textContent =
            food.category;

        infoWeight.textContent =
            `${formatNumber(grams)} g`;

        servingSize.textContent =
            food.servingSize;

        calories100.textContent =
            `${food.calories} kcal`;

        foodType.textContent =
            "Food";

    } else if (item) {

        itemIcon.textContent =
            item.icon;

        itemName.textContent =
            capitalize(name);

        itemCategory.textContent =
            item.category;

        infoWeight.textContent =
            `${formatNumber(grams)} g`;

        servingSize.textContent =
            "N/A";

        calories100.textContent =
            "N/A";

        foodType.textContent =
            "Non-food";

    } else {

        itemIcon.textContent = "❓";

        itemName.textContent =
            capitalize(name);

        itemCategory.textContent =
            "Unknown";

        infoWeight.textContent =
            `${formatNumber(grams)} g`;

        servingSize.textContent =
            "N/A";

        calories100.textContent =
            "N/A";

        foodType.textContent =
            "Unknown";
    }


    animateElement(
        itemIdentification,
        "item-updated"
    );
}


/* =====================================================
   NUTRITION
===================================================== */

function updateNutrition() {

    const name =
        itemInput.value.trim();


    const food =
        findFood(name);


    const weight =
        parseFloat(weightInput.value);


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


    const multiplier =
        grams / 100;


    const nutritionFields = [

        "calories",
        "protein",
        "carbs",
        "fat",
        "saturatedFat",
        "fiber",
        "sugar",
        "sodium",
        "calcium",
        "iron",
        "water"

    ];


    nutritionFields.forEach(field => {

        const element =
            document.getElementById(field);


        if (!element) {
            return;
        }


        let value =
            food[field] * multiplier;


        let suffix =
            " g";


        if (field === "calories") {
            suffix = " kcal";
        }


        if (
            field === "sodium" ||
            field === "calcium" ||
            field === "iron"
        ) {
            suffix = " mg";
        }


        element.textContent =
            `${formatNumber(value)}${suffix}`;


        animateElement(
            element.parentElement,
            "nutrition-updated"
        );

    });


    updateDailyValues(food, multiplier);

}


/* =====================================================
   DAILY VALUE CALCULATIONS
===================================================== */

function updateDailyValues(
    food,
    multiplier
) {

    const values = {

        calories:
            (food.calories * multiplier)
            / dailyValues.calories * 100,

        protein:
            (food.protein * multiplier)
            / dailyValues.protein * 100,

        carbs:
            (food.carbs * multiplier)
            / dailyValues.carbs * 100,

        fat:
            (food.fat * multiplier)
            / dailyValues.fat * 100,

        fiber:
            (food.fiber * multiplier)
            / dailyValues.fiber * 100,

        sodium:
            (food.sodium * multiplier)
            / dailyValues.sodium * 100

    };


    Object.keys(values).forEach(key => {

        const element =
            document.getElementById(
                `${key}DV`
            );


        if (!element) {
            return;
        }


        element.textContent =
            `${formatNumber(values[key], 1)}%`;

    });

}


/* =====================================================
   RESET NUTRITION
===================================================== */

function resetNutrition() {

    const fields = [

        "calories",
        "protein",
        "carbs",
        "fat",
        "saturatedFat",
        "fiber",
        "sugar",
        "sodium",
        "calcium",
        "iron",
        "water"

    ];


    fields.forEach(field => {

        const element =
            document.getElementById(field);


        if (!element) {
            return;
        }


        let suffix = " g";


        if (field === "calories") {
            suffix = " kcal";
        }


        if (
            field === "sodium" ||
            field === "calcium" ||
            field === "iron"
        ) {
            suffix = " mg";
        }


        element.textContent =
            `0${suffix}`;

    });


    const dailyFields = [

        "caloriesDV",
        "proteinDV",
        "carbsDV",
        "fatDV",
        "fiberDV",
        "sodiumDV"

    ];


    dailyFields.forEach(id => {

        const element =
            document.getElementById(id);


        if (element) {
            element.textContent = "0%";
        }

    });

}


/* =====================================================
   GET CURRENT NUTRITION
===================================================== */

function getCurrentNutrition() {

    const name =
        itemInput.value.trim();


    const food =
        findFood(name);


    const weight =
        parseFloat(weightInput.value);


    const unit =
        unitSelect.value;


    const grams =
        convertToGrams(
            weight,
            unit
        );


    if (!food || grams <= 0) {
        return null;
    }


    const multiplier =
        grams / 100;


    return {

        calories:
            food.calories * multiplier,

        protein:
            food.protein * multiplier,

        carbs:
            food.carbs * multiplier,

        fat:
            food.fat * multiplier

    };

}


/* =====================================================
   RECORD MEASUREMENT
===================================================== */

function recordMeasurement() {

    const name =
        itemInput.value.trim();


    const weight =
        parseFloat(weightInput.value);


    const unit =
        unitSelect.value;


    if (!name) {

        alert(
            "Please enter an item name."
        );

        itemInput.focus();

        return;
    }


    if (
        !Number.isFinite(weight) ||
        weight <= 0
    ) {

        alert(
            "Please enter a valid weight."
        );

        weightInput.focus();

        return;
    }


    const grams =
        convertToGrams(
            weight,
            unit
        );


    const food =
        findFood(name);


    const item =
        findItem(name);


    const nutrition =
        getCurrentNutrition();


    const record = {

        id: Date.now(),

        item: capitalize(name),

        weight: grams,

        calories:
            nutrition
                ? nutrition.calories
                : 0,

        category:
            food
                ? food.category
                : item
                    ? item.category
                    : "Unknown"

    };


    let history =
        JSON.parse(
            localStorage.getItem(
                "weightScaleHistory"
            )
        ) || [];


    history.unshift(record);


    localStorage.setItem(
        "weightScaleHistory",
        JSON.stringify(history)
    );


    renderHistory();


    animateElement(
        recordBtn,
        "button-recorded"
    );

}


/* =====================================================
   RENDER HISTORY
===================================================== */

function renderHistory(
    searchTerm = ""
) {

    const history =
        JSON.parse(
            localStorage.getItem(
                "weightScaleHistory"
            )
        ) || [];


    const search =
        searchTerm
            .trim()
            .toLowerCase();


    const filtered =
        history.filter(record =>

            record.item
                .toLowerCase()
                .includes(search)

        );


    historyTableBody.innerHTML = "";


    if (filtered.length === 0) {

        const row =
            document.createElement("tr");


        row.innerHTML = `
            <td colspan="5" class="empty-history">
                No measurement history found.
            </td>
        `;


        historyTableBody.appendChild(row);

        return;
    }


    filtered.forEach((record, index) => {

        const row =
            document.createElement("tr");


        row.classList.add(
            "history-row"
        );


        row.style.animationDelay =
            `${index * 0.05}s`;


        row.innerHTML = `

            <td>
                ${escapeHTML(record.item)}
            </td>

            <td>
                ${formatNumber(record.weight)} g
            </td>

            <td>
                ${formatNumber(record.calories)} kcal
            </td>

            <td>
                ${escapeHTML(record.category)}
            </td>

            <td>

                <button
                    type="button"
                    class="delete-btn"
                    data-id="${record.id}"
                >
                    Delete
                </button>

            </td>
        `;


        historyTableBody.appendChild(row);

    });

}


/* =====================================================
   DELETE HISTORY
===================================================== */

function deleteHistory(id) {

    let history =
        JSON.parse(
            localStorage.getItem(
                "weightScaleHistory"
            )
        ) || [];


    history =
        history.filter(
            record =>
                record.id !== id
        );


    localStorage.setItem(
        "weightScaleHistory",
        JSON.stringify(history)
    );


    renderHistory(
        historySearch.value
    );

}


/* =====================================================
   CLEAR HISTORY
===================================================== */

function clearHistory() {

    const history =
        JSON.parse(
            localStorage.getItem(
                "weightScaleHistory"
            )
        ) || [];


    if (history.length === 0) {
        return;
    }


    const confirmClear =
        confirm(
            "Are you sure you want to clear all measurement history?"
        );


    if (!confirmClear) {
        return;
    }


    localStorage.removeItem(
        "weightScaleHistory"
    );


    renderHistory();


    animateElement(
        clearHistoryBtn,
        "button-recorded"
    );

}


/* =====================================================
   RESET FORM
===================================================== */

function resetForm() {

    const measurementCard =
        document.querySelector(
            ".measurement-card"
        );


    itemInput.value = "";

    weightInput.value = "";

    unitSelect.value = "g";


    weightDisplay.textContent =
        "0.00";

    displayUnit.textContent =
        "g";


    itemIcon.textContent =
        "❓";

    itemName.textContent =
        "No item detected";

    itemCategory.textContent =
        "—";

    infoWeight.textContent =
        "—";

    servingSize.textContent =
        "—";

    calories100.textContent =
        "—";

    foodType.textContent =
        "—";


    resetNutrition();


    if (measurementCard) {

        measurementCard.classList.remove(
            "resetting"
        );

        void measurementCard.offsetWidth;

        measurementCard.classList.add(
            "resetting"
        );

    }

}


/* =====================================================
   SEARCH HISTORY
===================================================== */

function searchHistory() {

    renderHistory(
        historySearch.value
    );

}


/* =====================================================
   CAPITALIZE
===================================================== */

function capitalize(text) {

    return text
        .toLowerCase()
        .replace(
            /\b\w/g,
            letter => letter.toUpperCase()
        );

}


/* =====================================================
   SECURITY
===================================================== */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

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


recordBtn.addEventListener(
    "click",
    recordMeasurement
);


resetBtn.addEventListener(
    "click",
    resetForm
);


clearHistoryBtn.addEventListener(
    "click",
    clearHistory
);


historySearch.addEventListener(
    "input",
    searchHistory
);


/* =====================================================
   DELETE BUTTON EVENT
===================================================== */

historyTableBody.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                ".delete-btn"
            );


        if (!button) {
            return;
        }


        const id =
            Number(
                button.dataset.id
            );


        deleteHistory(id);

    }
);


/* =====================================================
   INITIALIZATION
===================================================== */

renderHistory();

updateScale();
