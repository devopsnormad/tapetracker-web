import { tokens } from "../theme";


export const mockDataCustomer = [
  {
    id: 1,
    name: "Jon Snow",
    phone: "(665)121-5454",
    gender: "male",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    phone: "(665)121-5454",
    gender: "female",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    phone: "(665)121-5454",
    gender: "male",
  },
  {
    id: 4,
    name: "Anya Stark",
    phone: "(665)121-5454",
    gender: "female",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    phone: "(665)121-5454",
    gender: "female",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    phone: "(665)121-5454",
    gender: "female",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    phone: "(665)121-5454",
    gender: "male",
  },
  {
    id: 8,
    name: "Rossini Frances",
    phone: "(665)121-5454",
    gender: "male",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    phone: "(665)121-5454",
    gender: "female",
  },
  {
    id: 10,
    name: "Enteri Redack",
    phone: "(665)121-5454",
    gender: "male",
  },
  {
    id: 11,
    name: "Steve Goodman",
    phone: "(665)121-5454",
    gender: "male",
  },
];

export const mockDataInvoices = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    cost: "21.24",
    phone: "(665)121-5454",
    date: "03/12/2022",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    cost: "1.24",
    phone: "(421)314-2288",
    date: "06/15/2021",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    cost: "11.24",
    phone: "(422)982-6739",
    date: "05/02/2022",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    cost: "80.55",
    phone: "(921)425-6742",
    date: "03/21/2022",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    cost: "1.24",
    phone: "(421)445-1189",
    date: "01/12/2021",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    cost: "63.12",
    phone: "(232)545-6483",
    date: "11/02/2022",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    cost: "52.42",
    phone: "(543)124-0123",
    date: "02/11/2022",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    cost: "21.24",
    phone: "(222)444-5555",
    date: "05/02/2021",
  },
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
];

export const mockOrder =[
  {
     "id": "1001",
     "customerName": "John Doe",
     "status": "Dispatched",
     "deliveryDate": "2024-03-25",
     "items": [
       {
         "productId": "P101",
         "productName": "Laptop",
         "quantity": 1,
         "price": 1200.00
       },
       {
         "productId": "P102",
         "productName": "Mouse",
         "quantity": 2,
         "price": 20.00
       }
     ]
  },
  {
     "id": "1002",
     "customerName": "Jane Smith",
     "status": "Delivered",
     "deliveryDate": "2024-03-23",
     "items": [
       {
         "productId": "P103",
         "productName": "Headphones",
         "quantity": 1,
         "price": 150.00
       }
     ]
  },
  {
     "id": "1003",
     "customerName": "Michael Johnson",
     "status": "Pending",
     "deliveryDate": "2024-03-27",
     "items": [
       {
         "productId": "P104",
         "productName": "Keyboard",
         "quantity": 1,
         "price": 80.00
       },
       {
         "productId": "P105",
         "productName": "Monitor",
         "quantity": 1,
         "price": 300.00
       }
     ]
  }
  
 ]
 export const mockLineData = [
  {
    id: "weeks",
    color: "green", // Static green color
    data: [
      { x: "sun", y: 101 },
      { x: "mon", y: 75 },
      { x: "tues", y: 36 },
      { x: "wed", y: 216 },
      { x: "thurs", y: 35 },
      { x: "fri", y: 236 },
      { x: "sat", y: 88 },
    ],
  },
  {
    id: "months",
    color: "green", // Static green color
    data: [
      { x: "Jan", y: 212 },
      { x: "Feb", y: 190 },
      { x: "Mar", y: 270 },
      { x: "Apr", y: 100 },
      { x: "May", y: 75 },
      { x: "Jun", y: 175 },
      { x: "Jul", y: 300 },
      { x: "Aug", y: 190 },
      { x: "Sept", y: 175 },
      { x: "Oct", y: 180 },
      { x: "Nov", y: 200 },
      { x: "Dec", y: 450 },
    ],
  },
  {
    id: "years",
    color: "green", // Static green color
    data: [
      { x: "2020", y: 191 },
      { x: "2021", y: 136 },
      { x: "2022", y: 91 },
      { x: "2023", y: 190 },
      { x: "2024", y: 211 },
      { x: "2025", y: 152 },
      { x: "2026", y: 189 },
    ],
  },
];
