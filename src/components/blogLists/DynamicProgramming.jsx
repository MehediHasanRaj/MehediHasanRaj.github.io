import '../../css/style.css'
import smartbank from "../../images/smartbankimage.png";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";



export default function DynamicProgramming() {
    const javaCode = `public class FibonacciTabulation {
    public static int fib(int n) {
        if (n <= 1) return n;
        int[] dp = new int[n + 1];
        dp[0] = 0;
        dp[1] = 1;
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }
    public static void main(String[] args) {
        System.out.println(fib(10));
    }
}`;

    const topdown = `import java.util.HashMap;

public class FibonacciMemoization {
    private static HashMap<Integer, Integer> memo = new HashMap<>();
    
    public static int fib(int n) {
        if (n <= 1) return n;
        if (!memo.containsKey(n)) {
            memo.put(n, fib(n - 1) + fib(n - 2));
        }
        return memo.get(n);
    }
    
    public static void main(String[] args) {
        System.out.println(fib(10));
    }
}`;

    const bottomUp = `public class FibonacciTabulation {
    public static int fib(int n) {
        if (n <= 1) return n;
        int[] dp = new int[n + 1];
        dp[0] = 0;
        dp[1] = 1;
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }
    public static void main(String[] args) {
        System.out.println(fib(10));
    }
}`;


    return(
        <>


            <section>
                <div className="innerPageBannerCol" style={{paddingTop: '40px', paddingBottom: '5px'}}>
                    <div className="container">
                        <div className="row g-4 g-md-3  align-items-center">
                            <div className="col-md-6">
                                <div className="bannerContent">
                                    <br/>
                                    <h1 className="xlTitle pb-md-3" style={{textAlign: 'left'}}>🌟Dynamic Programming: A
                                        Beginner's Guide</h1>
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
                            <i className="fas fa-calendar-alt mr-2"></i> 9, Feb, 2025
                            &nbsp; <a href={"https://github.com/MehediHasanRaj/smart_bank"}>🔗 Git Link</a>
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
                                    <h4 style={{textAlign: 'left'}}>🚀 Introduction</h4>
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
                        <p style={{textAlign: 'justify'}}>Dynamic programming is an optimization technique that solves
                            problems by storing results of subproblems and reusing them to avoid redundant computations.
                            It follows two main principles:
                            <br/><br/>🔹 <b>Optimal Substructure</b>: A problem has an optimal substructure if its
                            solution can be obtained from the solutions of its subproblems.
                            <br/>🔹 <b>Overlapping Subproblems</b>: The problem can be broken down into smaller
                            subproblems, and the same subproblems occur multiple times.
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