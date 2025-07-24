/**
 * @jest-environment jsdom
 */

// Import the function to be tested
const fs = require('fs');
const path = require('path');

const { displayAstronauts } = require('../index.js');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
document.documentElement.innerHTML = html;


describe('Fetching and Displaying Astronaut Data', () => {
  it('should select the astronaut-list element', () => {
    const astronautList = document.getElementById('astronaut-list');
    expect(astronautList).not.toBeNull();
  });

  it('should display astronaut data from mock', async () => {
    const mockData = {
      people: [
        { name: 'Alice' },
        { name: 'Bob' },
        { name: 'Charlie' },
      ]
    };

    // Use the function directly from the loaded script
    displayAstronauts(mockData);

    const listItems = document.querySelectorAll('#astronaut-list li');
    expect(listItems.length).toBe(3);
    expect(listItems[0].textContent).toBe('Alice');
    expect(listItems[1].textContent).toBe('Bob');
    expect(listItems[2].textContent).toBe('Charlie');
  });
});
