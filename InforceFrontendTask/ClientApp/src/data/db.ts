import IProduct from "../models/IProduct";


export const products: IProduct[] = [{
    id: 1,
    imageUrl: "https://img.freepik.com/premium-vector/sofa-couch-red-colorful-cartoon-illustration-vector-comfortable-lounge-interior-design-isolated-white-background-modern-model-settee-icon_311563-463.jpg?w=2000",
    name: "able",
    count: 4,
    size: {
    width: 650,
    height: 200
    },
    weight: "25kg",
    comments: [{
        id: 1,
        productId: 1,
        description: "beautiful able",
        date: new Date()
    }]
},
{
    id: 2,
    imageUrl: "https://img.freepik.com/premium-vector/sofa-couch-red-colorful-cartoon-illustration-vector-comfortable-lounge-interior-design-isolated-white-background-modern-model-settee-icon_311563-463.jpg?w=2000",
    name: "dofa",
    count: 2,
    size: {
    width: 1650,
    height: 400
    },
    weight: "50kg",
    comments: [{
        id: 2,
        productId: 2,
        description: "beautiful dofa",
        date: new Date()
    }]
},
{
    id: 3,
    imageUrl: "https://img.freepik.com/premium-vector/sofa-couch-red-colorful-cartoon-illustration-vector-comfortable-lounge-interior-design-isolated-white-background-modern-model-settee-icon_311563-463.jpg?w=2000",
    name: "bofa",
    count: 60,
    size: {
    width: 1650,
    height: 400
    },
    weight: "50kg",
    comments: [{
        id: 2,
        productId: 2,
        description: "beautiful bofa",
        date: new Date()
    }]
},
{
    id: 2,
    imageUrl: "https://img.freepik.com/premium-vector/sofa-couch-red-colorful-cartoon-illustration-vector-comfortable-lounge-interior-design-isolated-white-background-modern-model-settee-icon_311563-463.jpg?w=2000",
    name: "cofa",
    count: 15,
    size: {
    width: 1650,
    height: 400
    },
    weight: "50kg",
    comments: [{
        id: 2,
        productId: 2,
        description: "beautiful cofa",
        date: new Date()
    }]
},

]

export function GetData(): IProduct[] {
    const data = localStorage.getItem("data");
    if (!data) {
        return products;
    }
    try {
        return JSON.parse(data);
    }
    catch(e) {
        return products;
    }
}

export function SetData(array: IProduct[]) {
    localStorage.setItem("data", JSON.stringify(array));
}