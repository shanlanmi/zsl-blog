----
title: SQL基础语法
date: 2016-11-17 11:20:52
tags:
- Database
----
# 语法
## 检索数据
### `SELECT` 基本功能
1. 检索单列
  ```sql
  SELECT column_name, column_name FROM table_name;
  ```
1. 检索多列
  ```sql
  SELECT * FROM table_name;
  ```
  * 使用通配符`*`来检索所有列很影响性能。


Note: 
* 默认状态下的查询是未排序的。
* 结尾处的`;`可加可不加。
* SQL 语句不区分大小写,但是table_name 和 column_name 可能需要区分。
* 在处理SQL语句时,其中所有空格都被忽略。SQL语句可以写成长长的一行,也可以分写在多行。下面这三种写法的作用是一样的。

### 检索不同的值
`SELECT DISTINCT`: return only distinct (different) values.
```sql
SELECT DISTINCT column_name FROM table_name;
```
* 若指定两列,则除非两列完全相同,否则所有行都会被检索出来。

### 限制检索结果
* SQL Server 和 Access
  ```sql
  SELECT TOP number|percent column_name

  e.g.
  SELECT TOP 2 * FROM Customers;
  SELECT TOP 50 PERCENT * FROM Customers;
  ```
* DBMS
  ```sql
  SELECT column_name FROM table_name
  FETCH FIRST numebr ROWS ONLY

  e.g.
  FETCH FIRST 5 ROWS ONLY
  ```
* MySQL, MariaDB, PostgreSQL, SQLite
  ```sql
  SELECT column_name FROM table_name
  LIMIT number    -- 返回的数量限制
  OFFSET number   -- 指定从第几行开始检索

  e.g.
  LIMIT 5
  OFFSET 5
  ```
  * 第一个检查的是第0行,而不是第1行,所以 `LIMIT1 OFFSET1`会检索第二行。
  * MySQL 和 MariaDB支持简化为 `LIMIT 3,4`。

### 词法结构
#### 标识符
标识符必须用字母`a-z`或`_`开头, 后面可以接字母, `_`, 数字, 或`$`(不推荐用`$`)。
标识符有63字节的长度限制。

#### 引号
* 用单引号来限定字符串, 比较值为数值时不用引号。
* 可以用`"`来限定变量名, 比如column name为select时, 可以使用`"select"`来标示变量。

#### 转移
* 可以使用Unicode字符`U&"<unicode>"`来表示, 反斜线接上4位16进制代码点号码或者反斜线和加号接上6位16进制代码点号码。
  ```
  U&"d\0061t\+000061" # data
  ```  
* C风格转义字符串常亮
  * `\b`: 退格
  * `\f`: 换页
  * `\n`: 换行
  * `\r`: 回车
  * `\t`: 制表符
  * `\o`, `\oo`, `\ooo (o = 0 - 7)`: 八进制字节值
  * `\xh`, `\xhh (h = 0 - 9, A - F)`: 十六进制字节值
  * `\uxxxx`, `\Uxxxxxxxx (x = 0 - 9, A - F)`: 16 或 32-位十六进制 Unicode 字符值

#### 其他类型的常亮
```sql
type 'string'
'string'::type
CAST ( 'string' AS type )
```

#### 特殊字符

字符 | 意义
:----|:--
`$`  | 表示在一个函数定义或一个预备语句中的位置参数。<br>在其他上下文中该美元符号可以作为一个标识符或者一个美元引用字符串常量的一部分。
`()` | 具有它们通常的含义，用来分组表达式并且强制优先。
`[]` | 被用来选择一个数组中的元素。
`,`  | 被用在某些语法结构中来分割一个列表的元素。
`;`  | 结束一个 SQL 命令。
`:`  | 被用来从数组中选择"切片"。
`*`  | 被用在某些上下文中标记一个表的所有域或者组合值。<br>当它被用作一个聚集函数的参数时，它还有一种特殊的含义，即该聚集不要求任何显式参数。
`.`  | 被用在数字常量中，并且被用来分割模式、表和列名。

#### 注释
```sql
SELECT column_name -- 行内注释

# 整行注释

/* 
  多行注释
  */
```

#### 下标
如果一个表达式得到了一个数组类型的值，那么可以抽取出该数组值的一个特定元素：
```sql
expression[subscript]
```
或者抽取出多个相邻元素（一个"数组切片"）：
```sql
expression[lower_subscript:upper_subscript]
```
e.g.
```sql
mytable.arraycolumn[4]
mytable.two_d_column[17][34]
$1[10:42]
(arrayfunction(a,b))[42]
```


## 排序检索数据
- 检索出的数据并不是随机显示的。如果不排序,数据一般将以它在底层表中出现的顺序显示,这有可能是数据最初添加到表中的顺序。但是,如果数据随后进行过更新或删除,那么这个顺序将会受到DBMS重用回收存储空间的方式的影响。因此,如果不明确控制的话,则最终的结果不能（也不应该）依赖该排序顺序。
- 关系数据库设计理论认为,如果不明确规定排序顺序,则不应该假定检索出的数据的顺序有任何意义。

```sql
SELECT column_name, column_name
FROM table_name
ORDER BY column_name ASC|DESC, column_name ASC|DESC;
# ORDER BY number asc|desc -- number 为特定列的列号

e.g.
select * from customers
oRDER BY Country ASC, CustomerName DESC;
```
* `ASC`=ascending; `DESC`=descending
* 默认情况下,字典排序中将`A` 视为与`a` 相同,但是可以通过设置来修改这一默认行为。

## 过滤数据: 单个 WHERE
```sql
SELECT column_name,column_name
FROM table_name
WHERE column_name operator value;

e.g.
SELECT * FROM Coustomers
WHERE Country='Mexico';
WHERE CustomerID=1;
```

Operator | Description
:--------|:--
`=`       | Equal
`<>`,`!=` | Not Equal
`>`       | Greater than
`<`       | Less than
`>=`      | Greater than or equal
`<=`      | Less than or equal
`BETWEEN` | Between an inclusive range
`LIKE`    | Search for a pattern
`IN`      | To specify multiple possible values for a column
`IS NULL` | Is null

* `BETWEEN` 的用法
  - AND
    ```sql
    SELECT column_name(s)
    FROM table_name
    WHERE column_name BETWEEN value1 AND value2;
    ```
  - NOT ... AND ...: outside the range of the previous example
    ```sql
    e.g.
    SELECT * FROM Products
    WHERE ProductName NOT BETWEEN 'C' AND 'M';

    SELECT * FROM Products
    WHERE (Price BETWEEN 10 AND 20)
    ```
  - With IN ... AND
    ```sql
    e.g.
    SELECT * FROM Products
    WHERE (Price BETWEEN 10 AND 20)
    AND NOT CategoryID IN (1,2,3);
    ```
  - With Text Value
    ```sql
    e.g.
    SELECT * FROM Products
    WHERE ProductName BETWEEN 'C' AND 'M';
    ```
  - With Date Value
    ```sql
    SELECT * FROM Orders
    WHERE OrderDate BETWEEN #07/04/1996# AND #07/09/1996#;
    ```
  - Notice:
    - 第一个值必须小于第二个值。
    - The BETWEEN operator can produce different result in different databases!
    - In some databases, BETWEEN selects fields that are between and excluding the test values.
    - In other databases, BETWEEN selects fields that are between and including the test values.
    - And in other databases, BETWEEN selects fields between the test values, including the first test value and excluding the last test value.
    - Therefore: Check how your database treats the BETWEEN operator!

