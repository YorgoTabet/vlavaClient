fetch('http://localhost:3000/getServices')
  .then(response => response.json())
  .then(json => {
    console.log(json)
    for(let i=0;i<=json.length;i++){

        allService = document.getElementById('')
        serviceItem = document.createElement('div')
        serviceItem.innerHTML = `<div class="icon"><i class="bi bi-briefcase"></i></div>
          <h4 class="title"><a href="">${json[i].service}</a></h4>
          <p class="description">${json[i].desc}</p>
        `
        serviceItem.className = "col-lg-4 col-md-6 icon-box"
        container = document.getElementById('services')
        container.appendChild(serviceItem)
    }
  }
   )