
---
title: 阿里巴巴dataworks初体验之简单用户画像分析(MaxCompute版)
date: 2022-05-10 14:49:34
category:
- frontline
- bigdata

tags: 大数据, dataworks, MaxCompute

---

- [背景](#%E8%83%8C%E6%99%AF)
- [目的](#%E7%9B%AE%E7%9A%84)
- [开始实验](#%E5%BC%80%E5%A7%8B%E5%AE%9E%E9%AA%8C)
  - [新建oss数据源](#%E6%96%B0%E5%BB%BAoss%E6%95%B0%E6%8D%AE%E6%BA%90)
  - [新建rds数据源](#%E6%96%B0%E5%BB%BArds%E6%95%B0%E6%8D%AE%E6%BA%90)
  - [配置workshop-start节点](#%E9%85%8D%E7%BD%AEworkshop-start%E8%8A%82%E7%82%B9)
- [资源](#%E8%B5%84%E6%BA%90)

### 背景
<p>阿里巴巴dataworks简单用户画像分析是一个免费体验的项目，本项目主要介绍以常见的真实的海量日志数据分析任务为背景，如何通过使用DataWorks完成数据采集 、
加工数据、配置数据质量监控和数据可视化展现等任务。</p>

### 目的
<p>写作本文的目的是便于大家更方便的理解dataworks产品。本文主要介绍此项目的数据采集部分，因为这部分是基础部分，数据加工、配置数据质量监控和数据可视化都依赖于此。
</p>

### 实验流程简介
<p>workshop_start虚拟节点：用于拉起两个离线任务</p>
<p>oss_data_sync离线节点：用于将数据从OSS对象存储数据源同步至MaxCompute引擎的对应目标表</p>
<p>rds_data_sync离线节点：用于将数据从Mysql数据源同步至MaxCompute引擎的对应目标表</p>

### 开始实验
点击【开始实验】进入控制台
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/1.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/1.png' />

点击【创建资源】
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/2.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/2.png' />

#### 新建oss数据源

1）双击打开虚拟桌面的Chromium网页浏览器。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img.png' />

2）在RAM用户登录框中单击下一步，并复制粘贴页面左上角的子用户密码到用户密码输入框，单击登录。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_1.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_1.png' />

3）复制下方地址，在Chromium网页浏览器打开新页签，粘贴并访问DataWorks控制台。
https://workbench.data.aliyun.com/
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_2.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_2.png' />

4） 在概览页面，找到您的资源所在区域，找到您的工作空间，然后单击数据集成。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_3.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_3.png' />

5）在左侧导航栏中，单击数据源。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_5.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_5.png' />

6）在数据源管理页面，单击右上方的新增数据源。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_6.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_6.png' />

7）在新增数据源对话框中，选择数据源类型为OSS。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_7.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_7.png' />

8）在新增OSS数据源对话框中，配置各项参数，单击更多选项。
注：这里的参数在参考手册有，每个用户的参数可能不一样
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_8.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_8.png' />

9）点击更多，弹出警告对话框中，单击确定。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_9.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_9.png' />

10）在资源组列表，单击公共资源组后的测试连通性。
返回如下结果，连通状态为可连通，表示数据集成资源组能够与数据源连通。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_10.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_10.png' />

#### 新建rds数据源

1）在数据源管理页面，单击右上方的新增数据源。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_13.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_13.png' />

2）在新增数据源对话框中，选择数据源类型为MySQL。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_14.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_14.png' />

3）在新增MySQL数据源对话框中，配置各项参数，单击更多选项。
注：配置参数在官网左侧文档中有提供

4）在资源组列表，单击公共资源组后的测试连通性。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_15.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_15.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_16.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_16.png' />

5）在新增MySQL数据源对话框右下方，单击完成。
完成之后，看到列表中已经多了两个数据源。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_17.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_17.png' />

3、创建业务流程。
1）在数据源管理页面，单击左上方的【更多】图标，单击DataStudio（数据开发）。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_18.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_18.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_19.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_19.png' />
此时会弹出dataworks界面：
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_20.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_20.png' />
如果这里弹出广告，选择【不感兴趣】
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_21.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_21.png' />

2）在数据开发页面，“右键”单击业务流程，选择新建业务流程。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_22.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_22.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_23.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_23.png' />

3）在新建业务流程对话框中，输入业务名称，例如我这里建的“user_picture_1”，单击新建。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_24.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_24.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_25.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_25.png' />

4）在业务流程开发面板，单击虚拟节点并拖拽至右侧的编辑页面。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_26.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_26.png' />

5）在新建节点对话框中，节点名称输入为workshop_start，单击提交。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_27.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_27.png' />

6）在业务流程开发面板，单击离线同步并拖拽至右侧的编辑页面。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_28.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_28.png' />

7）在新建节点对话框中，节点名称输入为OSS_data_sync（Oss数据同步），单击提交。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_29.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_29.png' />

8）在业务流程开发面板，单击离线同步并拖拽至右侧的编辑页面。(重复步骤6、7)

9）在新建节点对话框中，节点名称输入为rds_data_sync，单击提交。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_30.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_30.png' />

10）在右侧的编辑页面，从蓝色点引出，通过拖拽连线，将workshop_start节点设置为两个离线同步节点的上游节点。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_32.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_32.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_33.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_33.png' />

#### 配置workshop-start节点
1）在数据开发页面左侧，选择业务流程 》 刚才创建的业务 》 通用，双击虚拟节点workshop_start。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_35.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_35.png' />

2）在该节点的编辑页面，单击右侧的调度配置。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_36.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_36.png' />

3）在调度配置面板的时间属性区域，重跑属性选择为“运行成功或失败后皆可重跑”。在调度配置面板的调度依赖区域，单击使用工作空间根节点，设置workshop_start节点的上游节点为工作空间根节点。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_37.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_37.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_38.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_38.png' />

4）在该节点的编辑页面左上方，单击保存图标保存配置。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_39.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_39.png' />

5、新建表。
1）在数据开发页面，选择业务流程>MaxCompute，右键单击表，单击新建表
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_40.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_40.png' />

2）在新建表对话框中，表名输入ods_raw_log_d，单击新建。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_41.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_41.png' />

3）在表ods_raw_log_d的编辑页面，单击DDL模式。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_42.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_42.png' />

4）在DDL模式对话框中，输入如下创建OSS日志对应目标表的建表语句，单击生成表结构。
```sql
CREATE TABLE IF NOT EXISTS  ods_raw_log_d (
    col STRING
)
PARTITIONED BY (
    dt STRING
);
```
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_44.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_44.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_45.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_45.png' />

5）在确认操作对话框中，单击确认。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_46.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_46.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_47.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_47.png' />

6）在表ods_raw_log_d的编辑页面，中文名输入为OSS日志对应目标表，单击提交到生产环境。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_51.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_51.png' />

7）在提交到生产确认对话框中，选择我已悉知风险，确认提交，单击确认。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_52.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_52.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_53.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_53.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_54.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_54.png' />

8）在数据开发页面，选择业务流程>MaxCompute，右键单击表，单击新建表。

9）在新建表对话框中，表名输入ods_user_info_d，单击提交。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_55png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_55.png' />

10）在表ods_user_info_d的编辑页面，单击DDL模式。

11）在DDL模式对话框中，输入如下创建RDS对应目标表的建表语句，单击生成表结构。
```sql
CREATE TABLE IF NOT  EXISTS ods_user_info_d (
    uid STRING COMMENT 'uid',
    gender STRING COMMENT 'gender',
    age_range STRING COMMENT 'age_range',
    zodiac STRING COMMENT 'zodiac'
)
PARTITIONED BY (
    dt STRING
);
```
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_56.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_56.png' />
12）在确认操作对话框中，单击确认。

13）在表ods_user_info_d的编辑页面，中文名输入为“RDS对应目标表”，单击【提交到生产环境】按钮。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_57.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_57.png' />

14）在提交到生产确认对话框中，选择我已悉知风险，确认提交，单击确认。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_58.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_58.png' />

6、配置离线同步节点。
1）在数据开发页面左侧，选择业务流程>您的业务流程>数据集成，双击oss_di（即下图中的oss_data_sync）。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_61.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_61.png' />

2）在oss_di页面的数据来源中，配置如下参数，其他配置保持默认。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_62.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_62.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_63.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_63.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_64.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_64.png' />

3）在oss_di页面的数据去向中，配置如下参数，其他配置保存默认。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_65.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_65.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_66.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_66.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_67.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_67.png' />

4）在页面右侧，单击调度配置。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_68.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_68.png' />

5）在调度配置面板的时间属性区域，重跑属性选择为”运行成功或失败后皆可重跑“。在调度依赖面板的本节点的输出区域，输入本节点的输出名称为“工作空间名称.ods_raw_log_d”，单击添加。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_69.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_69.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_70.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_70.png' />
工作空间的名字到资源管理页面查看
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_102.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_102.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_71.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_71.png' />

6）在页面右侧，单击数据集成资源组配置。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_73.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_73.png' />

7）在数据集成资源组配置面板，单击更多选项。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_74.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_74.png' />

8）在警告对话框中，单击确认。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_75.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_75.png' />

9）在数据集成资源组配置面板，方案选择调试资源组。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_76.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_76.png' />

10）在上方工具栏中，单击保存图标。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_77.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_77.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_78.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_78.png' />

11）在数据开发页面左侧，选择业务流程>数据集成，双击rds_di（即下图中的rds_data_sync）。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_79.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_79.png' />

12）在rds_di页面的数据来源中，配置如下参数，其他配置保持默认。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_80.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_80.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_103.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_103.png' />

13）在rds_di页面的数据去向中，配置如下参数，其他配置保存默认。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_81.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_81.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_82.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_82.png' />

14）在页面右侧，单击调度配置。

15）在调度配置面板的时间属性区域，重跑属性选择为运行成功或失败后皆可重跑。在调度依赖面板的本节点的输出区域，输入本节点的输出名称为工作空间名称.ods_user_info_d，单击添加。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_83.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_83.png' />
如果找不到工作空间名称，请看上文
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_84.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_84.png' />

16）在页面右侧，单击数据集成资源组配置。

17）在数据集成资源组配置面板，单击更多选项

18）在数据集成资源组配置面板，方案选择调试资源组。

19）在上方工具栏中，单击保存图标。

7、提交业务流程。
1）在数据开发页面左侧，双击您的业务流程。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_85.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_85.png' />

2）在业务流程的编辑页面上方的菜单栏中，单击【提交】图标。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_86.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_86.png' />

3）在提交对话框中，选择所有的节点，输入备注，选择忽略输入输出不一致的告警，单击提交。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_87.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_87.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_89.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_89.png' />

8、运行业务流程
1）在上方菜单栏中，单击【运行】图标。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_90.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_90.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_91.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_91.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_92.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_92.png' />
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_93.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_93.png' />

2）在业务流程的编辑页面，右键单击rds_di（即下图中的rds_data_sync）。

3）在功能列表，单击查看日志。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_94.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_94.png' />

<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_95.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_95.png' />

4）在日志页面右上角，单击【收起】图标

9、确认数据是否成功导入MaxCompute。

1）在数据开发页面的左侧导航栏，单击【搜索】图标。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_96.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_96.png' />

2）在临时查询页面左侧，右键单击临时查询，选择新建节点>ODPS SQL。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_97.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_97.png' />

3）在新建节点对话框，单击提交。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_98.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_98.png' />

4）在SQL查询页签，输入如下SQL语句，单击 图标，查看导入ods_raw_log_d和ods_user_info_d的记录数。
<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_99.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_99.png' />
特别注意 ：SQL语句中字段dt您需要更新为业务日期。例如，任务运行的日期为20220511，则业务日期为20220510，即任务运行日期的前一天。这个是示例规定的，因为今天的日志还未同步过来。

<img src='/images/frontline/bigdata/dataworks用户画像分析/pre/img_101.png' data-src='/images/frontline/bigdata/dataworks用户画像分析/img_101.png' />

看到日志中已经统计出数据，说明数据采集成功

### 资源
实验地址：https://developer.aliyun.com/adc/scenario/eed3362c8a0943a9b7ab7ec774aed335?spm=5176.14066233.J_1329129980.5.6ef49325PgKGn3