* 空值`NULL`与字段包含`0`, 空字符串或仅仅包含空格不同。
* IS NULL
  It is not possible to test for NULL values with comparison operators, such as `=`, `<`, or `<>`.
  ```sql
  SELECT LastName,FirstName,Address FROM Persons
  WHERE Address IS NULL
  ```
* IS NOT NULL
  ```sql
  SELECT LastName,FirstName,Address FROM Persons
  WHERE Address IS NOT NULL
  ```
## 高级数据过滤: 多个 WHERE 组合
操作符（operator）:用来联结或改变WHERE子句中的子句的关键字，也称为逻辑操作符（logical operator）。

### 组合WHERE子句
- **AND操作符**: 匹配所有条件
  ```sql
  e.g.
  SELECT * FROM Customers
  WHERE Country='Germany'
  AND (City='Berlin' OR City='München');
  ```
- **OR操作符**: 匹配任意条件
  ```sql
  SELECT prod_name, prod_price
  FROM Products
  WHERE vend_id = 'DLL01' OR vend_id = ‘BRS01’;
  ```
- **求值顺序**
  优先执行`AND` 操作符, 后处理`OR` 操作符。
  用圆括号来修改执行顺序。
  ```sql
  SELECT prod_name, prod_price
  FROM Products
  WHERE vend_id = 'DLL01' OR vend_id = ‘BRS01’
  -- shoud code like: WHERE (vend_id = 'DLL01' OR vend_id = ‘BRS01’)
  AND prod_price >= 10;
  ```

### IN操作符: 一组条件的`OR`匹配
```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1,value2,...);
```
`IN`和`OR`对比:
- 在有很多合法选项时，IN操作符的语法更清楚，更直观。
- 在与其他AND和OR操作符组合使用IN时，求值顺序更容易管理。
- IN操作符一般比一组OR操作符执行得更快（在上面这个合法选项很少的例子中，你看不出性能差异）。
- IN的最大优点是可以包含其他SELECT语句，能够更动态地建立WHERE子句。第11课会对此进行详细介绍。

### NOT操作符
`NOT`: 就是否定其后所跟的任何条件。
```sql
SELECT prod_name
FROM Products
WHERE NOT vend_id = 'DLL01'
ORDER BY prod_name;
```

## 用通配符进行过滤
### LIKE操作符: to search for a specified pattern in a column
```sql
SELECT column_name(s)
FROM table_name
WHERE column_name LIKE pattern;

e.g.
SELECT * FROM Customers
WHERE City LIKE '%s';
```
- 为在搜索子句中使用通配符，必须使用LIKE操作符。
- 通配符搜索只能用于文本字段（串），非文本数据类型字段不能使用通配符搜索。
- 搜索是区分大小写的。

### 通配符

`%`: 表示任何字符出现任意次数。(包括0次)
`_`: 表示任何字符出现任意1数。
`[]`: 表示字符必须匹配指定位置的指定字符集。(只有Access, 和SQL Server支持集合)
- `[]`通配符可以用`^`前缀来否定。(Access用`!`来否定)
- 不会匹配到`NULL`。
- 不优先使用通配符。
- 尽可能不要把通配符放在匹配字段的开头处,会影响搜索性能。
- 仔细注意通配符的位置,如果放错了可能不会返回想要的数据。

## 创建计算字段
### 计算字段
### 拼接字段
拼接(concatenate): 将值连接到一起,构成单个值。
拼接操作符:
  - `+`: Access, SQL Server
  - `||`: DB2, Oracle, PostgreSQL, SQLite, Open Office Base

```sql
SELECT vend_name || ' (' || vend_country || ')'
FROM Vendors
ORDER BY vend_name;
```

### TRIM(): 删除空格
- `TRIM()`: 去掉左右的空格。
- `RTRIM()`: 去掉右边的空格。
- `LTRIM()`: 去掉左边的空格。

```sql
SELECT RTRIM(vend_name) + ' (' + RTRIM(vend_country) + ')'
FROM Vendors
ORDER BY vend_name;
```

## 使用别名
### 连接字段
- 实际表名或列名中含不合法的字符,可以重新命名避免混淆。
- There are more than one table involved in a query
  ```sql
  SELECT o.OrderID, o.OrderDate, c.CustomerName
  FROM Customers AS c, Orders AS o
  WHERE c.CustomerName="Around the Horn" AND c.CustomerID=o.CustomerID;
  ```
- Functions are used in the query
- Column names are big or not very readable
- Two or more columns are combined together
  ```sql
  SELECT RTRIM(vend_name) || ' (' || RTRIM(vend_country) || ')' 
         AS vend_title
  FROM Vendors
  ORDER BY vend_name;
  ```

### 执行算术计算
```sql
SELECT item_price*quantity as expanded_price
FROM OrderItems
WHERE order_num = 20008; 
```

运算符: `+` , `-` , `*` , `/`

`SELECT`语句可以不接`FROM`执行部分不依赖表的代码, 如:
```sql
SELECT 3*2
SELECT TRIM('abc ')
SELECT Now()
```

## 使用数据处理函数
### 函数
- 取字符串的组成部分
  - Access使用MID()
  - DB2、Oracle、**PostgreSQL**和SQLite使用SUBSTR()
  - MySQL和SQL Server使用SUBSTRING() 
- 数据类型转换
  - Access和Oracle使用多个函数，每种类型的转换有一个函数
  - DB2和**PostgreSQL**使用CAST()
  - MariaDB、MySQL和SQL Server使用CONVERT() 
- 取当前日期
  - DB2和**PostgreSQL**使用CURRENT_DATE
  - MariaDB和MySQL使用CURDATE()
  - Oracle使用SYSDATE
  - SQL Server使用GETDATE()
  - SQLite使用DATE() 

* 不同的数据库使用的函数命令不同, 为了代码多数据库兼容性, 一般可以选择不使用函数或加入函数后做好注释。

### 使用函数
### 文本处理函数

函　　数                                    | 说　　明 
:-------------------------------------------|:--
`LEFT()`（或使用子字符串函数）              | 返回字符串左边的字符 
`LENGTH()`（也使用`DATALENGTH()`或`LEN()`） | 返回字符串的长度 
`LOWER()`（Access使用`LCASE()`）            | 将字符串转换为小写 
`LTRIM()`                                   | 去掉字符串左边的空格 
`RIGHT()`（或使用子字符串函数）             | 返回字符串右边的字符 
`RTRIM()`                                   | 去掉字符串右边的空格 
`SOUNDEX()`                                 | 返回字符串的SOUNDEX值 
`UPPER()`（Access使用`UCASE()`）            | 将字符串转换为大写 

**`SOUNDEX()`**
`SOUNDEX`是一个将任何文本串转换为描述其语音表示的字母数字模式的算法。`SOUNDEX`考虑了类似的发音字符和音节，使得能对字符串进行发音比较而不是字母比较。虽然`SOUNDEX`不是SQL概念，但多数DBMS都提供对`SOUNDEX`的支持。
`SOUNDEX`支持Microsoft Access和PostgreSQL不支持`SOUNDEX()`，因此以下的例子不适用于这些DBMS。

### 日期和时间处理函数
```sql
WHERE DATEPART(yy, order_date)=2012;                  -- SQL Server
WHERE DATEPART('yyyy', order_date)=2012;              -- Access
WHERE DATE_PART('year', order_date)=2012;             -- Postgres
WHERE to_number(to_char(order_date, 'YYYY')) = 2012;  -- Oracle
```

### 数值处理函数

