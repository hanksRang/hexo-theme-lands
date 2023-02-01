let countries = {
    "Afghanistan": "阿富汗",
    "Angola": "安哥拉",
    "Albania": "阿尔巴尼亚",
    "Algeria": "阿尔及利亚",
    "Argentina": "阿根廷",
    "Armenia": "亚美尼亚",
    "Australia": "澳大利亚",
    "Austria": "奥地利",
    "Azerbaijan": "阿塞拜疆",
    "Bahamas": "巴哈马",
    "Bangladesh": "孟加拉国",
    "Belgium": "比利时",
    "Burkina Faso": "布基纳法索",
    "Benin": "贝宁",
    "Burundi": "布隆迪共和国",
    "Bulgaria": "保加利亚",
    "Bosnia and Herz.": "波斯尼亚和黑塞哥维那",
    "Belarus": "白俄罗斯",
    "Belize": "伯利兹",
    "Bermuda": "百慕大群岛",
    "Bolivia": "玻利维亚",
    "Brazil": "巴西",
    "Brunei": "文莱",
    "Bhutan": "不丹",
    "Botswana": "博茨瓦纳",
    "Cambodia": "柬埔寨",
    "Cameroon": "喀麦隆",
    "Canada": "加拿大",
    "Central African Rep.": "中非共和国",
    "Chad": "乍得",
    "Chile": "智利",
    "China": "中国",
    "Colombia": "哥伦比亚",
    "Costa Rica": "哥斯达黎加",
    "CÃ´te d'Ivoire": "科特迪瓦",
    "Croatia": "克罗地亚",
    "Cuba": "古巴",
    "Cyprus": "塞浦路斯",
    "Czech Rep.": "捷克共和国",
    "Dem. Rep. Korea": "朝鲜",
    "Dem. Rep. Congo": "刚果（金）", // 民主刚果，刚果民主共和国
    "Denmark": "丹麦",
    "Djibouti": "吉布提",
    "Dominican Rep.": "多米尼加共和国",
    "Ecuador": "厄瓜多尔",
    "Egypt": "埃及",
    "El Salvador": "萨尔瓦多",
    "Eq. Guinea": "赤道几内亚",
    "Eritrea": "厄立特里亚",
    "Estonia": "爱沙尼亚",
    "Ethiopia": "埃塞俄比亚",
    "Falkland Is.": "福克兰群岛",
    "Fiji": "斐济",
    "Finland": "芬兰",
    "France": "法国",
    "French Guiana": "法属圭亚那",
    "Fr. S. Antarctic Lands": "法属南部领地",
    "Gabon": "加蓬",
    "Gambia": "冈比亚",
    "Germany": "德国",
    "Georgia": "佐治亚州",
    "Ghana": "加纳",
    "Greece": "希腊",
    "Greenland": "格陵兰",
    "Guatemala": "危地马拉",
    "Guinea": "几内亚",
    "Guinea-Bissau": "几内亚比绍",
    "Guyana": "圭亚那",
    "Haiti": "海地",
    "Heard I. and McDonald Is.": "赫德岛和麦克唐纳群岛",
    "Honduras": "洪都拉斯",
    "Hungary": "匈牙利",
    "Iceland": "冰岛",
    "India": "印度",
    "Indonesia": "印度尼西亚",
    "Iran": "伊朗",
    "Iraq": "伊拉克",
    "Ireland": "爱尔兰",
    "Israel": "以色列",
    "Italy": "意大利",
    "Ivory Coast": "象牙海岸",
    "Jamaica": "牙买加",
    "Japan": "日本",
    "Jordan": "乔丹",
    "Kashmir": "克什米尔",
    "Kazakhstan": "哈萨克斯坦",
    "Kenya": "肯尼亚",
    "Kosovo": "科索沃",
    "Kuwait": "科威特",
    "Kyrgyzstan": "吉尔吉斯斯坦",
    "Lao PDR": "老挝",
    "Latvia": "拉脱维亚",
    "Lebanon": "黎巴嫩",
    "Lesotho": "莱索托",
    "Liberia": "利比里亚",
    "Libya": "利比亚",
    "Lithuania": "立陶宛",
    "Luxembourg": "卢森堡",
    "Madagascar": "马达加斯加",
    "Macedonia": "马其顿",
    "Malawi": "马拉维",
    "Malaysia": "马来西亚",
    "Mali": "马里",
    "Mauritania": "毛里塔尼亚",
    "Mexico": "墨西哥",
    "Moldova": "摩尔多瓦",
    "Mongolia": "蒙古",
    "Montenegro": "黑山",
    "Morocco": "摩洛哥",
    "Mozambique": "莫桑比克",
    "Myanmar": "缅甸",
    "Namibia": "纳米比亚",
    "Netherlands": "荷兰",
    "New Caledonia": "新喀里多尼亚",
    "New Zealand": "新西兰",
    "Nepal": "尼泊尔",
    "Nicaragua": "尼加拉瓜",
    "Niger": "尼日尔",
    "Nigeria": "尼日利亚",
    "Korea": "韩国",
    "Northern Cyprus": "北塞浦路斯",
    "Norway": "挪威",
    "Oman": "阿曼",
    "Pakistan": "巴基斯坦",
    "Panama": "巴拿马",
    "Papua New Guinea": "巴布亚新几内亚",
    "Paraguay": "巴拉圭",
    "Peru": "秘鲁",
    "Republic of the Congo": "刚果（布）", // 刚果共和国
    "Philippines": "菲律宾",
    "Poland": "波兰",
    "Portugal": "葡萄牙",
    "Puerto Rico": "波多黎各",
    "Qatar": "卡塔尔",
    "Republic of Seychelles": "塞舌尔共和国",
    "Romania": "罗马尼亚",
    "Russia": "俄罗斯",
    "Rwanda": "卢旺达",
    "Samoa": "萨摩亚",
    "Saudi Arabia": "沙特阿拉伯",
    "Senegal": "塞内加尔",
    "Serbia": "塞尔维亚",
    "Sierra Leone": "塞拉利昂",
    "Slovakia": "斯洛伐克",
    "Slovenia": "斯洛文尼亚",
    "Solomon Is.": "所罗门群岛",
    "Somaliland": "索马里兰",
    "Somalia": "索马里",
    "South Africa": "南非",
    "S. Geo. and S. Sandw. Is.": "南乔治亚和南桑德威奇群岛",
    "S. Sudan": "南苏丹",
    "Spain": "西班牙",
    "Sri Lanka": "斯里兰卡",
    "Sudan": "苏丹",
    "Suriname": "苏里南",
    "Swaziland": "斯威士兰",
    "Sweden": "瑞典",
    "Switzerland": "瑞士",
    "Syria": "叙利亚",
    "Tajikistan": "塔吉克斯坦",
    "Tanzania": "坦桑尼亚",
    "Thailand": "泰国",
    "The Kingdom of Tonga": "汤加王国",
    "Timor-Leste": "东帝汶",
    "Togo": "多哥",
    "Trinidad and Tobago": "特立尼达和多巴哥",
    "Tunisia": "突尼斯",
    "Turkey": "土耳其",
    "Turkmenistan": "土库曼斯坦",
    "Uganda": "乌干达",
    "Ukraine": "乌克兰",
    "United Arab Emirates": "阿拉伯联合酋长国",
    "United Kingdom": "英国",
    "United Republic of Tanzania": "坦桑尼亚联合共和国",
    "United States": "美国",
    "United States of America": "美利坚合众国",
    "Uruguay": "乌拉圭",
    "Uzbekistan": "乌兹别克斯坦",
    "Vanuatu": "瓦努阿图",
    "Venezuela": "委内瑞拉",
    "Vietnam": "越南",
    "West Bank": "西岸",
    "W. Sahara": "西撒哈拉",
    "Yemen": "也门共和国",
    "Zambia": "赞比亚共和国",
    "Zimbabwe": "津巴布韦"
}

