const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = 'color'>
  <table>
  <tr>
    <th>button</th>
    <th>buttonCode</th>
    <th>gawd</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table><
/div>
  
  `;
});
