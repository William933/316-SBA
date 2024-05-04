const calendar = document.getElementById('calendar');

function createCalendar(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const monthElement = document.createElement('div');
  monthElement.classList.add('month');
  monthElement.textContent = monthNames[month] + ' ' + year;   
  calendar.appendChild(monthElement);
  
  const weekdaysElement = document.createElement('div');
  weekdaysElement.classList.add('weekdays');
  calendar.appendChild(weekdaysElement);
  
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (let day of weekdays) {
    const dayElement = document.createElement('div');
    dayElement.textContent = day;
    weekdaysElement.appendChild(dayElement);
  }
  
  const daysElement = document.createElement('div');
  daysElement.classList.add('days');
  calendar.appendChild(daysElement);
  
  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyDay = document.createElement('div');
    emptyDay.classList.add('day');
    daysElement.appendChild(emptyDay);
  }
  
  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.textContent = i;
    daysElement.appendChild(dayElement);
    
    dayElement.addEventListener('click', function() {
      alert('You clicked on ' + monthNames[month] + ' ' + i + ', ' + year);
    });
  }
}

const currentDate = new Date();
createCalendar(currentDate.getFullYear(), currentDate.getMonth());
