const { describe } = require('mocha')
const { expect } = require('chai')
/**
 * Computes the monthly charge for a given subscription.
 *
 * @returns {number} The total monthly bill for the customer in cents, rounded
 * to the nearest cent. For example, a bill of $20.00 should return 2000.
 * If there are no active users or the subscription is null, returns 0.
 *
 * @param {string} month - Always present
 *   Has the following structure:
 *   "2022-04"  // April 2022 in YYYY-MM format
 *
 * @param {object} subscription - May be null
 *   If present, has the following structure:
 *   {
 *     'id': 763,
 *     'customerId': 328,
 *     'monthlyPriceInCents': 359  // price per active user per month
 *   }
 *
 * @param {array} users - May be empty, but not null
 *   Has the following structure:
 *   [
 *     {
 *       'id': 1,
 *       'name': "Employee #1",
 *       'customerId': 1,
 *   
 *       // when this user started
 *       'activatedOn': new Date("2021-11-04"),
 *   
 *       // last day to bill for user
 *       // should bill up to and including this date
 *       // since user had some access on this date
 *       'deactivatedOn': new Date("2022-04-10")
 *     },
 *     {
 *       'id': 2,
 *       'name': "Employee #2",
 *       'customerId': 1,
 *   
 *       // when this user started
 *       'activatedOn': new Date("2021-12-04"),
 *   
 *       // hasn't been deactivated yet
 *       'deactivatedOn': null
 *     },
 *   ]
 * 
 * Inputs: Month number, subscription object, users array
 */
function monthlyCharge(month, subscription, users = []) {
    // if the user's start date is less than the chargeMonth, 
    // and the user's deactivation date is null,
    // then for each user, increment total charge
    let totalChargeInt = 0;
    let chargeMonthInt = month.split('-')[1]
    let chargeYearInt = month.split('-')[0]

    for (let x = 0; x < users.length; x++){
      let user = users[x];
      let currentCustomerIdInt = user['customerId'];
      let chargeInt;
      if (subscription['customerId'] === currentCustomerIdInt){
        chargeInt = subscription['monthlyPriceInCents']
      }
      let userDateObj = nextDay(user['activatedOn'])
      // console.log('userDateObj', userDateObj.toLocaleDateString())
      let customerStartMonthInt = userDateObj.getMonth()
      // console.log('customerStartMonthInt', customerStartMonthInt)
      let customerStartYearInt = userDateObj.getFullYear()
      // console.log('customerStartYearInt', customerStartYearInt)
      let deactivatedStatus = user['deactivatedOn']
      if (customerStartMonthInt < chargeMonthInt && customerStartYearInt < chargeYearInt && deactivatedStatus === null){
        totalChargeInt += chargeInt
      }
    }
    return totalChargeInt
  }
  
  /*******************
  * Helper functions *
  *******************/
  
  /**
   * Takes a Date instance and returns a Date which is the first day
   * of that month. For example:
   *
   * firstDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 1)
   *
   * Input type: Date
   * Output type: Date
  **/
  function firstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1)
  }
  
  /**
   * Takes a Date object and returns a Date which is the last day of that month.
   *
   * lastDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 31)
   *
   * Input type: Date
   * Output type: Date
  **/
  function lastDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0)
  }
  
  /**
   * Takes a Date object and returns a Date which is the next day.
   * For example:
   *
   * nextDay(new Date(2022, 3, 17))  // => new Date(2022, 3, 18)
   * nextDay(new Date(2022, 3, 31))  // => new Date(2022, 4, 1)
   *
   * Input type: Date
   * Output type: Date
  **/
  function nextDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
  }



  let assert = require('chai').assert;

const users = [
  {
    id: 1,
    name: 'Employee #1',
    activatedOn: new Date('2019-01-01'),
    deactivatedOn: null,
    customerId: 1,
  },
  {
    id: 2,
    name: 'Employee #2',
    activatedOn: new Date('2019-01-01'),
    deactivatedOn: null,
    customerId: 1,
  },
];

const plan = {
  id: 1,
  customerId: 1,
  monthlyPriceInCents: 5000,
};

// Test 1
// date is before user start date
const data = monthlyCharge('2018-10', plan, users)
console.log('Test 1: Works when no users are active:', data)

// Test 2
// date is after user start date
const data2 = monthlyCharge('2020-12', plan, users)
console.log('Test 2: Works when the active users are active the entire month:', data2)