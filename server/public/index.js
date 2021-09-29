const placeForms = () => {
  body_tag.innerHTML += createForms('form_create', 'POST')+ 
                        createForms('form_read', 'GET')+  
                        createForms('form_update', 'UPDATE')+  
                        createForms('form_delete', 'DELETE');
};

const createForms = (formName, method) => {
  //[TODO] Refactor this
  const form = `
  <div class='form-div'>
  <h1>Form: ${formName}</h1>
  <label>Fields Quantity:<input type="number" name="fields_quantity" value="1" min="1" step="1" max="10" onchange="updateFieldsQuantity('${formName}_input_div', value)"></label>
  <p>Please insert info into fields</p>
  <form action='/requests/${method}' method="POST" id=${formName}>
    <label>Table:<input class='input-field' type='text' name='db_table' value="requests" required maxlength="80" readonly></label><br><br>
    <div class="form_input_divs" id="${formName}_input_div">
      <div id="${formName}_input_div_1">
        <label>Field:<input class='input-field' type='text' name='db_field_1' value="content" required maxlength="80" readonly></label>
        <label>Value:<input class='input-field' type='text' name='db_value_1' required maxlength="80" placeholder="insert value"></label>
      </div>
    </div>
    
    <input class='submit-button' type="submit" value='Submit'>
  </form>
  </div>
  `;

  return form;
}

const updateFieldsQuantity = (targetId, counterValue) => {
  const target = document.getElementById(targetId);

  //console.log("target: " + counterValue)
  //console.log("ueid: " + uniqueElementId)
  //console.log(target.childElementCount, "|", parseInt(counterValue));
  
  if(target.childElementCount < parseInt(counterValue)){
    uniqueElementId++;
    
    target.innerHTML += `
      <div class="form_input_divs" id="targetId_${uniqueElementId}">
        <label>Field:<input class='input-field' type='text' name='db_field_${uniqueElementId}' value="" required maxlength="80" placeholder="insert field"></label>
        <label>Value:<input class='input-field' type='text' name='db_value_${uniqueElementId}' required maxlength="80" placeholder="insert value"></label>
      </div>
    `
  }else if(target.childElementCount > counterValue){

  }

}
