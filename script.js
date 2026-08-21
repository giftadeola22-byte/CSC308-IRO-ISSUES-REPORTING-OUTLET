document.getElementById('iroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const userType = document.getElementById('userType').value;
    const location = document.getElementById('location').value;
    const category = document.getElementById('category').value;

    const tableBody = document.getElementById('tableBody');
    const newRow = document.createElement('tr');
    const randomId = 'IRO-' + Math.floor(100 + Math.random() * 900);

    newRow.innerHTML = `
        <td>${randomId}</td>
        <td>${fullName}</td>
        <td>${userType}</td>
        <td>${location}</td>
        <td>${category}</td>
        <td><span class="status pending">Pending</span></td>
    `;

    tableBody.appendChild(newRow);
    document.getElementById('iroForm').reset();
    alert('Report submitted successfully!');
});
