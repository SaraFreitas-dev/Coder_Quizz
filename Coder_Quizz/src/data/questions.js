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
        "element.appendChild (newElement)",
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
    },
    
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
  },
  {
    "question": "What is the main advantage of using Spring Boot for application development?",
    "options": [
    "Simplified configuration and setup",
    "Enhanced security features",
    "Higher performance compared to other frameworks",
    "Compatibility with a wide range of programming languages"
    ],
    "answer": "Simplified configuration and setup"
    },
    
    {
    "question": "In the context of Spring Framework, what is a bean?",
    "options": [
    "A Java class annotated with @Bean",
    "A Java object managed by the Spring container",
    "A dependency injection framework",
    "A unit of work in a transactional application"
    ],
    "answer": "A Java object managed by the Spring container"
    },
    
    {
    "question": "What is the primary purpose of dependency injection in Spring Framework?",
    "options": [
    "To reduce the number of beans in an application",
    "To enable loose coupling and easier testing",
    "To automatically generate beans at runtime",
    "To optimize the performance of Spring applications"
    ],
    "answer": "To enable loose coupling and easier testing"
    },
    
    {
    "question": "What is the purpose of the POM file in Maven?",
    "options": [
    "To define project dependencies and configurations",
    "To specify the project's packaging type",
    "To provide information about the project's modules",
    "To configure the build process and plugins"
    ],
    "answer": "To define project dependencies and configurations"
    },
    
    {
    "question": "Which JavaScript method is commonly used to send an Ajax request to a server?",
    "options": [
    "fetch()",
    "get()",
    "query()",
    "submit()"
    ],
    "answer": "fetch()"
    },
    
    {
    "question": "What does Ajax stand for in web development?",
    "options": [
    "Asynchronous JavaScript and XML",
    "Advanced JavaScript and XML",
    "Automated JavaScript and XHTML",
    "Active JavaScript and XML"
    ],
    "answer": "Asynchronous JavaScript and XML"
    },
    
    {
    "question": "What is the role of the 'callback' function in Node.js asynchronous programming?",
    "options": [
    "It handles HTTP requests in Node.js applications",
    "It defines the main entry point for the Node.js application",
    "It is executed once a task is completed or an event occurs",
    "It provides additional configuration options for Node.js modules"
    ],
    "answer": "It is executed once a task is completed or an event occurs"
    },
    
    {
    "question": "What is the purpose of the 'require' function in Node.js?",
    "options": [
    "To load and use external modules",
    "To define variables in Node.js",
    "To handle errors in Node.js applications",
    "To create routes in Node.js applications"
    ],
    "answer": "To load and use external modules"
    },
    
    {
    "question": "What is npm in the context of Node.js?",
    "options": [
    "Node.js Package Manager",
    "Node.js Programming Module",
    "Node.js Plugin Middleware",
    "Node.js Module Path"
    ],
    "answer": "Node.js Package Manager"
    },
    
    {
    "question": "What is Node.js?",
    "options": [
    "A web browser",
    "A database management system",
    "A runtime environment for executing JavaScript outside the browser",
    "A programming language for server-side development"
    ],
    "answer": "A runtime environment for executing JavaScript outside the browser"
    },
    
    {
    "question": "What is Vue.js?",
    "options": [
    "A JavaScript framework for building user interfaces",
    "A programming language for server-side development",
    "A database management system",
    "A styling library for CSS"
    ],
    "answer": "A JavaScript framework for building user interfaces"
    },
    
    {
    "question": "What is Apache Tomcat?",
    "options": [
    "An application server",
    "A database management system",
    "A version control system",
    "An integrated development environment (IDE)"
    ],
    "answer": "An application server"
    },

    {
    "question": "What is the default port number for Apache Tomcat?",
    "options": [
    "80",
    "443",
    "8080",
    "8443"
    ],
    "answer": "8080"
    },
    {
    "question": "What is Maven primarily used for in Java development?",
    "options": [
    "Version control management",
    "Project documentation generation",
    "Build automation and dependency management",
    "Unit testing and code coverage analysis"
    ],
    "answer": "Build automation and dependency management"
    },
    {
      "question": "What is a POM in the context of Maven?",
      "options": [
      "Project Object Model",
      "Package Output Manager",
      "Project Order Management",
      "Plugin Options Module"
      ],
      "answer": "Project Object Model"
      },
      
      {
      "question": "What does SOAP stand for in the context of web services?",
      "options": [
      "Simple Object Access Protocol",
      "Secure Open API Platform",
      "Systematic Object Authentication Protocol",
      "Service-Oriented Application Programming"
      ],
      "answer": "Simple Object Access Protocol"
      },
      
      {
      "question": "Which protocol is primarily used by SOAP for message exchange?",
      "options": [
      "HTTP",
      "TCP",
      "FTP",
      "UDP"
      ],
      "answer": "HTTP"
      },
      
      {
      "question": "What is the main advantage of using SOAP for web services?",
      "options": [
      "Lightweight and faster message transmission",
      "Broad platform and language compatibility",
      "Easy integration with RESTful APIs",
      "Enhanced caching and performance optimization"
      ],
      "answer": "Broad platform and language compatibility"
      },
      
      {
      "question": "What does REST stand for in the context of web services?",
      "options": [
      "Representational State Transfer",
      "Remote Execution and State Transfer",
      "Reliable and Secure Transactions",
      "Responsive System Technology"
      ],
      "answer": "Representational State Transfer"
      },
      
      {
      "question": "Which HTTP method is commonly used for creating a new resource via a REST API?",
      "options": [
      "GET",
      "POST",
      "PUT",
      "DELETE"
      ],
      "answer": "POST"
      },
      
      {
      "question": "What is the main benefit of using REST APIs for web development?",
      "options": [
      "Improved security through encryption",
      "Simplified integration with various platforms and technologies",
      "Enhanced performance through optimized caching techniques",
      "Increased scalability and high availability"
      ],
      "answer": "Simplified integration with various platforms and technologies"
      },
      
      {
      "question": "Which of the following is a core principle of Agile methodologies?",
      "options": [
      "Extensive documentation and detailed plans",
      "Strict adherence to a predefined process",
      "Embracing change and responding to it quickly",
      "Individual tasks and roles over collaboration"
      ],
      "answer": "Embracing change and responding to it quickly"
      },
      
      {
      "question": "What is the primary focus of Agile development?",
      "options": [
      "Delivering working software at the end of the project",
      "Following a detailed project plan",
      "Meeting all project requirements within the initial scope",
      "Iteratively delivering value to customers throughout the project"
      ],
      "answer": "Iteratively delivering value to customers throughout the project"
      },
      
      {
      "question": "What is the typical workflow in Git for merging changes from one branch into another?",
      "options": [
      "git pull",
      "git push",
      "git merge",
      "git commit"
      ],
      "answer": "git merge"
      },
      
      {
      "question": "What is the purpose of a continuous integration (CI) workflow?",
      "options": [
      "To automatically deploy applications to production servers",
      "To manage code reviews and pull requests",
      "To automatically run tests and build applications upon code changes",
      "To track and manage project issues and feature requests"
      ],
      "answer": "To automatically run tests and build applications upon code changes"
      },
      
      {
      "question": "What is npm?",
      "options": [
      "Node.js Package Manager",
      "Node.js Programming Module",
      "Node.js Package Middleware",
      "Node.js Plugin Manager"
      ],
      "answer": "Node.js Package Manager"
      },
      
      {
      "question": "What is the purpose of the 'require' function in Node.js?",
      "options": [
      "To load and use external modules",
      "To define variables in Node.js",
      "To handle errors in Node.js applications",
      "To create routes in Node.js applications"
      ],
      "answer": "To load and use external modules"
      },
      
      {
      "question": "What is the purpose of the 'git clone' command?",
      "options": [
      "Push local changes to a remote repository",
      "Create a local copy of a remote repository",
      "Merge branches in a Git repository",
      "Delete a branch from a Git repository"
      ],
      "answer": "Create a local copy of a remote repository"
      },
      
      {
      "question": "What is the command used to create a new branch in Git?",
      "options": [
      "git clone",
      "git checkout",
      "git branch",
      "git merge"
      ],
      "answer": "git branch"
      },
      
      {
      "question": "What does the ping command measure?",
      "options": [
      "Network bandwidth",
      "Round-trip time (RTT)",
      "Packet loss rate",
      "Server response time"
      ],
      "answer": "Round-trip time (RTT)"
      },
      
      {
      "question": "Which protocol does the ping command use by default?",
      "options": [
      "HTTP",
      "TCP",
      "ICMP",
      "UDP"
      ],
      "answer": "ICMP"
      },
      
      {
      "question": "Which Java framework provides support for database persistence and object-relational mapping (ORM)?",
      "options": [
      "Spring",
      "Hibernate",
      "Struts",
      "JavaFX"
      ],
      "answer": "Hibernate"
      },
      
