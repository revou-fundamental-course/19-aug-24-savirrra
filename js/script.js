//ini.Javascript

document.getElementById('left-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah pengiriman form

    // Ambil data dari form kiri
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    // Masukkan data ke form kanan
    document.getElementById('output-name').innerText = "Name: " + name;
    document.getElementById('output-date').innerText = "Date: " + date;
    document.getElementById('output-gender').innerText = "Gender: " + gender;
    document.getElementById('output-message').innerText = "Message: " + message;

    // Kosongkan form kiri setelah submit
    document.getElementById('left-form').reset();
});