函　　数 | 说　　明 
:--------|:--
`ABS()`  | 返回一个数的绝对值 
`COS()`  | 返回一个角度的余弦 
`EXP()`  | 返回一个数的指数值 
`PI()`   | 返回圆周率 
`SIN()`  | 返回一个角度的正弦 
`SQRT()` | 返回一个数的平方根 
`TAN()`  | 返回一个角度的正切 

## 汇总数据
### 聚集函数

函　　数  | 说　　明 
:---------|:--
`AVG()`   | 返回某列的平均值 
`COUNT()` | 返回某列的行数 
`MAX()`   | 返回某列的最大值 
`MIN()`   | 返回某列的最小值 
`SUM()`   | 返回某列值之和 

- `AVG()`只能用来确定特定数值列的平均值，而且列名必须作为函数参数给出。为了获得多个列的平均值，必须使用多个AVG()函数。
-  `AVG()`函数忽略列值为NULL的行。
- 使用`COUNT(*)`对表中行的数目进行计数，不管表列中包含的是空值（NULL）还是非空值。
- 使用`COUNT(column)`对特定列中具有值的行进行计数，忽略NULL值。
- 在用于文本数据时，`MAX()`返回按该列排序后的最后一行。

### 聚集不同值
可以使用`DISTINCT`来聚集不同的值, 但是不能用于COUNT(*)。
```sql
SELECT AVG(DISTINCT prod_price) AS avg_price
FROM Products
WHERE vend_id = 'DLL01';
```

### 组合聚集函数
```sql
SELECT COUNT(*) AS num_items,
       MIN(prod_price) AS price_min,
       MAX(prod_price) AS price_max,
       AVG(prod_price) AS price_avg
FROM Products;
```

## 分组数据
### 数据分组

### 创建分组
```sql
SELECT vend_id, COUNT(*) AS num_prods
FROM Products
GROUP BY vend_id;
```
* `GROUP BY`子句指示DBMS按vend_id排序并分组数据。这就会对每个vend_id而不是整个表计算num_prods一次。
* `GROUP BY`子句可以包含任意数目的列，因而可以对分组进行嵌套，更细致地进行数据分组。
* 如果在`GROUP BY`子句中嵌套了分组，数据将在最后指定的分组上进行汇总。换句话说，在建立分组时，指定的所有列都一起计算（所以不能从个别的列取回数据）。
* `GROUP BY`子句中列出的每一列都必须是检索列或有效的表达式（但不能是聚集函数）。如果在SELECT中使用表达式，则必须在`GROUP BY`子句中指定相同的表达式。不能使用别名。
* 大多数SQL实现不允许`GROUP BY`列带有长度可变的数据类型（如文本或备注型字段）。
* 除聚集计算语句外，SELECT语句中的每一列都必须在`GROUP BY`子句中给出。
* 如果分组列中包含具有NULL值的行，则NULL将作为一个分组返回。如果列中有多行NULL值，它们将分为一组。
* `GROUP BY`子句必须出现在WHERE子句之后，ORDER BY子句之前。

### 过滤分组
`HAVING`操作用法和`WHERE`一样, `WHERE`的操作对象是行, `HAVING`的操作对象是分组。
`WHERE`操作再`GROUP BY`之前过滤, `HAVING`操作再`GROUP BY`之后过滤。

```sql
SELECT cust_id, COUNT(*) AS orders
FROM Orders
GROUP BY cust_id
HAVING COUNT(*) >= 2;
```

### 分组和排序

ORDER BY                                     | GROUP BY 
:--------------------------------------------|:--
对产生的输出排序                             | 对行分组，但输出可能不是分组的顺序(**需要额外排序**)
任意列都可以使用（甚至非选择的列也可以使用） | 只可能使用选择列或表达式列，而且必须使用每个选择列表达式 
不一定需要                                   | 如果与聚集函数一起使用列（或表达式），则必须使用 

## 使用子查询
### 子查询

```sql
SELECT cust_name, cust_contact
FROM Customers
WHERE cust_id IN (SELECT cust_id
                  FROM Order
                  WHERE order_num IN (SELECT order_num
                                      FROM OrderItems
                                      WHERE prod_id = 'RGAN01')); 
```

- 在SELECT语句中，子查询总是从内向外处理。
- 格式化SQL,方便阅读和调试。
作为子查询的SELECT语句只能查询单个列。企图检索多个列将返回错误。

### 作为计算字段使用子查询
```sql
select cust_name,
	cust_state,
	(select count(*)
	from orders
	where orders.cust_id = customers.cust_id) as orders
from customers
ORDER BY cust_name
```

## 联结表
### 关系表
建立关系表的意义: 
- 储存共有的信息即浪费时间也浪费空间。
- 若共有的信息发生变动。
- 避免了重复数据输入错误的可能性。

### 使用表别名
- 缩短SQL语句。
- 允许在一条`SELECT`语句中多次使用相同的表。
```sql
SELECT cust_name, cust_contact
FROM Customers AS C, Orders AS O, OrderItems AS OI
WHERE C.cust_id = O.cust_id
AND OI.order_num = O.order_num
AND prod_id = 'RGAN01';
```

### 内联结(inner join)/等值结(equijoin)
- 使用`where`连接
  ```sql
  select vend_name, prod_name, prod_price
  from vendors, products
  where vendors.vend_id = products.vend_id;
  ```
  使用发`where`语句保证两张表的`vend_id`在逻辑上匹配。
- 使用`join on`连接
  ```sql
  SELECT vend_name, prod_name, prod_price
  FROM vendors INNER JOIN products
  ON vendors.vend_id = products.vend_id;
  ```
- 联结多个表
  ```sql
  SELECT prod_name, vend_name, prod_price, quantity
  FROM OrderItems, Products, Vendors
  WHERE Products.vend_id = Vendors.vend_id
  AND OrderItems.prod_id = Products.prod_id
  AND order_num = 20007;
  ```
- 笛卡儿积（cartesian product）: 由没有联结条件的表关系返回的结果为笛卡儿积。检索出的行的数目将是第一个表中的行数乘以第二个表中的行数。
- 不要联结不必要的表,联结越多性能越慢。
- SQL本身不限制联结表的数量,但是许多DBMS会限制。
- 不同的`JOIN`类型
  - INNER JOIN: Returns all rows when there is at least one match in BOTH tables(as JOIN)
  - LEFT JOIN: Return all rows from the left table, and the matched rows from the right table
  - RIGHT JOIN: Return all rows from the right table, and the matched rows from the left table
  - FULL JOIN: Return all rows when there is a match in ONE of the tables

### 自联结(self-join)
- 使用子查询
  ```sql
  SELECT cust_id, cust_name, cust_contact
  FROM Customers
  WHERE cust_name = (SELECT cust_name
                     FROM Customers
                     WHERE cust_contact = 'Jim Jones');
  ```
- 使用自联结
  ```sql
  SELECT c1.cust_id, c1.cust_name, c1.cust_contact
  FROM Customers AS c1, Customers AS c2
  WHERE c1.cust_name = c2.cust_name
  AND c2.cust_contact = 'Jim Jones'; 
  ```
  - 使用别名来避免了单一张表自联引用的歧义性。
  - 通常情况下,自联结的性能优于子查询

### 自然联结(natural-join)

```sql
SELECT C.*, O.order_num, O.order_date,
       OI.prod_id, OI.quantity, OI.item_price
FROM Customers AS C, Orders AS O, OrderItems AS OI
WHERE C.cust_id = O.cust_id
AND OI.order_num = O.order_num
AND prod_id = 'RGAN01';
```
一般通过对一个表使用通配符`SELECT *`，而对其他表的列使用明确的子集来完成。

### 外联结(outer-join)

外联结: 联结包含了那些在相关表中**没有关联行**的行。(即没有匹配成功的也会显示出来)

