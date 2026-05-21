import {test}from'@playwright/test'

test('tc101',async({page})=>{
console.log('tc101');
await page.goto('https://www.google.com')
})