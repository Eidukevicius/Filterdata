const data = [
    {
        vardas:'Jonas',
        amzius:25,
        miestas:'Vilnius'
    },
    {
        vardas:'Petras',
        amzius:20,
        miestas:'Kaunas'
    },
    {
        vardas:'Dovydas',
        amzius:30,
        miestas:'Klaipeda'
    },
    {
        vardas:'Ona',
        amzius:42,
        miestas:'Kedainiai'
    },
    {
        vardas:'Migle',
        amzius:24,
        miestas:'Alytus'
    },
    {
        vardas:'Kestutis',
        amzius:45,
        miestas:'Ukmerge'
    },
    {
        vardas:'Vilius',
        amzius:33,
        miestas:'Vilnius'
    },
    {
        vardas:'Jone',
        amzius:21,
        miestas:'Vilnius'
    },
    {
        vardas:'Sofija',
        amzius:55,
        miestas:'Skuodas'
    },
    {
        vardas:'Vilte',
        amzius:32,
        miestas:'Mazeikiai'
    },
    {
        vardas:'Eligijus',
        amzius:41,
        miestas:'Zarasai'
    },
    {
        vardas:'Kristina',
        amzius:19,
        miestas:'Raseiniai'
    },
    {
        vardas:'Daiva',
        amzius:24,
        miestas:'Moletai'
    },
    {
        vardas:'Vilija',
        amzius:30,
        miestas:'Utena'
    },
]

document.getElementById('filterData').addEventListener('submit', function (e) {
    e.preventDefault();
  
    let amzius = parseInt(document.getElementById('age').value, 10);
    let miestas = document.getElementById('city').value.toLowerCase();
  
    let filterData = data.filter(function (zmogus) {
      return (isNaN(amzius) || zmogus.amzius === amzius) &&
             (miestas === '' || zmogus.miestas.toLowerCase().includes(miestas));
    });
  
    displayResults(filterData);
  });
  
  function displayResults(results) {
    let rezultatuElementas = document.getElementById('results');
    rezultatuElementas.innerHTML = '';
  
    results.forEach(function (zmogus) {
      let li = document.createElement('li');
      li.textContent = 'Vardas: ' + zmogus.vardas + ', Amžius: ' + zmogus.amzius + ', Miestas: ' + zmogus.miestas;
      rezultatuElementas.appendChild(li);
    });
}