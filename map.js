const outEl = document.querySelector("#output")
outEl.innerHTML += "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map(business => {
    let agentInfo = {
        "fullName": `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
        "company": business.companyName,
        "phoneNumber": business.phoneWork
    }

    return agentInfo

})

console.log(agents)
// console.table(agents)

agents.forEach(agent => {
  outEl.innerHTML += `<h2>${agent.fullName} </h2>`;
  outEl.innerHTML += `<p>${agent.company} </p>`;
  outEl.innerHTML += `<p>${agent.phoneNumber} </p>`;
  outEl.innerHTML += "<hr/>";
});