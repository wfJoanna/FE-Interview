#### http请求由什么组成？

<details>
    <summary>展开</summary>
    <ul>
        <li>
            请求行
            <ul>
                <li>请求方法字段</li>
                <li>URL字段</li>
                <li>HTTP协议版本字段</li>
            </ul>
        </li>
        <li>
            请求头部（key-value形式）
            <ul>
                <li>User-Agent：产生请求的浏览器类型</li>
                <li>Accept：客户端可识别的内容类型列表</li>
                <li>Host：请求的主机名</li>
                <li>……</li>
            </ul>
        </li>
        <li>空行：即 回车符\r + 换行符\n ，通知服务器以下不再有请求头部</li>
        <li>请求数据（POST方法中，会把数据以key-value的形式发送请求）</li>
        <img src="QQ图片20201227133314.jpg">
    </ul>
</details>


#### http响应报文的组成？

<details>
    <summary>展开</summary>
    <ul>
        <li>
            状态行
            <ul>
                <li>HTTP协议版本</li>
                <li>状态码</li>
                <li>状态码描述</li>
            </ul>
        </li>
        <li>
            消息报头
            <ul>
                <li>Date：日期</li>
                <li>Content-Type：内容类型</li>
                <li>Content-Length：内容长度</li>
                <li>……</li>
            </ul>
        </li>
        <li>空行：即 回车符\r + 换行符\n</li>
        <li>响应正文：如果是纯数据就是返回纯数据，如果请求的是HTML页面，那么返回的就是HTML代码，如果是JS就是JS代码</li>
        <img src="u=586884068,2066724739&fm=26&gp=0.jpg">
    </ul>
</details>



#### http有哪些请求方法？

<details>
    <summary>展开</summary>
    <p>
        HTTP1.0 定义了三种请求方法：GET、POST、HEAD
    </p>
	<p>
		HTTP1.1 新增了六种请求方法：OPTIONS、PUT、PATCH、DELETE、TRACE、CONNECT
    </p>
    <ol>
        <li>GET：请求指定的页面信息</li>
        <li>POST：向指定资源提交数据进行处理请求（例如提交表单或者上传文件），数据在请求体中</li>
        <li>HEAD：类似于 GET 请求，只不过返回的响应中没有具体的内容，用于获取消息报头</li>
        <li>PUT：从客户端向服务器传送数据取代指定文档的内容</li>
        <li>DELETE：请求服务器删除指定的页面</li>
        <li>OPTIONS：返回服务器针对特定资源所支持的HTTP请求方法，也可用来测试服务器性能</li>
        <li>PATCH：是对PUT的补充，用来对已知资源进行局部更新</li>
        <li>TRACE：回显服务器收到的请求，主要用于测试或诊断</li>
        <li>CONNECT：预留给能够将连接改为管道方式的代理服务器</li>
    </ol>
</details>



#### GET和POST的区别？

<details>
    <summary>展开</summary>
    <ol>
        <li>GET一般用于从服务器获取资源，而POST则有可能改变服务器上的资源</li>
        <li>GET请求的数据通过URL传递，在请求头中，有长度限制；POST请求的数据在请求体中，无长度限制</li>
        <li>GET请求会被浏览器主动缓存，且其请求数据明文出现在URL中，而POST不会，除非手动设置，POST的安全性更高</li>
        <li>GET请求中如果有非ASCII字符，会在请求之前进行转码，而POST不用</li>
    </ol>
</details>



#### PUT和POST的区别？

<details>
    <summary>展开</summary>
    <ul>
        <li>PUT请求：如果两个请求相同，后一个请求会把前一个请求覆盖掉，所以PUT一般用来改资源</li>
        <li>POST请求：后一个请求不会把前一个请求覆盖掉，所以POST一般用来增资源</li>
    </ul>
</details>



#### 状态码？

