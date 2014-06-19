var YY = 2014;
var MM = 08;
var DD = 18;
var HH = 08;
var MI = 00;
var SS = 00; 

function atualizaContador() {
  // hoje = Data atual
  // futuro = Data até onde o contador vai rodar
  var hoje = new Date();
  var futuro = new Date(YY,MM-1,DD,HH,MI,SS); 

  // Ajustando variáveis de acordo com a difereça entra datas que é dada em milisegundos
  var ss = parseInt((futuro - hoje) / 1000);
  var mm = parseInt(ss / 60);
  var hh = parseInt(mm / 60);
  var dd = parseInt(hh / 24); 

  // Ajustando para que a diferença entre datas seja exibida na forma correta
  ss = ss - (mm * 60);
  mm = mm - (hh * 60);
  hh = hh - (dd * 24); 

  // Texto a ser impresso
  var faltam = '';
  var d = '';
  var h = '';
  var m = '';
  var s = '';
 
    d += dd;
    if(hh < 10)
      h += "0" + hh;
    else 
      h += hh;

    if(mm < 10)
      m += "0" + mm;
    else
      m += mm;
    
    if(ss < 10)
      s += "0" + ss;
    else
      s += ss;
  

  if (dd+hh+mm+ss > 0) {
    document.getElementById('dias').innerHTML = d;
    document.getElementById('horas').innerHTML = h;
    document.getElementById('minutos').innerHTML = m;
    document.getElementById('segundos').innerHTML = s;
    setTimeout(atualizaContador,1000);
  } 
    else {
    document.getElementById('contador').innerHTML = 'CHEGOU!!!!';
    setTimeout(atualizaContador,1000);
  }
}
