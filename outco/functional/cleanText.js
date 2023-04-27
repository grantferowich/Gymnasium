/**
 * Input: a block of text
 * output: a block of text which is unformatted
 * */

let words = 'Wake Forest University === home.';

words = "JavaScript fundamentals: You should have a solid understanding of the basics of JavaScript, including data types, functions, loops, conditional statements, and object-oriented programming principles. Node.js and its ecosystem: You should be familiar with Node.js, its runtime environment, its modules, and its package manager (npm). You should be able to install, configure, and use packages from the npm registry. Express framework: You should be proficient in using Express, including creating routes, middleware functions, handling HTTP requests and responses, and integrating with databases. RESTful APIs: You should be familiar with the principles of building RESTful APIs, including HTTP methods, status codes, request and response headers, and query parameters. Database technologies: You should have knowledge of different databases like MySQL, PostgreSQL, MongoDB, and how to interact with them through Node.js. Authentication and authorization: You should understand how to implement authentication and authorization using various techniques like sessions, tokens, and OAuth. Testing and debugging: You should know how to write unit tests, integration tests, and end-to-end tests using frameworks like Mocha, Chai, and Supertest. Additionally, you should be able to debug and troubleshoot issues in code and infrastructure. Deployment: You should have knowledge of deploying Node.js applications to production environments, including configuring web servers, load balancers, and SSL certificates. Performance optimization: You should understand techniques to optimize Node.js and Express applications, such as caching, compression, and load balancing. Security: You should be aware of security best practices for web applications, such as handling user input, preventing SQL injection and XSS attacks, and implementing rate limiting and firewalls."
const cleanText = (text) => {
    // Replace multiple spaces between lines with single space
    text = text.replace(/\n\s+/g, '\n');
    // Trim leading and trailing whitespace
    text = text.trim()
    return text;
}

console.log(cleanText(words));