const outEl = document.querySelector("#output")
// outEl.innerHTML = "<h1>Active Businesses</h1>"

// businesses.forEach(business => {
//     let someVariableThatMeansZip = "addressZipCode"


//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//       ${business.addressCity} <br/>
//       ${business["addressStateCode"]} <br/>
//       ${business[someVariableThatMeansZip]}
//     </section>

//   `
//   outEl.innerHTML += "<hr/>"
// });


// Lightning Exercise: Add another section sibling to the current one and use object dot notation to display each company's city. Use square bracket notation to display the state code. Use dynamic square bracket notation to add the zip code.

// Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter(business => {
    let inNewYork = false

    if (business.addressStateCode === "NY") {
        inNewYork = true
    }

    return inNewYork
})

// Lightning Exercise: Use filter() to create another array named manufacturingBusinesses that will contain all businesses in the manufacturing industry. Display those to the DOM.
const manufacturingBusinesses = businesses.filter(business => {
    let industry_type_manufacturing = false

    if (business.companyIndustry === "Manufacturing") {
        industry_type_manufacturing = true
    }

    return industry_type_manufacturing
})

const bloop = businesses.filter(business => business.companyIndustry === "Manufacturing");
// console.log("bloop", bloop)
outEl.innerHTML = "<h1>Manufacturing Businesses</h1>"

businesses.forEach(business => {
    let someVariableThatMeansZip = "addressZipCode"


  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
    <section>
      ${business.addressCity} <br/>
      ${business["addressStateCode"]} <br/>
      ${business[someVariableThatMeansZip]}
    </section>

  `
  outEl.innerHTML += "<hr/>"
});