---
title: Centos 8 install python2.7.15 version
date: 2022-04-24 11:28:11
category:
- backend
- python

tags: python2.7.15版本安装，python安装

---

### 安装步骤
`cd /usr/local`

`mkdir python2.7`

`wget https://www.python.org/ftp/python/2.7.15/Python-2.7.15.tgz`

官网网络有时候很不稳定，可以下载镜像版本：<a href='/ftp/backend/python/Centos8 install python2.7.15 version/Python-2.7.15.tgz'>python-2.7.15.tgz</a>

`tar -zxvf Python-2.7.15.tgz`

`cd Python-2.7.15`

`./configure --prefix=/usr/local/python2.7 --enable-optimizations`

```composer log
scripts-2.7
changing mode of build/scripts-2.7/pydoc from 644 to 755
changing mode of build/scripts-2.7/idle from 644 to 755
changing mode of build/scripts-2.7/2to3 from 644 to 755
changing mode of build/scripts-2.7/smtpd.py from 644 to 755
make[2]: Leaving directory '/usr/local/python2.7/Python-2.7.15'
make[1]: Leaving directory '/usr/local/python2.7/Python-2.7.15'
make profile-removal
make[1]: Entering directory '/usr/local/python2.7/Python-2.7.15'
find . -name '*.gc??' -exec rm -f {} ';'
find . -name '*.profclang?' -exec rm -f {} ';'
find . -name '*.dyn' -exec rm -f {} ';'
make[1]: Leaving directory '/usr/local/python2.7/Python-2.7.15'

```

执行`make altinstall`

这里为什么要使用 `make altinstall`，听网上的人说如果用make install可能会出问题，
会存在两个版本的python，这个问题我并未查证过，直接采用了`make altinstall`的安装命令

```composer log

if test "xno" != "xno"  ; then \
        case no in \
                upgrade) ensurepip="--altinstall --upgrade --no-default-pip" ;; \
                install|*) ensurepip="--altinstall --no-default-pip" ;; \
        esac; \
         ./python -E -m ensurepip \
                $ensurepip --root=/ ; \
fi

```

执行指令：`python`

报`command not found`

执行：`ln -s /usr/local/python2.7/bin/python2.7 /usr/bin/python`

再执行`python`
显示日志：
```composer log
 python
Python 2.7.15 (default, Apr 24 2022, 11:07:36)
[GCC 8.4.1 20200928 (Red Hat 8.4.1-1)] on linux2
Type "help", "copyright", "credits" or "license" for more information.
```

简单操作：

输入： `python`
```shell
>>> begin_year = 1949
>>> end_year = 10000
>>> age = end_year - begin_year
>>> print(age)
8051
```

以上命令中，前四行是输入的代码，8051是执行结果

### 遇到问题

起初我安装的版本是python2.7.9，但是这个版本和我的系统不兼容，具体问题如下，可作为参考：
#### make命令报错如下：
```composer log
LD_LIBRARY_PATH=/usr/local/python/Python-2.7.9 ./python -E -S -m sysconfig --generate-posix-vars ;\
if test $? -ne 0 ; then \
        echo "generate-posix-vars failed" ; \
        rm -f ./pybuilddir.txt ; \
        exit 1 ; \
fi
/bin/sh: 行 5: 2754095 段错误               (核心已转储)LD_LIBRARY_PATH=/usr/local/python/Python-2.7.9 ./python -E -S -m sysconfig --generate-posix-vars
generate-posix-vars failed
make: *** [Makefile:476：pybuilddir.txt] 错误 1
```

网上有人的解决办法是：
（1）
在 ./configure 操作前，先进行配置：
export LANGUAGE=en_US.UTF-8
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8
我试了这个办法，不行

这个问题，有人说是GCC的问题，要降低GCC的版本，于是我查看我的gcc版本
```
gcc -v

Using built-in specs.
COLLECT_GCC=gcc
COLLECT_LTO_WRAPPER=/usr/libexec/gcc/x86_64-redhat-linux/8/lto-wrapper
OFFLOAD_TARGET_NAMES=nvptx-none
OFFLOAD_TARGET_DEFAULT=1
Target: x86_64-redhat-linux
Configured with: ../configure --enable-bootstrap --enable-languages=c,c++,fortran,lto --prefix=/usr --mandir=/usr/share/man --infodir=/usr/share/info --with-bugurl=http://bugzilla.redhat.com/bugzilla --enable-shared --enable-threads=posix --enable-checking=release --enable-multilib --with-system-zlib --enable-__cxa_atexit --disable-libunwind-exceptions --enable-gnu-unique-object --enable-linker-build-id --with-gcc-major-version-only --with-linker-hash-style=gnu --enable-plugin --enable-initfini-array --with-isl --disable-libmpx --enable-offload-targets=nvptx-none --without-cuda-driver --enable-gnu-indirect-function --enable-cet --with-tune=generic --with-arch_32=x86-64 --build=x86_64-redhat-linux
Thread model: posix
gcc version 8.5.0 20210514 (Red Hat 8.5.0-4) (GCC)

```

可以看到Gcc版本为8.5.0，和他说的版本一致，但是我没尝试降低GCC版本这个办法，因为GCC不仅仅被Python依赖，
如果降低版本可能带来更多问题

Pyhton官网的一个回答也涉及到这个问题：https://bugs.python.org/issue33374

尝试解决：升级2.7.9到2.7.15版本，问题也解决了