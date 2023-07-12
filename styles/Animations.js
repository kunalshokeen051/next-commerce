
export const slideDown = {
    hidden: {
       y:'-100px',
       opacity: 0.5,
    },
    visible: {
        y: 0,
        opacity:1,
        transition: {
            type:"spring",
            duration:.4,

        }
    } 
}


export const slideRight = {
    hidden: {
        x:'-500px',
        opacity: 0.5,
     },
     visible: {
         x: 0,
         opacity:1,
         transition: {
             type:"spring",
             duration:1,
             stiffness:150
 
         }
     } 
}


export const fadeIn = {
    hidden: {
        scale: .8,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition:{
            type:'tween',
            duration:.6
        }
    },
    hover:{
        opacity:0.8
    },

    focus:{
        scale: 1,
        opacity: .8,
        transition:{
            type:'spring',
            stiffness:150,
            duration:.6
        }
    },
}

export const slideUp = {
    hidden: {
        y:'100px',
        opacity: 0
    },
    visible: {
        y:0,
        opacity: 1,
        transition:{
            type:'tween',
            duration:.5,
            delay:.2
        }
    }
}