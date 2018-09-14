class Player {
  constructor() {
    (this.name = ""), (this.totalCoins = 0), (this.status = "");
  }
  hasStar(bool) {
    if (bool) {
      console.log("Star is active");
    } else {
      console.log("Star is not active");
    }
  }
  setName(namePicked) {
    this.name = namePicked;
  }
  gotHit() {
    let state = ["Powered Up", "Big", "Small", "Dead"];
    for (i = 0; i < 1; i++) {
      this.status = arr[i];
    }
    if ("Dead") {
      gameActive(false);
    }
  }
  gotPowerup(status) {
    this.status = status;
  }
  gameActive(bool) {
    if (bool === false) {
      this.status = status;
    }
  }
  addCoin(gains) {
    this.totalCoins += gains;
  }
  print(name, status, totalCoins) {
    return `
            Name: ${name}\n,
            Status: ${status}\n,
            Total Coins: ${totalCoins} 
        `;
  }
  randomRange() {
    let value = Math.floor(Math.random() * 3);
    if (value == 0) {
      gotHit();
    } else if (value == 1) {
      gotPowerup();
    } else if (value == 2) {
      addCoin();
    }

    print();
  }
}
