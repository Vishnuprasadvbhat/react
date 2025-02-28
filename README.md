# **Welcome to React from Scratch Repo**

## **Here we mainly focus on how react works under the hood and tryna understand core concepts of react**

### **What is React?**
React is a JavaScript library for building user interfaces.It allows developers to create reusable UI components, making the development process more efficient and maintainable. 

## **Here's an overview of its key features:**

**Components:** Small, reusable pieces to build the UI.

**Virtual DOM:** Efficient updates to only the parts that change.

**JSX:** HTML-like syntax within JavaScript for better readability.

**Hooks:** Manage state and logic in functional components.

**Unidirectional Data Flow:** Ensures a clear, predictable app structure.

## **Let's go further with few questions and answers about react:**

### Is React a full-fledged framework?
No, React is a view library that needs a framework like Express or Next.js to handle routing and helps in UI consistency.

### Does React still uses DOM?
Yes, React uses the DOM, but it creates a virtual representation of the DOM (Virtual DOM)

## **Virtual DOM**

### **Does React still uses virtual Dom or Dom to track the frontend Structure if not what does it use now?**

React still relies on the **Virtual DOM** (VDOM) as a core concept for efficiently tracking and updating the frontend structure. The Virtual DOM is essentially a lightweight representation of the real DOM. When changes occur in the UI, React first updates the Virtual DOM, compares it with the previous version (a process called "diffing"), and then determines the minimal set of updates required to apply to the real DOM. This approach optimizes performance, as manipulating the real DOM directly can be costly in terms of time and resources.

That said, React has continued to evolve. With advancements like **React Fiber** (introduced in React 16), the underlying implementation of the reconciliation process (how React updates the DOM) has been optimized. React Fiber improves how updates are prioritized and scheduled, making applications smoother, especially when dealing with animations, large lists, or complex UI interactions.

While the Virtual DOM remains a fundamental part of React, React Fiber ensures that updates are more intelligent and responsive to user interactions. Let me know if you’d like me to break this down further or dive into how React Fiber works!

### **Before Fibre, which alogrithm does React uses to update the dom?**

Before React Fiber, React used a **stack-based reconciliation algorithm** to update the DOM. This algorithm performed updates in a synchronous, depth-first manner. Here's a breakdown of how it worked:

1. **Synchronous and Blocking:** The reconciliation process ran completely from start to finish before the UI could be updated or rendered. This meant that if there were a large number of updates, the application could experience performance issues or UI freezes, as React couldn't pause the reconciliation to prioritize other tasks.

2. **Depth-First Traversal:** React would traverse the component tree recursively in a depth-first order. It would compute the changes required for each component along the way and immediately apply them to the real DOM once it reached the end of the tree.

3. **Limitations:** This approach was simple but inefficient for complex UIs with large or deeply nested component trees. Since the reconciliation couldn't be interrupted, users could experience laggy interactions and slow rendering during heavy updates.

The introduction of **React Fiber** replaced this stack-based approach with a more advanced scheduling model, allowing updates to be paused, prioritized, and resumed as needed. This made React much more performant and responsive for modern applications. Let me know if you'd like to explore this further or dive into Fiber's details!


### **what is reconcillation algo?**

The **reconciliation algorithm** in React is the process that determines how the UI should be updated to reflect changes in state or props. Essentially, it’s React’s method for figuring out the most efficient way to update the real DOM to match the Virtual DOM without rebuilding everything from scratch. Here's how it works conceptually:

### **Key Steps in Reconciliation:**

1. **Virtual DOM Comparison:** When a component’s state or props change, React creates a new Virtual DOM tree. It then compares this new Virtual DOM tree to the previous one using a process known as "diffing."

2. **Efficient Updates (Diffing Algorithm):**
   - React compares nodes in the Virtual DOM one by one. If it detects that a node has changed, it marks it for update.
   - Instead of updating the entire DOM, React only updates the parts of the DOM that have changed, making updates highly efficient.

