function component() {
    const element = document.createElement('div');
    
    element.textContent = "Hello World"  
    return element;
  }
  
  document.body.appendChild(component());