```sql
SELECT Customers.cust_id, Orders.order_num
FROM Customers LEFT OUTER JOIN Orders
ON Customers.cust_id = Orders.cust_id;
```
- `LEFT OUTER JOIN`: 显示左边表格的所有行及其相关联的值。
- `RIGHT OUTER JOIN`: 显示右边表格的所有行及其相关联的值。
- `FULL OUTER JOIN`: 显示左右两张表格的所有行及其相关联的值。
  Access、MariaDB、MySQL、Open Office Base或SQLite不支持FULL OUTER JOIN语法。


### 使用带聚集函数的联结

```sql
SELECT Customers.cust_id,
       COUNT(Orders.order_num) AS num_ord
FROM Customers INNER JOIN Orders
ON Customers.cust_id = Orders.cust_id
GROUP BY Customers.cust_id;
```

## 组合查询
**并(union)或复合查询: SQL执行多个查询(多条`SELECT`语句), 并返回一个查询结果集。**
union的使用场景:
- 在一个查询中从不同的表返回结构数据。
- 对一个表执行多个查询, 按一个查询返回数据。

```sql
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;
ORDER BY column_name(s)
```
- The `UNION` operator selects only **distinct** values by default, use `UNION ALL` to return all values。
- Each `SELECT` statement within the `UNION` must have the **same number of columns**. The columns must also have **similar data types**. Also, the columns in each SELECT statement must be in the same order.
- 不允许使用多条`ORDDER BY`子句。
- `UNION`很少用,因为可以用联结达到目的。
- `EXCEPT`: 检索只在第一个表中存在而在第二个表中不存在的行。
- `INTERSECT`: 检索两个表中都存在的行。

## VALUES 列表
VALUES提供了一种生成"常量表"的方法，它可以被使用在一个查询中而不需要实际在磁盘上创建一个表。
```sql
VALUES ( expression [, ...] ) [, ...]
```
例子:
```sql
=> SELECT * FROM (VALUES (1, 'one'), (2, 'two'), (3, 'three')) AS t (num,letter);
 num | letter
-----+--------
   1 | one
   2 | two
   3 | three
(3 rows)
```


## 插入数据

### 插入完整的行
- 不安全的写法
  ```sql
  INSERT INTO table_name
  VALUES (value1, value2, value3,...);
  ```
  - `VALUES`必须给每一列提供一个值。
  - 这种语法很简单, 但是不安全, 必须依赖列的次序, 应该尽可能避免使用。
- 安全的写法
  ```sql
  INSERT INTO table_name (column1,column2,column3,...)
  VALUES (value1,value2,value3,...);
  ```

### 插入检索出的数据
`INSERT SELECT`: 将新表的数据合并到旧表中, 而不需要每次读取一行再插入。
```sql
INSERT INTO Customers(cust_id,
                      cust_contact,
                      cust_email,
                      cust_name,
                      cust_address,
                      cust_city,
                      cust_state,
                      cust_zip,
                      cust_country)
SELECT cust_id,
       cust_contact,
       cust_email,
       cust_name,
       cust_address,
       cust_city,
       cust_state,
       cust_zip,
       cust_country
FROM CustNew;

INSERT INTO table2
SELECT * FROM table1;

INSERT INTO table2
(cloumn_name)
SELECT column_name
FROM table1;
```
- 插入多少行依赖于新表中有多少行, 若表为空,则没有行被插入。
- 可以使用`WHERE`来做数据过滤。

### 从一个表复制到另一个表
`INSERT SELECT`会将当前数据插入到旧表中, `SELECT INSERT`可以将当前数据复制到新表中(若是复制到旧表, 部分DBMS会覆盖已存在的数据), *前者是导出数据, 后者是导入数据。*(没懂)

```sql
SELECT column_name
INTO newtable [IN externabdb]
FROM table;

e.g.
SELECT CustomerName, ContactName
INTO CustomersBackup2013
FROM Customers;

SELECT *
INTO CustomersBackup2013 IN 'Backup.mdb'
FROM Customers;

SELECT *
INTO CustomersBackup2013
FROM Customers
WHERE Country='Germany';

SELECT Customers.CustomerName, Orders.OrderID
INTO CustomersOrderBackup2013
FROM Customers
LEFT JOIN Orders
ON Customers.CustomerID=Orders.CustomerID;
```
- 可利用联结从多个表插入数据。
- 不管从多少个表检索数据, 数据都只能插入到一个表中。
- 任何`SELECT`选项和子句都可以使用, 包括`WHERE`和`GROUP BY`。

## 更新和删除数据

### UPDATE: 更新数据
  ```sql
  UPDATE table_name
  SET column1=value1,column2=value2,...
  WHERE some_column=some_value;

  e.g.
  UPDATE Customers
  SET ContactName='Alfred Schmidt', City='Hamburg'
  WHERE CustomerName='Alfreds Futterkiste';
  ```
- 要删除某列的值,可以设置它为`NULL`。

### DELETE: 删除数据
```sql
DELETE FROM table_name
WHERE some_column=some_value;

<!-- delete all rows without deleting the table -->
DELETE FROM table_name;
DELETE * FROM table_name;
```
Notice: 
- Be very careful when deleting records. You **cannot** undo this statement!
- 在删除已定有关系的外键时,DBMS会抛出错误并中止。
- `DELETE`不需要列名或通配符。`DELETE`删除整行而不是删除列。要删除指定的列，请使用`UPDATE`语句。
- `DELETE`不会删除表本身。
- 可以使用`TRUNCATE TABLE`语句来更快的删除数据, 因为它不记得数据的变动。

### 更新和删除的指导原则
除非确实打算更新和删除每一行，否则绝对不要使用不带`WHERE`子句的`UPDATE`或`DELETE`语句。
保证每个表都有主键（如果忘记这个内容，请参阅第12课），尽可能像`WHERE`子句那样使用它（可以指定各主键、多个值或值的范围）。
在`UPDATE`或`DELETE`语句使用`WHERE`子句前，应该先用`SELECT`进行测试，保证它过滤的是正确的记录，以防编写的`WHERE`子句不正确。
使用强制实施引用完整性的数据库（关于这个内容，请参阅第12课），这样DBMS将不允许删除其数据与其他表相关联的行。
有的DBMS允许数据库管理员施加约束，防止执行不带`WHERE`子句的`UPDATE`或`DELETE`语句。如果所采用的DBMS支持这个特性，应该使用它。
- 部分DBMS支持`UPDATE`后加`FROM`从句。

## 创建和操纵表
### CREATE DATABASE: 创建数据库
```sql
CREATE DATABASE dbname;
```

### 创建表
关键信息:
1. 新表的名字
1. 表列的名字和定义
1. 部分DBMS还要求指定表的位置

```sql
CREATE TABLE table_name
(
column_name1 data_type(size),
column_name2 data_type(size),
...
);

e.g.
CREATE TABLE Persons
(
PersonID int,
LastName varchar(255),
FirstName varchar(255),
Address varchar(255),
City varchar(255)
);
```
- 在插入或更新行时，该列必须有值。每个表列要么是NULL列，要么是NOT NULL列，这种状态在创建表的时候定义。
- 定义列时, 每列的默认指定是NULL。

### ALTER TABLE: 更新表定义
- 理想情况下，不要在表中包含数据时对其进行更新。应该在表的设计过程中充分考虑未来可能的需求，避免今后对表的结构做大改动。
- 所有的DBMS都允许给现有的表增加列，不过对所增加列的数据类型（以及NULL和DEFAULT的使用）有所限制。
- 许多DBMS不允许删除或更改表中的列。
- 多数DBMS允许重新命名表中的列。
- 许多DBMS限制对已经填有数据的列进行更改，对未填有数据的列几乎没有限制。
- 最好在修改先做备份, 因为更改不能撤销, 增加了多余的列也无法删除, 删除了不该删除的列可能造成数据丢失。

