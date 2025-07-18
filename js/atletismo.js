document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/medalleria")
        .then(res => res.json())
        .then(data => {
            data.forEach(country => {
                //ORO
                const idAthleticsGold = `gold-${country.country}-athletics`;
                const medalA = document.getElementById(idAthleticsGold);

                if (medalA && country.disciplines) {
                    country.disciplines.forEach(discipline => {
                        if (discipline.athletics !== undefined) {
                            medalA.textContent = discipline.athletics;
                        }
                    });
                }
                //PLATA
                const idAthleticSilver = `silver-${country.country}-athletics`;
                const medalS = document.getElementById(idAthleticSilver);

                if (medalS && country.silverDisciplines) {
                    country.silverDisciplines.forEach(discipline => {
                        if (discipline.athleticSilver !== undefined) {
                            medalS.textContent = discipline.athleticSilver;
                        }
                    });
                }
                //BRONCE
                const idAthleticBronze = `bronze-${country.country}-athletics`;
                const medalG = document.getElementById(idAthleticBronze);

                if (medalG && country.bronzeDisciplines) {
                    country.bronzeDisciplines.forEach(discipline => {
                        if (discipline.athleticBronze !== undefined) {
                            medalG.textContent = discipline.athleticBronze;
                        }
                    });
                }
                //TOTAL
                const totalId = `total-${country.country}-athletics`;
                const totalMedal = document.getElementById(totalId);
                if (totalMedal && country.totalatletismo !== undefined) {
                    totalMedal.textContent = country.totalatletismo;
                }
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
