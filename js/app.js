document.addEventListener("DOMContentLoaded", () => {
  fetch("data/medalleria.json") 
    .then(res => res.json())
    .then(data => {
      data.forEach(country => {
        if (country.country === "usa") {
          const tbodyUsa = document.getElementById("cuerpo-usa");
          tbodyUsa.innerHTML = `
            <tr>
              <td>${country.gold}</td>
              <td>${country.silver}</td>
              <td>${country.bronze}</td>
              <td>${country.total}</td>
            </tr>
          `;
          const h1Gold = document.getElementById("medalla-oro-usa");
          if (h1Gold) h1Gold.textContent = country.gold;

        }

        if (country.country === "china") {
          const tbodyChina = document.getElementById("cuerpo-china");
          tbodyChina.innerHTML = `
            <tr>
              <td>${country.gold}</td>
              <td>${country.silver}</td>
              <td>${country.bronze}</td>
              <td>${country.total}</td>
            </tr>
          `;
          const h1Gold = document.getElementById("medalla-oro-china");
          if (h1Gold) h1Gold.textContent = country.gold;
        }

        if (country.country === "japan") {
          const tbodyChina = document.getElementById("cuerpo-japon");
          tbodyChina.innerHTML = `
            <tr>
              <td>${country.gold}</td>
              <td>${country.silver}</td>
              <td>${country.bronze}</td>
              <td>${country.total}</td>
            </tr>
          `;
          const h1Gold = document.getElementById("medalla-oro-japon");
          if (h1Gold) h1Gold.textContent = country.gold;
        }

        if (country.country === "australia") {
          const tbodyChina = document.getElementById("cuerpo-australia");
          tbodyChina.innerHTML = `
            <tr>
              <td>${country.gold}</td>
              <td>${country.silver}</td>
              <td>${country.bronze}</td>
              <td>${country.total}</td>
            </tr>
          `;
          const h1Gold = document.getElementById("medalla-oro-australia");
          if (h1Gold) h1Gold.textContent = country.gold;
        }

        if (country.country === "germany") {
          const tbodyChina = document.getElementById("cuerpo-alemania");
          tbodyChina.innerHTML = `
            <tr>
              <td>${country.gold}</td>
              <td>${country.silver}</td>
              <td>${country.bronze}</td>
              <td>${country.total}</td>
            </tr>
          `;
          const h1Gold = document.getElementById("medalla-oro-alemania");
          if (h1Gold) h1Gold.textContent = country.gold;
        }

        if (country.country === "russia") {
          const tbodyChina = document.getElementById("cuerpo-rusia");
          tbodyChina.innerHTML = `
            <tr>
              <td>${country.gold}</td>
              <td>${country.silver}</td>
              <td>${country.bronze}</td>
              <td>${country.total}</td>
            </tr>
          `;
          const h1Gold = document.getElementById("medalla-oro-rusia");
          if (h1Gold) h1Gold.textContent = country.gold;
        }

        if (country.country === "uk") {
          const tbodyChina = document.getElementById("cuerpo-reinounido");
          tbodyChina.innerHTML = `
            <tr>
              <td>${country.gold}</td>
              <td>${country.silver}</td>
              <td>${country.bronze}</td>
              <td>${country.total}</td>
            </tr>
          `;
          const h1Gold = document.getElementById("medalla-oro-reinounido");
          if (h1Gold) h1Gold.textContent = country.gold;
        }

        if (country.country === "france") {
          const tbodyChina = document.getElementById("cuerpo-francia");
          tbodyChina.innerHTML = `
            <tr>
              <td>${country.gold}</td>
              <td>${country.silver}</td>
              <td>${country.bronze}</td>
              <td>${country.total}</td>
            </tr>
          `;
          const h1Gold = document.getElementById("medalla-oro-francia");
          if (h1Gold) h1Gold.textContent = country.gold;
        }

      });
    })
    .catch(err => {
      console.error("Error al obtener los datos:", err);
    });



});