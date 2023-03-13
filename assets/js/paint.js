function configureListeners() {
    const images = document.getElementsByTagName('img');

    for (let i = 0, len = images.length; i < len; i++) {  
        const image = images[i];
        image.addEventListener('mouseover', addOpacity);
        image.addEventListener('mouseout', removeOpacity);        
    } 
}



function addOpacity(event) {
    event.target.classList.add('dim');
    getProductInfo(event.target.id);     
}
function removeOpacity(event) {
    event.target.classList.remove('dim');
    getProductInfo(event.target.id);     

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':
          price = "$14.99";
          colorName = "Lime Green";
          updatePrice(colorName, price);
          break;
        case 'pn2':
          price = "$11.14";
          colorName = "Medium Brown";
          updatePrice(colorName, price);
          break;
        case 'pn3':
          price = "$22.99";
          colorName = "Royal Blue";
          updatePrice(colorName, price);
          break;
        case 'pn4':
          price = "$13.42";
          colorName = "Solid Red";
          updatePrice(colorName, price);
          break;
        case 'pn5':
          price = "$21.98";
          colorName = "Solid White";
          updatePrice(colorName, price);
          break;
        case 'pn6':
          price = "$4.99";
          colorName = "Solid Black";
          updatePrice(colorName, price);
          break;
        case 'pn7':
          price = "$8.22";
          colorName = "Solid Cyan";
          updatePrice(colorName, price);
          break;
        case 'pn8':
          price = "$11.99";
          colorName = "Solid Purple";
          updatePrice(colorName, price);
          break;
        case 'pn9':
          price = "$14.99";
          colorName = "Solid Yellow";
          updatePrice(colorName, price);
          break;
        default:
          break;
      }
      

function updatePrice(colorName, price)
{       
    let colorPrice = document.getElementById('color-price');
    colorPrice.innerText = price;
        
    let color = document.getElementById('color-name');
    color.innerText = colorName;
}

    
}
