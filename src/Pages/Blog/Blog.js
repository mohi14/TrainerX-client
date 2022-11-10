import { Accordion } from 'flowbite-react';
import React from 'react';
import useTitle from '../../others/useTitle/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='w-11/12 m-auto my-20'>
            <Accordion alwaysOpen={true}>
                <Accordion.Panel>
                    <Accordion.Title>
                        Difference between SQL and NoSQL
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            A SQL Database follows a table like structure which can have an
                            unlimited number of rows and every data present inside the database
                            is properly structured with Predefined Schemas, it is basically used
                            to manipulate Relational Databases Management Systems.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            A NoSQL Database is a Distributed Database where the data is very
                            unstructured with Dynamic Schema. Unlike SQL it cannot have unlimited
                            rows but it follows a Standard Schema Definition and can store all
                            sorts of data models with large distributed data in the form of
                            key-value pairs, graph databases, documents or wide-column stores.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is JWT, and how does it work?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                            A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is the difference between JavaScript and NodeJS?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            <h2 className='font-bold'>JavaScript</h2>
                            <li>Javascript is a programming language that is used for writing scripts on the website.</li>
                            <li>Javascript can only be run in the browsers.</li>
                            <li>It is basically used on the client-side.</li>
                            <li>Javascript is capable enough to add HTML and play with the DOM. </li>
                            <li>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</li>
                            <li>Javascript is used in frontend development.</li>
                            <li>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </li>
                            <li>It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++. </li>
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            <h2 className='font-bold'>NodeJS</h2>
                            <li>NodeJS is a Javascript runtime environment.</li>
                            <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                            <li>It is mostly used on the server-side.</li>
                            <li>Nodejs does not have capability to add HTML tags.</li>
                            <li>V8 is the Javascript engine inside of node.js that parses and runs Javascript.</li>
                            <li>Nodejs is used in server-side development.</li>
                            <li>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </li>
                            <li>Nodejs is written in C, C++ and Javascript.</li>
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        How does NodeJS handle multiple requests at the same time?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.
                            The cluster module allows easy creation of child processes that all share the same server ports.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            If your system has 8 CPU then 8 NodeJS instances will be created and every instance has its own independent event loop. Now NodeJS can process all request parallelly.
                            They are all share same port (PORT 3000) but not state. The master process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion, with some built-in smarts to avoid overloading a worker process.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Blog;