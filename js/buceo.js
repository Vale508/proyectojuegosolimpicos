document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/medalleria")
        .then(res => res.json())
        .then(data => {
            data.forEach(country => {
                //ORO
                const iddivingGold = `gold-${country.country}-diving`;
                const medalA = document.getElementById(iddivingGold);

                if (medalA && country.disciplines) {
                    country.disciplines.forEach(discipline => {
                        if (discipline.diving !== undefined) {
                            medalA.textContent = discipline.diving;
                        }
                    });
                }
                //PLATA
                const iddivingSilver = `silver-${country.country}-diving`;
                const medalS = document.getElementById(iddivingSilver);

                if (medalS && country.silverDisciplines) {
                    country.silverDisciplines.forEach(discipline => {
                        if (discipline.divingSilver !== undefined) {
                            medalS.textContent = discipline.divingSilver;
                        }
                    });
                }
                //BRONCE
                const iddivingBronze = `bronze-${country.country}-diving`;
                const medalG = document.getElementById(iddivingBronze);

                if (medalG && country.bronzeDisciplines) {
                    country.bronzeDisciplines.forEach(discipline => {
                        if (discipline.divingBronze !== undefined) {
                            medalG.textContent = discipline.divingBronze;
                        }
                    });
                }
                //TOTAL
                const totalId = `total-${country.country}-diving`;
                const totalMedal = document.getElementById(totalId);
                if (totalMedal && country.totalbuceo !== undefined) {
                    totalMedal.textContent = country.totalbuceo;
                }

            });
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
});