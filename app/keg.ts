class Keg {
  constructor(public nameDrink: string, public price: string, public brand: string, public alcoholContent: string, public pints: string){}
}

var kegs: Keg[] = [];
kegs.push(new Keg("Duff", "$150", "Simpsons", "Beer", "124 pints"));
kegs.push(new Keg("Colt 45", "$100", "IDK", "Beer", "120 pints"));
kegs.push(new Keg("Budlight", "$200", "budwiser", "Beer", "100 pints"));
console.log(kegs);
