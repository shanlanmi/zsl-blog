----
title: Regular Expressions for JavaScript 
date: 2016-07-21 18:38:44
tags:
- JavaScirpt
----
## JS RegExp
**Creating regular expression**

```JS
re1.toString() == re2.toString(); //return true
re1 != re2; //return true
```

**Syntax:**

## Characters

Character|Meaning
---|---
\\|**Escape** character
^|Matches **beginning** of input
$|Matches **end** of input
*|Matches the preceding expression **0** or **more** times
+|Matches the preceding expression **1** or **more** times
?|Matches the preceding expression **0** or **1** time
.|Matches any **single** character except the newline character
{n}|Matches the preceding expression **exactly** n times. N must be a **positive** **integer**<br>`"candy".match(/a{2}/);`=>`null`<br>`"caandy".match(/a{2}/);`=>`"aa"`
{n,m}|Matches the preceding expression  n ~ m times(maximun). N and M must be a **positive** **integer**.When m is omitted, it's treated as ∞
x&#124;y|Matches either 'x' or 'y'
|
(x)|Matches 'x' and remembers the match<br>`'bar foo'.replace(/(...) (...)/, '$2 $1')`=>`"foo bar"`<br>`'foo bar foo bar'.match(/(foo) (bar) \1 \2/);` => `["foo bar foo bar", "foo", "bar"]`<br>`'foo bar foo bar'.match(/(foo) (bar) \1/);` => `["foo bar foo", "foo", "bar"]`, ps: `/1` means `(foo)`
(?:x)|Matches 'x' but does not remember the match
x(?=y)|Matches 'x' only if 'x' is followed by 'y'<br>`'Jack Sprat'.match(/Jack(?= Sprat)/);`=>`"Jack"`
x(?!y)|Matches 'x' only if 'x' is not followed by 'y'
\n|Where n is a positive integer, a back reference to the last substring matching the n **parenthetical** in the regular expression (counting left parentheses)<br>`"apple, orange, cherry, peach.".match(/apple(,)\sorange\1/);`=>`["apple, orange,", ","]`
|
[xyz]|Matches any one of the characters in the brackets. Special characters(.*) are not special inside.<br>`/[a-d]/` == `/[abcd]/`, `/[a-z]/` == `\w`
[^xyz]|Matches any one of the characters that **not** in the brackets<br>`"brisket".match(/[^a-c]/)`=>`"r"`
[\b]|Matches a **backspace** (U+0008)
\b|Matches a word **boundary**, the length of a matched word boundary is **zero**.<br>`"moon".match(/\bm/)`=>`"m"`<br>`"moon".match(/oo\b/)`=>`null`
\B|Matches a **non**-**word** **boundary**<br>`"noonday".match(/\B../)`=>`"oo"`<br>`"possibly yesterday.".match(/y\B./)`=>`"ye"`
|
\d|Matches a **digit** character. Equivalent to [0-9]
\D|Matches any **non**-**digit** character. Equivalent to [^0-9]
\w|Matches any **alphanumeric** character including the **underscore**. Equivalent to [A-Za-z0-9_]
\W|Matches any **non**-**word** character. Equivalent to [^A-Za-z0-9_]
\s|Matches a single white **space** character, including space, tab, form feed, line feed.<br>Equivalent to [ \f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]
\S|Matches a single character **other** than white **space**.<br>Equivalent to [^ \f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]
\cX|Matches a **control** **character**, X is [A-Z]
|
\0|Matches a NULL (U+0000) character.<br>Do not follow this with another digit, because \0\d is an octal escape sequence
\t|Matches a **tab** (U+0009)
\n|Matches a **feed** (U+000A)
\v|Matches a **vertical** **tab** (U+000B)
\f|Matches a **vertical** **feed** (U+000C)
\r|Matches a **return** (U+000D)
|
\xhh|Matches the character with the code hh (**two** **hexadecimal** digits)
\uhhhh|Matches the character with the code hhhh (**four** **hexadecimal** digits)
\u{hhhh}|(only when u flag is set) Matches the character with the Unicode value hhhh (**hexadecimal** digits)
|
\cA:\cZ|Control characters
\x0000:x\FFFF|Unicode hexadecimal
\x00:\xFF|ASCII hexadecimal

## Methods
### Methods of RegExp
- **exec()**
  Searchs for a match in a string, returns an **array** of information.
  ```JS
  regexObj.exec(str)
  /hello \S+/.exec('This is a hello world!');   // ["hello world!"]
  ```
- **test()**
  Tests a string, returns **true** or **false**.
  ```JS
  regexObj.test(str)
  /^hello/.test("hello world!");    // true
  ```

### Methods of String
- **match()**
  Searchs for a match in a string, returns an **array** of information or null on a mismatch.
  ```JS
  str.match(regexp)
  ```
- **search()**
  Tests for a match in a string, returns the **index** of the match, or -1 if the search fails.
  ```JS
  str.search(regexp)
  "hello world!".search(/ll/);    // 2
  ```
- **replace()**
  Searchs for a match in a string, and **replaces** the matched substring with a replacement substring.
  ```JS
  str.replace(regexp|subStr, newSubStr|function);
	str.replace(/microsoft/i, "apple");
	str.replace("Microsoft", "Apple");
  ```
- **split()**
  Breaks a string into an array of substrings.
  ```JS
  str.split([separator[, limit]])
  'How are you doing?'.split(' ', 2);   // ["How", "are"]
  ```

## Advanced searching with flags
**Regular Expression Modifiers**

Modifier|Description
---|---
g|Global matching
i|Case-insensitive matching
m|Multiline matching
y|sticky searching



## Some Useful Code

- **判断是否全为中英文**
  ```
  function isZhOrEng(str) {
      if (/^[\u4e00-\u9fa5]+$/.test(str) || /^[A-Za-z]+$/.test(str)) {
          return true;
      }
      return false;
    }
  ```

[RegExp Reference][regexp]



***
**本文相关**
1. 参考

[Regular_Expressions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
1. 修订
2016:第一版

[regexp]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
