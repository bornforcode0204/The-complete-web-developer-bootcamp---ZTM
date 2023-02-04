# ➡➡➡ Section - 11 [JavaScript] ⬅⬅⬅

## JAVASCRIPT TYPES

---

1. Number
2. String
3. Boolean
4. Undefined
5. Null
<!-- 6. Symbol (new in ECMAScript 6) -->
6. Object

## JAVASCRIPT COMPARISONS

---

# !==

> =
> <=
>
> <

## JAVASCRIPT VARIABLES

---

var

<!-- let (new in ECMAScript 6)-->
<!-- const (new in ECMAScript 6)-->

## JAVASCRIPT CONDITIONALS

---

if
else
else if

<!-- ternary operator -->
<!-- switch -->

## JAVASCRIPT LOGICAL OPERATORS

---

&&
||
!

## JAVASCRIPT FUNCTIONS

---

var a = function name() {}
function name() {}
return

<!-- () => (new in ECMAScript 6) -->

## JAVASCRIPT DATA STRUCTURES

---

Array
Object

## JAVASCRIPT LOOPING

---

for
while
do
forEach (new in ECMAScript 5)

## JAVASCRIPT KEYWORDS

---

break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield

# ▶ Document Object Model(DOM):

- change all the HTML element in the page
- change all the HTML attributes in the page
- change all the css styles in the page
- remove exixting HTML elements and attributes
- add new HTML elements and attributes
- JavaScript can react to all existing HTML events in the page
- JavaScript can create new HTML events in the page

## DOM Selectors

1.  **These three are very useful**

- getElementsByTagName
- getElementsByClassName
- getElementById

2. **Used for selection**

- querySelector
- querySelectorAll

3. **Used for getting and setting Attribute**

- getAttribute
- setAttribute

### Changing Styles

- style.{property} //ok

- className //best
- classList //best

- classList.add
- classList.remove
- classList.toggle

#### Bonus

- innerHTML //DANGEROUS

- parentElement
- children

<mark>It is important to CACHE selectors in variables</mark>

## Note: Callback Functions

In the previous video you saw something interesting:

### Event listener syntax :

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
You didn't see the function being called like this as you may have expected:

button.addEventListener("click", addListAfterClick());
input.addEventListener("keypress", addListAfterKeypress(event));

This is something called a callback function. When that line of javascript runs, we don't want the addListAfterClick function to run because we are just adding the event listener now to wait for click or keypress. We want to let it know though that we want this action to happen when a click happens. So the function now automatically gets run (gets added the ()) every time the click happens. So we are passing a reference to the function without running it.