var washedData = []

var convertedData = []

var localApi = "http://localhost:8097/tianxing/api/worldpandemic"

var prodApi = "https://hongkezhang.com/tianxing/api/worldpandemic"

function ajaxData() {
    $.ajax({
        url: prodApi,
        type:"get",
        dataType:"json",
        scriptCharset: 'UTF-8',
        beforeSend:function(xhr){
            console.log("before send");
        },
        success:function(data){
            console.log(data);
            spreadData(data.newslist)
        },
        error:function(){
            console.log("请求error");
        },
        complete:function(xhr){
            console.log("complete");
            console.log(xhr);
        }
    })
}

function spreadData(data) {
    data.forEach(function (d){
        washedData.push({"name": d.provinceName, "value": d.confirmedCount})
        // console.log("name" + d.provinceName + "value" + d.confirmedCount)
        // console.log("confirmedCount: " + d.confirmedCount)
    })
    convertNationName()
}

// 转换中英文键值对
function convertNationName() {
    washedData.forEach(function (d) {
        var name = d.name
        // console.log("name: " + name)
        for (key in countries){
            var ctName = countries[key]
            // console.log("ctName: " + ctName)
            if (name === ctName) {
                convertedData.push({"name": key, "value": d.value})
                console.log(key + ": " + d.value)
            }
        }
    })
    apply()
}

function apply() {
    var myChart = echarts.init(document.getElementById('map-main'));
    option = {
        title: {
            // sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',
            left: 'center',
            top: '20px',
            text: 'Existing covid-19 confirmed cases',
            textStyle: {
                color: '#000080',
                marginTop: '20px',
            }
        },
        /* tooltip: {
             trigger: 'item',
             formatter: function (params) {
                 var value = (params.value + '').split('.');
                 value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                         + '.' + value[1];
                 return params.seriesName + '<br/>' + params.name + ' : ' + value;
             }
         },*/
        visualMap: {
            min: 0,
            max: 50000000,
            text:['High','Low'],
            realtime: false,
            calculable: true,
            // color: ['orangered','yellow','lightskyblue']
            color: ['#0064d0','#c3e0ff']
        },
        series: [
            {
                name: 'World Population (2010)',
                type: 'map',
                mapType: 'world',
                roam: true,
                // 控制缩放比例极限
                scaleLimit: {
                  min: 1,
                  max: 3
                },
                itemStyle:{
                    emphasis:{label:{show:true}}
                },
                data: convertedData,
                itemStyle: {
                    normal: {//未选中状态
                        borderWidth: 1,//边框大小
                        // borderColor:'lightgreen',
                        areaColor: '#ffffff',//背景颜色
                        label: {
                            show: false//显示名称
                        }
                    },
                    emphasis: {// 也是选中样式
                        borderWidth:2,
                        borderColor:'#fff',
                        areaColor: 'lightgreen',
                        label: {
                            show: true,
                            textStyle: {
                                color: '#000000'
                            }
                        }
                    },

                }
            }
        ]
    };
    myChart.setOption(option);
    console.log("地图渲染完成")
    // 将loading加载组件中的preloader-active隐藏
    document.getElementById("preloader-active").style.display = "none"
}

ajaxData();