3. **Fiber Optimization (Post React 16):**
   - With React Fiber, reconciliation became more flexible and incremental. React can now pause, resume, and prioritize updates (e.g., user interactions are prioritized over less critical updates).

4. **Component-Level Updates:** React checks whether a component should update by using the `shouldComponentUpdate` lifecycle method or its modern equivalent with React Hooks. If React determines that a component doesn't need to update, it skips reconciliation for that component.

5. **Keyed Lists Optimization:** When rendering lists, React uses "keys" to identify and track changes. This ensures that items in a list are efficiently reconciled even when items are added, removed, or rearranged.

### **Why Reconciliation Matters:**
The reconciliation algorithm ensures that React applications are fast and responsive, even with complex UIs. By updating only what is necessary, React avoids costly DOM manipulations, improving both performance and user experience.

Let me know if you'd like me to dive deeper into any of these points!

## **React Fiber Architecture** 

Reference: [React Fibre Doc](https://github.com/acdlite/react-fiber-architecture)
### **Which is new Algo and how does it work under the hood?**

The "new algorithm" you're referring to is likely **React Fiber**, which was introduced with React 16. React Fiber is an advanced **reconciliation algorithm** that improves React's ability to update the DOM by making the process more flexible and efficient. Here's how Fiber works under the hood:

---

## **Introduction**

### **What is React Fiber?

React Fiber is essentially a reimplementation of React's reconciliation algorithm, designed to break the update process into smaller, manageable units of work. The key idea is to allow React to work **incrementally** rather than processing updates all at once, which was the case with the previous stack-based algorithm.

React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team.

The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is **incremental rendering**: the ability to split rendering work into chunks and spread it out over multiple frames.

Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

---

### **Why Fiber Was Introduced**
The primary motivation for Fiber was to improve **performance and responsiveness** in modern web applications. Features like animations, large data tables, and complex UIs required a more advanced algorithm to handle updates smoothly without blocking user interactions.

---

### **Key Features of React Fiber**

1. **Incremental Rendering (Time-Slicing):**
   - React Fiber splits rendering work into chunks (called "units of work").
   - This means that React can pause the rendering work, prioritize urgent tasks (like responding to user input), and then resume where it left off. This eliminates UI freezes during heavy updates.

2. **Prioritized Updates:**
   - Each unit of work in Fiber is assigned a priority based on its type (e.g., animations have higher priority than background data fetching).
   - React processes high-priority updates first, ensuring a smooth user experience.

3. **Concurrency:**
   - React Fiber allows updates to happen asynchronously. React doesn't need to block the main thread to finish one task before starting another. This improves responsiveness during large updates.

---

### **How React Fiber Works Internally**

Here’s a high-level explanation of how React Fiber processes updates:

1. **Breaking Down the Work (Fiber Nodes):**
   - Each element in the component tree is represented as a **Fiber node**.
   - Fiber nodes are JavaScript objects that store information about the component, its state, and its relationship with other components (e.g., parent, child, sibling).

2. **Two Phases of Reconciliation:**
   React Fiber uses a two-phase process to manage updates:
   - **Render Phase (Diffing):**
     - During this phase, React traverses the Fiber tree to calculate what changes need to be made (virtual DOM diffing). This phase is **pure**—it doesn't touch the real DOM.
     - This work can be paused and resumed as needed.
   - **Commit Phase:**
     - Once the changes are determined, React applies them to the real DOM during the commit phase. This phase is synchronous and cannot be paused, ensuring consistent updates.

3. **Priority Levels:**
   - React Fiber assigns priority levels to updates, such as "high-priority" (e.g., user input) or "low-priority" (e.g., data fetching in the background). 
   - This helps React focus on critical tasks first while deferring less important ones.

4. **Stack vs Linked List:**
   - Unlike the old stack-based algorithm, Fiber organizes components using a **linked list** structure. This structure allows React to pause work on one part of the tree, switch to another, and then come back to where it left off.

