document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/medalleria")
        .then(res => res.json())
        .then(data => {
            data.forEach(country => {
                //ORO
                const idgymnasticsGold = `gold-${country.country}-gymnastics`;
                const medalA = document.getElementById(idgymnasticsGold);

                if (medalA && country.disciplines) {
                    country.disciplines.forEach(discipline => {
                        if (discipline.gymnastics !== undefined) {
                            medalA.textContent = discipline.gymnastics;
                        }
                    });
                }
                //PLATA
                const idgymnasticsSilver = `silver-${country.country}-gymnastics`;
                const medalS = document.getElementById(idgymnasticsSilver);

                if (medalS && country.silverDisciplines) {
                    country.silverDisciplines.forEach(discipline => {
                        if (discipline.gymnasticSilver !== undefined) {
                            medalS.textContent = discipline.gymnasticSilver;
                        }
                    });
                }
                //BRONCE
                const idgymnasticsBronze = `bronze-${country.country}-gymnastics`;
                const medalG = document.getElementById(idgymnasticsBronze);

                if (medalG && country.bronzeDisciplines) {
                    country.bronzeDisciplines.forEach(discipline => {
                        if (discipline.gymnasticBronze !== undefined) {
                            medalG.textContent = discipline.gymnasticBronze;
                        }
                    });
                }
                //TOTAL
                const totalId = `total-${country.country}-gymnastics`;
                const totalMedal = document.getElementById(totalId);
                if (totalMedal && country.totalgimnasia !== undefined) {
                    totalMedal.textContent = country.totalgimnasia;
                }

            });
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
});