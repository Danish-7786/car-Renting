import { MouseEventHandler } from "react"
export interface CustomButtonProps {
    title:String,
    containerStyles?:String,
    handleClick?:MouseEventHandler<HTMLButtonElement>,
    btnType? : "button"| "submit",
    en?: boolean,

} 
export interface HomeProps {
    searchParams: FilterProps;
  }
export interface manufacturersprops{
    manufacturer :string,
    setManufacturer : (manufacturer: string) => void;  
}
export interface carprops{
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type:string ,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number
}

export interface FilterProps {
    manufacturer: string;
    year :number;
    fuel: string;
    limit : number;
    model:string;
}