- ADD: add a column in a table
  ```sql
  ALTER TABLE table_name
  ADD column_name datatype
  ```
- DROP COLUMN: delete a column in a table
  ```sql
  ALTER TABLE table_name
  DROP COLUMN column_name
  ```
- ALTER COLUMN: change the data **type** of a column in a table 
  ```sql
  ALTER TABLE table_name
  ALTER COLUMN column_name datatype
  ```

**复杂的表结构更改一般需要手动删除过程，它涉及以下步骤：**
1. 用新的列布局创建一个新表；
1. 使用INSERT SELECT语句（关于这条语句的详细介绍，请参阅第15课）从旧表复制数据到新表。有必要的话，可以使用转换函数和计算字段；
1. 检验包含所需数据的新表；
1. 重命名旧表（如果确定，可以删除它）；
1. 用旧表原来的名字重命名新表；
1. 根据需要，重新创建触发器、存储过程、索引和外键。

### 删除表

- DROP TABLE: delete table
  ```sql
  DROP TABLE table_name;
  ```
  删除语句没有确认,不能撤销, 执行后永久删除该表。
  若不存在这张表, 则删除语句会报错, sql脚本可以无视报错继续运行。

- DROP DATABASE: delete database
  ```sql
  DROP DATABASE database_name;
  ```

- TRUNCATE TABLE: delete table data without delete the table itself
  ```sql
  TRUNCATE TABLE table_name;
  ```
### 重命名表
DB2、MariaDB、MySQL、Oracle和PostgreSQL用户使用`RENAME`语句，SQL Server用户使用`sp_rename`存储过程，SQLite用户使用`ALTER TABLE`语句。

## 使用视图
### 视图
**视图不包含任何列和数据, 包含的是一个查询。**

**视图的意义:**
1. 重用SQL语句。
1. 简化复杂的SQL操作。在编写查询后，可以方便地重用它而不必知道其基本查询细节。
1. 使用表的一部分而不是整个表。
1. 保护数据。可以授予用户访问表的特定部分的权限，而不是整个表的访问权限。
1. 更改数据格式和表示。视图可返回与底层表的表示和格式不同的数据。”
1. 视图是用户能以多种角度看待同一数据

- 对视图操作的方式和其他表相同。
- 性能问题: 视图不包含数据,所以每次使用视图时,都必须处理查询执行时需要的所有检索。

**视图的规则和限制**
- 与表一样，视图必须唯一命名（不能给视图取与别的视图或表相同的名字）。
- 对于可以创建的视图数目没有限制。
- 创建视图，必须具有足够的访问权限。这些权限通常由数据库管理人员授予。
- 视图可以嵌套，即可以利用从其他视图中检索数据的查询来构造视图。所允许的嵌套层数在不同的DBMS中有所不同（嵌套视图可能会严重降低查询的性能，因此在产品环境中使用之前，应该对其进行全面测试）。
- 许多DBMS禁止在视图查询中使用ORDER BY子句。
- 有些DBMS要求对返回的所有列进行命名，如果列是计算字段，则需要使用别名（关于列别名的更多信息，请参阅第7课）。
- 视图不能索引，也不能有关联的触发器或默认值。
- 有些DBMS允许创建这样的视图，它不能进行导致行不再属于视图的插入或更新。例如有一个视图，只检索带有电子邮件地址的顾客。如果更新某个顾客，删除他的电子邮件地址，将使该顾客不再属于视图。这是默认行为，而且是允许的，但有的DBMS可能会防止这种情况发生。

### 操作视图
- CREATE VIEW
  ```sql
  CREATE VIEW view_name AS
  SELECT column_name
  FROM table_name
  WHERE condition

  e.g.
  CREATE VIEW [Current Product List] AS
  SELECT ProductID,ProductName
  FROM Products
  WHERE Discontinued=No
  ```
- Query the view
  ```sql
  SELECT * FROM [Current Product List]
  WHERE condition
  ```
- Updating a View
  ```sql
  CREATE OR REPLACE VIEW view_name AS
  SELECT column_name(s)
  FROM table_name
  WHERE condition
  ```
- Dropping a View
  ```sql
  DROP VIEW view_name
  ```

- 利用视图简化复杂的联结

```sql
CREATE VIEW ProductCustomers AS
SELECT cust_name, cust_contact, prod_id
FROM Customers, Orders, OrderItems
WHERE Customers.cust_id = Orders.cust_id
AND OrderItems.order_num = Orders.order_num;
```

- 用视图重新格式化检索出的数据

```sql
CREATE VIEW VendorLocations AS
SELECT RTRIM(vend_name) + ' (' + RTRIM(vend_country) + ')'
       AS vend_title
FROM Vendors;
```

- 用视图过滤不想要的数据
```sql
CREATE VIEW CustomerEMailList AS
SELECT cust_id, cust_name, cust_email
FROM Customers
WHERE cust_email IS NOT NULL;
```

- 使用视图与计算字段
```sql
CREATE VIEW OrderItemsExpanded AS
SELECT order_num,
       prod_id,
       quantity,
       item_price,
       quantity*item_price AS expanded_price
FROM OrderItems;
```

## 执行顺序
select语句完整语法：
        select  目标表的列名或列表达式序列
        from 基本表名和（或）视图序列
        [where 行条件表达式]
        [group by  列名序列]
        [having  组条件表达式]
        [order by 列名[asc | desc]]
整个语句的执行过程如下：
1)       读取from子句中基本表、视图的数据，执行笛卡尔积操作；
2)       选取满足where子句中给出的条件表达式的元组；
3)       按group子句中指定列的值分组，同时提取满足having子句中组条件表达式的那些组；
4)       按select子句中给出的列名或列表达式求值输出；
5)       order子句对输出的目标表进行排序，按附加说明asc升序排列，或按desc降序排列。
## 使用存储过程
### 存储过程
### 为什么要使用存储过程
### 执行存储过程
```sql
EXECUTE AddNewProduct( 'JTS01', 
                       'Stuffed Eiffel Tower', 
                       6.49,
                       'Plush stuffed toy with the text La Tour Eiffel in red white and blue' );
```
**执行的过程:**
1. 验证传递的数据，保证所有4个参数都有值；
1. 生成用作主键的唯一ID；
1. 将新产品插入Products表，在合适的列中存储生成的主键和传递的数据。

### 创建存储过程
**储存的过程:**
1. 参数可选，具有不提供参数时的默认值；
1. 不按次序给出参数，以参数=值的方式给出参数值。
1. 输出参数，允许存储过程在正执行的应用程序中更新所用的参数。
1. 用SELECT语句检索数据。
1. 返回代码，允许存储过程返回一个值到正在执行的应用程序。

```sql
-- 创建储存
CREATE PROCEDURE MailingListCount (
  ListCount OUT INTEGER
)
IS
v_rows INTEGER;
BEGIN
    SELECT COUNT(*) INTO v_rows
    FROM Customers
    WHERE NOT cust_email IS NULL;
    ListCount := v_rows;
END;

-- 调用储存
var ReturnValue NUMBER
EXEC MailingListCount(:ReturnValue);
SELECT ReturnValue;
```

## 管理事务处理

事务是一系列的数据库操作，是数据库应用程序的基本单元，是反映现实世界需要以完整单位提交的一项工作。事务是用户定义的一个数据库操作序列。

