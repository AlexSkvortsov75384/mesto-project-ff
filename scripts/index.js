// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

function createCard(cardData, deleteCallback) {
    const cardTemplate = document.querySelector("#card-template").content;
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");
    const deleteButton = cardElement.querySelector(".card__delete-button");

    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;

    deleteButton.addEventListener("click", () => {
        deleteCallback(cardElement);
    });

    return cardElement;
}

function deleteCard(cardElement) {
    cardElement.remove();
}

function renderCards() {
    const placesList = document.querySelector(".places__list");

    placesList.innerHTML = "";

    initialCards.forEach((cardData) => {
        const cardElement = createCard(cardData, deleteCard);
        placesList.appendChild(cardElement);
    });
}

document.addEventListener("DOMContentLoaded", renderCards);
