document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/medalleria")
        .then(res => res.json())
        .then(data => {
            data.forEach(country => {
                //ORO
                const idtennisGold = `gold-${country.country}-tennis`;
                const medalA = document.getElementById(idtennisGold);

                if (medalA && country.disciplines) {
                    country.disciplines.forEach(discipline => {
                        if (discipline.tennis !== undefined) {
                            medalA.textContent = discipline.tennis;
                        }
                    });
                }
                //PLATA
                const idtenniSilver = `silver-${country.country}-tennis`;
                const medalS = document.getElementById(idtenniSilver);

                if (medalS && country.silverDisciplines) {
                    country.silverDisciplines.forEach(discipline => {
                        if (discipline.tenniSilver !== undefined) {
                            medalS.textContent = discipline.tenniSilver;
                        }
                    });
                }
                //BRONCE
                const idtennisBronze = `bronze-${country.country}-tennis`;
                const medalG = document.getElementById(idtennisBronze);

                if (medalG && country.bronzeDisciplines) {
                    country.bronzeDisciplines.forEach(discipline => {
                        if (discipline.tennisBronze !== undefined) {
                            medalG.textContent = discipline.tennisBronze;
                        }
                    });
                }
                //TOTAL
                const totalId = `total-${country.country}-tennis`;
                const totalMedal = document.getElementById(totalId);
                if (totalMedal && country.totaltenis !== undefined) {
                    totalMedal.textContent = country.totaltenis;
                }

            });
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
});