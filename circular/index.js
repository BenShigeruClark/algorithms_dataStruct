function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = fast.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      return true;
    }
  } 

  return false;
}