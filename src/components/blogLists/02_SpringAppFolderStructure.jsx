import '../../css/style.css'
import smartbank from "../../images/smartbankimage.png";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";



export default function _02SpringAppFolderStructure() {


    return(
        <>


            <section>
                <div className="innerPageBannerCol" style={{paddingTop: '40px', paddingBottom: '5px'}}>
                    <div className="container">
                        <div className="row g-4 g-md-3  align-items-center">
                            <div className="col-md-6">
                                <div className="bannerContent">
                                    <br/>
                                    <h1 className="xlTitle pb-md-3" style={{textAlign: 'left'}}>🌟Spring Boot Application Structure</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div style={{textAlign: 'justify'}}>
                        <time dateTime="2020-05-25 12:00:00">
                            <i className="fas fa-calendar-alt mr-2">24, Feb, 2025</i>
                        </time>

                    </div>

                </div>

            </section>
            <br/>

            <section>
                <div className="innerPageBannerCol" style={{paddingTop: '0px', paddingBottom: '10px'}}>
                    <div className="container">
                        <div className="row g-4 g-md-3  align-items-center">
                            <div className="col-md-6">
                                <div className="bannerContent">
                                    <h4 style={{textAlign: 'left'}}>🚀 Understanding Spring Boot Application Structure 🚀</h4>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <p style={{textAlign: 'justify'}}>Dynamic Programming (DP) is a powerful technique used in
                            computer science to solve complex problems efficiently by breaking them into overlapping
                            subproblems.
                            It is widely used in algorithm design, competitive programming, and real-world applications
                            like optimization and machine learning.
                            In this blog, we'll dive deep into the fundamentals of dynamic programming, explore when to
                            use it, and provide practical examples to solidify your understanding. Let’s get started! ✨
                        </p>

                    </div>
                </div>
            </section>

            <section>
                <div className="innerPageBannerCol" style={{paddingTop: '0px', paddingBottom: '10px'}}>
                    <div className="container">
                        <div className="row g-4 g-md-3  align-items-center">
                            <div className="col-md-6">
                                <div className="bannerContent">
                                    <h4 style={{textAlign: 'left'}}>📌 What is Dynamic Programming?</h4>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <p style={{textAlign: 'justify'}}>For those diving into Spring Boot, here's a quick guide to the typical folder structure and its components:

                            Config: Houses configuration classes for app settings.
                            Controller: Manages RESTful API endpoints and HTTP requests.
                            DTO (Data Transfer Object): Simplifies data transfer between layers, focusing on encapsulation without business logic.
                            Enum: Defines a set of related constants, like request statuses.
                            Model: Represents data models/entities mapped to database tables.
                            Repository: Facilitates data access using ORM or JPA.
                            Service: Implements business logic, supporting controllers in data operations.
                            Util: Contains utility classes for organized, modular code.
                            Additional folders include:

                            src/main/resources: For static files and configuration.
                            src/test: For test classes, mirroring the main structure.
                            While this is a standard setup, remember that structures can vary across organizations. Happy coding!
                        </p>

                    </div>
                </div>
            </section>


            <section>
                <div className="innerPageBannerCol" style={{paddingTop: '0px', paddingBottom: '10px'}}>
                    <div className="container">
                        <div className="row g-4 g-md-3  align-items-center">
                            <div className="col-md-6">
                                <div className="bannerContent">
                                    <h4 style={{textAlign: 'left'}}>🔍 Steps to Solve a Problem Using Dynamic
                                        Programming</h4>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <p style={{textAlign: 'justify'}}>1️⃣ Define the State: Identify the variables that define the
                            state of the problem.
                            <br/>2️⃣ Formulate the Recurrence Relation: Establish a mathematical formula to express the
                            solution using smaller subproblems.
                            <br/>3️⃣ Choose Memoization or Tabulation: Decide whether to use top-down (memoization) or
                            bottom-up (tabulation) approach.
                            <br/>4️⃣ Implement the Solution: Code the solution using either recursion with memoization
                            or an iterative table.
                        </p>

                    </div>
                </div>
            </section>

            <section>
                <div className="innerPageBannerCol" style={{paddingTop: '0px', paddingBottom: '10px'}}>
                    <div className="container">
                        <div className="row g-4 g-md-3  align-items-center">
                            <div className="col-md-6">
                                <div className="bannerContent">
                                    <h4 style={{textAlign: 'left'}}>📈 Example: Fibonacci Sequence</h4>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <p style={{textAlign: 'left'}}>One of the simplest examples of dynamic programming is computing
                            Fibonacci numbers.</p>
                        <h5 style={{textAlign: 'left'}}>❌ Naïve Recursive Approach (Exponential Time Complexity):</h5>

                        <div style={{padding: "20px", background: "#282c34", borderRadius: "10px"}}>

                            <SyntaxHighlighter language="java" style={oneDark}>
                                {javaCode}
                            </SyntaxHighlighter>
                        </div>
                        <p style={{textAlign: 'left'}}>⏳ Time Complexity: O(2^n) (due to redundant calculations)</p>

                        <h5 style={{textAlign: 'left'}}>✅ Optimized Approach Using Memoization (Top-Down DP):</h5>

                        <div style={{padding: "20px", background: "#282c34", borderRadius: "10px"}}>

                            <SyntaxHighlighter language="java" style={oneDark}>
                                {topdown}
                            </SyntaxHighlighter>
                        </div>
                        <p style={{textAlign: 'left'}}>✅ Time Complexity: O(n) (avoids redundant calculations by caching
                            results)</p>

                        <h5 style={{textAlign: 'left'}}>⚡ Bottom-Up Approach (Tabulation):</h5>

                        <div style={{padding: "20px", background: "#282c34", borderRadius: "10px"}}>

                            <SyntaxHighlighter language="java" style={oneDark}>
                                {bottomUp}
                            </SyntaxHighlighter>
                        </div>
                        <p style={{textAlign: 'left'}}>✅ Time Complexity: O(n) (efficient and uses iteration instead of
                            recursion)</p>

                    </div>

                </div>
            </section>


            <section>
                <div className="innerPageBannerCol" style={{paddingTop: '0px', paddingBottom: '10px'}}>
                    <div className="container">
                        <div className="row g-4 g-md-3  align-items-center">
                            <div className="col-md-6">
                                <div className="bannerContent">
                                    <h4 style={{textAlign: 'left'}}>🎯 Real-World Applications of Dynamic
                                        Programming</h4>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <p style={{textAlign: 'justify'}}>Dynamic programming is a crucial technique used in many
                            real-world scenarios, including:

                            <br/>✅ Pathfinding Algorithms (Dijkstra, Bellman-Ford)
                            <br/>✅ Resource Allocation Problems (Knapsack Problem)
                            <br/>✅ Sequence Alignment in Bioinformatics
                            <br/>✅ Data Compression Algorithms
                            <br/>✅ Machine Learning Optimization
                        </p>

                    </div>
                </div>
            </section>


            <section>
                <div className="innerPageBannerCol" style={{paddingTop: '0px', paddingBottom: '10px'}}>
                    <div className="container">
                        <div className="row g-4 g-md-3  align-items-center">
                            <div className="col-md-6">
                                <div className="bannerContent">
                                    <h4 style={{textAlign: 'left'}}>🎉 Conclusion</h4>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <p style={{textAlign: 'justify'}}>Dynamic Programming is a game-changer in algorithm design! By breaking problems into smaller overlapping subproblems and storing intermediate results, we can achieve significant performance improvements.

                            <br/>Mastering DP will help you ace coding interviews, competitive programming, and optimize real-world applications. 🚀
                            <br/>👉 Keep practicing, explore more DP problems, and elevate your problem-solving skills!
                            <br/><br/><p style={{textAlign:'center'}}>Happy Coding! 💻🔥</p>
                        </p>

                    </div>
                </div>
            </section>

        </>
    )

}