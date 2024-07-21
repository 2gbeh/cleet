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
  const output = 'Hello, World!';
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

#### Big-O Notation

- O(1) - indexed search
- O(n) - single loop
- O(n^2) - nested loop
- O(log n) - recursion
- O(n log n) - binary search
- O(n!) - factorial
