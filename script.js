//namnger bild o kapp och väntar på att de ska ladda innan namn
window.addEventListener("DOMContentLoaded", () => {
    const   t1 = document.getElementById("text1");
    const   t2 = document.getElementById("text2");
    const   t3 = document.getElementById("text3");
    const   t4 = document.getElementById("text4");
    const   SBtn = document.getElementById("arccorp");
    const   SBtn2 = document.getElementById("crusader");
    const   SBtn3 = document.getElementById("hurston");
    const   SBtn4 = document.getElementById("microtech");

    SBtn.addEventListener("click", () => {
        if(t1.style.display === "none" || t1.style.display === "" ) {   // Om bilden är dold → visa den
        t1.style.display = "flex";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
  } 
        else {     // Om bilden visas → göm den
        t1.style.display = "none";
    }
    
  });

   SBtn2.addEventListener("click", () => {
        if(t2.style.display === "none" || t2.style.display === "" ) {   // Om bilden är dold → visa den
        t2.style.display = "flex";
        t1.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
  } 
        else {     // Om bilden visas → göm den
        t2.style.display = "none";
    }
    
  });




   SBtn3.addEventListener("click", () => {
        if(t3.style.display === "none" || t3.style.display === "" ) {   // Om bilden är dold → visa den
        t3.style.display = "flex";
        t1.style.display = "none";
        t2.style.display = "none";
        t4.style.display = "none";
  } 
        else {     // Om bilden visas → göm den
        t3.style.display = "none";
    }
    
  });

     SBtn4.addEventListener("click", () => {
        if(t4.style.display === "none" || t4.style.display === "" ) {   // Om bilden är dold → visa den
        t4.style.display = "flex";
        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
  } 
        else {     // Om bilden visas → göm den
        t4.style.display = "none";
    }
    
  });

});