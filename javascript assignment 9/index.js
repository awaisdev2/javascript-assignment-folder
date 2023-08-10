let pcs = [];

function onSubmit() {
  let pcName = document.getElementById("pcName").value;
  let pcWarranty = document.getElementById("pcWarranty").value;
  let pcModel = document.getElementById("pcModel").value;
  let pcDesc = document.getElementById("pcDesc").value;
  if(pcName === '' || pcWarranty === '' || pcModel === '' || pcDesc === '' ){
    return document.getElementById('showInput').innerHTML = 'Please fill the empty fields'
  }
  if(pcName.length < 4 || pcWarranty.length < 4 || pcModel.length < 4 || pcDesc.length < 10){
    return document.getElementById('showInput').innerHTML = 'Each field must require atleast 4 characters but specifictions must be 10 characters long'
  }
  else{
      const data = [pcName, pcWarranty, pcModel, pcDesc];
      document.getElementById("showInput").innerHTML = data;
  }
  const newPc = {
    name: pcName,
    warranty: pcWarranty,
    model: pcModel,
    description: pcDesc
   }
  pcs.push(newPc)
  comingSoon()
}
function comingSoon() {
  console.log(pcs)
    console.log("More features are coming soon!")
}