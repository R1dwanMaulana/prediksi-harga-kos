document.getElementById("tombol_form").
  addEventListener("click", tampilkan_prediksi);
  function tampilkan_prediksi(){
    let panjang=document.getElementById("panjang").value;
    let lebar=document.getElementById("lebar").value;
    let kamar_mandi_VIP=document.getElementById("kamar_mandi_VIP").value;
    let kamar_mandi=document.getElementById("kamar_mandi").value;
    let predik = -238586.45 + (1.90488666e+05 * panjang) + (1.85814320e+02 * lebar) + (1.08816474e+04 * kamar_mandi_VIP) + (2.93902995e+03 * kamar_mandi);
    document.getElementById("hasil").innerHTML=parseInt(predik);
  } 

  document.getElementById("tombol_reset").addEventListener("click", hapus_form);
  function hapus_form() {
    let reset = 0;
    document.getElementById("hasil").innerHTML=reset;
  }
