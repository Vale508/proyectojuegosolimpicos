document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/medalleria")
        .then(res => res.json())
        .then(data => {
            data.forEach(country => {
                //ORO
                const idswimmingGold = `gold-${country.country}-swimming`;
                const medalA = document.getElementById(idswimmingGold);

                if (medalA && country.disciplines) {
                    country.disciplines.forEach(discipline => {
                        if (discipline.swimming !== undefined) {
                            medalA.textContent = discipline.swimming;
                        }
                    });
                }
                //PLATA
                const idswimmingSilver = `silver-${country.country}-swimming`;
                const medalS = document.getElementById(idswimmingSilver);

                if (medalS && country.silverDisciplines) {
                    country.silverDisciplines.forEach(discipline => {
                        if (discipline.swimmingSilver !== undefined) {
                            medalS.textContent = discipline.swimmingSilver;
                        }
                    });
                }
                //BRONCE
                const idswimmingBronze = `bronze-${country.country}-swimming`;
                const medalG = document.getElementById(idswimmingBronze);

                if (medalG && country.bronzeDisciplines) {
                    country.bronzeDisciplines.forEach(discipline => {
                        if (discipline.swimmingBronze !== undefined) {
                            medalG.textContent = discipline.swimmingBronze;
                        }
                    });
                }
                //TOTAL
                const totalId = `total-${country.country}-swimming`;
                const totalMedal = document.getElementById(totalId);
                if (totalMedal && country.totalnatacion !== undefined) {
                    totalMedal.textContent = country.totalnatacion;
                }

            });
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
});