//fast pointer slow pointer middle option

var middleNode = function (head) {
  let fast = (slow = head);
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

//alternative

// Time Complexity :  O(n)
// Space Complexity : O(1)
var middleNode = function(head) {
  // Initialize two pointers p1 and p2 pointing to the head...
  var p1 = head;
  var p2 = head;
  while(p2 != null && p2.next != null){
      // In each iteration, we move p1 one node forward and we move p2 two nodes forward...
      p1 = p1.next;
      p2 = p2.next.next;
  }
  // When p2 reaches the last node, p1 will be exactly at the middle point...
  return p1;
}