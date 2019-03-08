import {Coachee} from "./coachee/coachee.model"

export class CoacheesService {

    rests: Coachee[] = [
        {
          id: "bread-bakery",
          name: "Bread & Bakery",
          category: "Bakery",
          sessoes: "2",
          rating: 4.9,
          imagePath: "assets/img/restaurants/breadbakery.png"
        },
        {
          id: "burger-house",
          name: "Burger House",
          category: "Hamburgers",
          sessoes: "10",
          rating: 3.5,
          imagePath: "assets/img/restaurants/burgerhouse.png"
        }]

  constructor(){ }

  ngOnInit(){
  }

  coachees(): Coachee[]{
    return this.rests;
  }
}
