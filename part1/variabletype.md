# 数据类型

* [1. 变量类型](#1-变量类型)
* [2. 数据类型转换](#2-数据类型转换)

## 1. 数据类型
python中主要包含以下数据类型：
* 数字型
    * 整型(int)
    * 浮点型(float)
    * 布尔型(bool)  Python中布尔型于C语言的`真假`类似，0 为Ture，非0 为False
    * 复数型(complex)
* 非数字类型
    * 字符串(str)
    * 列表
    * 元组
    * 字典

> Python2.x中整数根据长度分为 int(整型) 和 long(长整型)类型

* python在定义变量的时不需要指定变量类型。程序运行时解释器会自动根据变量内容推断数据类型。
* type() 可以查看数据类型。type(123) -> int

## 2. 数据类型转换
* 不同类型的数字在进行混合运算时，整数将会转换成浮点数进行运算
* bool类型在与数字类型运算时，True为1,False为0
* 字符串类型能直接于数字类型运算

函数|说明
:-|:-
int(x [,base ])	| 将x转换为一个整数
float(x ) | 将x转换为一个浮点数
complex(real [,imag ]) | 创建一个复数，real为实部，imag为虚部
str(x )	| 将对象 x 转换为字符串
repr(x ) | 将对象 x 转换为表达式字符串
**eval(str )** | 将字符串形式的数据，转换为原本的类型
tuple(s ) | 将序列 s 转换为一个元组
list(s ) | 将序列 s 转换为一个列表
chr(x )	| 将一个整数转换为一个Unicode字符
ord(x )	| 将一个字符转换为它的ASCII整数值
hex(x )	| 将一个整数转换为一个十六进制字符串
oct(x )	| 将一个整数转换为一个八进制字符串
bin(x )	| 将一个整数转换为一个二进制字符串