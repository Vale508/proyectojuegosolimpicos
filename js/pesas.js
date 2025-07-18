document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/medalleria")
        .then(res => res.json())
        .then(data => {
            data.forEach(country => {
                //ORO
                const idweightliftingGold = `gold-${country.country}-weightlifting`;
                const medalA = document.getElementById(idweightliftingGold);

                if (medalA && country.disciplines) {
                    country.disciplines.forEach(discipline => {
                        if (discipline.weightlifting !== undefined) {
                            medalA.textContent = discipline.weightlifting;
                        }
                    });
                }
                //PLATA
                const idweightliftingSilver = `silver-${country.country}-weightlifting`;
                const medalS = document.getElementById(idweightliftingSilver);

                if (medalS && country.silverDisciplines) {
                    country.silverDisciplines.forEach(discipline => {
                        if (discipline.weightliftingSilver !== undefined) {
                            medalS.textContent = discipline.weightliftingSilver;
                        }
                    });
                }
                //BRONCE
                const idweightliftingBronze = `bronze-${country.country}-weightlifting`;
                const medalG = document.getElementById(idweightliftingBronze);

                if (medalG && country.bronzeDisciplines) {
                    country.bronzeDisciplines.forEach(discipline => {
                        if (discipline.weightliftingBronze !== undefined) {
                            medalG.textContent = discipline.weightliftingBronze;
                        }
                    });
                }
                //TOTAL
                const totalId = `total-${country.country}-weightlifting`;
                const totalMedal = document.getElementById(totalId);
                if (totalMedal && country.totalpesas !== undefined) {
                    totalMedal.textContent = country.totalpesas;
                }

            });
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
});