import {test}from'@playwright/test'

test('tc104',async({page})=>{
console.log('tc104');
await page.goto('https://www.google.com')
})