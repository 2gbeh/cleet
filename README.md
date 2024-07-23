# Live Coding Interview Questions

## Setup

```bash
npm install -g typescript ts-node '@types/node'
npx tsc --init
```

###### # Update ~/tsconfig.json

```json
{
  "include": ["src"],
  "compilerOptions": {
    "outDir": "./build"
  }
}
```

###### # Create ~/src/main.ts

```typescript
function main() {
  const output = "Hello, World!";
  console.log("🚀 ~ main ~ output:", output);
}

main();
```

## Usage

```bash
npx ts-node src/main
```

## Resources

#### Mute type errors

// @ts-ignore

#### System Design

- Reliable - should meet user requirements and edge cases
- Scalable - should handle high volume traffic optimally
- Maintainable - should be modular and easily extendable

#### S O L I D

- Single responsibility - should have only one reason to change (MVC)
- Open–closed - should be open for extension, closed for modification (Inheritance)
- Liskov substitution - should implement same methods of parent class (Polymorphisme)
- Interface segregation - should implement role-specifc sub-interfaces (ATM)
- Dependency inversion - should use dependency injection in a nutshell (*)

#### Big-O Notation

- O(1) - indexed search
- O(n) - single loop
- O(n^2) - nested loop
- O(log n) - recursion
- O(n log n) - binary search
- O(n!) - factorial

#### Separation of concerns

> In computer science, separation of concerns (sometimes abbreviated as SoC) is a design principle for separating a computer program into distinct sections, each addressing a separate concern. Layered designs in information systems are another embodiment of separation of concerns (e.g., presentation layer (View, Components), business logic layer (Controller, Hooks), data access layer (Service, Store), persistence layer (Model) ).

#### Single-responsibility principle

> The single-responsibility principle (SRP) is a computer programming principle that states that "A module should be responsible to one, and only one, actor." The term actor refers to a group (consisting of one or more stakeholders or users) that requires a change in the module. Robert C. Martin, the originator of the term, expresses the principle as, "Gather together the things that change for the same reasons. Separate those things that change for different reasons.".

> Martin defines a responsibility as a reason to change, and concludes that a class or module should have one, and only one, reason to be changed (e.g. rewritten).

> As an example, consider a module that compiles and prints a report. Imagine such a module can be changed for two reasons. First, the content of the report could change. Second, the format of the report could change. These two things change for different causes. The single responsibility principle says that these two aspects of the problem are really two separate responsibilities, and should, therefore, be in separate classes or modules. It would be a bad design to couple two things that change for different reasons at different times.

> The reason it is important to keep a class focused on a single concern is that it makes the class more robust. Continuing with the foregoing example, if there is a change to the report compilation process, there is a greater danger that the printing code will break if it is part of the same class.
