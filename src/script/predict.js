document.getElementById("tombol_form").
  addEventListener("click", tampilkan_prediksi);
  function tampilkan_prediksi(){
    var panjang=document.getElementById("panjang").value;
    var lebar=document.getElementById("lebar").value;
    var kamar_mandi_VIP=document.getElementById("kamar_mandi_VIP").value;
    var kamar_mandi=document.getElementById("kamar_mandi").value;
    var predik = -238586.45 + (1.90488666e+05 * panjang) + (1.85814320e+02 * lebar) + (1.08816474e+04 * kamar_mandi_VIP) + (2.93902995e+03 * kamar_mandi);
    document.getElementById("hasil").innerHTML=parseInt(predik);
  } 

  document.getElementById("tombol_reset").addEventListener("click", hapus_form);
  function hapus_form() {
    var reset = 0;
    document.getElementById("hasil").innerHTML=reset;
  }
