/**
 * The CurtisStack Class.
 *
 * author  Curtis Edwards
 * version 1.0
 * since   2024-03-26
 */

export class CurtisStack {

  /*
  * The constructor for the CurtisStack string stack class.
  */
  constructor() {
    this.stackAsList = []
  }

  /*
  * Checks if stack is empty.
  */
  public get isEmpty() {
    return this.stackAsList.length == 0
  }

  /*
  * returns stack size
  */
  public get size() {
    return this.stackAsList.length
  }
  
  /*
  * returns the stack as a string
  */
  public get showStack() {
    let values = ""
    for (let counter = 0; counter < this.stackAsList.length; counter++) {
      values = values + this.stackAsList[counter] + ", "
    }
    values = values.substring(0, values.length-2)
    return values
  }

  /*
  * pushes a string onto the stack
  */
  public push(input) {
    this.stackAsList.push(input)
  }

  /*
  * pops a string from the stack
  */
  public popItem() {
    let poppedItem = ""
    if (this.stackAsList[0]) {
      poppedItem = this.stackAsList[this.stackAsList.length - 1]
    } else {
      poppedItem = "nothing to remove"
    }
    this.stackAsList.splice(-1)
    return poppedItem
  }
}
