Today's task is also to read the following articles and get a good understanding about funtions

first article : "https://javascript.info/function-basics"
-Values passed to a function as parameters are copied to its local variables.
-A function may access outer variables. But it works only from inside out. The code outside of the function doesn’t see its local variables.
-A function can return a value. If it doesn’t, then its result is undefined.
-To make the code clean and easy to understand, it’s recommended to use mainly local variables and parameters in the function, not outer variables.

It is always easier to understand a function which gets parameters, works with them and returns a result than a function which gets no parameters, but modifies outer variables as a side effect.

-Function naming:

A name should clearly describe what the function does. When we see a function call in the code, a good name instantly gives us an understanding what it does and returns.
A function is an action, so function names are usually verbal.
There exist many well-known function prefixes like create…, show…, get…, check… and so on. Use them to hint what a function does.

the second article : "https://javascript.info/function-expressions"

-Functions are values. They can be assigned, copied or declared in any place of the code.
-If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
-If the function is created as a part of an expression, it’s called a “Function Expression”.
-Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
-Function Expressions are created when the execution flow reaches them.