function formatString(input: string, toUpper?: boolean): string {
    if (toUpper || toUpper === undefined) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}





function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4.5);
}





function concatenateArrays<T>(...arrays: T[][]): T[] {
    let arr: T[] = [];
    return arr.concat(...arrays);
}





class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    public getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    public getModel(): string {
        return `Model: ${this.model}`;
    }

}





function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}





interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    let arr = products[0];
    if (products.length === 0) {
        return null;
    } else {
        products.forEach((item) => {
            if (item.price > arr.price) {
                arr = item;
            }
        });

        return arr;
    }
}





enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    else {
        return "Weekday";
    }
}





async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if ( n >= 0) {
                resolve(n * n);
            } else {
                reject(new Error("Negative number not allowed"));
            }
        }, 1000);
    })
}