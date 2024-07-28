class EnemyCard {
  constructor(name, attack, health, elementToAppend, imgSrc) {
    this.name = name;
    this.attack = attack;
    this.health = health;
    this.elementToAppend = elementToAppend;

    let enemyContainer = document.createElement("div");
    enemyContainer.setAttribute("id", `${this.name}`);
    enemyContainer.setAttribute("class", "enemy-container");

    let enemyNameContainer = document.createElement("div");
    enemyNameContainer.innerHTML = this.name;
    enemyNameContainer.setAttribute("id", "enemy-name-id");
    enemyNameContainer.setAttribute("class", "enemy-name-class");

    let enemyImageContainer = document.createElement("img");
    enemyImageContainer.src = imgSrc;
    enemyImageContainer.setAttribute("class", "enemy-img");

    let enemyHealthContainer = document.createElement("div");
    enemyHealthContainer.setAttribute("id", "enemy-health-container");
    enemyHealthContainer.innerHTML = `${this.health}`;

    let enemyAttackContainer = document.createElement("div");
    enemyAttackContainer.setAttribute("id", "enemy-attack-container");
    enemyAttackContainer.innerHTML = `Attack Power: ${this.attack}`;

    enemyContainer.appendChild(enemyNameContainer);
    enemyContainer.appendChild(enemyHealthContainer);
    enemyContainer.appendChild(enemyAttackContainer);
    enemyContainer.appendChild(enemyImageContainer);

    this.elementToAppend.appendChild(enemyContainer);
    this.element = enemyContainer;
  }

  // Reduce the value of health by the amount given

  updateEnemyHealth() {
    //prettier-ignore
    if(this.health <= 0){
        this.health = 0;
      }
    // prettier-ignore
    const enemyCurrentHealth = document.getElementById("enemy-health-container");
    enemyCurrentHealth.innerHTML = `${this.health}`;
  }
}
