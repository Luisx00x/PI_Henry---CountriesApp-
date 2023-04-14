
export function nameValidator (name, set) {
  if(!/^\S/m.test(name)){
    set(prev => {     
      return {
        ...prev,
        nameError: "El nombre de la actividad no puede empezar con un espacio vacío"
      }    
    });
  }
  else if(!/\S$/gm.test(name)){
    set(prev => {     
      return {
        ...prev,
        nameError: "El nombre de la actividad no puede terminar con un espacio en vacío"
      }    
    });
  }
  else if( /[^A-Za-zÑ-ñ- ]/.test(name) /* ||  */){
    set(prev => {     
      return {
        ...prev,
        nameError: "El nombre de la actividad no puede contener carácteres especiales"
      }    
    });
  } 
  else set( prev => {
    return {
      ...prev,
      nameError: ""
    }
  });
}

export function durationValidator(duration, set){
  
  if(duration < 0){
    set( prev =>{
      return {
        ...prev,
        durationError: "No se puede ingresar un valor negativo"
      }
    })
  }
  else if(duration === 0){
    set ( prev => {
      return {
        ...prev,
        durationError: "La actividad no puede tener duración 0"
      }
    })
  }
  else{
    set( prev => {
      return {
        ...prev,
        durationError: ""
      }
    })
  }
}
