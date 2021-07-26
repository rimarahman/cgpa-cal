const semi_input =document.getElementById( 'semi_input');
const credit_input=document.getElementById( 'credit_input');
const SGPA_input =document.getElementById( 'SGPA_input');
const add_CGPA =document.getElementById( 'add_CGPA');
const btn_reset =document.getElementById( 'btn_reset');
const btn_success =document.getElementById( 'btn_success');
const dynamic__cgpa =document.getElementById( 'dynamic__cgpa');
const cgpa_text =document.getElementById( 'cgpa_text');
const tbody =document.getElementById( 'tbody');
const table =document.getElementById( 'table');
const calc_gp =document.getElementById('calc_gp');
const tfoot =document.getElementById('tfoot');

let gpArry = [];

calc_gp.addEventListener("click", () => {
    let credit_input = 0,
    SGPA_input =0,

    productOfcredit_inputAndSGPA_input = 0,
    sumOfProductOfcredit_inputAndSGPA_input = 0;


    gpArry.forEach((result)=>{
        credit_input += parseInt(result.credit_input);
        SGPA_input +=parseInt(result.SGPA_input);
        productOfcredit_inputAndSGPA_input = parseInt(result.credit_input) * parseInt(result.SGPA_input);
        sumOfProductOfcredit_inputAndSGPA_input += productOfcredit_inputAndSGPA_input;
      });

      const tr = document.createElement("tr");

      tdcredit_input = document.createElement("td");
      tdcredit_input.innerHTML = `your total credit is ${credit_input}`;
    
      tdSGPA_input = document.createElement("td");
      tdSGPA_input.setAttribute("colspan", "1");
      tdSGPA_input.innerHTML = `your GPA is ${(
        sumOfProductOfcredit_inputAndSGPA_input /credit_input
      ).toFixed(2)} `;
        
      tr.appendChild(tdcredit_input);
      tr.appendChild(tdSGPA_input);
        if (tfoot.querySelector("tr") !== null) {
            tfoot.querySelector("tr").remove();
        }
      tfoot.appendChild(tr);
      calculation();
    
    });

    function calculation(){
        let msg = showMessage(tdSGPA_input);
        message.textContent = msg;

    }
       

add_CGPA.addEventListener("click", () => {
    if (
        credit_input.value === "" ||
        semi_input.value <= 0 ||
        SGPA_input.selectedIndex === 0
    ) {
      alert("Wrong input,check and try again");
    } else {
      const tr = document.createElement("tr");
      const tdsemi_input = document.createElement("td");
      tdsemi_input.innerHTML = semi_input.value;
      const tdcredit_input = document.createElement("td");
      tdcredit_input.innerHTML = credit_input.value;
      const tdSGPA_input = document.createElement("td");
      tdSGPA_input.innerHTML = SGPA_input.value;
      tr.appendChild(tdsemi_input);
      tr.appendChild(tdcredit_input);
      tr.appendChild(tdSGPA_input);
      tbody.appendChild(tr);
       

      gpArry.push({
        credit_input: credit_input.value,
        SGPA_input: SGPA_input.value,
      });
      console.log(gpArry);
      semi_input.value = "";
      credit_input.value = "";
      SGPA_input.value = "";
    }
  });


  function showMessage( tdSGPA_inputvalue){
    if(tdSGPA_inputvalue < 4.00){
        return "Outstanding"
    } else if(tdSGPA_inputvalue >= 3.80 ){
        return "Excellent"
    } else if(tdSGPA_inputvalue > 3.50){
        return "Very good"
    } else if(tdSGPA_inputvalue > 3.00){
        return "Average"
    } else if(tdSGPA_inputvalue > 2.50 ){
        return "SGPAvalueBellow Average"
    }
    else if(tdSGPA_inputvalue > 00 ){
        return "Fail"
    }
}

btn_reset.addEventListener("click", () => {

    gpArry = [];
    tbody.querySelectorAll("*").forEach((child) => child.remove());
    if (tfoot.querySelector("tr") !== null) {
      tfoot.querySelector("tr").remove();
    }
  
    table.classList.add("display-none");
    calcGp.classList.add("display-none");
    clear.classList.add("display-none");

});



