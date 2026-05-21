import {test}from'@playwright/test'

test('tc102',async({page})=>{
console.log('tc102');
await page.goto('https://www.google.com')
})