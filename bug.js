```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of functional update
    setCount(prevCount => prevCount + 1);
    // ... more code that might depend on count
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```