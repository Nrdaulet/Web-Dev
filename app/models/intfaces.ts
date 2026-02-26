export interface Category {
  id:number;
  name:string;
}

export interface Product{
  id:number;
  category:Category;
  name:string;
  description:string;
  price:number;
  rating:number;
  like:number;
  image:string;
  link:string;
}
