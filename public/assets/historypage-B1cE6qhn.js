import"./main-DP3VjRHo.js";const l=""+new URL("Book-FBXM1qYv.png",import.meta.url).href,h=async()=>{var c;const d="http://localhost:3000/api/entries",i=(c=localStorage.getItem("token"))==null?void 0:c.trim();if(!i){showSnackbar("Error finding a valid token!");return}const n=await(await fetch(d,{method:"GET",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"}})).json();if(n.error){console.log("Error fetching diary entries!");return}console.log(n);const s=document.querySelector(".card-area");s.style.display="w",s.innerHTML="",n.forEach(t=>{const e=document.createElement("div");e.classList.add("parent");const r=document.createElement("div");r.classList.add("child-left");const o=document.createElement("img");o.src=l,o.classList.add("Book1"),o.alt="ABook",r.appendChild(o);const a=document.createElement("div");a.classList.add("child-right"),a.innerHTML=`
        <h4>Entry Date: ${new Date(t.entry_date).toLocaleDateString()}</h4> 
        <p><strong>Mood:</strong> ${t.mood||"No mood data"}</p> 
        <p><strong>Weight:</strong> ${t.weight?`${t.weight} kg`:"No weight data"}</p> 
        <p><strong>Sleep Hours:</strong> ${t.sleep_hours||"No sleep data"}</p> 
        <p><strong>Notes:</strong> ${t.notes||"No notes"}</p>
      `,e.appendChild(r),e.appendChild(a),s.appendChild(e)})},g=async()=>{var c;const d="http://localhost:3000/api/habits",i=(c=localStorage.getItem("token"))==null?void 0:c.trim();if(!i){showSnackbar("Error finding a valid token!");return}const n=await(await fetch(d,{method:"GET",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"}})).json();if(n.error){console.log("Error fetching habit entries!");return}console.log(n);const s=document.querySelector(".card-area2");s.style.display="w",s.innerHTML="",n.forEach(t=>{const e=document.createElement("div");e.classList.add("parent2");const r=document.createElement("div");r.classList.add("child-left2");const o=document.createElement("img");o.src=l,o.classList.add("Book2"),o.alt="ABook",r.appendChild(o);const a=document.createElement("div");a.classList.add("child-right2"),a.innerHTML=`
        <h4>Entry Date: ${new Date(t.entry_date).toLocaleDateString()}</h4> 
        <p><strong>Drank Water:</strong><br> ${t.drank_water?"Yes":"No"}</p> 
        <p><strong>Exercised:</strong><br> ${t.exercised?"Yes":"No"}</p> 
        <p><strong>Did Hobby:</strong><br> ${t.did_hobby?"Yes":"No"}</p> 
        <p><strong>Spent Money:</strong><br> ${t.spent_money?"Yes":"No"}</p> 
        <p><strong>Bad Habit:</strong><br> ${t.bad_habit?"Yes":"No"}</p> 
        <p><strong>Drank Alcohol:</strong><br> ${t.drank_alcohol?"Yes":"No"}</p>
      `,e.appendChild(r),e.appendChild(a),s.appendChild(e)})},m=document.querySelector("#diaryRequest");m.addEventListener("click",h);const u=document.querySelector("#habitRequest");u.addEventListener("click",g);
