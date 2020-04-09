const bikes = [
    {
        name: "Rower górski",
        description: "Rowery, których przeznaczeniem jest jazda w terenie trudniejszym, niż pozwalają na to rowery szosowe czy trekingowe, np. górskie ścieżki, szlaki leśne, specjalne tory przeszkód.",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Pinarello_Dogma_XC_Shimano_XTR_Custom_Bike_%2816165258647%29.jpg/482px-Pinarello_Dogma_XC_Shimano_XTR_Custom_Bike_%2816165258647%29.jpg"
    },
    {
        name: "Rower miejski",
        description: "Rowery, których przeznaczeniem jest jazda w mieście",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Brosen_city_bicycle.jpg/330px-Brosen_city_bicycle.jpg"
    },
    {
        name: "Rower szosowy",
        description: "sportowy rower, dostosowywany przede wszystkim do jazdy na twardej drodze",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Taiji_carbon_road_bike_from_Taiwan.jpg/330px-Taiji_carbon_road_bike_from_Taiwan.jpg"
    }
]
const container = document.querySelector("#bikes-container");
const renderBikes = () => {
    let output = "";
    bikes.forEach(
      ({ name, description, url }) =>
        (output += `
                <h4>${name}</h4>
                <img src="${url}" class="img-fluid" alt="bike image"/>
                <p class="mt-3">${description}</p>
                `)
    )
    container.innerHTML = output;
  }

document.addEventListener("DOMContentLoaded", renderBikes);