事务的四个特征：原子性、一致性、隔离性和持久性。

事务处理包括数据库恢复和并发控制。数据库恢复有两个目的：保证事务的原子性和使数据库能恢复到正确状态。

数据恢复的原理概括为冗余，建立冗余数据最常用的技术是数据转储和登录日志文件。数据转储是由DBA定期地将整个数据库复制到磁盘或另一个磁盘上保存起来的过程。

### 控制事务处理
逻辑块
- SQL Server
  ```sql
  BEGIN TRANSACTION
  ...
  COMMIT TRANSACTION
  ```
- Postgre
  ```
  BEGIN
  ...
  ```
`BEGIN TRANSACTION`和`COMMIT TRANSACTION`语句之间的SQL必须完全执行或者完全不执行。

### 使用ROLLBACK
`ROLLBACK`回退(撤销)SQL语句。
```
DELETE FROM Orders;
ROLLBACK;
```

### 使用COMMIT
```sql
BEGIN TRANSACTION
DELETE OrderItems WHERE order_num = 12345
DELETE Orders WHERE order_num = 1235
COMMIT TRANSACTION
```
从系统中完全删除订单12345。因为涉及更新两个数据库表Orders和OrderItems，所以使用事务处理块来保证订单不被部分删除。最后的COMMIT语句仅在不出错时写出更改。如果第一条DELETE起作用，但第二条失败，则DELETE不会提交。

### 使用保留点
保留点: 在事务处理块中的合适位置放置占位符, 用以支持回退部分事务。

- 设置保留点
  ```sql
  -- MariaDB, MySQL, Oracle
  SAVEPOINT delete1;

  -- SQL Server
  SAVE TRANSACTION delete1;
  ```
- 回滚到保留点
  ```sql
  ROLLBACK TO delete1;
  ```

## 使用游标
### 游标
### 使用游标
### 创建游标
### 使用游标
### 关闭游标
## 高级SQL特性
Constraints can be specified **when** the table is created (inside the CREATE TABLE statement) or **after** the table is created (inside the ALTER TABLE statement).
```sql
CREATE TABLE table_name
(
column_name1 data_type(size) constraint_name,
column_name2 data_type(size) constraint_name,
column_name3 data_type(size) constraint_name,
....
);
```
Constraints:
- `NOT NULL`: Indicates that a column cannot store NULL value
- `UNIQUE`: Ensures that each row for a column must have a unique value
- `PRIMARY KEY`: A combination of a NOT NULL and UNIQUE. Ensures that a column (or combination of two or more columns) have a unique identity which helps to find a particular record in a table more easily and quickly
- `FOREIGN KEY`: Ensure the referential integrity of the data in one table to match values in another table
### 约束
引用完整性: 关系数据库存储分解为多个表的数据，每个表存储相应的数据。利用合理的键来建立从一个表到另一个表的引用。
约束: 管理如何插入或处理数据库数据的规则。
多数约束是在表定义中定义的。

### 主键
主键保证一列或一组列中的值是唯一, 且用不改动。

#### 成为主键的条件:
1. 任意两行的主键值都不相同。
1. 每行都具有一个主键值, 不允许NULL值。
1. 包含主键值的列从不修改或更新。
1. 主键值不能重用, 若删除某一行, 其主键值不分配给新行。

#### 定义主键
- 用`CREATE TABLE`操作主键
  ```sql
  CREATE TABLE Vendors 
  (
  vend_id         CHAR(10)       NOT NULL PRIMARY KEY, 
  vend_name       CHAR(50)       NOT NULL,
  vend_address    CHAR(50)       NULL,
  vend_city       CHAR(50)       NULL,
  vend_state      CHAR(5)        NULL,
  vend_zip        CHAR(10)       NULL,
  vend_country    CHAR(50)       NULL
  );
  ```
- 用`ALTER TABLE`操作主键
  ```sql
  ALTER TABLE table_name
  DROP PRIMARY KEY
  ```

### 外键
- 外键的值只能对应另一个表的主键值。
- 外键有助于防止意外删除关联的数据。

- 创建表格时定义
  ```sql
  CREATE TABLE Orders
  (
      order_num     INTEGER     NOT NULL PRIMARY KEY,
      order_date    DATETIME    NOT NULL,
      cust_id       CHAR(10)    NOT NULL REFERENCES Customers(cust_id)
  );
  ```
- 创建表格后追加外键定义
  ```sql
  ALTER TABLE Orders
  ADD CONSTRAINT
  FOREIGN KEY (cust_id) REFERENCES Customers (cust_id)
  ```
- 删除外键
  ```sql
  ALTER TABLE Orders
  DROP FOREIGN KEY fk_PerOrders
  ```

### 唯一约束
唯一约束用来保证一列(或一组列)中的数据是唯一的, 类似主键,但是存在以下重要区别:
- 表可包含多个唯一约束, 单每个表只允许一个主键。
- 唯一约束列包含NULL值。
- 与主键不一样, 唯一约束不能用来定义外键。

```sql
CREATE UNIQUE INDEX index_name
ON table_name (column_name)
```

### 检查约束
检查约束的常见用途:
1. 检查最小或最大值。比如, 防止0个物品的订单。
1. 指定范围。比如, 保证发货日期大于等于今天的日期。
1. 只允许特定的值。比如, 在性别字段中只允许M或F。

- on CREATE TABLE
  ```sql
  CREATE TABLE Persons
  (
  P_Id int NOT NULL,
  LastName varchar(255) NOT NULL,
  FirstName varchar(255),
  Address varchar(255),
  City varchar(255), CHECK (P_Id>0)
  )
  ```
- on ALTER TABEL
  ```sql
  ALTER TABLE Persons
  ADD CHECK (P_Id>0)
  ```
- DROP a CHECK
  ```sql
  ALTER TABLE Persons
  DROP CONSTRAINT chk_Person
  ```

### 排他约束

```sql
CREATE TABLE circles (
    c circle,
    EXCLUDE USING gist (c WITH &&)
);
```

### 设置默认值
- on CREATE TABLE
  ```sql
  CREATE TABLE Persons
  (
  P_Id int NOT NULL,
  LastName varchar(255) NOT NULL,
  FirstName varchar(255),
  Address varchar(255),
  City varchar(255) DEFAULT 'Sandnes'
  )
  ```
- on ALTER TABLE
  ```sql
  ALTER TABLE Persons
  ALTER City SET DEFAULT 'SANDNES'
  ```
- on DROP A DEFAULT
  ```sql
  ALTER TABLE Persons
  ALTER City DROP DEFAULT
  ```

### 修改列的数据类型
```sql
ALTER TABLE products ALTER COLUMN price TYPE numeric(10,2);
```

### 重命名列
```sql
ALTER TABLE products RENAME COLUMN product_no TO product_number;
```

### AUTO_INCREMENT: 生成自增字段
- Syntax
  ```sql
  CREATE TABLE Persons
  (
  ID int NOT NULL AUTO_INCREMENT,
  LastName varchar(255) NOT NULL,
  FirstName varchar(255),
  Address varchar(255),
  City varchar(255),
  PRIMARY KEY (ID)
  )
  ```
  By default, the starting AUTO_INCREMENT value is 1, and it will increment by 1 for each new record.
- Change the start value:
  ```sql
  ALTER TABLE table_name AUTO_INCREMENT=100
  ```
- Auto-increment primary key
  ```sql
  CREATE TABLE Persons
  (
  ID int IDENTITY(1,1) PRIMARY KEY,
  LastName varchar(255) NOT NULL,
  FirstName varchar(255),
  Address varchar(255),
  City varchar(255)
  )
  ```
  To specify that the "ID" column should start at value 10 and increment by 5, change it to IDENTITY(10,5).

