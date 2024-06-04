let eventIndex = 0;

// Wedding
function wedding() {
    var x = document.getElementById('weddingDetail');

    eventIndex = 1;
    x.style.visibility = 'visible';
    hideBackgroundMusic(); 
    multiHide();
    console.log('wedding', eventIndex)
    
}

function basicService() {
    var x = document.getElementById('basicServiceInfo');
    var y = document.getElementById('receptionOnlyInfo');
    var yy = document.getElementById('receptionOnlyLength');
    var ac = document.getElementById('addCocktail');
    var cl = document.getElementById('cocktailLength');
    var ar = document.getElementById('addReception');
    var rl = document.getElementById('receptionLength');
    
    x.style.visibility = 'visible';
    ac.style.visibility = 'visible';
    cl.style.visibility = 'visible';
    ar.style.visibility = 'visible';
    rl.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    yy.style.visibility = 'hidden';

}
function receptionOnly() {
    var x = document.getElementById('receptionOnlyInfo');
    var xx = document.getElementById('receptionOnlyLength');
    var y = document.getElementById('basicServiceInfo');
    var ac = document.getElementById('addCocktail');
    var cl = document.getElementById('cocktailLength');
    var ar = document.getElementById('addReception');
    var rl = document.getElementById('receptionLength');
        
    x.style.visibility = 'visible';
    xx.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    ac.style.visibility = 'hidden';
    cl.style.visibility = 'hidden';
    ar.style.visibility = 'hidden';
    rl.style.visibility = 'hidden';
        
}

// Others
function other() {
    var bm = document.getElementById('backgroundMusic');
    var bml = document.getElementById('backgroundLength');

    bm.style.visibility = 'visible';
    bml.style.visibility = 'visible';
    eventIndex =2;
    hideWedding();
    multiHide();
    
}

function multiHide() {
    var y = document.getElementById('basicServiceInfo');
    var z = document.getElementById('receptionOnlyInfo');
    y.style.visibility = 'hidden';
    z.style.visibility = 'hidden';
}

function hideWedding() {
    var x = document.getElementById('weddingDetail');
    var xx = document.getElementById('receptionOnlyLength');
    var y = document.getElementById('basicServiceInfo');
    var z = document.getElementById('receptionOnlyInfo');
    var ac = document.getElementById('addCocktail');
    var cl = document.getElementById('cocktailLength');
    var ar = document.getElementById('addReception');
    var rl = document.getElementById('receptionLength');
    
    x.style.visibility = 'hidden';
    xx.style.visibility = 'hidden';
    y.style.visibility = 'hidden';
    z.style.visibility = 'hidden';
    ac.style.visibility = 'hidden';
    cl.style.visibility = 'hidden';
    ar.style.visibility = 'hidden';
    rl.style.visibility = 'hidden';
}

function hideBackgroundMusic() {
    var x = document.getElementById('backgroundMusic');
    x.style.visibility = 'hidden'; 
}

