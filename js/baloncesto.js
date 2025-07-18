document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/medalleria")
        .then(res => res.json())
        .then(data => {
            data.forEach(country => {
                //ORO
                const idbasketballGold = `gold-${country.country}-basketball`;
                const medalA = document.getElementById(idbasketballGold);

                if (medalA && country.disciplines) {
                    country.disciplines.forEach(discipline => {
                        if (discipline.basketball !== undefined) {
                            medalA.textContent = discipline.basketball;
                        }
                    });
                }
                //PLATA
                const idbasketballSilver = `silver-${country.country}-basketball`;
                const medalS = document.getElementById(idbasketballSilver);

                if (medalS && country.silverDisciplines) {
                    country.silverDisciplines.forEach(discipline => {
                        if (discipline.basketballSilver !== undefined) {
                            medalS.textContent = discipline.basketballSilver;
                        }
                    });
                }
                //BRONCE
                const idbasketballBronze = `bronze-${country.country}-basketball`;
                const medalG = document.getElementById(idbasketballBronze);

                if (medalG && country.bronzeDisciplines) {
                    country.bronzeDisciplines.forEach(discipline => {
                        if (discipline.basketballBronze !== undefined) {
                            medalG.textContent = discipline.basketballBronze;
                        }
                    });
                }
                //TOTAL
                const totalId = `total-${country.country}-basketball`;
                const totalMedal = document.getElementById(totalId);
                if (totalMedal && country.totalbaloncesto !== undefined) {
                    totalMedal.textContent = country.totalbaloncesto;
                }

            });
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
});