{
  "question": "Which data structure follows the First-In-First-Out (FIFO) principle?",
  "options": [
  "Queue",
  "Stack",
  "Linked List",
  "Tree"
  ],
  "answer": "Queue"
  },
  {
  "question": "Which method is typically used to add elements to a queue in Java?",
  "options": [
  "enqueue()",
  "push()",
  "add()",
  "insert()"
  ],
  "answer": "enqueue()"
  },
  {
  "question": "What is the time complexity of inserting an element at the beginning of a linked list?",
  "options": [
  "O(1)",
  "O(n)",
  "O(log n)",
  "O(n^2)"
  ],
  "answer": "O(1)"
  },
  {
  "question": "Which data structure represents a hierarchical structure with a root node and child nodes?",
  "options": [
  "Queue",
  "Stack",
  "Linked List",
  "Tree"
  ],
  "answer": "Tree"
  },
  {
  "question": "Which JavaScript library simplifies HTML document traversal and manipulation?",
  "options": [
  "React",
  "Angular",
  "jQuery",
  "Vue.js"
  ],
  "answer": "jQuery"
  },
  {
  "question": "What is the primary function of a web server?",
  "options": [
  "Handle client-side scripting",
  "Store and manage databases",
  "Handle HTTP requests and deliver web content",
  "Design and create graphical user interfaces"
  ],
  "answer": "Handle HTTP requests and deliver web content"
  },
  {
  "question": "Which protocol is commonly used with sockets for reliable data transmission?",
  "options": [
  "HTTP",
  "FTP",
  "TCP",
  "UDP"
  ],
  "answer": "TCP"
  },
  {
  "question": "What does the SQL code 'SELECT COUNT(*) FROM users;' do?",
  "options": [
  "Retrieves the total count of rows in the 'users' table.",
  "Retrieves the average value of all columns in the 'users' table.",
  "Retrieves the sum of all values in the 'users' table.",
  "Retrieves the maximum value from the 'users' table."
  ],
  "answer": "Retrieves the total count of rows in the 'users' table."
  },

      {
      "question": "In Hibernate, which annotation is used to establish a relationship between two entities?",
      "options": [
      "@Entity",
      "@Id",
      "@OneToOne",
      "@OneToMany"
      ],
      "answer": "@OneToOne"
      },
      
      {
      "question": "In Java, which annotation is used to indicate that a method is a test method?",
      "options": [
      "@Test",
      "@Override",
      "@Autowired",
      "@Entity"
      ],
      "answer": "@Test"
      },
      
      {
      "question": "Which SQL keyword is used to filter rows based on a specified condition?",
      "options": [
      "SELECT",
      "UPDATE",
      "DELETE",
      "WHERE"
      ],
      "answer": "WHERE"
      },
      {
        question: "Which annotation is used in Java to specify that a method can be executed asynchronously?",
        options: [
        "@Async",
        "@Threaded",
        "@Concurrent",
        "@Parallel",
        ],
        answer: "@Async",
        },
        {
        question: "What is the purpose of the @Deprecated annotation in Java?",
        options: [
        "It indicates that a method is currently not in use.",
        "It specifies that a class cannot be extended.",
        "It marks a method as obsolete and discouraged from being used.",
        "It declares that a class should be instantiated only once.",
        ],
        answer: "It marks a method as obsolete and discouraged from being used.",
        },
        {
        question: "Which annotation is used to mark a class as an entity in Java Persistence API (JPA)?",
        options: [
        "@Entity",
        "@Table",
        "@Model",
        "@Persistence",
        ],
        answer: "@Entity",
        },
        {
        question: "Which annotation is used to indicate that a variable or parameter is of a specific type in JavaScript?",
        options: [
        "@TypeOf",
        "@Typed",
        "@Type",
        "JavaScript does not have explicit type annotations.",
        ],
        answer: "JavaScript does not have explicit type annotations.",
        },
        {
        question: "What is the purpose of the 'float' property in CSS?",
        options: [
        "It specifies the alignment of an element along the horizontal axis.",
        "It controls the visibility of an element.",
        "It sets the background color of an element.",
        "It changes the font style of an element.",
        ],
        answer: "It specifies the alignment of an element along the horizontal axis.",
        },
        {
        question: "What is the purpose of the 'display: inline-block' property in CSS?",
        options: [
        "It makes an element display as a block-level element.",
        "It makes an element display as an inline-level element.",
        "It combines the characteristics of both block and inline elements.",
        "It hides an element from the layout.",
        ],
        answer: "It combines the characteristics of both block and inline elements.",
        },
        {
        question: "What is the purpose of the 'state' object in React?",
        options: [
        "It is used to store and manage component data that can change over time.",
        "It specifies the initial configuration of a React component.",
        "It holds the JSX markup for rendering a component.",
        "There is no 'state' object in React.",
        ],
        answer: "It is used to store and manage component data that can change over time.",
        },
        {
        question: "What is the purpose of the jQuery method .hide()?",
        options: [
        "It hides an element by setting its visibility to hidden.",
        "It removes an element from the DOM.",
        "It hides an element by setting its display property to none.",
        "It hides an element by reducing its opacity to zero.",
        ],
        answer: "It hides an element by setting its display property to none.",
        },
        {
        question: "What is the purpose of the SQL keyword 'GROUP BY'?",
        options: [
        "It filters rows based on a specified condition.",
        "It sorts the result set in ascending or descending order.",
        "It groups rows with the same values into summary rows.",
        "It combines data from multiple tables based on a related column.",
        ],
        answer: "It groups rows with the same values into summary rows.",
        }

      
  
];
  
  export default data;