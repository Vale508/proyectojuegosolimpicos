document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/medalleria")
    .then(res => res.json())
    .then(data => {
        data.forEach(country => {
        const idAthletics = `medal-${country.country}-athletics`;
        const medalA = document.getElementById(idAthletics);

        if (medalA && country.disciplines) {
            country.disciplines.forEach(discipline => {
            if (discipline.athletics !== undefined) {
                medalA.textContent = discipline.athletics;
            }
            });
        }

        const idSwimming = `medal-${country.country}-swimming`;
        const medalS = document.getElementById(idSwimming);

        if (medalS && country.disciplines) {
            country.disciplines.forEach(discipline => {
            if (discipline.swimming !== undefined) {
                medalS.textContent = discipline.swimming;
            }
            });
        }

        const idGymnastics = `medal-${country.country}-gymnastics`;
        const medalG = document.getElementById(idGymnastics);

        if (medalG && country.disciplines) {
            country.disciplines.forEach(discipline => {
            if (discipline.gymnastics !== undefined) {
                medalG.textContent = discipline.gymnastics;
            }
            });
        }

        const idBasketball = `medal-${country.country}-basketball`;
        const medalB = document.getElementById(idBasketball);

        if (medalB && country.disciplines) {
            country.disciplines.forEach(discipline => {
            if (discipline.basketball !== undefined) {
                medalB.textContent = discipline.basketball;
            }
            });
        }

        const idWrestling = `medal-${country.country}-wrestling`;
        const medalW= document.getElementById(idWrestling);

        if (medalW && country.disciplines) {
            country.disciplines.forEach(discipline => {
            if (discipline.wrestling !== undefined) {
                medalW.textContent = discipline.wrestling;
            }
            });
        }

        const idWeightlifting = `medal-${country.country}-weightlifting`;
        const medalWe= document.getElementById(idWeightlifting);

        if (medalWe && country.disciplines) {
            country.disciplines.forEach(discipline => {
            if (discipline.weightlifting !== undefined) {
                medalWe.textContent = discipline.weightlifting;
            }
            });
        }

        const idDiving = `medal-${country.country}-diving`;
        const medalD= document.getElementById(idDiving);

        if (medalD && country.disciplines) {
            country.disciplines.forEach(discipline => {
            if (discipline.diving !== undefined) {
                medalD.textContent = discipline.diving;
            }
            });
        }

        const idTennis = `medal-${country.country}-tennis`;
        const medalT= document.getElementById(idTennis);

        if (medalT && country.disciplines) {
            country.disciplines.forEach(discipline => {
            if (discipline.tennis !== undefined) {
                medalT.textContent = discipline.tennis;
            }
            });
        }


        });
    })
    .catch(error => {
        console.error("Error al obtener los datos:", error);
    });
  });