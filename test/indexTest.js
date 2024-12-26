const { document } = require('./helpers')
const { expect } = require('chai')

// Sample test suite for fetching and displaying astronaut data
describe('Fetching and Displaying Astronaut Data', () => {
  let astronautList

  before(() => {
    astronautList = document.getElementById('astronaut-list')
  })

  it('should select the astronaut-list element', () => {
    expect(astronautList).to.not.be.null
  })

  it('should fetch and display astronaut data', (done) => {
    // Simulate fetching data from the API
    fetch('http://api.open-notify.org/astros.json')
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        displayAstronauts(data)

        // Check if the astronautList has been updated
        const listItems = astronautList.querySelectorAll('li')
        expect(listItems.length).to.be.greaterThan(0)
        done()
      })
      .catch(function (error) {
        done(error)
      })
  })
})