### 索引
搜索的字段有时候是无序的, 所以搜索效率低, 解决方法是使用索引。可以在一个或多个列上定义索引，使DBMS保存其内容的一个排过序的列表。在定义了索引后，DBMS以使用书的索引类似的方法使用它。DBMS搜索排过序的索引，找出匹配的位置，然后检索这些行。
- 索引改善检索操作的性能，但降低了数据插入、修改和删除的性能。在执行这些操作时，DBMS必须动态地更新索引。
- 索引数据可能要占用大量的存储空间。
- 并非所有数据都适合做索引。取值不多的数据（如州）不如具有更多可能值的数据（如姓或名），能通过索引得到那么多的好处。
- 索引用于数据过滤和数据排序。如果你经常以某种特定的顺序排序数据，则该数据可能适合做索引。
- 可以在索引中定义多个列（例如，州加上城市）。这样的索引仅在以州加城市的顺序排序时有用。如果想按城市排序，则这种索引没有用处。

- 建立索引
  ```sql
  CREATE INDEX prod_name_ind
  ON products(prod_name);
  ```
  - 索引必须唯一命名。
  - 可以指定索引的表中包含的列。
  - 最好定期检查索引, 并根据需要对索引进行调整。
- 删除索引
  ```sql
  DROP INDEX index_name ON table_name
  ```

### 触发器
触发器是特殊的存储过程，它在特定的数据库活动发生时自动执行。触发器可以与特定表上的`INSERT`、`UPDATE`和`DELETE`操作（或组合）相关联。

触发器内的代码具有以下数据的访问权：
- `INSERT`操作中的所有新数据；
- `UPDATE`操作中的所有新数据和旧数据；
- `DELETE`操作中删除的数据。

下面是触发器的一些常见用途。
- 保证数据一致。例如，在`INSERT`或`UPDATE`操作中将所有州名转换为大写。
- 基于某个表的变动在其他表上执行活动。例如，每当更新或删除一行时将审计跟踪记录写入某个日志表。
- 进行额外的验证并根据需要回退数据。例如，保证某个顾客的可用资金不超限定，如果已经超出，则阻塞插入。
- 计算计算列的值或更新时间戳。

```sql
CREATE TRIGGER customer_state
AFTER INSERT OR UPDATE
FOR EACH ROW
BEGIN
UPDATE Customers
SET cust_state = Upper(cust_state)
WHERE Customers.cust_id = :OLD.cust_id
END;
```
约束比触发器更快

### `GRANT`/`REVOKE`: 数据库安全
任何安全系统的基础都是用户授权和身份确认。这是一种处理，通过这种处理对用户进行确认，保证他是有权用户，允许执行他要执行的操作。

一般说来，需要保护的操作有：
- 对数据库管理功能（创建表、更改或删除已存在的表等）的访问；
- 对特定数据库或表的访问；
- 访问的类型（只读、对特定列的访问等）；
- 仅通过视图或存储过程对表进行访问；
- 创建多层次的安全措施，从而允许多种基于登录的访问和控制；
- 限制管理用户账号的能力。


## SQL数据类型
### 字符串数据类型
字符串数据类型分类定长和变长两种:
- 定长字符串类型: 建表的时候指定字符串长度, 储存的时候不允许超过指定的字符串长度, 搜索性能高。
- 变长字符串类型: 可以储存任意长度的字符串, 搜索性能低。

数据类型                          | 说　　明 
:---------------------------------|:--
CHAR                              | 1～255个字符的定长字符串。它的长度必须在创建时规定 
NCHAR                             | CHAR的特殊形式，用来支持多字节或Unicode字符（此类型的不同实现变化很大） 
NVARCHAR                          | TEXT的特殊形式，用来支持多字节或Unicode字符（此类型的不同实现变化很大） 
TEXT（也称为LONG、MEMO或VARCHAR） | 变长文本 

字符串值都必须括在单引号内。

### 数值数据类型

数据类型             | 说　　明 
:--------------------|:--
BIT                  | 单个二进制位值，或者为0或者为1，主要用于开/关标志 
DECIMAL（或NUMERIC） | 定点或精度可变的浮点值 
FLOAT（或NUMBER）    | 浮点值 
INT（或INTEGER）     | 4字节整数值，支持-2147483648～2147483647的数 
REAL                 | 4字节浮点值 
SMALLINT             | 2字节整数值，支持-32768～32767的数 
TINYINT              | 1字节整数值，支持0～255的数 

与字符串不一样, 数值不应该包括在引号内。

### 日期和时间数据类型

数据类型                | 说　　明 
:-----------------------|:--
DATE                    | 日期值 
DATETIME（或TIMESTAMP） | 日期时间值 
SMALLDATETIME           | 日期时间值，精确到分（无秒或毫秒） 
TIME                    | 时间值 

Postgre的特殊日期/时间输入

输入串    | 合法类型              | 描述
:---------|:----------------------|:--
epoch     | date, timestamp       | 1970-01-01 00:00:00+00（Unix系统时间0）
infinity  | date, timestamp       | 比任何其他时间戳都晚
-infinity | date, timestamp       | 比任何其他时间戳都早
now       | date, time, timestamp | 当前事务的开始时间
today     | date, timestamp       | 当日午夜
tomorrow  | date, timestamp       | 明日午夜
yesterday | date, timestamp       | 昨日午夜
allballs  | time                  | 00:00:00.00 UTC

### 二进制数据类型

二进制数据类型是最不具有兼容性的数据类型。

数据类型                | 说　　明 
:-----------------------|:--
BINARY                  | 定长二进制数据（最大长度从255字节到8000字节，有赖于具体的实现） 
LONG RAW                | 变长二进制数据，最长2 GB 
RAW（某些实现为BINARY） | 定长二进制数据，最多255字节 
VARBINARY               | 变长二进制数据（最大长度一般在255字节到8000字节间变化，依赖于具体的实现） 

## SQL Injection: SQL in Web Pages or Server
- Convertion
  **Server Code**
  ```JavaScript
  uName = getRequestString("UserName"); // Johon Doe
  uPass = getRequestString("UserPass"); // myPas
  sql = 'SELECT * FROM Users WHERE Name ="' + uName + '" AND Pass ="' + uPass + '"'
  ```
  **Result**
  ```sql
  SELECT * FROM Users WHERE Name ="John Doe" AND Pass ="myPass";
  ```
- `WHERE 1=1` is always true

# 一些概念
## 了解SQL
*  数据库
  数据库( database ): 保存有组织的数据的容器。
  数据库管理系统( DBMS): 来用创建和操纵数据库的容器。

*  表
  存储在表中的数据是同一种类型的数据或清单。
  在一个数据库内, 每个表的名字是唯一的。
  模式( schema ): 描述表的信息。

*  列和数据类型
  列( column ): 表中的一个字段, 所有表由一个或多个列组成。
  根据自己需要分类过滤的情况合理分解数据为不同的列。
  数据类型: 限制每个列中储存的数据。
  数据类型及其名称是 SQL 不兼容的主要原因。

*  行
  a row = a record

*  主键
  一列或一组列, 其值能够**唯一标示**表中每一行。
  可以使用多个列作为主键。
  表中任何列都可以作为主键的条件:
  - 任意两行都不具有相同的主键值。
  - 每一行都必须具有一个主键值, 即不允许 NULL 值。
  - 主键列中的值不允许修改或更新。
  - 主键值不能重用(如果某一行从表中删除,他的主键值不能赋给以后的新行)。

