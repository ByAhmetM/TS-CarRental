import { CarType, FilterType } from "../types";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "df04d70410msh904fd0a2269d085p1e8076jsn31eb30dc63c8",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars(filters: FilterType): Promise<CarType[]> {
  const {
    make = "bmw",
    model = "",
    limit = "5",
    year = "",
    fuel_type = "",
  } = filters;
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&year=${year}&fuel_type=${fuel_type}`,
    options
  );
  return await res.json();
}
