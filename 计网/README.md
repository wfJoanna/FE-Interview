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
    <p>
       	下面的回答不准确！
    </p>
    <ul>
        <li>PUT请求：如果两个请求相同，后一个请求会把前一个请求覆盖掉，所以PUT一般用来改资源</li>
        <li>POST请求：后一个请求不会把前一个请求覆盖掉，所以POST一般用来增资源</li>
    </ul>
</details>



#### http有哪些常见状态码？

<details>
    <summary>展开</summary>
    <ol>
        <li>
            2xx：成功处理请求
            <ul>
                <li>200 请求成功 OK</li>
            </ul>
        </li>
        <li>
            3xx：重定向
            <ul>
                <li>301 永久移动</li>
                <li>302 临时移动</li>
                <li>304 未修改</li>
            </ul>
        </li>
        <li>
            4xx：客户端错误
        	<ul>
                <li>400 语法错误 Bad Request</li>
                <li>401 未授权 Unauthorized</li>
                <li>403 禁止 Forbidden</li>
                <li>404 未找到 Not Found</li>
            </ul>
        </li>
        <li>
            5xx：服务器错误
        	<ul>
                <li>500 服务器内部错误</li>
                <li>501 不支持请求的功能</li>
                <li>502	Bad Gateway	作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应</li>
                <li>503	Service Unavailable	由于超载或系统维护，服务器暂时无法处理客户端的请求</li>
            </ul>
        </li>
    </ol>
</details>




#### 301，302，304的区别

<details>
    <summary>展开</summary>
    <ul>
        <li>301表示永久重定向，表示请求的资源分配了新的URL，以后应使用新URL</li>
        <li>302表示临时重定向，请求的资源临时分配了新的URL，本次请求暂且使用新URL</li>
        <li>304表示所请求的资源未修改，服务器返回此状态码时不会返回任何资源（客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源，若发现数据没有更新，则直接从缓存中读取数据）</li>
    </ul>
</details>


#### 客户端发送http请求过程

<details>
    <summary>展开</summary>
    <ol>
        <li>域名解析</li>
        <li>发起TCP3次握手</li>
        <li>建立TCP连接后发起http请求</li>
        <li>服务器响应http请求，浏览器得到http代码</li>
        <li>浏览器解析html代码，并请求html代码中的资源（如css、js、图片等）</li>
        <li>浏览器对页面进行渲染呈现给用户</li>
    </ol>
</details>



#### TCP3次握手

<details>
    <summary>展开</summary>
    <ol>
        <li>客户端向服务端发送连接请求报文段</li>
        <li>服务端收到连接请求报文段后，如果同意连接，则会发送一个应答</li>
        <li>当客户端收到连接同意的应答后，还要向服务端发送一个确认报文段，表示：服务端发来的连接同意应答已经成功收到</li>
    </ol>
</details>



#### 提升页面性能的方法

<details>
    <summary>展开</summary>
    <ol>
        <li>使用cdn</li>
        <li>减少http请求和冗余数据</li>
        <li>压缩文件、压缩图片</li>
        <li>图片懒加载</li>
        <li>引入http2.0</li>
        <li>http持久连接</li>
    </ol>
</details>




#### encoding头部有哪些编码方式？

<details>
    <summary>展开</summary>
    <ul>
        <li>ASCII：美国19世纪60年代建立英文和二进制的关系时定制的编码规范，仅用于英文</li>
        <li>Unicode：通用字符集，包含了所有的字符</li>
        <li>UTF-8：互联网上使用最广的一种Unicode的实现方式</li>
        <li>GBK/GBK2312/GBK18020：GBK和GBK2312是针对简体字的编码，GBK更广。GBK18030是用于繁体字的编码</li>
    </ul>
</details>



#### utf-8和asc码有什么区别？

<details>
    <summary>展开</summary>
    <p>
        UTF-8:
        <ul>
            <li>UTF-8是Unicode的一种实现方式，还包括UTF-16和UTF-32</li>
            <li>UTF-8兼容ASCII</li>
    	</ul>
    </p>
	<p>
        ASC码:
        <ul>
            <li>仅用于英语，是美国信息交换标准代码</li>
		</ul>
	</p>
</details>


#### 简要说一下渲染的过程

<details>
    <summary>展开</summary>
    <ol>
        <li>根据HTML结构生成DOM树</li>
        <li>根据CSS生成CSSOM</li>
        <li>将DOM和CSSOM整合形成Render Tree</li>
        <li>根据Render Tree开始渲染和展示</li>
    </ol>
    <ul>
        <li>遇到script时，会执行并阻塞渲染</li>
        <li>解析过程中如果遇到link和script这种外链加载CSS和JS的标签，浏览器会异步下载</li>
    </ul>
</details>



#### 为何要将CSS放在HTML头部？

<details>
    <summary>展开</summary>
    这样会让浏览器尽早拿到CSS尽早生成CSSOM，然后在解析HTML之后可一次性生成最终的Render Tree，渲染一次即可。如果CSS放在HTML底部，会出现渲染卡顿的情况，影响性能和体验
</details>



#### 为何要将JS放在HTML底部？

<details>
    <summary>展开</summary>
    因为浏览器渲染和JS执行共用一个线程，遇到script标签就停止渲染，执行JS代码，待script内容执行完之后，浏览器继续渲染。<br>
    所以JS放在底部可以保证让浏览器优先渲染完现有的HTML内容，让用户先看到内容，体验好。<br>
    另外，JS执行如果涉及DOM操作，得等待DOM解析完成才行。
</details>

