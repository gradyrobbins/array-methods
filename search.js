const outEl = document.querySelector("#output")

// document
//     .querySelector("#companySearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             const foundBusiness = businesses.find(
//                 business =>
//                     business.companyName.includes(keyPressEvent.target.value)
//             );

//             outEl.innerHTML = `
//                 <h2>
//                 ${foundBusiness.companyName}
//                 </h2>
//                 <section>
//                 ${foundBusiness.addressFullStreet}

//                 </section>
//                 <section>
//                 ${foundBusiness.addressCity},
//                 ${foundBusiness.addressStateCode}
//                 ${foundBusiness.addressZipCode}
//                 </section>
//             `;
//         }
//     });


    //agents:
document
    .querySelector("#agentSearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundAgent = businesses.find(
                business =>
                    `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`.includes(keyPressEvent.target.value)
            );

            outEl.innerHTML = `
                <h2>
                ${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast}
                </h2>
            `;
        }
    });


// Lightning Exercise 1: Refactor your code to search for purchasing agents instead. If the search text is found in the first name of any purchasing agent, show that agent.

// Lightning Exercise 2: Refactor your code so that if the search text is found in the first name, or last name, of any purchasing agent, show that agent.

