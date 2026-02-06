Why can’t a computer run code directly? The CPU cannot understand high-level concepts like variables, keywords, or operators. It only understands very low-level machine instructions, so your code needs something to translate and manage its execution.


What is a runtime? A runtime is a program that reads your source code and executes it according to the rules of the language. It acts as a layer between your code and the operating system, making it possible for the CPU to execute your program.


What does Node.js do? Node.js is a JavaScript runtime that allows JavaScript to run outside of the browser. It includes a JavaScript engine and provides controlled access to system resources like files, networks, and timers through the operating system.


What happens when you run a JS file?When you run a program, the operating system starts a process, the runtime loads your code into memory, translates it into machine-level instructions, and the CPU executes those instructions. The results then flow back through the runtime to your program.
 

Why does frontend JS behave differently from backend JS? rontend and backend JavaScript behave differently because they run in fundamentally different environments—the web browser for the frontend and a server-side runtime (like Node.js) for the backend. This difference in environment dictates their purpose, access to resources, and the specific APIs they use. 