const data = [
  {
    question: "What does MVC stand for in web development?",
    options: [
      "Most Valuable Customer",
      "Master Visual Code",
      "Multiple View Configuration",
      "Model View Controller",
    ],
    answer: "Model View Controller",
  },
  {
    question: "How does a browser render a web page?",
    options: [
      "By executing server-side scripts",
      "By parsing and interpreting HTML, CSS, and JavaScript",
      "By compressing images and videos",
      "By caching web page content",
    ],
    answer: "By parsing and interpreting HTML, CSS, and JavaScript",
  },
  {
    question: "How can you handle asynchronous programming in JavaScript?",
    options: [
      "Using callbacks, promises, or async/await",
      "Using loops and conditions",
      "Using global variables",
      "Using synchronous functions",
    ],
    answer: "Using callbacks, promises, or async/await",
  },
  {
    question: "What is the purpose of unit testing?",
    options: [
      "To optimize website performance",
      "To secure the website against attacks",
      "To verify the correctness of individual components or units of code",
      "To analyze user behavior on the website",
    ],
    answer: "To verify the correctness of individual components or units of code",
  },
  {
    question: "What is the purpose of version control in collaborative development?",
    options: [
      "To track and manage changes to the source code",
      "To deploy the application to production servers",
      "To synchronize data between multiple devices",
      "To optimize database queries",
    ],
    answer: "To track and manage changes to the source code",
  },
  {
    question: "What is Dependency Injection?",
    options: [
      "A technique used to inject dependencies into a class or object",
      "A process of breaking down a complex problem into smaller subproblems",
      "A way to secure the communication between client and server",
      "A method of storing and retrieving data in a structured format",
    ],
    answer: "A technique used to inject dependencies into a class or object",
  },
  {
    question: "What is multithreading?",
    options: [
      "A technique to optimize database queries",
      "A process of breaking down a complex problem into smaller subproblems",
      "A method of running multiple threads concurrently within a single process",
      "A way to secure the communication between client and server",
    ],
    answer: "A method of running multiple threads concurrently within a single process",
  },
  {
    question: "What's the difference between GET and POST?",
    options: [
      "GET is used for data submission, while POST is used for data retrieval",
      "GET requests are faster than POST requests",
      "GET requests are less secure than POST requests",
      "GET requests can have a request body, while POST requests cannot",
    ],
    answer: "GET requests can have a request body, while POST requests cannot",
  },
  {
    question: "What is the purpose of the `addEventListener` method in JavaScript?",
    options: [
      "To concatenate two strings",
      "To add a new element to an array",
      "To attach an event handler function to an HTML element",
      "To perform a mathematical operation",
    ],
    answer: "To attach an event handler function to an HTML element",
  },
  {
    question: "What Is a Callback in JavaScript?",
    options: [
      "A data structure used to store multiple values in JavaScript",
      "A way to define and create objects in JavaScript",
      "A technique to optimize database queries in JavaScript",
      "A function passed as an argument to another function, to be executed later",
    ],
    answer: "A function passed as an argument to another function, to be executed later",
  },
  
  {
    question: "What is the purpose of the 'final' keyword in Java?",
    options: [
      "To define a constant value",
      "To indicate that a class, method, or variable cannot be overridden or modified",
      "To handle exceptions",
      "To declare a variable with a fixed value",
    ],
    answer: "To indicate that a class, method, or variable cannot be overridden or modified",
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["string", "number", "boolean", "character"],
    answer: "character",
  },
  {
    question: "How can you select an element with a specific class in CSS?",
    options: [
      "Using the '.' notation followed by the class name",
      "Using the '#' notation followed by the class name",
      "Using the '>' symbol followed by the class name",
      "Using the '*' symbol followed by the class name",
    ],
    answer: "Using the '.' notation followed by the class name",
  },
  {
    question: "What is the purpose of the Spring framework?",
    options: [
      "To manage database transactions",
      "To simplify Java development and promote good programming practices",
      "To provide server-side rendering for web applications",
      "To perform data analysis and visualization",
    ],
    answer: "To simplify Java development and promote good programming practices",
  },
  {
    question: "What is the difference between a framework and a library in software development?",
    options: [
      "A framework is used for front-end development, while a library is used for back-end development.",
      "A framework is language-specific, while a library can be used with multiple programming languages.",
      "A framework is more lightweight and flexible than a library.",
      "A framework provides a complete structure for developing applications, while a library provides reusable code and functions.",
    ],
    answer: "A framework provides a complete structure for developing applications, while a library provides reusable code and functions.",
  },
  {
    question: "What are the benefits of object-oriented programming (OOP)?",
    options: [
      "Improved code reusability and maintainability.",
      "Faster execution time compared to procedural programming.",
      "Simpler syntax and easier to learn.",
      "Better compatibility with legacy systems.",
    ],
    answer: "Improved code reusability and maintainability.",
  },
  {
    question: "What is the difference between a HashSet and a TreeSet in Java?",
    options: [
      "A HashSet stores elements in sorted order, while a TreeSet does not.",
      "A HashSet allows duplicate elements, while a TreeSet does not.",
      "A HashSet provides constant-time performance for basic operations, while a TreeSet does not.",
      "A HashSet is synchronized and thread-safe, while a TreeSet is not.",
    ],
    answer: "A HashSet allows duplicate elements, while a TreeSet does not.",
  },
  {
    question: "What is JPA?",
    options: [
      "Java Persistence API and is a specification for managing relational data in Java applications.",
      "Java Performance Analyzer and is used for profiling and optimizing Java applications.",
      "Java Parser API and is used for parsing and manipulating Java source code.",
      "Java Protocol Analyzer and is used for network protocol analysis in Java applications.",
    ],
    answer: "Java Persistence API and is a specification for managing relational data in Java applications.",
  },
  {
    question: "What is parallelism?",
    options: [
      "Simultaneous execution of multiple tasks to achieve faster processing",
      "Sequential execution of tasks in a single thread",
      "Interleaved execution of tasks in a multithreaded environment",
      "Concurrent execution of tasks with shared resources",
    ],
    answer: "Simultaneous execution of multiple tasks to achieve faster processing"
  },
  {
    question: "What is concurrency?",
    options: [
      "The ability to execute multiple tasks at the same time",
      "The order in which tasks are executed in a program",
      "The synchronization of tasks to avoid race conditions",
      "The distribution of tasks among multiple processors",
    ],
    answer: "The ability to execute multiple tasks at the same time"
  },

    {
      "question": "Which method can be used to add a new element to the DOM?",
      "options": [
        "document.createNode()",
        "element.appendChild(newElement)",
        "element.add(newElement)",
        "document.newElement()"
      ],
      "answer": "element.appendChild(newElement)"
    },
    {
      "question": "How can you change the style of an HTML element using the DOM?",
      "options": [
        "element.setStyles(...)",
        "element.style.css(...)",
        "element.style.setProperty(...)",
        "element.updateStyle(...)"
      ],
      "answer": "element.style.setProperty(...)"
    },
    {
      "question": "Which property allows you to modify the text content of an HTML element using the DOM?",
      "options": [
        "element.textContent",
        "element.innerText",
        "element.innerHTML",
        "element.textValue"
      ],
      "answer": "element.textContent"
    },
    {
      "question": "What does DOM manipulation involve?",
      "options": [
        "Adding styles to an HTML document using CSS",
        "Optimizing the performance of a website using caching techniques",
        "Analyzing user behavior on a website using analytics tools",
        "Modifying the structure or content of an HTML document using JavaScript"
      ],
      "answer": "Modifying the structure or content of an HTML document using JavaScript"
    },
    {
      "question": "What is the purpose of the @RequestMapping annotation in Spring MVC?",
      "options": [
        "It defines the request method to be used for a particular URL",
        "It handles exceptions thrown by the controller methods",
        "It specifies the response format for a controller method",
        "It maps a request URL to a specific controller method"
      ],
      "answer": "It maps a request URL to a specific controller method"
    },
    {
      "question": "What is the purpose of the @Autowired annotation in Spring MVC?",
      "options": [
        "It specifies the scope of a Spring bean",
        "It injects dependencies into a Spring bean",
        "It configures the database connection for the application",
        "It handles the mapping of request parameters to method parameters"
      ],
      "answer": "It injects dependencies into a Spring bean"
    },
    {
      "question": "What is Thymeleaf?",
      "options": [
        "A front-end framework for building responsive web applications",
        "A template engine for server-side rendering in Spring MVC",
        "A database management tool for Spring applications",
        "An authentication library for securing Spring MVC applications"
      ],
      "answer": "A template engine for server-side rendering in Spring MVC"
    },
    {
      "question": "Which protocol is commonly used for creating RESTful web services?",
      "options": [
        "FTP",
        "HTTP",
        "TCP",
        "UDP"
      ],
      "answer": "HTTP"
    },
    {
      "question": "What is TCP?",
      "options": [
        "A protocol for reliable and ordered data transmission",
        "A protocol for connectionless communication",
        "A protocol for low-latency and loss-tolerant data transmission",
        "A protocol for secure and encrypted communication"
      ],
      "answer": "A protocol for reliable and ordered data transmission"
    },
    {
      "question": "Which protocol is more suitable for applications that require real-time communication?",
      "options": [
        "TCP",
        "HTTP",
        "UDP",
        "FTP"
      ],
      "answer": "UDP"
    }
    [
      {
        "question": "Why do we use jQuery?",
        "options": [
          "Creation of mobile applications",
          "Creation of interactive websites",
          "Database connectivity",
          "None of the above"
        ],
        "answer": "Creation of interactive websites"
      },
      {
        "question": "How can the web application load time be reduced?",
        "options": [
          "Use distributed networks for common resource files",
          "Minimize the resources requested by a page",
          "Implement Lazy load so that the part of the page only loads when accessing that part",
          "All of the above"
        ],
        "answer": "All of the above"
      },
      {
        "question": "What is the full form of POJO?",
        "options": [
          "Plain Old Java Object",
          "Plain Old JavaScript Object",
          "Portable Old Java Object",
          "None of the above"
        ],
        "answer": "Plain Old Java Object"
      },
      
  {
    "question": "What is a primary key in a MySQL database?",
    "options": [
      "A unique identifier for a table",
      "A foreign key from another table",
      "A data type used for storing numbers",
      "A column that contains only NULL values"
    ],
    "answer": "A unique identifier for a table"
  },
  {
    "question": "Which statement is used to insert data into a MySQL database?",
    "options": [
      "SELECT",
      "UPDATE",
      "INSERT",
      "DELETE"
    ],
    "answer": "INSERT"
  },
  {
    "question": "What does the SQL statement 'SELECT * FROM table_name' do?",
    "options": [
      "Deletes all records from the table",
      "Updates all records in the table",
      "Inserts a new record into the table",
      "Retrieves all records from the table"
    ],
    "answer": "Retrieves all records from the table"
  },
  {
    "question": "Which SQL keyword is used to retrieve data from multiple tables in a single query?",
    "options": [
      "JOIN",
      "GROUP BY",
      "ORDER BY",
      "WHERE"
    ],
    "answer": "JOIN"
  },
  {
    "question": "What is JSX in React?",
    "options": [
      "A query language for databases",
      "A JavaScript syntax extension for writing HTML-like code in JavaScript",
      "A testing framework for React applications",
      "A CSS-in-JS solution for styling React components"
    ],
    "answer": "A JavaScript syntax extension for writing HTML-like code in JavaScript"
  },
  {
    "question": "What is state in React?",
    "options": [
      "A JavaScript object that stores property values for a component",
      "A lifecycle method in React components",
      "A type of component in React",
      "A built-in method for fetching data in React"
    ],
    "answer": "A JavaScript object that stores property values for a component"
  },
  {
    "question": "What is a React component?",
    "options": [
      "A function or class that returns HTML to be rendered",
      "A built-in data structure in React",
      "A package manager for React applications",
      "A utility library for state management in React"
    ],
    "answer": "A function or class that returns HTML to be rendered"
  },
  {
    "question": "What is the virtual DOM in React?",
    "options": [
      "A DOM element created by React for rendering components",
      "A JavaScript object representing the structure of a UI",
      "A development environment for building React applications",
      "A method for handling events in React components"
    ],
    "answer": "A JavaScript object representing the structure of a UI"
  },
  {
    "question": "What is the main difference between JDK and JRE in Java?",
    "options": [
      "JDK is the development kit, and JRE is the runtime environment",
      "JDK is used for mobile app development, and JRE is used for web development",
      "JDK is a newer version of JRE with additional features",
      "JDK and JRE are two different names for the same thing"
    ],
    "answer": "JDK is the development kit, and JRE is the runtime environment"
  },
  {
    "question": "What is an interface in Java?",
    "options": [
      "A class that cannot be instantiated",
      "A blueprint for creating objects",
      "A data structure for storing multiple values",
      "A way to define private methods"
    ],
    "answer": "A blueprint for creating objects"
  },
  {
    "question": "Which keyword is used to create an object in Java?",
    "options": [
      "new",
      "this",
      "super",
      "create"
    ],
    "answer": "new"
  },
  {
    "question": "What is the purpose of the static keyword in Java?",
    "options": [
      "To declare a variable with a constant value",
      "To indicate a method that can be called without an instance of the class",
      "To prevent inheritance of a class",
      "To mark a class as abstract"
    ],
    "answer": "To indicate a method that can be called without an instance of the class"
  }
    ]
      
  
];
  
  export default data;