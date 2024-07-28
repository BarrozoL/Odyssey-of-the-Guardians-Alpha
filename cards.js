class Card {
  constructor(
    name,
    attack,
    health,
    elementToAppend,
    imgSrc,
    enemyDefeatcounter,
    enemy,
    attackImgSrc,
    specialAttack
  ) {
    this.name = name;
    this.attack = attack;
    this.health = health;
    this.elementToAppend = elementToAppend;
    (this.enemyDefeatcounter = enemyDefeatcounter),
      (this.enemy = enemy[this.enemyDefeatcounter]);
    this.enemyCardsArray = [];
    this.attackImgSrc = attackImgSrc;
    this.specialAttack = specialAttack;

    // Creating card container
    let cardContainer = document.createElement("div");
    cardContainer.setAttribute("id", `${this.name}`);
    cardContainer.setAttribute("class", "card");

    // Creating the card elements
    let nameContainer = document.createElement("div");
    nameContainer.innerHTML = this.name;
    nameContainer.setAttribute("id", "card-name");

    // Creating and styling the image element
    let imageContainer = document.createElement("img");
    imageContainer.src = imgSrc;
    imageContainer.setAttribute("class", "card-img");

    // Card stats
    let statsContainer = document.createElement("div");
    statsContainer.setAttribute("id", "stats-container");
    statsContainer.style.backgroundColor = "peru";

    let healthContainer = document.createElement("div");
    healthContainer.innerHTML = `Health: ${this.health}`;
    healthContainer.setAttribute("class", "player-card-health-container");
    healthContainer.setAttribute("id", `${this.name}health-container-id`);

    let attackContainer = document.createElement("div");
    attackContainer.setAttribute("class", "attack-container-class");
    attackContainer.innerHTML = `Attack Power: ${this.attack}`;

    /* let playerAttackImageDiv = document.getElementById("player-attack-img-div"); */
    let playerAttackImage = document.createElement("img");
    playerAttackImage.src = attackImgSrc;
    playerAttackImage.setAttribute("class", "player-attack-img");
    playerAttackImage.setAttribute("id", `${this.name}-player-attack-img-id`);
    cardContainer.appendChild(playerAttackImage);

    let specialAttackContainer = document.createElement("div");
    specialAttackContainer = document.createElement("div");
    specialAttackContainer.setAttribute("class", "special-attack-container");
    specialAttackContainer.innerHTML = `${this.specialAttack}`;

    // Connecting stats to stats container
    statsContainer.appendChild(healthContainer);
    statsContainer.appendChild(attackContainer);
    statsContainer.appendChild(specialAttackContainer);

    // Appending elements together
    cardContainer.appendChild(nameContainer);
    cardContainer.appendChild(imageContainer);
    cardContainer.appendChild(statsContainer);

    // Append everything to cardContainer
    this.elementToAppend.appendChild(cardContainer);
    this.element = cardContainer;
  }

  updatePlayerCardHealth() {
    // prettier-ignore
    const cardHealth = document.getElementById(`${this.name}health-container-id`);
    cardHealth.innerHTML = `Health: ${this.health}`;
  }

  attackAnimation() {
    const originalMargin = this.element.style.marginBottom;
    this.element.style.marginBottom = "65px";
    setTimeout(() => {
      this.element.style.marginBottom = originalMargin;
    }, 2000);
  }
}
