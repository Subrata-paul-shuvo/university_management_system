function login() {
  const username = document.getElementById('username').value;
  const role = document.getElementById('role').value;

  if (!username) {
    alert("Please enter a username.");
    return;
  }

  document.getElementById('login-section').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');
  document.getElementById('welcome-message').innerText = `Welcome ${username} (${role})`;

  let content = '';

  if (role === 'student') {
    content = `
      <h3>Your Courses</h3>
      <ul>
        <li>Math 101</li>
        <li>Physics 201</li>
        <li>Programming 101</li>
      </ul>
    `;
  } else if (role === 'faculty') {
    content = `
      <h3>Manage Courses</h3>
      <ul>
        <li>Mark Attendance</li>
        <li>Enter Grades</li>
      </ul>
    `;
  } else if (role === 'admin') {
    content = `
      <h3>Admin Panel</h3>
      <ul>
        <li>Add/Remove Students</li>
        <li>Assign Faculty</li>
        <li>Generate Reports</li>
      </ul>
    `;
  }

  document.getElementById('dashboard-content').innerHTML = content;
}

function logout() {
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('login-section').classList.remove('hidden');
  document.getElementById('username').value = '';
  document.getElementById('dashboard-content').innerHTML = '';
}
