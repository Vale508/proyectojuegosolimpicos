document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/medalleria")
        .then(res => res.json())
        .then(data => {
            data.forEach(country => {
                //ORO
                const idwrestlingGold = `gold-${country.country}-wrestling`;
                const medalA = document.getElementById(idwrestlingGold);

                if (medalA && country.disciplines) {
                    country.disciplines.forEach(discipline => {
                        if (discipline.wrestling !== undefined) {
                            medalA.textContent = discipline.wrestling;
                        }
                    });
                }
                //PLATA
                const idwrestlingSilver = `silver-${country.country}-wrestling`;
                const medalS = document.getElementById(idwrestlingSilver);

                if (medalS && country.silverDisciplines) {
                    country.silverDisciplines.forEach(discipline => {
                        if (discipline.wrestlingSilver !== undefined) {
                            medalS.textContent = discipline.wrestlingSilver;
                        }
                    });
                }
                //BRONCE
                const idwrestlingBronze = `bronze-${country.country}-wrestling`;
                const medalG = document.getElementById(idwrestlingBronze);

                if (medalG && country.bronzeDisciplines) {
                    country.bronzeDisciplines.forEach(discipline => {
                        if (discipline.wrestlingBronze !== undefined) {
                            medalG.textContent = discipline.wrestlingBronze;
                        }
                    });
                }
                //TOTAL
                const totalId = `total-${country.country}-wrestling`;
                const totalMedal = document.getElementById(totalId);
                if (totalMedal && country.totallucha !== undefined) {
                    totalMedal.textContent = country.totallucha;
                }

            });
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
});