import { test, expect } from '@playwright/test';
test("GET/products", async({request})=> {
  const apiUrl = "https://api.practicesoftwaretesting.com";
  const response =await request.get(apiUrl+"/products");
    // Status check  
  expect(response.status()).toBe(200);
    const responseBody = await response.json();
        // expect(responseBody.length).toBeGreaterThan(0);
     expect(responseBody.data.length).toBe(9);
     expect(responseBody.total).toBe(50);
     // console.log(responseBody);
    }); 

    //Test for brand API

/*test("GET/brands", async({request})=> {
  const apiUrl = "https://api.practicesoftwaretesting.com";
  const response =await request.get(apiUrl+"/brands");
    // Status check  
  expect(response.status()).toBe(200);
    const responseBody = await response.json();
     console.log(responseBody);
    // expect(responseBody.length).toBeGreaterThan(0);
    // expect(responseBody.data.length).toBeGreaterThan(0);
    });*/

   
test("POST/users/login", async({request})=> {
  const apiUrl = "https://api.practicesoftwaretesting.com";
  const response =await request.post(apiUrl+"/users/login", {
    data: {
        "email":"customer@practicesoftwaretesting.com",
        "password":"welcome01"    },
  });
   
    // Status check  
  expect(response.status()).toBe(200);
    const responseBody = await response.json();
     //console.log(responseBody);
     expect(responseBody.access_token).toBeTruthy();
    }); 