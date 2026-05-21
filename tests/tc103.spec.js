import {test}from'@playwright/test'

test('tc103',async({page})=>{
console.log('tc103');
await page.goto('https://www.google.com')
})