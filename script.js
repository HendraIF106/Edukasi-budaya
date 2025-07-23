function validateForm() {
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;

  if (nama === '' || email === '') {
    alert('Nama dan Email harus diisi!');
    return false;
  }

  document.getElementById('formMessage').innerText = `Terima kasih sudah mendaftar, ${nama}!`;
  return false; // Mencegah form reload
}