# Steps to reproduction 

run the command `npx nx run e2e:open-cypress`
and execture the tests in app.cy.ts.

Play with the settimeout value in app.component.ts. 
Increasing above 50 ms will make the test pass but below 50 ms will make the test fail.
