/**
 * Project name(项目名称)：JS_while
 * File name(文件名): test3
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/2
 * Time(创建时间)： 20:49
 * Version(版本): 1.0
 * Description(描述)： 无
 */

document.write("<br>")

var i = 1900;
var count = 0; //计数闰年的个数
while (i <= 2020)
{
    //判断是否是闰年
    if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0)
    {
        document.write(i + "&nbsp;&nbsp;");
        count++;
        if (count % 6 == 0)
        {
            document.write("<br/>");
        }
    }
    i++;
}