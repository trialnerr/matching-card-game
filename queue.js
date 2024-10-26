
export class Queue{
  constructor() {
    this.queue = []; 
    this.length = 0; 
  }

  push(item) {
    this.queue.push(item); 
    this.length++; 
  } 

  reset() {
    this.queue = []; 
    this.length = 0; 
  }
}