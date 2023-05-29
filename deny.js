  const form = document.getElementById('myForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const soreThroatChecked = form.elements['symptoms[]'][0].checked;
    const bodyPainsChecked = form.elements['symptoms[]'][1].checked;
    const feverChecked = form.elements['symptoms[]'][2].checked;
    const headacheChecked = form.elements['symptoms[]'][3].checked;
    
    const covidContactChecked = form.elements['travel-history'][0].checked;
    const symptomsContactChecked = form.elements['travel-history2'][0].checked;
    
    if (soreThroatChecked || bodyPainsChecked || feverChecked || headacheChecked || covidContactChecked || symptomsContactChecked) {
      alert('You are not eligible to enter the premises.');
    } else {
      alert('You are eligible to enter the premises.');
    }
    
    form.reset();
  });

