let data = [ 585,  660,  710,  978,  1650, 6127, 8549, 10152, 10875 ];
let labels = [ 1500, 1600, 1700, 1800, 1900, 2000, 2030, 2060, 2100 ];
let title = 'World Population (in millions)';

let options = {
  

  type: 'bar',
  
  data: {
    labels: labels,
    datasets: [{
      
      // a few basic settings for the bars
      backgroundColor: 'rgb(255,150,0)',
      borderColor:     'rgb(200,100,0)',
      borderWidth:     2,
      

      barPercentage: 1.0,
      
      data: data,
      label: 'Population (in millions)'
    }]
  },
  options: {
    title: {
      display: true,
      text: title
    },
    legend: {
      display: false
    }
  }
}

let chart = new Chart(document.getElementById('canvas'), options);

