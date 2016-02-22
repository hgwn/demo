var provinces = [ "北京市", "广东省",  "台湾省", "香港特别行政区", "澳门特别行政区" ];

var citys = {
	"北京市" : [ {
		"cityid" : "110000",
		"cityname" : "北京市"
	}, {
		"市辖区" : [ {
			"cityid" : "110100",
			"cityname" : "市辖区"
		}, {
			"cityid" : "110101",
			"cityname" : "东城区"
		}, {
			"cityid" : "110102",
			"cityname" : "西城区"
		}, {
			"cityid" : "110103",
			"cityname" : "崇文区"
		}, {
			"cityid" : "110104",
			"cityname" : "宣武区"
		}, {
			"cityid" : "110105",
			"cityname" : "朝阳区"
		}, {
			"cityid" : "110106",
			"cityname" : "丰台区"
		}, {
			"cityid" : "110107",
			"cityname" : "石景山区"
		}, {
			"cityid" : "110108",
			"cityname" : "海淀区"
		}, {
			"cityid" : "110109",
			"cityname" : "门头沟区"
		}, {
			"cityid" : "110111",
			"cityname" : "房山区"
		}, {
			"cityid" : "110112",
			"cityname" : "通州区"
		}, {
			"cityid" : "110113",
			"cityname" : "顺义区"
		}, {
			"cityid" : "110114",
			"cityname" : "昌平区"
		}, {
			"cityid" : "110115",
			"cityname" : "大兴区"
		}, {
			"cityid" : "110116",
			"cityname" : "怀柔区"
		}, {
			"cityid" : "110117",
			"cityname" : "平谷区"
		} ]
	}, {
		"县" : [ {
			"cityid" : "110200",
			"cityname" : "县"
		}, {
			"cityid" : "110228",
			"cityname" : "密云县"
		}, {
			"cityid" : "110229",
			"cityname" : "延庆县"
		} ]
	} ],
	"广东省" : [ {
		"cityid" : "440000",
		"cityname" : "广东省"
	}, {
		"广州市" : [ {
			"cityid" : "440100",
			"cityname" : "广州市"
		}, {
			"cityid" : "440101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "440103",
			"cityname" : "荔湾区"
		}, {
			"cityid" : "440104",
			"cityname" : "越秀区"
		}, {
			"cityid" : "440105",
			"cityname" : "海珠区"
		}, {
			"cityid" : "440106",
			"cityname" : "天河区"
		}, {
			"cityid" : "440111",
			"cityname" : "白云区"
		}, {
			"cityid" : "440112",
			"cityname" : "黄埔区"
		}, {
			"cityid" : "440113",
			"cityname" : "番禺区"
		}, {
			"cityid" : "440114",
			"cityname" : "花都区"
		}, {
			"cityid" : "440115",
			"cityname" : "南沙区"
		}, {
			"cityid" : "440116",
			"cityname" : "萝岗区"
		}, {
			"cityid" : "440183",
			"cityname" : "增城市"
		}, {
			"cityid" : "440184",
			"cityname" : "从化市"
		} ]
	}, {
		"韶关市" : [ {
			"cityid" : "440200",
			"cityname" : "韶关市"
		}, {
			"cityid" : "440201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "440203",
			"cityname" : "武江区"
		}, {
			"cityid" : "440204",
			"cityname" : "浈江区"
		}, {
			"cityid" : "440205",
			"cityname" : "曲江区"
		}, {
			"cityid" : "440222",
			"cityname" : "始兴县"
		}, {
			"cityid" : "440224",
			"cityname" : "仁化县"
		}, {
			"cityid" : "440229",
			"cityname" : "翁源县"
		}, {
			"cityid" : "440232",
			"cityname" : "乳源瑶族自治县"
		}, {
			"cityid" : "440233",
			"cityname" : "新丰县"
		}, {
			"cityid" : "440281",
			"cityname" : "乐昌市"
		}, {
			"cityid" : "440282",
			"cityname" : "南雄市"
		} ]
	}, {
		"深圳市" : [ {
			"cityid" : "440300",
			"cityname" : "深圳市"
		}, {
			"cityid" : "440301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "440303",
			"cityname" : "罗湖区"
		}, {
			"cityid" : "440304",
			"cityname" : "福田区"
		}, {
			"cityid" : "440305",
			"cityname" : "南山区"
		}, {
			"cityid" : "440306",
			"cityname" : "宝安区"
		}, {
			"cityid" : "440307",
			"cityname" : "龙岗区"
		}, {
			"cityid" : "440308",
			"cityname" : "盐田区"
		} ]
	}, {
		"珠海市" : [ {
			"cityid" : "440400",
			"cityname" : "珠海市"
		}, {
			"cityid" : "440401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "440402",
			"cityname" : "香洲区"
		}, {
			"cityid" : "440403",
			"cityname" : "斗门区"
		}, {
			"cityid" : "440404",
			"cityname" : "金湾区"
		} ]
	}, {
		"汕头市" : [ {
			"cityid" : "440500",
			"cityname" : "汕头市"
		}, {
			"cityid" : "440501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "440507",
			"cityname" : "龙湖区"
		}, {
			"cityid" : "440511",
			"cityname" : "金平区"
		}, {
			"cityid" : "440512",
			"cityname" : "濠江区"
		}, {
			"cityid" : "440513",
			"cityname" : "潮阳区"
		}, {
			"cityid" : "440514",
			"cityname" : "潮南区"
		}, {
			"cityid" : "440515",
			"cityname" : "澄海区"
		}, {
			"cityid" : "440523",
			"cityname" : "南澳县"
		} ]
	}, {
		"佛山市" : [ {
			"cityid" : "440600",
			"cityname" : "佛山市"
		}, {
			"cityid" : "440601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "440604",
			"cityname" : "禅城区"
		}, {
			"cityid" : "440605",
			"cityname" : "南海区"
		}, {
			"cityid" : "440606",
			"cityname" : "顺德区"
		}, {
			"cityid" : "440607",
			"cityname" : "三水区"
		}, {
			"cityid" : "440608",
			"cityname" : "高明区"
		} ]
	}, {
		"江门市" : [ {
			"cityid" : "440700",
			"cityname" : "江门市"
		}, {
			"cityid" : "440701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "440703",
			"cityname" : "蓬江区"
		}, {
			"cityid" : "440704",
			"cityname" : "江海区"
		}, {
			"cityid" : "440705",
			"cityname" : "新会区"
		}, {
			"cityid" : "440781",
			"cityname" : "台山市"
		}, {
			"cityid" : "440783",
			"cityname" : "开平市"
		}, {
			"cityid" : "440784",
			"cityname" : "鹤山市"
		}, {
			"cityid" : "440785",
			"cityname" : "恩平市"
		} ]
	}, {
		"湛江市" : [ {
			"cityid" : "440800",
			"cityname" : "湛江市"
		}, {
			"cityid" : "440801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "440802",
			"cityname" : "赤坎区"
		}, {
			"cityid" : "440803",
			"cityname" : "霞山区"
		}, {
			"cityid" : "440804",
			"cityname" : "坡头区"
		}, {
			"cityid" : "440811",
			"cityname" : "麻章区"
		}, {
			"cityid" : "440823",
			"cityname" : "遂溪县"
		}, {
			"cityid" : "440825",
			"cityname" : "徐闻县"
		}, {
			"cityid" : "440881",
			"cityname" : "廉江市"
		}, {
			"cityid" : "440882",
			"cityname" : "雷州市"
		}, {
			"cityid" : "440883",
			"cityname" : "吴川市"
		} ]
	}, {
		"茂名市" : [ {
			"cityid" : "440900",
			"cityname" : "茂名市"
		}, {
			"cityid" : "440901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "440902",
			"cityname" : "茂南区"
		}, {
			"cityid" : "440903",
			"cityname" : "茂港区"
		}, {
			"cityid" : "440923",
			"cityname" : "电白县"
		}, {
			"cityid" : "440981",
			"cityname" : "高州市"
		}, {
			"cityid" : "440982",
			"cityname" : "化州市"
		}, {
			"cityid" : "440983",
			"cityname" : "信宜市"
		} ]
	}, {
		"肇庆市" : [ {
			"cityid" : "441200",
			"cityname" : "肇庆市"
		}, {
			"cityid" : "441201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "441202",
			"cityname" : "端州区"
		}, {
			"cityid" : "441203",
			"cityname" : "鼎湖区"
		}, {
			"cityid" : "441223",
			"cityname" : "广宁县"
		}, {
			"cityid" : "441224",
			"cityname" : "怀集县"
		}, {
			"cityid" : "441225",
			"cityname" : "封开县"
		}, {
			"cityid" : "441226",
			"cityname" : "德庆县"
		}, {
			"cityid" : "441283",
			"cityname" : "高要市"
		}, {
			"cityid" : "441284",
			"cityname" : "四会市"
		} ]
	}, {
		"惠州市" : [ {
			"cityid" : "441300",
			"cityname" : "惠州市"
		}, {
			"cityid" : "441301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "441302",
			"cityname" : "惠城区"
		}, {
			"cityid" : "441303",
			"cityname" : "惠阳区"
		}, {
			"cityid" : "441322",
			"cityname" : "博罗县"
		}, {
			"cityid" : "441323",
			"cityname" : "惠东县"
		}, {
			"cityid" : "441324",
			"cityname" : "龙门县"
		} ]
	}, {
		"梅州市" : [ {
			"cityid" : "441400",
			"cityname" : "梅州市"
		}, {
			"cityid" : "441401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "441402",
			"cityname" : "梅江区"
		}, {
			"cityid" : "441421",
			"cityname" : "梅　县"
		}, {
			"cityid" : "441422",
			"cityname" : "大埔县"
		}, {
			"cityid" : "441423",
			"cityname" : "丰顺县"
		}, {
			"cityid" : "441424",
			"cityname" : "五华县"
		}, {
			"cityid" : "441426",
			"cityname" : "平远县"
		}, {
			"cityid" : "441427",
			"cityname" : "蕉岭县"
		}, {
			"cityid" : "441481",
			"cityname" : "兴宁市"
		} ]
	}, {
		"汕尾市" : [ {
			"cityid" : "441500",
			"cityname" : "汕尾市"
		}, {
			"cityid" : "441501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "441502",
			"cityname" : "城　区"
		}, {
			"cityid" : "441521",
			"cityname" : "海丰县"
		}, {
			"cityid" : "441523",
			"cityname" : "陆河县"
		}, {
			"cityid" : "441581",
			"cityname" : "陆丰市"
		} ]
	}, {
		"河源市" : [ {
			"cityid" : "441600",
			"cityname" : "河源市"
		}, {
			"cityid" : "441601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "441602",
			"cityname" : "源城区"
		}, {
			"cityid" : "441621",
			"cityname" : "紫金县"
		}, {
			"cityid" : "441622",
			"cityname" : "龙川县"
		}, {
			"cityid" : "441623",
			"cityname" : "连平县"
		}, {
			"cityid" : "441624",
			"cityname" : "和平县"
		}, {
			"cityid" : "441625",
			"cityname" : "东源县"
		} ]
	}, {
		"阳江市" : [ {
			"cityid" : "441700",
			"cityname" : "阳江市"
		}, {
			"cityid" : "441701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "441702",
			"cityname" : "江城区"
		}, {
			"cityid" : "441721",
			"cityname" : "阳西县"
		}, {
			"cityid" : "441723",
			"cityname" : "阳东县"
		}, {
			"cityid" : "441781",
			"cityname" : "阳春市"
		} ]
	}, {
		"清远市" : [ {
			"cityid" : "441800",
			"cityname" : "清远市"
		}, {
			"cityid" : "441801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "441802",
			"cityname" : "清城区"
		}, {
			"cityid" : "441821",
			"cityname" : "佛冈县"
		}, {
			"cityid" : "441823",
			"cityname" : "阳山县"
		}, {
			"cityid" : "441825",
			"cityname" : "连山壮族瑶族自治县"
		}, {
			"cityid" : "441826",
			"cityname" : "连南瑶族自治县"
		}, {
			"cityid" : "441827",
			"cityname" : "清新县"
		}, {
			"cityid" : "441881",
			"cityname" : "英德市"
		}, {
			"cityid" : "441882",
			"cityname" : "连州市"
		} ]
	}, {
		"东莞市" : [ {
			"cityid" : "441900",
			"cityname" : "东莞市"
		} ]
	}, {
		"中山市" : [ {
			"cityid" : "442000",
			"cityname" : "中山市"
		} ]
	}, {
		"潮州市" : [ {
			"cityid" : "445100",
			"cityname" : "潮州市"
		}, {
			"cityid" : "445101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "445102",
			"cityname" : "湘桥区"
		}, {
			"cityid" : "445121",
			"cityname" : "潮安县"
		}, {
			"cityid" : "445122",
			"cityname" : "饶平县"
		} ]
	}, {
		"揭阳市" : [ {
			"cityid" : "445200",
			"cityname" : "揭阳市"
		}, {
			"cityid" : "445201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "445202",
			"cityname" : "榕城区"
		}, {
			"cityid" : "445221",
			"cityname" : "揭东县"
		}, {
			"cityid" : "445222",
			"cityname" : "揭西县"
		}, {
			"cityid" : "445224",
			"cityname" : "惠来县"
		}, {
			"cityid" : "445281",
			"cityname" : "普宁市"
		} ]
	}, {
		"云浮市" : [ {
			"cityid" : "445300",
			"cityname" : "云浮市"
		}, {
			"cityid" : "445301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "445302",
			"cityname" : "云城区"
		}, {
			"cityid" : "445321",
			"cityname" : "新兴县"
		}, {
			"cityid" : "445322",
			"cityname" : "郁南县"
		}, {
			"cityid" : "445323",
			"cityname" : "云安县"
		}, {
			"cityid" : "445381",
			"cityname" : "罗定市"
		} ]
	} ],
	"台湾省" : [ {
		"cityid" : "710000",
		"cityname" : "台湾省"
	} ],
	"香港特别行政区" : [ {
		"cityid" : "810000",
		"cityname" : "香港特别行政区"
	} ],
	"澳门特别行政区" : [ {
		"cityid" : "820000",
		"cityname" : "澳门特别行政区"
	} ]
};