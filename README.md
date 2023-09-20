# simplyfisoftechDSA

---
![image](https://github.com/shivamj291/simplyfisoftechDSA/assets/113995939/66139a69-ae0e-4243-b6a1-d6efc0097302)

**Code Explanation:**

The goal of this code is to determine the route your son took through several European cities using a set of available train tickets.
1. **Data Preparation:**

   - We start by creating a `ticketMap` (a JavaScript `Map`) to store the available train tickets. Each ticket is in the form of "departure city - destination city." The `ticketMap` will use the departure city as the key and the destination city as the value.

2. **Initialization:**

   - We initialize a `visited` set to keep track of visited cities.
   - We initialize an empty `route` array to store the route your son traveled.
   - We set the starting city to "Kiev" as specified in the problem statement.

3. **Route Finding Algorithm:**

   - We enter a loop to find the route:
     - We add the current city to the `route` array.
     - We mark the current city as visited by adding it to the `visited` set.
     - We check if the `ticketMap` contains an entry for the current city. If it does, we retrieve the next city using `ticketMap.get(currentCity)`.

4. **Termination Condition:**

   - We continue this process until we reach a city that is not in the `ticketMap` or one that we have already visited. This prevents us from getting stuck in a loop or revisiting cities.

5. **Final Step:**

   - Once the loop ends, we add the final city (where the route terminated) to the `route` array.

6. **Result:**

   - The `route` array now contains the entire route your son took through the specified cities.

7. **Output:**

   - We print the `route` to the console, displaying the route as a sequence of cities separated by arrows.

**Time Complexity:**

The time complexity of this solution is O(n), where n is the number of available tickets. This is because we iterate through each ticket once while creating the `ticketMap` and then follow the tickets to find the route. The lookups in a JavaScript `Map` have an average time complexity of O(1), making this approach efficient for this problem.

This code provides a clear and efficient solution to the problem of finding the route using available train tickets without using a graph data structure explicitly.
