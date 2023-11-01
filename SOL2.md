Problem Statement: To test the purchase order system

MAX_QUEUE_SIZE of 4:

1. **Basic Operation Testing:**
   - Input: "P, C"
   - Description: Add one order, process one order. Verify that the system can handle the basic operation.

2. **Queue Full and Empty Handling:**
   - Input: "P, P, P, P, C, C, C, C"
   - Description: Fill the queue to its maximum capacity and then process all orders. Ensure that the system can handle queue full and empty scenarios.

3. **Process Before Queue Full:**
   - Input: "P, P, C, C, P, C"
   - Description: Add orders alternately and process them. Verify that the system can process orders even if the queue is not full.

4. **Stress Testing:**
   - Input: "P, P, P, P, P, P, C, C, C, C, C, C"
   - Description: Continuously add orders and process them, stressing the system to see if it can handle multiple orders coming in and being processed concurrently.

5. **Race Condition Handling:**
   - Input: "P, P, P, C, P, P, C, C"
   - Description: Introduce a race condition where orders are being added and processed simultaneously. Verify that the system can handle this without errors.

6. **Order of Processing:**
   - Input: "P, P, C, C, P, C, P, C"
   - Description: Test the order in which orders are processed. Ensure that orders are processed in the same order they are added (FIFO).

7. **Sleep/Wakeup Functionality:**
   - Input: "P, P, C, C, C, C, P, C"
   - Description: Test the sleep and wakeup functionality by making orders and processes wait for queue conditions to change.

8. **Mixed Operations:**
   - Input: "P, P, P, C, C, P, C, C, P, P, C, C"
   - Description: Mix adding and processing orders in various sequences to test the robustness of the system.

9. **Overfilling the Queue:**
   - Input: "P, P, P, P, P, P, P, C, C, C, C, C, C, C"
   - Description: Test what happens when you try to add more orders than the queue can hold.

10. **No Orders to Process:**
    - Input: "C, C, C, C"
    - Description: Test when there are no orders to process. Ensure that the system doesn't break.