*  SQL
  SQL(Structured Query Language): 结构化查询语言
  SQL不是某个特定数据库供应商专有的语言。几乎所有重要的DBMS都支持SQL,所以学习此语言使你几乎能与所有数据库打交道。

## 数据视图与数据模型
数据抽象共有三个层次：
- 物理层

- 逻辑层

- 视图层
  数据模型包括两类：

  - 概念数据模型
    主要用于数据库设计，它能被一般的用户理解，与人的思维表达方式比较接近。这样的模型有实体-联系模型（ERM）看。

  - 逻辑数据模型
    按计算机系统的观点对数据建模，使得数据更适合用计算机加以表示。这里模型主要用于DBMS的实现，比如关系模型、面向对象模型、层次模型和网状模型。

设计师构建数据库模式的方法通常是首先使用E-R模型在高层对数据建模，然后再将其转变成关系模型。在物理层使用的数据模型称为物理数据模型。

## 数据库语言
- 数据定义语言（DDL）：定义数据库

- 数据操纵语言（DML）：对数据困进行查询和更新

- 数据控制语言（DCL）：对数据进行权限管理

## 数据库模式
根据数据的不同抽象层次，有三级模式

- 物理模式（内模式）
  在物理层描述数据库中全体存储结构和存取方法

- 逻辑模式（概念模式）
  在逻辑层描述数据库中全体数据的逻辑结构和特征

- 视图模式
  在视图层也可分为若干模式，称为子模式（外模式）， 描述了数据库用户能够看见和使用的局部数据的逻辑结构和特征。 

通常一个数据库只有一个物理模式和一个逻辑模式，但是子模式有若干个。

## E-R 图
### 概念
- 实体□
  指现实世界中存在且可以相互区别的事物，开发中常常把整个表称为一个实体。

- 属性○
  实体的特征

- 关系◇
  两个或多个实体之间的关系
  映射基数：
  - 1对1
  - 1对多
  - 多对1
  - 多对多

![e-r](http://images2015.cnblogs.com/blog/795940/201601/795940-20160106103932731-761509697.png "E-R")

## 关系模型
在关系模型中，现实世界实体以及实体间的联系均用关系来表示。

### 关系数据结构
### 关系操作集合
增、删、改、查
查询操作包括: 选择、投影、连接、除、并、交、差
关系操作的特点是集合操作方式，即操作的对象和结果都是集合。
关系操作可以使用两种方式定义：基于代数的定义称为关系代数；基于逻辑的定义称为关系演算。由于使用变量的不同，关系演算又分为元组关系演算和域关系演算。

### 关系完整性约束
关系模型允许定义三类完整性约束：实体完整性、参照完整性和用户定义完整性。其中实体完整性和参照完整性是关系模型必须满足的完整性约束条件。实体完整性规则是：关系的主码不能取空值。参照完整性规则是：外码必须是另一个表中主码的有效值，或者是“空值”。

##连接运算
连接运算是从两个关系的乘运算结果中选取属性间满足一定条件的元组，构成新的关系。连接运算有两种：等值连接和自然连接。自然连接要求两个关系中进行比较的分量必须是相同的属性组，并且在结果中把重复的属性列去掉。

## 数据库分类

- 结构数据模型

  - 层次模型
    - 树形结构表示数据和数据之间的关系
    - 不能表示多对多的联系

  - 网状模型
    - 用网络结构表示数据与数据之间的联系模型
    - 子节点和父节点联系不唯一，需要为联系命名
    - 直观描述、性能好、结构复杂

  - 关系模型
    - 描述的一致性
    - 有若干表组成
    - 可以存1对1，1对多，多对多的关系

  - 面向对象模型

- 关系型数据库(relational database management systems - RDMS)

  - 特点
    - 关系型数据库
    - 支持多人同时操作数据库
    - 支持创建安全访问权限
    - `table` - `schema` - `database`

  - 列举
    Oracle, MySql, MariaDB, SqlServer, Access, DB2, PostgreSQL, Informix, Syase

- 非关系型数据库（NoSQL)

  - 键值存储数据库
    键值数据库就类似传统语言中使用的哈希表。可以通过key来添加、查询或者删除数据库，因为使用key主键访问，所以会获得很高的性能及扩展性。
    键值数据库主要使用一个哈希表，这个表中有一个特定的键和一个指针指向特定的数据。Key/value模型对于IT系统来说的优势在于简单、易部署、高并发。
    列举：Redis, Memcached, MemcacheDB

  - 文档存储数据库
    文档型数据库的灵感是来自于Lotus Notes办公软件，而且它同第一种键值数据库类似。该类型的数据模型是版本化的文档，半结构化的文档以特定的格式存储，比如JSON。文档型数据库可以看作是键值数据库的升级版，允许之间嵌套键值。而且文档型数据库比键值数据库的查询效率更高。
    面向文档数据库会将数据以文档形式存储。每个文档都是自包含的数据单元，是一系列数据项的集合。每个数据项都有一个名词与对应值，值既可以是简单的数据类型，如字符串、数字和日期等；也可以是复杂的类型，如有序列表和关联对象。数据存储的最小单位是文档，同一个表中存储的文档属性可以是不同的，数据可以使用XML、JSON或JSONB等多种形式存储。
    列举：MongoDB, CouchDB

  - 列存储数据库
    列存储数据库将数据存储在列族中，一个列族存储经常被一起查询的相关数据，比如人类，我们经常会查询某个人的姓名和年龄，而不是薪资。这种情况下姓名和年龄会被放到一个列族中，薪资会被放到另一个列族中。
    这种数据库通常用来应对分布式存储海量数据。
    HBase, Cassandra

  - 图数据库
    图形数据库允许我们将数据以图的方式存储。实体会被作为顶点，而实体之间的关系则会被作为边。比如我们有三个实体，Steve Jobs、Apple和Next，则会有两个“Founded by”的边将Apple和Next连接到Steve Jobs。
    列举：Neo4J, InforGrid

## 设计数据库的步骤

1.需求分析阶段:分析客户的业务和数据处理需求.
  1.收集信息.
  2.标识实体.
  3.标识每个实体需要储存的详细信息.
  4.标识实体之间的关系. 

2.概要设计阶段:他主要就是绘制数据库的E-R图.

3.详细设计阶段:应用数据库的三大范式进行审核数据库的结构.

## 数据库模型图

- 概念模型：
![database-model](http://images2015.cnblogs.com/blog/795940/201601/795940-20160106104908528-1796978266.png "database-model")

## 数据库规范化

### 主要问题
1. 信息重复

1. 更新异常
  冗余信息不仅浪费空间，还增加更新难度。

1. 插入异常

1. 删除异常
  在某些情况下，删除一行可能会丢失有用的信息。

## 三大范式
1. 第一范式
  目标是却表每列的原子性。如果每列都是不可再分的最小数据单位，则满足第一范式。

1. 第二范式
  确保表中的每列都和主键相关，即一个表中只能保存一种数据。

1. 第三范式
  确保每列都和主键列直接相关。

有时为了减少表间的连接，提高数据库的访问性能，允许适当的数据冗余列。





## reference

[数据库基础知识复习 - 姚光超的专栏 - 博客频道 - CSDN.NET](http://blog.csdn.net/yutianzuijin/article/details/12243751)
[数据库的设计(E-R图,数据库模型图,三大范式) - 别等时光非礼了梦想 - 博客园](http://www.cnblogs.com/heyongjun1997/p/5103199.html)
[SQL必知必会（第3版） (豆瓣)](https://book.douban.com/subject/2124377/)



