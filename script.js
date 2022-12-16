document.getElementById("loveIn").onclick = function() {
      if(fungsiAwal==0){
        audio.play();pesanUtama1 = inip[iden];pesanUtama2 = inips[iden];
        loveIn.style="transition:all .8s ease;transform:scale(15);opacity:0";
        ftAwal.style="opacity:0";
        wallpaper.style="transform: scale(1);";
        ket.style="display:none";
        fungsiAwal=1;setTimeout(initengahan,300);setTimeout(bqmuncul,500);
      }
    }

function bqmuncul(){bq.style = "position:relative;opacity:1;visibility:visible;margin-top:15vh;transform: scale(1);";setTimeout(kalimatakhir,200);}
function bqhilang(){wallpaper.style="transform: scale(2);";bodyblur.style="opacity:.3";bq.style = "position:relative;transition:all .7s ease;";}
aktigeser=0;thisgeser=1;
document.getElementById("bq").onclick = function() {
  if(aktigeser==1){
    setTimeout(kalimatakhir,400);hsementara();
  }
}

  function hsementara(){
    ketlanjut.style="position:relative;";
    thisgeser+=1;aktigeser=0;
  }
  function munculkembali(){
    if(thisgeser<totalPesan){
      ketlanjut.style="position:relative;opacity:.8";
      aktigeser=1;
      iden += 1;
      pesanUtama1 = inip[iden];
      pesanUtama2 = inips[iden];
    }
    if(thisgeser==totalPesan){setTimeout(mulaiketikA,500);}
  }
  
  function initengahan(){
    ftAwal.style="display:none";loveIn.style="display:none";ket.style="display:none";
    Content.style = "opacity:1;margin-top:7vh";
  }
   
  function kalimatakhir(){
  	if(iden>1){
          if(iden%2==0){wallpaper.style="transform: scale(1.5)";} else {wallpaper.style="transform: scale(1)";}
          wallpaper.src = iniwp[iden];
      }
      kalimat.innerHTML="";
  	new TypeIt("#kalimat", {
      strings: ["" + pesanUtama1, "<br>" + pesanUtama2], startDelay: 10, speed: 50, cursor: false,
      afterComplete: function(){
         munculkembali();
      },}).go();
  }

  function mulaiketikA(){
  setInterval(berjatuhan,250);
  pesanAkhir.style="position:relative;opacity:1;visibility:visible;transform: scale(1)";
  new TypeIt("#pesanAkhir", {
  strings: ["" + pesanAkhiran], startDelay: 100, speed: 50, cursor: false, deleteSpeed: 20, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
  	 pesanAkhir.style.animation="rto .8s infinite alternate";
  },}).go();
  }
  
  const waktuSekarang = new Date().getHours();let ucapan;
  if(waktuSekarang < 10){ucapan = "Good Morning ";} 
  else if(waktuSekarang < 16){ucapan = "Selamat Siang ";}
  else if(waktuSekarang < 19){ucapan = "Selamat Sore ";}
  else{ucapan = "Good Night ";}
