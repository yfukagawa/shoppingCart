let eventIndex = 0;

function wedding() {
    eventIndex = 1;
    var x = document.getElementById('weddingDetail');
    if(x.style.visibility !== 'visible') {
        x.style.visibility = 'visible';
    } 
    multiHide();
    console.log('wedding', eventIndex)
    
}
function branch() {
    eventIndex = 2;
    var x = document.getElementById('weddingDetail');
    if(x.style.visibility !== 'hidden') {
        x.style.visibility = 'hidden';
    } 
    multiHide();
    console.log('branch', eventIndex)
    
}

function dinner() {
    eventIndex = 2;
    var x = document.getElementById('weddingDetail');
    if(x.style.visibility !== 'hidden') {
        x.style.visibility = 'hidden';
    } 
    multiHide();
    console.log('dinner', eventIndex)
    
}

function party() {
    eventIndex = 2;
    var x = document.getElementById('weddingDetail');
    if(x.style.visibility !== 'hidden') {
        x.style.visibility = 'hidden';
    } 
    multiHide();
    console.log('party', eventIndex)
}

function basicService() {
    var ac = document.getElementById('addCocktail');
    var cl = document.getElementById('cocktailLength');
    var ar = document.getElementById('addReception');
    var rl = document.getElementById('receptionLength');
    var x = document.getElementById('basicServiceInfo');
    var y = document.getElementById('receptionOnlyInfo');
    if(x.style.visibility !== 'visible') {
        x.style.visibility = 'visible';
    }
    
    
        y.style.visibility = 'hidden';
}
function receptionOnly() {
    var y = document.getElementById('basicServiceInfo');
    var x = document.getElementById('receptionOnlyInfo');
    if(x.style.visibility !== 'visible') {
        x.style.visibility = 'visible';
    }
    
        y.style.visibility = 'hidden';

}

function multiHide() {
    var y = document.getElementById('basicServiceInfo');
    var z = document.getElementById('receptionOnlyInfo');
    y.style.visibility = 'hidden';
    z.style.visibility = 'hidden';
}

