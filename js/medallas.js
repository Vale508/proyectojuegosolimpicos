document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/medalleria")
      .then(res => res.json())
      .then(data => {
        data.forEach(country => {

          if (country.country==="usa"){
            const id=document.getElementById('medalla-atletismo-eeuu');
            if(id && country.disciplines){
              country.disciplines.forEach(athletics=>{
                if(athletics.athletics !== undefined){
                  id.textContent=athletics.athletics
                }
              })
            const h1Gold = document.getElementById("medalla-oro-usa");
            if (h1Gold) h1Gold.textContent = country.gold;

            const h1Silver = document.getElementById("medalla-plata-usa");
            if (h1Silver) h1Silver.textContent = country.silver;

            const h1Bronze = document.getElementById("medalla-bronce-usa");
            if (h1Bronze) h1Bronze.textContent = country.bronze;
            }
            
          }
          if (country.country==="usa"){
            const id=document.getElementById('medalla-natacion-eeuu');
            if(id && country.disciplines){
              country.disciplines.forEach(swimming=>{
                if(swimming.swimming !== undefined){
                  id.textContent=swimming.swimming
                }
              })
              
            }
          }
          if (country.country==="usa"){
            const id=document.getElementById('medalla-gimnasta-eeuu');
            if(id && country.disciplines){
              country.disciplines.forEach(gymnastics=>{
                if(gymnastics.gymnastics !== undefined){
                  id.textContent=gymnastics.gymnastics
                }
              })
            }
          }
          if (country.country==="usa"){
            const id=document.getElementById('medalla-basket-eeuu');
            if(id && country.disciplines){
              country.disciplines.forEach(basketball=>{
                if(basketball.basketball !== undefined){
                  id.textContent=basketball.basketball
                }
              })
            }
          }
          if (country.country==="usa"){
            const id=document.getElementById('medalla-lucha-eeuu');
           if(id && country.disciplines){
              country.disciplines.forEach(wrestling=>{
                if(wrestling.wrestling !== undefined){
                  id.textContent=wrestling.wrestling
                }
              })
            }
          }
          if (country.country==="usa"){
            const id=document.getElementById('medalla-pesas-eeuu');
            if(id && country.disciplines){
              country.disciplines.forEach(weightlifting=>{
                if(weightlifting.weightlifting !== undefined){
                  id.textContent=weightlifting.weightlifting
                }
              })
            }
          }
          if (country.country==="usa"){
            const id=document.getElementById('medalla-bucear-eeuu');
            if(id && country.disciplines){
              country.disciplines.forEach(diving=>{
                if(diving.diving !== undefined){
                  id.textContent=diving.diving
                }
              })
            }
          }
          if (country.country==="usa"){
            const id=document.getElementById('medalla-tenis-eeuu');
            if(id && country.disciplines){
              country.disciplines.forEach(tennis=>{
                if(tennis.tennis !== undefined){
                  id.textContent=tennis.tennis
                }
              })
            }
          }

          if (country.country==="china"){
            const id=document.getElementById('medalla-atletismo-china');
            if(id && country.disciplines){
              country.disciplines.forEach(athletics=>{
                if(athletics.athletics !== undefined){
                  id.textContent=athletics.athletics
                }
              })
            }
            const h1Gold = document.getElementById("medalla-oro-china");
            if (h1Gold) h1Gold.textContent = country.gold;

            const h1Silver = document.getElementById("medalla-plata-china");
            if (h1Silver) h1Silver.textContent = country.silver;

            const h1Bronze = document.getElementById("medalla-bronce-china");
            if (h1Bronze) h1Bronze.textContent = country.bronze;
          }
          if (country.country==="china"){
            const id=document.getElementById('medalla-natacion-china');
            if(id && country.disciplines){
              country.disciplines.forEach(swimming=>{
                if(swimming.swimming !== undefined){
                  id.textContent=swimming.swimming
                }
              })
              
            }
          }
          if (country.country==="china"){
            const id=document.getElementById('medalla-gimnasta-china');
            if(id && country.disciplines){
              country.disciplines.forEach(gymnastics=>{
                if(gymnastics.gymnastics !== undefined){
                  id.textContent=gymnastics.gymnastics
                }
              })
            }
          }
          if (country.country==="china"){
            const id=document.getElementById('medalla-basket-china');
            if(id && country.disciplines){
              country.disciplines.forEach(basketball=>{
                if(basketball.basketball !== undefined){
                  id.textContent=basketball.basketball
                }
              })
            }
          }
          if (country.country==="china"){
            const id=document.getElementById('medalla-lucha-china');
            if(id && country.disciplines){
              country.disciplines.forEach(wrestling=>{
                if(wrestling.wrestling !== undefined){
                  id.textContent=wrestling.wrestling
                }
              })
            }
          }
          if (country.country==="china"){
            const id=document.getElementById('medalla-pesas-china');
            if(id && country.disciplines){
              country.disciplines.forEach(weightlifting=>{
                if(weightlifting.weightlifting !== undefined){
                  id.textContent=weightlifting.weightlifting
                }
              })
            }
          }
          if (country.country==="china"){
            const id=document.getElementById('medalla-bucear-china');
            if(id && country.disciplines){
              country.disciplines.forEach(diving=>{
                if(diving.diving !== undefined){
                  id.textContent=diving.diving
                }
              })
            }
          }
          if (country.country==="china"){
            const id=document.getElementById('medalla-tenis-china');
            if(id && country.disciplines){
              country.disciplines.forEach(tennis=>{
                if(tennis.tennis !== undefined){
                  id.textContent=tennis.tennis
                }
              })
            }
          }

          if (country.country==="japan"){
            const id=document.getElementById('medalla-atletismo-japon');
            if(id && country.disciplines){
              country.disciplines.forEach(athletics=>{
                if(athletics.athletics !== undefined){
                  id.textContent=athletics.athletics
                }
              })
            }
            const h1Gold = document.getElementById("medalla-oro-japon");
            if (h1Gold) h1Gold.textContent = country.gold;

            const h1Silver = document.getElementById("medalla-plata-japon");
            if (h1Silver) h1Silver.textContent = country.silver;
            const h1Bronze = document.getElementById("medalla-bronce-japon");
            if (h1Bronze) h1Bronze.textContent = country.bronze;
          }
          if (country.country==="japan"){
            const id=document.getElementById('medalla-natacion-japon');
            if(id && country.disciplines){
              country.disciplines.forEach(swimming=>{
                if(swimming.swimming !== undefined){
                  id.textContent=swimming.swimming
                }
              })
              
            }
          }
          if (country.country==="japan"){
            const id=document.getElementById('medalla-gimnasta-japon');
            if(id && country.disciplines){
              country.disciplines.forEach(gymnastics=>{
                if(gymnastics.gymnastics !== undefined){
                  id.textContent=gymnastics.gymnastics
                }
              })
            }
          }
          if (country.country==="japan"){
            const id=document.getElementById('medalla-basket-japon');
            if(id && country.disciplines){
              country.disciplines.forEach(basketball=>{
                if(basketball.basketball !== undefined){
                  id.textContent=basketball.basketball
                }
              })
            }
          }
          if (country.country==="japan"){
            const id=document.getElementById('medalla-lucha-japon');
            if(id && country.disciplines){
              country.disciplines.forEach(wrestling=>{
                if(wrestling.wrestling !== undefined){
                  id.textContent=wrestling.wrestling
                }
              })
            }
          }
          if (country.country==="japan"){
            const id=document.getElementById('medalla-pesas-japon');
            if(id && country.disciplines){
              country.disciplines.forEach(weightlifting=>{
                if(weightlifting.weightlifting !== undefined){
                  id.textContent=weightlifting.weightlifting
                }
              })
            }
          }
          if (country.country==="japan"){
            const id=document.getElementById('medalla-bucear-japon');
            if(id && country.disciplines){
              country.disciplines.forEach(diving=>{
                if(diving.diving !== undefined){
                  id.textContent=diving.diving
                }
              })
            }
          }
          if (country.country==="japan"){
            const id=document.getElementById('medalla-tenis-japon');
            if(id && country.disciplines){
              country.disciplines.forEach(tennis=>{
                if(tennis.tennis !== undefined){
                  id.textContent=tennis.tennis
                }
              })
            }
          }

          if (country.country==="germany"){
            const id=document.getElementById('medalla-atletismo-alemania');
            if(id && country.disciplines){
              country.disciplines.forEach(athletics=>{
                if(athletics.athletics !== undefined){
                  id.textContent=athletics.athletics
                }
              })
            }
            const h1Gold = document.getElementById("medalla-oro-alemania");
            if (h1Gold) h1Gold.textContent = country.gold;

            const h1Silver = document.getElementById("medalla-plata-alemania");
            if (h1Silver) h1Silver.textContent = country.silver;

            const h1Bronze = document.getElementById("medalla-bronce-alemania");
            if (h1Bronze) h1Bronze.textContent = country.bronze;
          }
          if (country.country==="germany"){
            const id=document.getElementById('medalla-natacion-alemania');
            if(id && country.disciplines){
              country.disciplines.forEach(swimming=>{
                if(swimming.swimming !== undefined){
                  id.textContent=swimming.swimming
                }
              })
              
            }
          }
          if (country.country==="germany"){
            const id=document.getElementById('medalla-gimnasta-alemania');
            if(id && country.disciplines){
              country.disciplines.forEach(gymnastics=>{
                if(gymnastics.gymnastics !== undefined){
                  id.textContent=gymnastics.gymnastics
                }
              })
            }
          }
          if (country.country==="germany"){
            const id=document.getElementById('medalla-basket-alemania');
            if(id && country.disciplines){
              country.disciplines.forEach(basketball=>{
                if(basketball.basketball !== undefined){
                  id.textContent=basketball.basketball
                }
              })
            }
          }
          if (country.country==="germany"){
            const id=document.getElementById('medalla-lucha-alemania');
            if(id && country.disciplines){
              country.disciplines.forEach(wrestling=>{
                if(wrestling.wrestling !== undefined){
                  id.textContent=wrestling.wrestling
                }
              })
            }
          }
          if (country.country==="germany"){
            const id=document.getElementById('medalla-pesas-alemania');
            if(id && country.disciplines){
              country.disciplines.forEach(weightlifting=>{
                if(weightlifting.weightlifting !== undefined){
                  id.textContent=weightlifting.weightlifting
                }
              })
            }
          }
          if (country.country==="germany"){
            const id=document.getElementById('medalla-bucear-alemania');
            if(id && country.disciplines){
              country.disciplines.forEach(diving=>{
                if(diving.diving !== undefined){
                  id.textContent=diving.diving
                }
              })
            }
          }
          if (country.country==="germany"){
            const id=document.getElementById('medalla-tenis-alemania');
            if(id && country.disciplines){
              country.disciplines.forEach(tennis=>{
                if(tennis.tennis !== undefined){
                  id.textContent=tennis.tennis
                }
              })
            }
          }

          if (country.country==="australia"){
            const id=document.getElementById('medalla-atletismo-australia');
            if(id && country.disciplines){
              country.disciplines.forEach(athletics=>{
                if(athletics.athletics !== undefined){
                  id.textContent=athletics.athletics
                }
              })
            }
            const h1Gold = document.getElementById("medalla-oro-australia");
            if (h1Gold) h1Gold.textContent = country.gold;

            const h1Silver = document.getElementById("medalla-plata-australia");
            if (h1Silver) h1Silver.textContent = country.silver;

            const h1Bronze = document.getElementById("medalla-bronce-australia");
            if (h1Bronze) h1Bronze.textContent = country.bronze;
          }
          if (country.country==="australia"){
            const id=document.getElementById('medalla-natacion-australia');
            if(id && country.disciplines){
              country.disciplines.forEach(swimming=>{
                if(swimming.swimming !== undefined){
                  id.textContent=swimming.swimming
                }
              })
              
            }
          }
          if (country.country==="australia"){
            const id=document.getElementById('medalla-gimnasta-australia');
            if(id && country.disciplines){
              country.disciplines.forEach(gymnastics=>{
                if(gymnastics.gymnastics !== undefined){
                  id.textContent=gymnastics.gymnastics
                }
              })
            }
          }
          if (country.country==="australia"){
            const id=document.getElementById('medalla-basket-australia');
            if(id && country.disciplines){
              country.disciplines.forEach(basketball=>{
                if(basketball.basketball !== undefined){
                  id.textContent=basketball.basketball
                }
              })
            }
          }
          if (country.country==="australia"){
            const id=document.getElementById('medalla-lucha-australia');
            if(id && country.disciplines){
              country.disciplines.forEach(wrestling=>{
                if(wrestling.wrestling !== undefined){
                  id.textContent=wrestling.wrestling
                }
              })
            }
          }
          if (country.country==="australia"){
            const id=document.getElementById('medalla-pesas-australia');
            if(id && country.disciplines){
              country.disciplines.forEach(weightlifting=>{
                if(weightlifting.weightlifting !== undefined){
                  id.textContent=weightlifting.weightlifting
                }
              })
            }
          }
          if (country.country==="australia"){
            const id=document.getElementById('medalla-bucear-australia');
            if(id && country.disciplines){
              country.disciplines.forEach(diving=>{
                if(diving.diving !== undefined){
                  id.textContent=diving.diving
                }
              })
            }
          }
          if (country.country==="australia"){
            const id=document.getElementById('medalla-tenis-australia');
            if(id && country.disciplines){
              country.disciplines.forEach(tennis=>{
                if(tennis.tennis !== undefined){
                  id.textContent=tennis.tennis
                }
              })
            }
          }

          if (country.country==="russia"){
            const id=document.getElementById('medalla-atletismo-rusia');
            if(id && country.disciplines){
              country.disciplines.forEach(athletics=>{
                if(athletics.athletics !== undefined){
                  id.textContent=athletics.athletics
                }
              })
            }
            const h1Gold = document.getElementById("medalla-oro-rusia");
            if (h1Gold) h1Gold.textContent = country.gold;

            const h1Silver = document.getElementById("medalla-plata-rusia");
            if (h1Silver) h1Silver.textContent = country.silver;

            const h1Bronze = document.getElementById("medalla-bronce-rusia");
            if (h1Bronze) h1Bronze.textContent = country.bronze;
          }
          if (country.country==="russia"){
            const id=document.getElementById('medalla-natacion-rusia');
            if(id && country.disciplines){
              country.disciplines.forEach(swimming=>{
                if(swimming.swimming !== undefined){
                  id.textContent=swimming.swimming
                }
              })
              
            }
          }
          if (country.country==="russia"){
            const id=document.getElementById('medalla-gimnasta-rusia');
            if(id && country.disciplines){
              country.disciplines.forEach(gymnastics=>{
                if(gymnastics.gymnastics !== undefined){
                  id.textContent=gymnastics.gymnastics
                }
              })
            }
          }
          if (country.country==="russia"){
            const id=document.getElementById('medalla-basket-rusia');
            if(id && country.disciplines){
              country.disciplines.forEach(basketball=>{
                if(basketball.basketball !== undefined){
                  id.textContent=basketball.basketball
                }
              })
            }
          }
          if (country.country==="russia"){
            const id=document.getElementById('medalla-lucha-rusia');
            if(id && country.disciplines){
              country.disciplines.forEach(wrestling=>{
                if(wrestling.wrestling !== undefined){
                  id.textContent=wrestling.wrestling
                }
              })
            }
          }
          if (country.country==="russia"){
            const id=document.getElementById('medalla-pesas-rusia');
            if(id && country.disciplines){
              country.disciplines.forEach(weightlifting=>{
                if(weightlifting.weightlifting !== undefined){
                  id.textContent=weightlifting.weightlifting
                }
              })
            }
          }
          if (country.country==="russia"){
            const id=document.getElementById('medalla-bucear-rusia');
            if(id && country.disciplines){
              country.disciplines.forEach(diving=>{
                if(diving.diving !== undefined){
                  id.textContent=diving.diving
                }
              })
            }
          }
          if (country.country==="russia"){
            const id=document.getElementById('medalla-tenis-rusia');
            if(id && country.disciplines){
              country.disciplines.forEach(tennis=>{
                if(tennis.tennis !== undefined){
                  id.textContent=tennis.tennis
                }
              })
            }
          }

          if (country.country==="uk"){
            const id=document.getElementById('medalla-atletismo-reinou');
            if(id && country.disciplines){
              country.disciplines.forEach(athletics=>{
                if(athletics.athletics !== undefined){
                  id.textContent=athletics.athletics
                }
              })
            }
            const h1Gold = document.getElementById("medalla-oro-reinounido");
            if (h1Gold) h1Gold.textContent = country.gold;

            const h1Silver = document.getElementById("medalla-plata-reinounido");
            if (h1Silver) h1Silver.textContent = country.silver;

            const h1Bronze = document.getElementById("medalla-bronce-reinounido");
            if (h1Bronze) h1Bronze.textContent = country.bronze;
          }
          if (country.country==="uk"){
            const id=document.getElementById('medalla-natacion-reinou');
            if(id && country.disciplines){
              country.disciplines.forEach(swimming=>{
                if(swimming.swimming !== undefined){
                  id.textContent=swimming.swimming
                }
              })
              
            }
          }
          if (country.country==="uk"){
            const id=document.getElementById('medalla-gimnasta-reinou');
            if(id && country.disciplines){
              country.disciplines.forEach(gymnastics=>{
                if(gymnastics.gymnastics !== undefined){
                  id.textContent=gymnastics.gymnastics
                }
              })
            }
          }
          if (country.country==="uk"){
            const id=document.getElementById('medalla-basket-reinou');
            if(id && country.disciplines){
              country.disciplines.forEach(basketball=>{
                if(basketball.basketball !== undefined){
                  id.textContent=basketball.basketball
                }
              })
            }
          }
          if (country.country==="uk"){
            const id=document.getElementById('medalla-pesas-reinou');
            if(id && country.disciplines){
              country.disciplines.forEach(wrestling=>{
                if(wrestling.wrestling !== undefined){
                  id.textContent=wrestling.wrestling
                }
              })
            }
          }
          if (country.country==="uk"){
            const id=document.getElementById('medalla-lucha-reinou');
            if(id && country.disciplines){
              country.disciplines.forEach(weightlifting=>{
                if(weightlifting.weightlifting !== undefined){
                  id.textContent=weightlifting.weightlifting
                }
              })
            }
          }
          if (country.country==="uk"){
            const id=document.getElementById('medalla-bucear-reinou');
            if(id && country.disciplines){
              country.disciplines.forEach(diving=>{
                if(diving.diving !== undefined){
                  id.textContent=diving.diving
                }
              })
            }
          }
          if (country.country==="uk"){
            const id=document.getElementById('medalla-tenis-reinou');
            if(id && country.disciplines){
              country.disciplines.forEach(tennis=>{
                if(tennis.tennis !== undefined){
                  id.textContent=tennis.tennis
                }
              })
            }
          }

          if (country.country==="france"){
            const id=document.getElementById('medalla-atletismo-francia');
            if(id && country.disciplines){
              country.disciplines.forEach(athletics=>{
                if(athletics.athletics !== undefined){
                  id.textContent=athletics.athletics
                }
              })
            }
            const h1Gold = document.getElementById("medalla-oro-francia");
            if (h1Gold) h1Gold.textContent = country.gold;

            const h1Silver = document.getElementById("medalla-plata-francia");
            if (h1Silver) h1Silver.textContent = country.silver;

            const h1Bronze = document.getElementById("medalla-bronce-francia");
            if (h1Bronze) h1Bronze.textContent = country.bronze;
          }
          if (country.country==="france"){
            const id=document.getElementById('medalla-natacion-francia');
            if(id && country.disciplines){
              country.disciplines.forEach(swimming=>{
                if(swimming.swimming !== undefined){
                  id.textContent=swimming.swimming
                }
              })
              
            }
          }
          if (country.country==="france"){
            const id=document.getElementById('medalla-gimnasta-francia');
            if(id && country.disciplines){
              country.disciplines.forEach(gymnastics=>{
                if(gymnastics.gymnastics !== undefined){
                  id.textContent=gymnastics.gymnastics
                }
              })
            }
          }
          if (country.country==="france"){
            const id=document.getElementById('medalla-basket-francia');
            if(id && country.disciplines){
              country.disciplines.forEach(basketball=>{
                if(basketball.basketball !== undefined){
                  id.textContent=basketball.basketball
                }
              })
            }
          }
          if (country.country==="france"){
            const id=document.getElementById('medalla-lucha-francia');
            if(id && country.disciplines){
              country.disciplines.forEach(wrestling=>{
                if(wrestling.wrestling !== undefined){
                  id.textContent=wrestling.wrestling
                }
              })
            }
          }
          if (country.country==="france"){
            const id=document.getElementById('medalla-pesas-francia');
            if(id && country.disciplines){
              country.disciplines.forEach(weightlifting=>{
                if(weightlifting.weightlifting !== undefined){
                  id.textContent=weightlifting.weightlifting
                }
              })
            }
          }
          if (country.country==="france"){
            const id=document.getElementById('medalla-bucear-francia');
            if(id && country.disciplines){
              country.disciplines.forEach(diving=>{
                if(diving.diving !== undefined){
                  id.textContent=diving.diving
                }
              })
            }
          }
          if (country.country==="france"){
            const id=document.getElementById('medalla-tenis-francia');
            if(id && country.disciplines){
              country.disciplines.forEach(tennis=>{
                if(tennis.tennis !== undefined){
                  id.textContent=tennis.tennis
                }
              })
            }
          }




        });
      })
      .catch(err => {
        console.error("Error al obtener los datos:", err);
      });
  });